import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import Product from '../User/Listing';

const Hero = () => {
  const [showForm, setShowForm] = useState(false);

  const handleListProductClick = () => {
    setShowForm(true);
  };

  return (
    <section className="relative pt-16">
      {showForm ? (
        <Product />
      ) : (
        <div>
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=1920" 
              alt="Farm Background" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>

          <div className="relative z-10 container mx-auto px-4 py-32">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h1 className="text-5xl font-bold mb-6">
                Directly Connecting Farmers and Buyers
              </h1>
              <p className="text-xl mb-8">
                Join our real-time auction platform and revolutionize agricultural trade
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition flex items-center justify-center">
                  Explore Auctions
                  <ChevronRight className="w-5 h-5 ml-2" />
                </button>
                <button 
                  onClick={handleListProductClick}
                  className="bg-white text-green-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition"
                >
                  List Your Product
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
