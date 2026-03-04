import { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import api from '../../../api';
import { Button } from '../../layout/Button';

export function ManageStories() {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  
  const [title, setTitle] = useState('');
  const [story, setStory] = useState('');
  const [image, setImage] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  
  const fetchStories = async () => {
    try {
      setLoading(true);
      const response = await api.get('/api/stories');
      setStories(response.data);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch stories.');
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
    setEditingId(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    const formData = new FormData();
    formData.append('title', title);
    formData.append('story', story);
    if (image) {
      formData.append('image', image);
    }

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
      setError('Failed to save story.');
    }
  };

  const handleEdit = (s) => {
    setEditingId(s._id);
    setTitle(s.title);
    setStory(s.story);
    setImage(null);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this story?')) {
      try {
        await api.delete(`/api/stories/${id}`);
        fetchStories();
      } catch (err) {
        setError('Failed to delete story.');
      }
    }
  };

  return (
    <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
      {/* Column 1: Create/Edit Form */}
      <div className="lg:col-span-1">
        <h2 className="mb-6 text-2xl font-bold text-gray-900">
          {editingId ? 'Edit Story' : 'Add New Story'}
        </h2>
        <form
          onSubmit={handleSubmit}
          className="rounded-lg border bg-white p-6 shadow-sm"
        >
          {error && <p className="mb-4 text-sm text-red-600">{error}</p>}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Title (e.g., "Parent of Aarav")
              </label>
              <input
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
              <textarea
                rows="10"
                value={story}
                onChange={(e) => setStory(e.target.value)}
                required
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-brand-teal focus:ring-brand-teal text-gray-900 placeholder-gray-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Image {editingId ? '(Leave empty to keep current)' : '(Optional)'}
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setImage(e.target.files[0])}
                className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:rounded-md file:border-0 file:bg-brand-cream file:px-4 file:py-2 file:text-sm file:font-semibold file:text-brand-teal hover:file:bg-brand-cream-dark"
              />
            </div>
            
            <Button
              text={editingId ? 'Update Story' : 'Create Story'}
              type="submit"
              variant="secondary"
              className="w-full"
            />
            {editingId && (
              <Button
                text="Cancel Edit"
                type="button"
                variant="outline"
                className="w-full"
                onClick={resetForm}
              />
            )}
          </div>
        </form>
      </div>

      {/* Column 2: Existing Stories List */}
      <div className="lg:col-span-2">
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
        <div className="space-y-4">
          {stories
            .filter((s) => s.title?.toLowerCase().includes(searchTerm.toLowerCase()))
            .map((s) => (
            <div
              key={s._id}
              className="rounded-lg border bg-white p-4 shadow-sm"
            >
              <div className="flex items-start gap-4">
                {s.imageUrl && (
                  <img
                    src={s.imageUrl}
                    alt={s.title}
                    className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
                  />
                )}
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-brand-teal-dark">
                    {s.title}
                  </h3>
                  <p className="mt-1 truncate text-sm text-gray-600">
                    {s.story}
                  </p>
                </div>
              </div>
              <div className="mt-4 flex space-x-2">
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
      </div>
    </div>
  );
}
