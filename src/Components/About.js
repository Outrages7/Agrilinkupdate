// About.js
import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-60 flex items-center justify-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486754735734-325b5831c3ad?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
      </section>

      {/* Our Mission Section */}
      <section className="py-12 px-6 md:px-16">
        <h2 className="text-3xl font-semibold text-green-700 mb-4">Our Mission</h2>
        <p className="text-lg text-gray-700">
          AgriLink’s mission is to remove middlemen and provide a transparent auction system that connects farmers directly with consumers.
          Our platform empowers farmers, offers fair prices, and brings fresh, quality produce to buyers with ease.
        </p>
      </section>

      {/* Our Values and Benefits Sections */}
      <section className="py-12 px-6 md:px-16 grid gap-8 md:grid-cols-2">
        <div>
          <h3 className="text-2xl font-semibold text-green-700 mb-2">Our Values</h3>
          <p className="text-gray-700">Transparency, community, and fairness are at the heart of everything we do.</p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-green-700 mb-2">How AgriLink Benefits You</h3>
          <p className="text-gray-700">Through direct access, fair pricing, and a user-friendly auction system, AgriLink brings fresh produce directly to buyers, supporting local farmers.</p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-8 flex justify-center">
        <button className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition">
          Explore Auctions
        </button>
      </section>
    </div>
  );
};

export default About;
