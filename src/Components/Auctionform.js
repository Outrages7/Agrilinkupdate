// AuctionForm.js
import React, { useState } from 'react';
import ProductCard from './ProductCard';

const AuctionForm = () => {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    startingBid: '',
    endDate: '',
  });

  const [productList, setProductList] = useState([]);

  // Update form values
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setProductList([...productList, { ...product, id: Date.now() }]);
    setProduct({ name: '', description: '', startingBid: '', endDate: '' });
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-semibold mb-6">Create an Auction</h1>
      
      {/* Auction Form */}
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 mb-6">
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Product Name</label>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-green-500"
            placeholder="Enter product name"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Description</label>
          <textarea
            name="description"
            value={product.description}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-green-500"
            placeholder="Enter product description"
            required
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Starting Bid</label>
          <input
            type="number"
            name="startingBid"
            value={product.startingBid}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-green-500"
            placeholder="Enter starting bid"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">End Date</label>
          <input
            type="date"
            name="endDate"
            value={product.endDate}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-green-500"
            required
          />
        </div>

        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition">
          Submit
        </button>
      </form>

      {/* Display Product Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {productList.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default AuctionForm;
