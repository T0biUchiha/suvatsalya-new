import { useState, useEffect } from 'react';
import api from '../../../api';
import { Button } from '../../layout/Button';
import { FormSubmitOverlay } from '../../layout/FormSubmitOverlay';

export function ManageSocialLinks() {
  const [platforms, setPlatforms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const fetchLinks = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await api.get('/api/social-links/admin');
      setPlatforms(response.data.platforms);
    } catch (err) {
      setError('Failed to load social links.');
      console.error(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchLinks();
  }, []);

  const handleUrlChange = (id, url) => {
    setPlatforms((prev) =>
      prev.map((p) => (p.id === id ? { ...p, url } : p))
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (saving) {
      return;
    }

    setSaving(true);
    setError('');
    setSuccess('');

    const links = platforms.reduce((acc, { id, url }) => {
      acc[id] = url;
      return acc;
    }, {});

    try {
      const response = await api.put('/api/social-links', { links });
      setPlatforms(response.data.platforms);
      setSuccess('Social links saved. Icons with URLs will appear in the site footer.');
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to save social links.');
      console.error(err);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="max-w-2xl">
      <h1 className="mb-2 text-3xl font-bold text-gray-900">Social Links</h1>
      <p className="mb-8 text-gray-600">
        Add profile URLs for each platform. Only platforms with a link will show as icons in the website footer.
      </p>

      {loading ? (
        <p className="text-gray-700">Loading...</p>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="rounded-lg border bg-white p-6 shadow-sm"
        >
          <FormSubmitOverlay busy={saving}>
          {error && <p className="mb-4 text-sm text-red-600">{error}</p>}
          {success && <p className="mb-4 text-sm text-green-700">{success}</p>}

          <div className="space-y-5">
            {platforms.map((platform) => (
              <div key={platform.id}>
                <label
                  htmlFor={`social-${platform.id}`}
                  className="block text-sm font-medium text-gray-700"
                >
                  {platform.label}
                </label>
                <input
                  id={`social-${platform.id}`}
                  type="url"
                  value={platform.url}
                  onChange={(e) => handleUrlChange(platform.id, e.target.value)}
                  placeholder={`https://${platform.id}.com/your-page`}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm placeholder-gray-400 focus:border-brand-teal focus:ring-brand-teal"
                />
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Button
              text={saving ? 'Saving…' : 'Save Social Links'}
              type="submit"
              variant="secondary"
              className="w-full sm:w-auto"
              disabled={saving}
            />
          </div>
          </FormSubmitOverlay>
        </form>
      )}
    </div>
  );
}
