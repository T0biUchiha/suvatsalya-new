import { useState } from 'react';
import api from '../../api'; // Make sure this is the correct path to your api.js
import { Button } from './Button';

export function AppointmentForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('Noida'); 
  const [query, setQuery] = useState('');
  const [terms, setTerms] = useState(false);
  
  const [status, setStatus] = useState('idle'); // 'idle', 'loading', 'success', 'error'
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!terms) {
      setStatus('error');
      setMessage('You must agree to the Terms and Conditions.');
      return;
    }

    setStatus('loading');
    setMessage('');

    try {
      await api.post('/api/contact', {
        name: name,
        phone: phone,
        message: `Location: ${location}\nQuery: ${query}`,
      });

      setStatus('success');
      setMessage('Thank you! Your query has been sent.');
      setName('');
      setPhone('');
      setLocation('Noida'); // Reset to Noida
      setQuery('');
      setTerms(false);
    } catch (err) {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
      console.error(err);
    }
  };

  return (
    <div className="bg-pink-50 rounded-lg shadow-lg p-6 md:p-8 w-full">
      <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
        Book An Appointment
      </h3>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className="sr-only">Name</label>
          <input 
            type="text" 
            id="name" 
            placeholder="Name" 
            className="w-full px-4 py-3 rounded-md border border-gray-300 text-gray-900 placeholder-gray-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="phone" className="sr-only">Phone</label>
          <input 
            type="tel" 
            id="phone" 
            placeholder="Phone" 
            className="w-full px-4 py-3 rounded-md border border-gray-300 text-gray-900 placeholder-gray-500"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="location" className="sr-only">Location</label>
          <select 
            id="location" 
            className="w-full px-4 py-3 rounded-md border border-gray-300 text-gray-900"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            <option>Noida</option>
          </select>
        </div>
        <div>
          <label htmlFor="query" className="sr-only">Query</label>
          <textarea 
            id="query" 
            rows="4" 
            placeholder="Query" 
            className="w-full px-4 py-3 rounded-md border border-gray-300 text-gray-900 placeholder-gray-500"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="flex items-center space-x-2">
          <input 
            type="checkbox" 
            id="terms" 
            className="h-4 w-4 rounded text-sky-600"
            checked={terms}
            onChange={(e) => setTerms(e.target.checked)}
          />
          <label htmlFor="terms" className="text-sm text-gray-600">
            I have read and hereby agree to the{' '}
            {/* --- UPDATED LINK --- */}
            <a 
              href="/terms" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="underline text-sky-700"
            >
              Terms And Conditions
            </a>
          </label>
        </div>
        <div>
          <Button 
            text={status === 'loading' ? 'Sending...' : 'Submit'}
            type="submit" 
            variant="secondary" 
            className="w-full"
            disabled={status === 'loading'}
          />
        </div>
        {/* Status Messages */}
        {status === 'success' && (
          <p className="text-center text-green-600">{message}</p>
        )}
        {status === 'error' && (
          <p className="text-center text-red-600">{message}</p>
        )}
      </form>
    </div>
  );
}