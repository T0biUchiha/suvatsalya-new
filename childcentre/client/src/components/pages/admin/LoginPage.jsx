import { useState } from 'react';
import { useAuth } from '../../../context/AuthContext';
import { useNavigate, useLocation } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import api from '../../../api';
import { Button } from '../../layout/Button';
import logo from '/src/assets/logo/suvatsalya-logo.png';

export function LoginPage() {
  const [username, setUsername] = useState('Admin');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/admin';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await api.post('/api/auth/login', {
        username,
        password,
      });

      if (response.data.token) {
        login(response.data.token);
        navigate(from, { replace: true });
      }
    } catch (err) {
      setError('Invalid username or password.');
      console.error(err);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-brand-cream">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-xl">
        <img
          src={logo}
          alt="Suvatsalya Logo"
          className="mx-auto h-20 w-auto"
        />
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-brand-blue">
          Admin Panel Login
        </h2>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {error && (
            <p className="rounded-md border border-red-300 bg-red-50 p-3 text-center text-sm font-medium text-red-700">
              {error}
            </p>
          )}
          <div className="space-y-4 rounded-md shadow-sm">
            <div>
              <label htmlFor="username" className="sr-only">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                required
                className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-brand-teal focus:outline-none focus:ring-brand-teal sm:text-sm"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="relative">
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                required
                className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-3 pr-10 text-gray-900 placeholder-gray-500 focus:border-brand-teal focus:outline-none focus:ring-brand-teal sm:text-sm"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 z-20 flex items-center pr-3 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <Button
            text="Sign In"
            type="submit"
            variant="secondary"
            className="w-full"
          />
        </form>
      </div>
    </div>
  );
}
