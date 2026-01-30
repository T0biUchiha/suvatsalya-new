import { useState, useEffect } from 'react';
import { useAuth } from '../../../context/AuthContext';
import api from '../../../api'; // Use the custom api instance

export function ContactQueries() {
  const [queries, setQueries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const { token } = useAuth(); // Get the token for auth

  useEffect(() => {
    const fetchQueries = async () => {
      setLoading(true);
      setError('');
      try {
        // --- 1. NEW: Mark all as read when visiting this page ---
        await api.put('/api/contact/readall');
        
        // --- 2. Fetch the queries (no headers needed) ---
        const response = await api.get('/api/contact');
        setQueries(response.data);
      } catch (err) {
        setError('Failed to fetch queries.');
        console.error(err);
      }
      setLoading(false);
    };

    // We only need to run this when the component loads
    fetchQueries();
  }, []); // token is no longer needed as a dependency here

  if (loading) {
    return <div className="text-center text-lg font-medium text-gray-900">Loading queries...</div>;
  }

  if (error) {
    return <div className="text-center text-lg font-medium text-red-600">{error}</div>;
  }

  return (
    <div className="w-full">
      <h1 className="mb-6 text-3xl font-bold text-gray-900">
        Contact Form Queries
      </h1>

      {queries.length === 0 ? (
        <p className="text-gray-600">No queries found.</p>
      ) : (
        <div className="space-y-4">
          {queries.map((query) => (
            <div
              key={query._id}
              className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-sky-800">
                  {query.name}
                </h3>
                <span className="text-sm text-gray-500">
                  {new Date(query.createdAt).toLocaleDateString()}
                </span>
              </div>
              <div className="mt-2 space-x-6">
                {/* Check if email exists before rendering */}
                {query.email && (
                  <a
                    href={`mailto:${query.email}`}
                    className="text-sm text-gray-700 hover:text-sky-600"
                  >
                    {query.email}
                  </a>
                )}
                {query.phone && (
                  <span className="text-sm text-gray-700">{query.phone}</span>
                )}
              </div>
              <p className="mt-4 whitespace-pre-wrap text-base text-gray-800">
                {query.message}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}