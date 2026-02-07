import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';
import logo from '/src/assets/logo/suvatsalya-logo.png';
import { Home, Mail, FileText, LogOut, Briefcase, BookText } from 'lucide-react'; 

export function AdminLayout() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/'); // Redirect to homepage after logout
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="flex w-64 flex-col bg-white shadow-lg">
        <div className="flex h-20 items-center justify-center border-b">
          <img src={logo} alt="Logo" className="h-12 w-auto" />
        </div>
        <nav className="flex-1 space-y-2 overflow-y-auto py-4">
          <Link
            to="/admin"
            className="flex items-center space-x-3 px-6 py-3 text-gray-600 hover:bg-gray-50 hover:text-sky-700"
          >
            <Home className="h-5 w-5" />
            <span className="font-medium">Dashboard</span>
          </Link>
          <Link
            to="/admin/queries"
            className="flex items-center space-x-3 px-6 py-3 text-gray-600 hover:bg-gray-50 hover:text-sky-700"
          >
            <Mail className="h-5 w-5" />
            <span className="font-medium">Contact Queries</span>
          </Link>
          
          <Link
            to="/admin/articles"
            className="flex items-center space-x-3 px-6 py-3 text-gray-600 hover:bg-gray-50 hover:text-sky-700"
          >
            <FileText className="h-5 w-5" />
            <span className="font-medium">Manage Articles</span>
          </Link>
          
          {/* --- DELETED "Manage Banners" LINK --- */}
          
          <Link
            to="/admin/career"
            className="flex items-center space-x-3 px-6 py-3 text-gray-600 hover:bg-gray-50 hover:text-sky-700"
          >
            <Briefcase className="h-5 w-5" /> 
            <span className="font-medium">Manage Career Link</span>
          </Link>
          <Link
            to="/admin/stories"
            className="flex items-center space-x-3 px-6 py-3 text-gray-600 hover:bg-gray-50 hover:text-sky-700"
          >
            <BookText className="h-5 w-5" /> 
            <span className="font-medium">Manage Stories</span>
          </Link>
        </nav>
        <div className="border-t p-4">
          <button
            onClick={handleLogout}
            className="flex w-full items-center space-x-3 rounded-md px-4 py-3 text-left text-gray-600 hover:bg-red-50 hover:text-red-700"
          >
            <LogOut className="h-5 w-5" />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto p-8">
        <Outlet />
      </main>
    </div>
  );
}