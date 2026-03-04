import { useState, useEffect } from 'react';
import api from '../../../api';
import { Button } from '../../layout/Button';
import { Pencil, Trash2, X, ExternalLink, FileText, Image, Search } from 'lucide-react';

export function ManageBenefits() {
  const [benefits, setBenefits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Form state
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [websiteLink, setWebsiteLink] = useState('');
  const [image, setImage] = useState(null);
  const [pdf, setPdf] = useState(null);
  const [formError, setFormError] = useState('');
  const [formLoading, setFormLoading] = useState(false);

  // Edit mode
  const [editingId, setEditingId] = useState(null);
  const [removeImage, setRemoveImage] = useState(false);
  const [removePdf, setRemovePdf] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchBenefits = async () => {
    setLoading(true);
    try {
      const response = await api.get('/api/benefits');
      setBenefits(response.data);
    } catch (err) {
      setError('Failed to fetch benefits.');
      console.error(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchBenefits();
  }, []);

  const resetForm = () => {
    setTitle('');
    setDescription('');
    setWebsiteLink('');
    setImage(null);
    setPdf(null);
    setEditingId(null);
    setRemoveImage(false);
    setRemovePdf(false);
    setFormError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError('');
    setFormLoading(true);

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('websiteLink', websiteLink);
    if (image) formData.append('image', image);
    if (pdf) formData.append('pdf', pdf);
    if (removeImage) formData.append('removeImage', 'true');
    if (removePdf) formData.append('removePdf', 'true');

    try {
      if (editingId) {
        await api.put(`/api/benefits/${editingId}`, formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
      } else {
        await api.post('/api/benefits', formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
      }
      resetForm();
      // Reset file inputs
      const fileInputs = e.target.querySelectorAll('input[type="file"]');
      fileInputs.forEach(input => input.value = '');
      fetchBenefits();
    } catch (err) {
      setFormError(editingId ? 'Failed to update benefit.' : 'Failed to create benefit.');
      console.error(err);
    }
    setFormLoading(false);
  };

  const handleEdit = (benefit) => {
    setEditingId(benefit._id);
    setTitle(benefit.title);
    setDescription(benefit.description);
    setWebsiteLink(benefit.websiteLink || '');
    setImage(null);
    setPdf(null);
    setRemoveImage(false);
    setRemovePdf(false);
    setFormError('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this benefit?')) return;
    try {
      await api.delete(`/api/benefits/${id}`);
      fetchBenefits();
    } catch (err) {
      setError('Failed to delete benefit.');
      console.error(err);
    }
  };

  return (
    <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
      {/* Column 1: Create / Edit Form */}
      <div className="lg:col-span-1">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            {editingId ? 'Edit Benefit' : 'Add New Benefit'}
          </h2>
          {editingId && (
            <button onClick={resetForm} className="text-gray-500 hover:text-gray-700" title="Cancel editing">
              <X size={20} />
            </button>
          )}
        </div>

        <form onSubmit={handleSubmit} className="rounded-lg border bg-white p-6 shadow-sm">
          {formError && <p className="mb-4 text-sm text-red-600">{formError}</p>}
          <div className="space-y-4">
            {/* Title */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Title <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                placeholder="e.g., UDID Card for Persons with Disabilities"
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-brand-teal focus:ring-brand-teal text-gray-900 placeholder-gray-400"
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Description <span className="text-red-500">*</span>
              </label>
              <textarea
                rows="6"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                placeholder="Describe the government benefit, eligibility, and how to apply..."
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-brand-teal focus:ring-brand-teal text-gray-900 placeholder-gray-400"
              />
            </div>

            {/* Image (Optional) */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Image <span className="text-xs text-gray-400 ml-1">(optional)</span>
              </label>
              {editingId && !removeImage && (
                <div className="mt-1 flex items-center gap-2">
                  {benefits.find(b => b._id === editingId)?.imageUrl ? (
                    <>
                      <span className="text-xs text-green-600 flex items-center gap-1"><Image size={14} /> Current image attached</span>
                      <button type="button" onClick={() => setRemoveImage(true)} className="text-xs text-red-500 hover:underline">Remove</button>
                    </>
                  ) : (
                    <span className="text-xs text-gray-400">No image currently</span>
                  )}
                </div>
              )}
              {removeImage && (
                <p className="mt-1 text-xs text-red-500">Image will be removed on save. <button type="button" onClick={() => setRemoveImage(false)} className="underline">Undo</button></p>
              )}
              <input
                type="file"
                accept="image/*"
                onChange={(e) => { setImage(e.target.files[0]); setRemoveImage(false); }}
                className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:rounded-md file:border-0 file:bg-brand-cream file:px-4 file:py-2 file:text-sm file:font-semibold file:text-brand-teal hover:file:bg-brand-cream-dark"
              />
            </div>

            {/* PDF (Optional) */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                PDF Document <span className="text-xs text-gray-400 ml-1">(optional)</span>
              </label>
              {editingId && !removePdf && (
                <div className="mt-1 flex items-center gap-2">
                  {benefits.find(b => b._id === editingId)?.pdfUrl ? (
                    <>
                      <span className="text-xs text-green-600 flex items-center gap-1"><FileText size={14} /> PDF attached</span>
                      <button type="button" onClick={() => setRemovePdf(true)} className="text-xs text-red-500 hover:underline">Remove</button>
                    </>
                  ) : (
                    <span className="text-xs text-gray-400">No PDF currently</span>
                  )}
                </div>
              )}
              {removePdf && (
                <p className="mt-1 text-xs text-red-500">PDF will be removed on save. <button type="button" onClick={() => setRemovePdf(false)} className="underline">Undo</button></p>
              )}
              <input
                type="file"
                accept=".pdf"
                onChange={(e) => { setPdf(e.target.files[0]); setRemovePdf(false); }}
                className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:rounded-md file:border-0 file:bg-brand-cream file:px-4 file:py-2 file:text-sm file:font-semibold file:text-brand-teal hover:file:bg-brand-cream-dark"
              />
            </div>

            {/* Website Link (Optional) */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Government Website Link <span className="text-xs text-gray-400 ml-1">(optional)</span>
              </label>
              <input
                type="url"
                value={websiteLink}
                onChange={(e) => setWebsiteLink(e.target.value)}
                placeholder="https://www.india.gov.in/..."
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-brand-teal focus:ring-brand-teal text-gray-900 placeholder-gray-400"
              />
            </div>

            <Button
              text={formLoading ? 'Saving...' : (editingId ? 'Update Benefit' : 'Add Benefit')}
              type="submit"
              variant="secondary"
              className="w-full"
              disabled={formLoading}
            />
          </div>
        </form>
      </div>

      {/* Column 2: Existing Benefits List */}
      <div className="lg:col-span-2">
        <h2 className="mb-4 text-2xl font-bold text-gray-900">
          Existing Benefits ({benefits.length})
        </h2>
        <div className="relative mb-6">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search benefits by title..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full rounded-md border border-gray-300 py-2.5 pl-10 pr-3 text-sm text-gray-900 placeholder-gray-400 focus:border-brand-teal focus:outline-none focus:ring-1 focus:ring-brand-teal"
          />
        </div>
        {loading && <p className="text-gray-900">Loading benefits...</p>}
        {error && <p className="text-red-600">{error}</p>}

        {!loading && benefits.length === 0 && (
          <div className="rounded-lg border-2 border-dashed border-gray-300 p-12 text-center">
            <p className="text-gray-500">No benefits added yet. Use the form to add one.</p>
          </div>
        )}

        <div className="space-y-4">
          {benefits
            .filter((b) => b.title?.toLowerCase().includes(searchTerm.toLowerCase()))
            .map((benefit) => (
            <div
              key={benefit._id}
              className="rounded-lg border bg-white p-5 shadow-sm"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold text-brand-blue">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                    {benefit.description}
                  </p>
                  <div className="flex flex-wrap gap-3 mt-3">
                    {benefit.imageUrl && (
                      <span className="inline-flex items-center gap-1 text-xs bg-green-50 text-green-700 px-2 py-1 rounded">
                        <Image size={12} /> Image
                      </span>
                    )}
                    {benefit.pdfUrl && (
                      <a href={benefit.pdfUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded hover:bg-blue-100">
                        <FileText size={12} /> PDF
                      </a>
                    )}
                    {benefit.websiteLink && (
                      <a href={benefit.websiteLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs bg-purple-50 text-purple-700 px-2 py-1 rounded hover:bg-purple-100">
                        <ExternalLink size={12} /> Website
                      </a>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <button
                    onClick={() => handleEdit(benefit)}
                    className="p-2 text-gray-500 hover:text-brand-teal hover:bg-brand-cream rounded-md transition-colors"
                    title="Edit"
                  >
                    <Pencil size={18} />
                  </button>
                  <button
                    onClick={() => handleDelete(benefit._id)}
                    className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors"
                    title="Delete"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
