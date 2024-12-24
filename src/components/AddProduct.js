'use client'
import { useState } from 'react';

const AddProduct = () => {
  // Define the state for the form
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    currency: 'BDT',
    image: null,
  });

  // Handle change in form inputs
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === 'file') {
      setFormData((prev) => ({
        ...prev,
        [name]: files[0],
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('description', formData.description);
      formDataToSend.append('price', formData.price);
      formDataToSend.append('currency', formData.currency);
      formDataToSend.append('image', formData.image);

      const response = await fetch('/api/create-product', {
        method: 'POST',
        body: formDataToSend,
      });

      if (!response.ok) {
        throw new Error('Failed to add product');
      }

      alert('Product added successfully!');
      setFormData({
        name: '',
        description: '',
        price: '',
        currency: 'BDT',
        image: null,
      });
    } catch (error) {
      console.error('Error during submission:', error);
      alert('An error occurred while adding the product.');
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-green-200 shadow-lg rounded-lg">
      <h2 className="text-1xl font-bold text-center mb-10 text-green-700 text-mono">Create New Product</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-lg font-medium text-gray-700 text-mono">Product Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 mt-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block text-lg font-medium text-gray-700 text-mono">Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-3 mt-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            rows="4"
            required
          ></textarea>
        </div>

        <div>
          <label className="block text-lg font-medium text-gray-700 text-mono">Price:</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
            className="w-full p-3 mt-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block text-lg font-medium text-gray-700 text-mono">Currency:</label>
          <select
            name="currency"
            value={formData.currency}
            onChange={handleChange}
            className="w-full p-3 mt-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="BDT">BDT</option>
          </select>
        </div>

        <div>
          <label className="block text-lg font-medium text-gray-700 text-mono">Image:</label>
          <input
            type="file"
            name="image"
            onChange={handleChange}
            className="w-full mt-2 p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="w-full mt-6 p-3 bg-green-900 text-mono text-white font-semibold rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Create Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
