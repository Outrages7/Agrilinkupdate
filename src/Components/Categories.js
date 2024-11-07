import React from 'react';
import { Wheat, Apple, Carrot } from 'lucide-react';

const Categories = () => {
  const categories = [
    { icon: <Wheat className="w-8 h-8" />, name: 'Grains' },
    { icon: <Apple className="w-8 h-8" />, name: 'Fruits' },
    { icon: <Carrot className="w-8 h-8" />, name: 'Vegetables' }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Browse by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {categories.map((category, index) => (
            <button
              key={index}
              className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition"
            >
              {category.icon}
              <span className="mt-4 text-lg font-medium text-gray-700">{category.name}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;
