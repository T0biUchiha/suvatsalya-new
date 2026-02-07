import { useState, useEffect } from 'react';
import api from '../../../api';
import { Button } from '../../layout/Button';

export function ManageCareer() {
  const [url, setUrl] = useState('');
  const [isAccepting, setIsAccepting] = useState(true); // 1. Add new state
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // 1. Fetch both fields
  useEffect(() => {
    const fetchLink = async () => {
      try {
        setLoading(true);
        const response = await api.get('/api/career');
        setUrl(response.data.googleFormUrl);
        setIsAccepting(response.data.isAccepting); // 2. Set new state
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch settings.');
        setLoading(false);
      }
    };
    fetchLink();
  }, []);

  // 2. Handle the update
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    try {
      await api.put('/api/career', { 
        googleFormUrl: url, 
        isAccepting: isAccepting // 3. Send both fields
      });
      setSuccess('Settings updated successfully!');
    } catch (err) {
      setError('Failed to update settings. Please try again.');
      console.error(err);
    }
  };

  if (loading) {
    return <div className="text-gray-900">Loading...</div>;
  }

  return (
    <div className="w-full max-w-2xl">
      <h1 className="mb-6 text-3xl font-bold text-gray-900">
        Manage Career & Internship Link
      </h1>
      
      <form
        onSubmit={handleSubmit}
        className="rounded-lg border bg-white p-6 shadow-sm"
      >
        {error && <p className="mb-4 text-sm text-red-600">{error}</p>}
        {success && <p className="mb-4 text-sm text-green-600">{success}</p>}
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Google Form URL
            </label>
            <input
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-sky-500 focus:ring-sky-500 text-gray-900 placeholder-gray-500"
              placeholder="https://forms.google.com/..."
            />
          </div>
          
          {/* --- 4. NEW CHECKBOX --- */}
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="isAccepting"
              className="h-4 w-4 rounded text-sky-600"
              checked={isAccepting}
              onChange={(e) => setIsAccepting(e.target.checked)}
            />
            <label htmlFor="isAccepting" className="text-sm font-medium text-gray-700">
              We are currently accepting applications
            </label>
          </div>
          {/* --- END NEW CHECKBOX --- */}
          
          <Button
            text="Save Settings"
            type="submit"
            variant="secondary"
            className="w-full"
          />
        </div>
      </form>
    </div>
  );
}