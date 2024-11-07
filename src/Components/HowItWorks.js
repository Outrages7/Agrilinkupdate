import React from 'react';
import { Users, Tractor, ShoppingCart } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <Users className="w-12 h-12 text-green-600" />,
      title: 'Create Account',
      description: 'Sign up as a farmer or buyer'
    },
    {
      icon: <Tractor className="w-12 h-12 text-green-600" />,
      title: 'List or Browse',
      description: 'Post products or browse auctions'
    },
    {
      icon: <ShoppingCart className="w-12 h-12 text-green-600" />,
      title: 'Trade Direct',
      description: 'Participate in real-time auctions'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
