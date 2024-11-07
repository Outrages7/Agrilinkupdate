import React from 'react';
import { UserPlus, ListPlus, Gavel } from 'lucide-react';

const HowItWorks = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <div className="bg-green-100 p-4 rounded-full mb-4">
              <UserPlus className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Sign Up</h3>
            <p className="text-gray-600">Create your account as a farmer or buyer</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="bg-green-100 p-4 rounded-full mb-4">
              <ListPlus className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">List or Browse</h3>
            <p className="text-gray-600">Post your products or browse available auctions</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="bg-green-100 p-4 rounded-full mb-4">
              <Gavel className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Bid & Buy</h3>
            <p className="text-gray-600">Participate in real-time auctions</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
