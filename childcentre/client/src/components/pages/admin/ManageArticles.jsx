import { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import api from '../../../api';
import { Button } from '../../layout/Button';
import { FormSubmitOverlay } from '../../layout/FormSubmitOverlay';
import { IMAGE_ACCEPT, pickImageFile, validateImageFile } from '../../../utils/fileValidation';
import { handlePastePlainText } from '../../../utils/pastePlainText';

export function ManageArticles() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // State for the new article form
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
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

  // 2. Handle form submission to create a new article
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    setFormError('');

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
      await api.post('/api/articles', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setTitle('');
      setContent('');
      setImage(null);
      e.target.reset();
      fetchArticles();
    } catch (err) {
      setFormError('Failed to create article. Check console for details.');
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
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

  return (
    <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
      {/* Column 1: Create New Article Form */}
      <div className="lg:col-span-1">
        <h2 className="mb-6 text-2xl font-bold text-gray-900">
          Create New Article
        </h2>
        <form
          onSubmit={handleSubmit}
          className="rounded-lg border bg-white p-6 shadow-sm"
        >
          <FormSubmitOverlay busy={isSubmitting}>
          {formError && (
            <p className="mb-4 text-sm text-red-600">{formError}</p>
          )}
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
              <label htmlFor="article-content" className="block text-sm font-medium text-gray-700">
                Content
              </label>
              <textarea
                id="article-content"
                rows="10"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                onPaste={handlePastePlainText}
                required
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-brand-teal focus:ring-brand-teal text-gray-900 placeholder-gray-500"
              />
            </div>
            <div>
              <label htmlFor="article-image" className="block text-sm font-medium text-gray-700">
                Featured Image (Optional)
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
              text={isSubmitting ? 'Publishing…' : 'Create Article'}
              type="submit"
              variant="secondary"
              className="w-full"
              disabled={isSubmitting}
            />
          </div>
          </FormSubmitOverlay>
        </form>
      </div>

      {/* Column 2: Existing Articles List */}
      <div className="lg:col-span-2">
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
        <div className="space-y-4">
          {articles
            .filter((a) => a.title?.toLowerCase().includes(searchTerm.toLowerCase()))
            .map((article) => (
            <div
              key={article._id}
              className="flex items-center justify-between rounded-lg border bg-white p-4 shadow-sm"
            >
              <div>
                <h3 className="text-lg font-semibold text-brand-teal-dark">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-500">/blog/{article.slug || '—'}</p>
              </div>
              <Button
                text="Delete"
                variant="outline"
                className="px-4 py-2 text-sm"
                onClick={() => handleDelete(article._id)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}