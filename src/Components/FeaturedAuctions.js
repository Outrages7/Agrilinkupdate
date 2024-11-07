import React from "react";
import { Clock } from "lucide-react";
import "./card.css"; // Ensure you have your styles defined here

const FeaturedAuctions = () => {
  const auctions = [
    {
      title: "Premium Organic Wheat",
      price: "$280/ton",
      timeLeft: "2 hours",
      image: "https://i.postimg.cc/jjBSrfnQ/poster1-img.jpg"
    },
    {
      title: "Fresh Apples",
      price: "$45/box",
      timeLeft: "4 hours",
      image: "https://i.postimg.cc/GtxLYS7q/poster2-img.jpg"
    },
    {
      title: "Organic Potatoes",
      price: "$35/bag",
      timeLeft: "1 hour",
      image: "https://i.postimg.cc/yxH6DzPD/poster3-img.jpg"
    }
  ];

  return (
    <div className="wrapper">
      {auctions.map((auction, index) => (
        <div key={index} className="card">
          <div className="poster">
            <img src={auction.image} alt={auction.title} />
          </div>
          <div className="details">
            <h1>{auction.title}</h1>
            <p className="text-green-600 font-bold mb-2">{auction.price}</p>
            <div className="flex items-center text-gray-500 mb-4">
              <Clock className="w-4 h-4 mr-2" />
              <span>{auction.timeLeft} left</span>
            </div>
            <button className="text-green-600 hover:text-green-700 font-medium">
              View Auction
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturedAuctions;
