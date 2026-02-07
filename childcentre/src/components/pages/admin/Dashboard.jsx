import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../../api'; // Make sure this path is correct
import { Mail, FileText, BookText, Inbox } from 'lucide-react';

// A reusable Stat Card component
function StatCard({ title, value, icon, linkTo }) {
  const Icon = icon;
  return (
    <Link to={linkTo} className="block p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500 uppercase">{title}</p>
          <p className="text-3xl font-bold text-gray-900">{value}</p>
        </div>
        <Icon className="h-10 w-10 text-sky-600" />
      </div>
    </Link>
  );
}

export function Dashboard() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchStats = async () => {
      try {
        setLoading(true);
        const response = await api.get('/api/stats');
        setStats(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load dashboard stats.');
        setLoading(false);
      }
    };
    fetchStats();
  }, []);

  if (loading) {
    return <div className="text-gray-900">Loading Dashboard...</div>;
  }

  if (error) {
    return <div className="text-red-600">{error}</div>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-8">
        Welcome, Admin!
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <StatCard 
          title="New Queries" 
          value={stats.newContactCount} 
          icon={Inbox}
          linkTo="/admin/queries"
        />
        <StatCard 
          title="Total Queries" 
          value={stats.contactCount} 
          icon={Mail}
          linkTo="/admin/queries"
        />
        <StatCard 
          title="Total Articles" 
          value={stats.articleCount} 
          icon={FileText}
          linkTo="/admin/articles"
        />
        <StatCard 
          title="Total Stories" 
          value={stats.storyCount} 
          icon={BookText}
          linkTo="/admin/stories"
        />
      </div>

      <div className="mt-12 p-6 bg-white rounded-lg shadow-sm border">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Links</h2>
        <div className="flex flex-wrap gap-4">
          <Link to="/admin/articles" className="text-sky-700 hover:underline">Manage Articles</Link>
          <Link to="/admin/stories" className="text-sky-700 hover:underline">Manage Stories</Link>
          <Link to="/admin/queries" className="text-sky-700 hover:underline">View Queries</Link>
          <Link to="/admin/career" className="text-sky-700 hover:underline">Manage Career Link</Link>
        </div>
      </div>
    </div>
  );
}