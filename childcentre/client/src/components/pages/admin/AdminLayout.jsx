import { Link, Outlet, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';
import logo from '/src/assets/logo/suvatsalya-logo.png';
import { Home, Mail, FileText, LogOut, Briefcase, BookText, Gift } from 'lucide-react'; 

const navItems = [
  { to: '/admin', label: 'Dashboard', icon: Home, exact: true },
  { to: '/admin/queries', label: 'Contact Queries', icon: Mail },
  { to: '/admin/articles', label: 'Manage Articles', icon: FileText },
  { to: '/admin/career', label: 'Manage Career Link', icon: Briefcase },
  { to: '/admin/stories', label: 'Manage Stories', icon: BookText },
  { to: '/admin/benefits', label: 'Manage Benefits', icon: Gift },
];

export function AdminLayout() {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const isActive = (item) => {
    if (item.exact) {
      return location.pathname === item.to;
    }
    return location.pathname.startsWith(item.to);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="flex w-64 flex-col bg-white shadow-lg">
        <div className="flex items-center justify-center border-b py-3">
          <img src={logo} alt="Logo" className="h-28 w-auto" />
        </div>
        <nav className="flex-1 space-y-1 overflow-y-auto py-4">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item);
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`flex items-center space-x-3 px-6 py-3 transition-colors border-r-4 ${
                  active
                    ? 'bg-brand-cream text-brand-teal border-brand-teal font-semibold'
                    : 'text-gray-600 border-transparent hover:bg-brand-cream hover:text-brand-teal'
                }`}
              >
                <Icon className="h-5 w-5" />
                <span className="font-medium">{item.label}</span>
              </Link>
            );
          })}
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
