import { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import api from '../../../api';
import { Button } from '../../layout/Button';
import { FormSubmitOverlay } from '../../layout/FormSubmitOverlay';
import { IMAGE_ACCEPT, pickImageFile, validateImageFile } from '../../../utils/fileValidation';
import { RichTextEditor } from '../../layout/RichTextEditor';

function getArticleSubmitLabel(isSubmitting, editingId) {
  if (isSubmitting) return 'Saving…';
  return editingId ? 'Update Article' : 'Create Article';
}

export function ManageArticles() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // State for the new article form
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [formError, setFormError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  // 1. Fetch all articles
  const fetchArticles = async () => {
    setLoading(true);
    try {
      const response = await api.get('/api/articles');
      setArticles(response.data);
    } catch (err) {
      setError('Failed to fetch articles.');
      console.error(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  const resetForm = () => {
    setTitle('');
    setContent('');
    setImage(null);
    setEditingId(null);
    setFormError('');
  };

  // 2. Handle form submission to create or update an article
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    setFormError('');

    if (!content.replace(/<[^>]*>/g, '').trim()) {
      setFormError('Please add article content.');
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
    formData.append('content', content);
    if (image) {
      formData.append('image', image);
    }

    setIsSubmitting(true);
    try {
      if (editingId) {
        await api.put(`/api/articles/${editingId}`, formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
      } else {
        await api.post('/api/articles', formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
      }

      resetForm();
      e.target.reset();
      fetchArticles();
    } catch (err) {
      setFormError('Failed to create article. Check console for details.');
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEdit = (article) => {
    setEditingId(article._id);
    setTitle(article.title);
    setContent(article.content);
    setImage(null);
    setFormError('');
  };

  const handleView = (slug) => {
    globalThis.open(`/blog/${encodeURIComponent(slug)}`, '_blank', 'noopener,noreferrer');
  };

  // 3. Handle article deletion
  const handleDelete = async (articleId) => {
    if (!globalThis.confirm('Are you sure you want to delete this article?')) {
      return;
    }

    try {
      await api.delete(`/api/articles/${articleId}`);
      fetchArticles(); // Refresh the list
    } catch (err) {
      setError('Failed to delete article.');
      console.error(err);
    }
  };

  const filteredArticles = articles.filter((article) =>
    article.title?.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
      {/* Column 1: Create/Edit Article Form */}
      <div className="lg:col-span-2">
        <h2 className="mb-6 text-2xl font-bold text-gray-900">
          {editingId ? 'Edit Article' : 'Create New Article'}
        </h2>
        <form onSubmit={handleSubmit} className="rounded-lg border bg-white p-6 shadow-sm">
          <FormSubmitOverlay busy={isSubmitting}>
            {formError && <p className="mb-4 text-sm text-red-600">{formError}</p>}
            <div className="space-y-4">
              <div>
                <label htmlFor="article-title" className="block text-sm font-medium text-gray-700">
                  Title
                </label>
                <input
                  id="article-title"
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-brand-teal focus:ring-brand-teal text-gray-900 placeholder-gray-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Content</label>
                <p className="mt-0.5 text-xs text-gray-500">
                  Paste content directly from ChatGPT, Word, or Google Docs. Use the toolbar to
                  refine headings, lists, emphasis, quotes, and links.
                </p>
                <div className="mt-2">
                  <RichTextEditor value={content} onChange={setContent} />
                </div>
              </div>
              <div>
                <label htmlFor="article-image" className="block text-sm font-medium text-gray-700">
                  Featured Image {editingId ? '(Leave empty to keep current)' : '(Optional)'}
                </label>
                <p className="mt-0.5 text-xs text-gray-500">JPG, PNG, or WEBP only</p>
                <input
                  id="article-image"
                  type="file"
                  accept={IMAGE_ACCEPT}
                  onChange={(e) => pickImageFile(e, setImage, setFormError)}
                  className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:rounded-md file:border-0 file:bg-brand-cream file:px-4 file:py-2 file:text-sm file:font-semibold file:text-brand-teal hover:file:bg-brand-cream-dark"
                />
              </div>
              <Button
                text={getArticleSubmitLabel(isSubmitting, editingId)}
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

      {/* Column 2: Existing Articles List */}
      <div className="lg:col-span-3">
        <h2 className="mb-4 text-2xl font-bold text-gray-900">
          Existing Articles ({articles.length})
        </h2>
        <div className="relative mb-6">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search articles by title..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full rounded-md border border-gray-300 py-2.5 pl-10 pr-3 text-sm text-gray-900 placeholder-gray-400 focus:border-brand-teal focus:outline-none focus:ring-1 focus:ring-brand-teal"
          />
        </div>
        {loading && <p className="text-gray-900">Loading articles...</p>}
        {error && <p className="text-red-600">{error}</p>}
        {!loading && filteredArticles.length === 0 ? (
          <div className="rounded-lg border-2 border-dashed border-gray-300 p-12 text-center">
            <p className="text-gray-500">
              {searchTerm
                ? 'No articles match your search.'
                : 'No articles added yet. Use the form to add one.'}
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredArticles.map((article) => (
              <div
                key={article._id}
                className="flex items-center justify-between rounded-lg border bg-white p-4 shadow-sm"
              >
                <div>
                  <h3 className="text-lg font-semibold text-brand-teal-dark">{article.title}</h3>
                  <p className="text-sm text-gray-500">/blog/{article.slug || '—'}</p>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Button
                    text="View"
                    variant="outline"
                    className="px-4 py-2 text-sm"
                    onClick={() => handleView(article.slug)}
                  />
                  <Button
                    text="Edit"
                    variant="outline"
                    className="px-4 py-2 text-sm"
                    onClick={() => handleEdit(article)}
                  />
                  <Button
                    text="Delete"
                    variant="outline"
                    className="px-4 py-2 text-sm border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
                    onClick={() => handleDelete(article._id)}
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
