import { useState, useEffect } from 'react';
import api from '../../../api';
import { Button } from '../../layout/Button';

// List of available images from your frontend assets
const availableImages = [
  'hero1.jpg',
  'hero2.jpg',
  'hero3.jpg',
  'hero4.jpg',
  'hero5.jpg',
  'hero6.jpg',
];

export function ManageStories() {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  
  // Form state
  const [title, setTitle] = useState('');
  const [story, setStory] = useState('');
  const [imageName, setImageName] = useState(availableImages[0]);
  const [editingId, setEditingId] = useState(null); // null = creating, or has ID = editing
  
  // Fetch all stories
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
    setImageName(availableImages[0]);
    setEditingId(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const storyData = { title, story, imageName };

    try {
      if (editingId) {
        // Update existing story
        await api.put(`/api/stories/${editingId}`, storyData);
      } else {
        // Create new story
        await api.post('/api/stories', storyData);
      }
      resetForm();
      fetchStories(); // Refresh the list
    } catch (err) {
      setError('Failed to save story.');
    }
  };

  const handleEdit = (story) => {
    setEditingId(story._id);
    setTitle(story.title);
    setStory(story.story);
    setImageName(story.imageName);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this story?')) {
      try {
        await api.delete(`/api/stories/${id}`);
        fetchStories(); // Refresh the list
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
                // --- ADDED TEXT CLASSES HERE ---
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-sky-500 focus:ring-sky-500 text-gray-900 placeholder-gray-500"
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
                // --- ADDED TEXT CLASSES HERE ---
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-sky-500 focus:ring-sky-500 text-gray-900 placeholder-gray-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Image
              </label>
              <select
                value={imageName}
                onChange={(e) => setImageName(e.target.value)}
                // --- ADDED TEXT CLASS HERE ---
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-sky-500 focus:ring-sky-500 text-gray-900"
              >
                {availableImages.map((img) => (
                  <option key={img} value={img}>
                    {img}
                  </option>
                ))}
              </select>
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
        <h2 className="mb-6 text-2xl font-bold text-gray-900">
          Existing Stories
        </h2>
        {loading && <p className="text-gray-900">Loading...</p>}
        <div className="space-y-4">
          {stories.map((story) => (
            <div
              key={story._id}
              className="rounded-lg border bg-white p-4 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-sky-800">
                {story.title}
              </h3>
              <p className="mt-2 truncate text-sm text-gray-600">
                {story.story}
              </p>
              <p className="mt-2 text-xs text-gray-500">
                Image: {story.imageName}
              </p>
              <div className="mt-4 flex space-x-2">
                <Button
                  text="Edit"
                  variant="outline"
                  className="px-4 py-2 text-sm"
                  onClick={() => handleEdit(story)}
                />
                <Button
                  text="Delete"
                  variant="outline"
                  className="px-4 py-2 text-sm border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
                  onClick={() => handleDelete(story._id)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}