import { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import api from '../../../api';
import { Button } from '../../layout/Button';
import { FormSubmitOverlay } from '../../layout/FormSubmitOverlay';
import { IMAGE_ACCEPT, pickImageFile, validateImageFile } from '../../../utils/fileValidation';
import { RichTextEditor } from '../../layout/RichTextEditor';
import { RelatedLinksFields } from '../../layout/RelatedLinksFields';
import { buildSnippet } from '../../../utils/snippet';

function getStorySubmitLabel(isSubmitting, editingId) {
  if (isSubmitting) return 'Saving…';
  if (editingId) return 'Update Story';
  return 'Create Story';
}

export function ManageStories() {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const [title, setTitle] = useState('');
  const [story, setStory] = useState('');
  const [image, setImage] = useState(null);
  const [relatedLinks, setRelatedLinks] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [formError, setFormError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const fetchStories = async () => {
    try {
      setLoading(true);
      const response = await api.get('/api/stories');
      setStories(response.data);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch stories.');
      console.error(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStories();
  }, []);

  const resetForm = () => {
    setTitle('');
    setStory('');
    setImage(null);
    setRelatedLinks([]);
    setEditingId(null);
    setFormError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    setFormError('');

    if (!story.replace(/<[^>]*>/g, '').trim()) {
      setFormError('Please add a testimonial.');
      return;
    }

    if (relatedLinks.some((link) => !link.title.trim() || !link.url.trim())) {
      setFormError('Each related link needs both link text and a URL.');
      return;
    }

    if (image) {
      const check = validateImageFile(image);
      if (!check.valid) {
        setFormError(check.message);
        return;
      }
    }

    const formData = new FormData();
    formData.append('title', title);
    formData.append('story', story);
    formData.append('relatedLinks', JSON.stringify(relatedLinks));
    if (image) {
      formData.append('image', image);
    }

    setIsSubmitting(true);
    try {
      if (editingId) {
        await api.put(`/api/stories/${editingId}`, formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
      } else {
        await api.post('/api/stories', formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
      }
      resetForm();
      e.target.reset();
      fetchStories();
    } catch (err) {
      setFormError(err.response?.data?.message || 'Failed to save story.');
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEdit = (s) => {
    setEditingId(s._id);
    setTitle(s.title);
    setStory(s.story);
    setImage(null);
    setRelatedLinks(s.relatedLinks || []);
    setFormError('');
  };

  const handleDelete = async (id) => {
    if (globalThis.confirm('Are you sure you want to delete this story?')) {
      try {
        await api.delete(`/api/stories/${id}`);
        fetchStories();
      } catch (err) {
        setError('Failed to delete story.');
        console.error(err);
      }
    }
  };

  const handleView = (slug) => {
    globalThis.open(`/testimonials/${encodeURIComponent(slug)}`, '_blank', 'noopener,noreferrer');
  };

  const filteredStories = stories.filter((storyItem) =>
    storyItem.title?.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
      {/* Column 1: Create/Edit Form */}
      <div className="lg:col-span-2">
        <h2 className="mb-6 text-2xl font-bold text-gray-900">
          {editingId ? 'Edit Story' : 'Add New Story'}
        </h2>
        <form onSubmit={handleSubmit} className="rounded-lg border bg-white p-6 shadow-sm">
          <FormSubmitOverlay busy={isSubmitting}>
            {formError && <p className="mb-4 text-sm text-red-600">{formError}</p>}
            <div className="space-y-4">
              <div>
                <label htmlFor="story-title" className="block text-sm font-medium text-gray-700">
                  Title (e.g., &quot;Parent of Aarav&quot;)
                </label>
                <input
                  id="story-title"
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-brand-teal focus:ring-brand-teal text-gray-900 placeholder-gray-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Story / Testimonial
                </label>
                <p className="mt-0.5 text-xs text-gray-500">
                  Paste content directly from ChatGPT, Word, or Google Docs, then use the toolbar
                  for headings, lists, emphasis, quotes, and links.
                </p>
                <div className="mt-2">
                  <RichTextEditor value={story} onChange={setStory} />
                </div>
              </div>

              <div>
                <label htmlFor="story-image" className="block text-sm font-medium text-gray-700">
                  Image {editingId ? '(Leave empty to keep current)' : '(Optional)'}
                </label>
                <p className="mt-0.5 text-xs text-gray-500">JPG, PNG, or WEBP only</p>
                <input
                  id="story-image"
                  type="file"
                  accept={IMAGE_ACCEPT}
                  onChange={(e) => pickImageFile(e, setImage, setFormError)}
                  className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:rounded-md file:border-0 file:bg-brand-cream file:px-4 file:py-2 file:text-sm file:font-semibold file:text-brand-teal hover:file:bg-brand-cream-dark"
                />
              </div>

              <RelatedLinksFields links={relatedLinks} onChange={setRelatedLinks} />

              <Button
                text={getStorySubmitLabel(isSubmitting, editingId)}
                type="submit"
                variant="secondary"
                className="w-full"
                disabled={isSubmitting}
              />
              {editingId && (
                <Button
                  text="Cancel Edit"
                  type="button"
                  variant="outline"
                  className="w-full"
                  onClick={resetForm}
                  disabled={isSubmitting}
                />
              )}
            </div>
          </FormSubmitOverlay>
        </form>
      </div>

      {/* Column 2: Existing Stories List */}
      <div className="lg:col-span-3">
        <h2 className="mb-4 text-2xl font-bold text-gray-900">
          Existing Stories ({stories.length})
        </h2>
        <div className="relative mb-6">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search stories by title..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full rounded-md border border-gray-300 py-2.5 pl-10 pr-3 text-sm text-gray-900 placeholder-gray-400 focus:border-brand-teal focus:outline-none focus:ring-1 focus:ring-brand-teal"
          />
        </div>
        {loading && <p className="text-gray-900">Loading...</p>}
        {error && <p className="mb-4 text-red-600">{error}</p>}
        {!loading && filteredStories.length === 0 ? (
          <div className="rounded-lg border-2 border-dashed border-gray-300 p-12 text-center">
            <p className="text-gray-500">
              {searchTerm
                ? 'No stories match your search.'
                : 'No parent testimonials added yet. Use the form to add one.'}
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredStories.map((s) => (
              <div key={s._id} className="rounded-lg border bg-white p-4 shadow-sm">
                <div className="flex items-start gap-4">
                  {s.imageUrl && (
                    <img
                      src={s.imageUrl}
                      alt={s.title}
                      className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
                    />
                  )}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-brand-teal-dark">{s.title}</h3>
                    <p className="mt-1 truncate text-sm text-gray-600">{buildSnippet(s.story)}</p>
                  </div>
                </div>
                <div className="mt-4 flex space-x-2">
                  <Button
                    text="View"
                    variant="outline"
                    className="px-4 py-2 text-sm"
                    onClick={() => handleView(s.slug || s._id)}
                  />
                  <Button
                    text="Edit"
                    variant="outline"
                    className="px-4 py-2 text-sm"
                    onClick={() => handleEdit(s)}
                  />
                  <Button
                    text="Delete"
                    variant="outline"
                    className="px-4 py-2 text-sm border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
                    onClick={() => handleDelete(s._id)}
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
