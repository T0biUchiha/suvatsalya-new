import { useState } from 'react';
import { CheckCircle, AlertCircle } from 'lucide-react';
import api from '../../api';
import { Button } from './Button';

export function AppointmentForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('Noida'); 
  const [query, setQuery] = useState('');
  const [terms, setTerms] = useState(false);
  
  const [status, setStatus] = useState('idle');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!name.trim()) newErrors.name = 'Please enter your name';
    if (!phone.trim()) newErrors.phone = 'Please enter your phone number';
    else if (!/^[+]?[\d\s-]{7,15}$/.test(phone.trim())) newErrors.phone = 'Please enter a valid phone number';
    if (!query.trim()) newErrors.query = 'Please describe your query';
    if (!terms) newErrors.terms = 'You must agree to the Terms and Conditions';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setStatus('error');
      setMessage('');
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
      setLocation('Noida');
      setQuery('');
      setTerms(false);
      setErrors({});
    } catch (err) {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
      console.error(err);
    }
  };

  const inputBase = "w-full px-4 py-3 rounded-md border text-gray-900 placeholder-gray-400 focus:ring-1 focus:outline-none transition-colors";
  const inputNormal = `${inputBase} border-gray-300 focus:border-brand-teal focus:ring-brand-teal`;
  const inputError = `${inputBase} border-red-400 bg-red-50/50 focus:border-red-500 focus:ring-red-500`;

  return (
    <div className="bg-brand-cream rounded-lg shadow-lg p-6 md:p-8 w-full">
      <h3 className="text-2xl font-bold text-brand-blue mb-6 text-center">
        Book an Appointment
      </h3>
      <form className="space-y-5" onSubmit={handleSubmit} noValidate>
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Name <span className="text-red-500">*</span>
          </label>
          <input 
            type="text" 
            id="name" 
            placeholder="Enter your full name" 
            className={errors.name ? inputError : inputNormal}
            value={name}
            onChange={(e) => { setName(e.target.value); if (errors.name) setErrors(prev => ({ ...prev, name: '' })); }}
          />
          {errors.name && <p className="mt-1.5 text-sm text-red-600 flex items-center gap-1"><AlertCircle size={14} />{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone <span className="text-red-500">*</span>
          </label>
          <input 
            type="tel" 
            id="phone" 
            placeholder="Enter your phone number" 
            className={errors.phone ? inputError : inputNormal}
            value={phone}
            onChange={(e) => { setPhone(e.target.value); if (errors.phone) setErrors(prev => ({ ...prev, phone: '' })); }}
          />
          {errors.phone && <p className="mt-1.5 text-sm text-red-600 flex items-center gap-1"><AlertCircle size={14} />{errors.phone}</p>}
        </div>

        <div>
          <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
            Location
          </label>
          <select 
            id="location" 
            className={inputNormal}
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            <option>Noida</option>
          </select>
        </div>

        <div>
          <label htmlFor="query" className="block text-sm font-medium text-gray-700 mb-1">
            Query <span className="text-red-500">*</span>
          </label>
          <textarea 
            id="query" 
            rows="4" 
            placeholder="Describe your concern or question" 
            className={errors.query ? inputError : inputNormal}
            value={query}
            onChange={(e) => { setQuery(e.target.value); if (errors.query) setErrors(prev => ({ ...prev, query: '' })); }}
          ></textarea>
          {errors.query && <p className="mt-1.5 text-sm text-red-600 flex items-center gap-1"><AlertCircle size={14} />{errors.query}</p>}
        </div>

        <div>
          <div className="flex items-center space-x-2">
            <input 
              type="checkbox" 
              id="terms" 
              className="h-4 w-4 rounded text-brand-teal accent-brand-teal"
              checked={terms}
              onChange={(e) => { setTerms(e.target.checked); if (errors.terms) setErrors(prev => ({ ...prev, terms: '' })); }}
            />
            <label htmlFor="terms" className="text-sm text-gray-600">
              I agree to the{' '}
              <a
                href="/terms"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-brand-teal"
              >
                Terms and Conditions
              </a>
              <span className="text-red-500"> *</span>
            </label>
          </div>
          {errors.terms && <p className="mt-1.5 text-sm text-red-600 flex items-center gap-1"><AlertCircle size={14} />{errors.terms}</p>}
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

        {status === 'success' && (
          <div className="flex items-center gap-2 justify-center rounded-md bg-green-50 border border-green-200 p-3">
            <CheckCircle size={18} className="text-green-600 flex-shrink-0" />
            <p className="text-sm font-medium text-green-700">{message}</p>
          </div>
        )}
        {status === 'error' && message && (
          <div className="flex items-center gap-2 justify-center rounded-md bg-red-50 border border-red-200 p-3">
            <AlertCircle size={18} className="text-red-600 flex-shrink-0" />
            <p className="text-sm font-medium text-red-700">{message}</p>
          </div>
        )}
      </form>
    </div>
  );
}
