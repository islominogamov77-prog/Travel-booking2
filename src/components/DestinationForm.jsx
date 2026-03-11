import { useState } from 'react';

const DestinationForm = ({ initialData = {}, onSubmit, buttonText }) => {
  const [formData, setFormData] = useState({
    name: initialData.name || '',
    country: initialData.country || '',
    image: initialData.image || '',
    description: initialData.description || '',
    price: initialData.price || '',
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Destination name is required';
    if (!formData.country.trim()) newErrors.country = 'Country is required';
    if (!formData.image.trim()) newErrors.image = 'Image URL is required';
    if (!formData.description.trim()) newErrors.description = 'Description is required';
    if (!formData.price || formData.price <= 0) newErrors.price = 'Price must be a positive number';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      onSubmit(formData);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white rounded-xl shadow-md p-8">
      <div className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Destination Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`input-field ${errors.name ? 'border-red-500 focus:ring-red-500' : ''}`}
            placeholder="e.g., Paris"
          />
          {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-2">
            Country
          </label>
          <input
            type="text"
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            className={`input-field ${errors.country ? 'border-red-500 focus:ring-red-500' : ''}`}
            placeholder="e.g., France"
          />
          {errors.country && <p className="mt-1 text-sm text-red-600">{errors.country}</p>}
        </div>

        <div>
          <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-2">
            Image URL
          </label>
          <input
            type="url"
            id="image"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className={`input-field ${errors.image ? 'border-red-500 focus:ring-red-500' : ''}`}
            placeholder="https://example.com/image.jpg"
          />
          {errors.image && <p className="mt-1 text-sm text-red-600">{errors.image}</p>}
          {formData.image && (
            <div className="mt-2">
              <p className="text-sm text-gray-500 mb-2">Preview:</p>
              <img 
                src={formData.image} 
                alt="Preview" 
                className="w-32 h-32 object-cover rounded-lg border border-gray-200"
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80';
                }}
              />
            </div>
          )}
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            rows="4"
            value={formData.description}
            onChange={handleChange}
            className={`input-field resize-none ${errors.description ? 'border-red-500 focus:ring-red-500' : ''}`}
            placeholder="Describe this destination..."
          />
          {errors.description && <p className="mt-1 text-sm text-red-600">{errors.description}</p>}
        </div>

        <div>
          <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-2">
            Price (USD)
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className={`input-field ${errors.price ? 'border-red-500 focus:ring-red-500' : ''}`}
            placeholder="e.g., 1200"
            min="0"
            step="0.01"
          />
          {errors.price && <p className="mt-1 text-sm text-red-600">{errors.price}</p>}
        </div>

        <div className="flex justify-end space-x-4 pt-4">
          <button type="button" onClick={() => window.history.back()} className="btn-secondary">
            Cancel
          </button>
          <button type="submit" className="btn-primary">
            {buttonText}
          </button>
        </div>
      </div>
    </form>
  );
};

export default DestinationForm;
