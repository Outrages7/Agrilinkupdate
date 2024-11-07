// ProductCard.js
import React from 'react';
import { formatDistanceToNow, parseISO } from 'date-fns';

const ProductCard = ({ product }) => {
  const endDate = parseISO(product.endDate);
  const daysLeft = Math.ceil((endDate - new Date()) / (1000 * 60 * 60 * 24));

  // Determine the auction tier
  let tier = "New";
  if (daysLeft <= 3) {
    tier = "Hot";
  } else if (daysLeft <= 7) {
    tier = "Ending Soon";
  }

  return (
    <div className="border rounded-lg p-4 bg-white shadow-md relative">
      {/* Tier Badge */}
      <span
        className={`absolute top-2 right-2 text-xs font-semibold px-2 py-1 rounded ${
          tier === "Hot" ? "bg-red-500 text-white" :
          tier === "Ending Soon" ? "bg-yellow-500 text-white" : "bg-green-500 text-white"
        }`}
      >
        {tier}
      </span>
      
      {/* Product Information */}
      <h3 className="text-lg font-bold text-gray-800 mb-2">{product.name}</h3>
      <p className="text-gray-600 mb-2">{product.description}</p>
      <p className="text-gray-700 font-semibold mb-2">Starting Bid: ${product.startingBid}</p>
      <p className="text-sm text-gray-500">
        Ends {formatDistanceToNow(endDate, { addSuffix: true })}
      </p>
    </div>
  );
};

export default ProductCard;
