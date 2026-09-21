import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Link from '@tiptap/extension-link';
import {
  Bold,
  Heading2,
  Heading3,
  Italic,
  Link as LinkIcon,
  List,
  ListOrdered,
  Quote,
  Redo2,
  Undo2,
} from 'lucide-react';

function ToolButton({ active = false, label, onClick, children }) {
  return (
    <button
      type="button"
      title={label}
      aria-label={label}
      onClick={onClick}
      className={`rounded-md p-2 transition-colors ${active ? 'bg-brand-teal text-white' : 'text-gray-600 hover:bg-gray-200 hover:text-gray-900'}`}
    >
      {children}
    </button>
  );
}

ToolButton.propTypes = {
  active: PropTypes.bool,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export function RichTextEditor({ value, onChange }) {
  const editorRef = useRef(null);
  const editor = useEditor({
    extensions: [
      StarterKit.configure({ heading: { levels: [2, 3] } }),
      Link.configure({
        openOnClick: false,
        HTMLAttributes: { rel: 'noopener noreferrer', target: '_blank' },
      }),
    ],
    content: value,
    editorProps: {
      attributes: {
        class:
          'min-h-72 max-h-[32rem] overflow-y-auto px-5 py-4 text-base leading-7 text-gray-800 outline-none [&_h2]:mt-7 [&_h2]:text-2xl [&_h2]:font-bold [&_h3]:mt-6 [&_h3]:text-xl [&_h3]:font-bold [&_p]:mt-4 [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:mt-4 [&_ol]:list-decimal [&_ol]:pl-6 [&_blockquote]:mt-4 [&_blockquote]:border-l-4 [&_blockquote]:border-brand-teal [&_blockquote]:pl-4 [&_blockquote]:italic',
      },
    },
    onUpdate: ({ editor: currentEditor }) => onChange(currentEditor.getHTML()),
  });

  useEffect(() => {
    if (editor && editor.getHTML() !== value) editor.commands.setContent(value, false);
  }, [editor, value]);

  if (!editor) return null;
  editorRef.current = editor;
  const command = (callback) => () => callback().run();
  const addLink = () => {
    const url = window.prompt('Paste the link URL');
    if (url) editorRef.current.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
  };

  return (
    <div className="overflow-hidden rounded-lg border border-gray-300 bg-white shadow-sm focus-within:border-brand-teal focus-within:ring-2 focus-within:ring-brand-teal/20">
      <div className="flex flex-wrap items-center gap-1 border-b border-gray-200 bg-gray-50 p-2">
        <ToolButton
          label="Heading"
          active={editor.isActive('heading', { level: 2 })}
          onClick={command(() => editor.chain().focus().toggleHeading({ level: 2 }))}
        >
          <Heading2 size={18} />
        </ToolButton>
        <ToolButton
          label="Subheading"
          active={editor.isActive('heading', { level: 3 })}
          onClick={command(() => editor.chain().focus().toggleHeading({ level: 3 }))}
        >
          <Heading3 size={18} />
        </ToolButton>
        <span className="mx-1 h-6 border-l border-gray-300" />
        <ToolButton
          label="Bold"
          active={editor.isActive('bold')}
          onClick={command(() => editor.chain().focus().toggleBold())}
        >
          <Bold size={18} />
        </ToolButton>
        <ToolButton
          label="Italic"
          active={editor.isActive('italic')}
          onClick={command(() => editor.chain().focus().toggleItalic())}
        >
          <Italic size={18} />
        </ToolButton>
        <ToolButton
          label="Bullet list"
          active={editor.isActive('bulletList')}
          onClick={command(() => editor.chain().focus().toggleBulletList())}
        >
          <List size={18} />
        </ToolButton>
        <ToolButton
          label="Numbered list"
          active={editor.isActive('orderedList')}
          onClick={command(() => editor.chain().focus().toggleOrderedList())}
        >
          <ListOrdered size={18} />
        </ToolButton>
        <ToolButton
          label="Quote"
          active={editor.isActive('blockquote')}
          onClick={command(() => editor.chain().focus().toggleBlockquote())}
        >
          <Quote size={18} />
        </ToolButton>
        <ToolButton label="Add link" active={editor.isActive('link')} onClick={addLink}>
          <LinkIcon size={18} />
        </ToolButton>
        <span className="mx-1 h-6 border-l border-gray-300" />
        <ToolButton label="Undo" onClick={command(() => editor.chain().focus().undo())}>
          <Undo2 size={18} />
        </ToolButton>
        <ToolButton label="Redo" onClick={command(() => editor.chain().focus().redo())}>
          <Redo2 size={18} />
        </ToolButton>
      </div>
      <EditorContent editor={editor} />
    </div>
  );
}

RichTextEditor.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
