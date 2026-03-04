import { useState, useEffect, useMemo } from 'react';
import { useAuth } from '../../../context/AuthContext';
import { Search } from 'lucide-react';
import api from '../../../api';
import { Button } from '../../layout/Button';

export function ManageArticles() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const { token } = useAuth();

  // State for the new article form
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [slug, setSlug] = useState('');
  const [image, setImage] = useState(null);
  const [formError, setFormError] = useState('');
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
    setFormError('');

    // Use FormData for file uploads
    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('slug', slug);
    if (image) {
      formData.append('image', image);
    }

    try {
      await api.post('/api/articles', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      
      // Reset form and refresh list
      setTitle('');
      setContent('');
      setSlug('');
      setImage(null);
      e.target.reset(); // Resets the file input
      fetchArticles(); // Refresh the article list
    } catch (err) {
      setFormError('Failed to create article. Check console for details.');
      console.error(err);
    }
  };

  // 3. Handle article deletion
  const handleDelete = async (articleId) => {
    if (!window.confirm('Are you sure you want to delete this article?')) {
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
          {formError && (
            <p className="mb-4 text-sm text-red-600">{formError}</p>
          )}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Title
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                // --- ADDED TEXT CLASSES HERE ---
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-brand-teal focus:ring-brand-teal text-gray-900 placeholder-gray-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Slug (e.g., "what-is-dyslexia")
              </label>
              <input
                type="text"
                value={slug}
                onChange={(e) => setSlug(e.target.value.toLowerCase().replace(/\s+/g, '-'))}
                required
                // --- ADDED TEXT CLASSES HERE ---
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-brand-teal focus:ring-brand-teal text-gray-900 placeholder-gray-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Content
              </label>
              <textarea
                rows="10"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
                // --- ADDED TEXT CLASSES HERE ---
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-brand-teal focus:ring-brand-teal text-gray-900 placeholder-gray-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Featured Image (Optional)
              </label>
              <input
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
                className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:rounded-md file:border-0 file:bg-brand-cream file:px-4 file:py-2 file:text-sm file:font-semibold file:text-brand-teal hover:file:bg-brand-cream-dark"
              />
            </div>
            <Button
              text="Create Article"
              type="submit"
              variant="secondary"
              className="w-full"
            />
          </div>
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
                <p className="text-sm text-gray-500">/{article.slug}</p>
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