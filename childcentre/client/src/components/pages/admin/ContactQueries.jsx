import { useState, useEffect, useMemo } from 'react';
import { useAuth } from '../../../context/AuthContext';
import { Search, ArrowUpDown, Trash2 } from 'lucide-react';
import api from '../../../api';

export function ContactQueries() {
  const [queries, setQueries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('newest');
  const { token } = useAuth();

  const fetchQueries = async () => {
    setLoading(true);
    setError('');
    try {
      await api.put('/api/contact/readall');
      const response = await api.get('/api/contact');
      setQueries(response.data);
    } catch (err) {
      setError('Failed to fetch queries.');
      console.error(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchQueries();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this query?')) return;
    try {
      await api.delete(`/api/contact/${id}`);
      setQueries((prev) => prev.filter((q) => q._id !== id));
    } catch (err) {
      setError('Failed to delete query.');
      console.error(err);
    }
  };

  const filteredAndSorted = useMemo(() => {
    let result = queries;

    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase();
      result = result.filter(
        (q) =>
          q.name?.toLowerCase().includes(term) ||
          q.email?.toLowerCase().includes(term) ||
          q.phone?.toLowerCase().includes(term) ||
          q.message?.toLowerCase().includes(term)
      );
    }

    result = [...result].sort((a, b) => {
      const dateA = new Date(a.createdAt);
      const dateB = new Date(b.createdAt);
      return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
    });

    return result;
  }, [queries, searchTerm, sortOrder]);

  if (loading) {
    return <div className="text-center text-lg font-medium text-gray-900">Loading queries...</div>;
  }

  return (
    <div className="w-full">
      <h1 className="mb-6 text-3xl font-bold text-gray-900">
        Contact Form Queries
      </h1>

      {error && <p className="mb-4 text-sm text-red-600">{error}</p>}

      <div className="mb-6 flex flex-col sm:flex-row gap-3">
        <div className="relative flex-grow">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search by name, email, phone, or message..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full rounded-md border border-gray-300 py-2.5 pl-10 pr-3 text-sm text-gray-900 placeholder-gray-400 focus:border-brand-teal focus:outline-none focus:ring-1 focus:ring-brand-teal"
          />
        </div>
        <button
          onClick={() => setSortOrder(sortOrder === 'newest' ? 'oldest' : 'newest')}
          className="inline-flex items-center gap-2 rounded-md border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors whitespace-nowrap"
        >
          <ArrowUpDown size={16} />
          {sortOrder === 'newest' ? 'Newest First' : 'Oldest First'}
        </button>
      </div>

      {filteredAndSorted.length === 0 ? (
        <div className="rounded-lg border-2 border-dashed border-gray-300 p-12 text-center">
          <p className="text-gray-500">
            {searchTerm ? 'No queries match your search.' : 'No queries found.'}
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          <p className="text-sm text-gray-500">
            Showing {filteredAndSorted.length} of {queries.length} queries
          </p>
          {filteredAndSorted.map((query) => (
            <div
              key={query._id}
              className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-grow">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-brand-teal-dark">
                      {query.name}
                    </h3>
                    <span className="text-sm text-gray-500 whitespace-nowrap ml-4">
                      {new Date(query.createdAt).toLocaleDateString('en-IN', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </span>
                  </div>
                  <div className="mt-2 space-x-6">
                    {query.email && (
                      <a
                        href={`mailto:${query.email}`}
                        className="text-sm text-gray-700 hover:text-brand-teal"
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
                <button
                  onClick={() => handleDelete(query._id)}
                  className="flex-shrink-0 p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors"
                  title="Delete query"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
