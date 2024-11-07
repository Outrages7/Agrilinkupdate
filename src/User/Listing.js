import React, { useState } from 'react';
import axios from 'axios';

const ListYourProduct = () => {
  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState(null);
  const [auctionEndDate, setAuctionEndDate] = useState('');
  const [loading, setLoading] = useState(false);  // For loading state
  const [message, setMessage] = useState('');  // For success/error message

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a FormData object for sending form data, including file
    const formData = new FormData();
    formData.append('productName', productName);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('category', category);
    formData.append('image', image);
    formData.append('auctionEndDate', auctionEndDate);

    console.log('FormData:', formData); // Debug: Log FormData to check the contents

    try {
      setLoading(true);
      // Make API request to your backend server
      const response = await axios.post('http://localhost:5000/api/products', formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // Necessary for handling file uploads
        },
      });

      // Handle success
      setMessage('Product listed successfully!');
      console.log(response.data); // Debug: Log the server response
    } catch (error) {
      // Handle error
      setMessage('Error listing product. Please try again.');
      console.log(error); // Debug: Log the error response
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">List Your Product</h2>
        
        <label className="block mb-2 text-sm font-medium text-gray-600">Product Name</label>
        <input
          type="text"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
          placeholder="Enter product name"
          required
        />
        
        <label className="block mb-2 text-sm font-medium text-gray-600">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
          placeholder="Enter product description"
          required
        />
        
        <label className="block mb-2 text-sm font-medium text-gray-600">Price ($)</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
          placeholder="Enter price"
          required
        />
        
        <label className="block mb-2 text-sm font-medium text-gray-600">Category</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
          required
        >
          <option value="">Select category</option>
          <option value="Electronics">Electronics</option>
          <option value="Clothing">Clothing</option>
          <option value="Home">Home</option>
          <option value="Books">Books</option>
          <option value="Other">Other</option>
        </select>
        
        <label className="block mb-2 text-sm font-medium text-gray-600">Auction End Date</label>
        <input
          type="datetime-local"
          value={auctionEndDate}
          onChange={(e) => setAuctionEndDate(e.target.value)}
          className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
          required
        />

        <label className="block mb-2 text-sm font-medium text-gray-600">Image</label>
        <input
          type="file"
          onChange={handleImageChange}
          className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />

        {loading ? (
          <div className="text-center text-blue-500">Uploading...</div>
        ) : (
          <button
            type="submit"
            className="w-full py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 focus:outline-none"
          >
            List Product
          </button>
        )}
        
        {message && <div className="mt-4 text-center text-red-600">{message}</div>}
      </form>
    </div>
  );
};

export default ListYourProduct;
