"use client"
import React, { useState, useEffect } from 'react';

const offers = [
  {
    id: 1,
    title: '20% OFF on All Terrariums!',
    description: 'Get 20% off on all our premium terrariums. Limited time offer.',
    image: '/images/1.jpg',
  },
  {
    id: 2,
    title: 'Buy One, Get One Free!',
    description: 'Buy any terrarium and get another one free. Don’t miss this deal!',
    image: '/images/6.jpg',
  },
  {
    id: 3,
    title: 'Special Winter Discount!',
    description: 'Get 25% off on seasonal terrariums this winter.',
    image: '/images/3.jpg',
  },
];

const OfferSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Function to go to the next offer
  const nextOffer = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === offers.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to go to the previous offer
  const prevOffer = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? offers.length - 1 : prevIndex - 1
    );
  };

  // Set up auto-sliding with setInterval
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(nextOffer, 5000);
      return () => clearInterval(interval);
    }
  }, [isHovered]);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="overflow-hidden rounded-xl shadow-lg">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {offers.map((offer) => (
            <div key={offer.id} className="w-full flex-shrink-0">
              <div className="relative">
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="w-full h-60 object-cover rounded-t-xl"
                />
                <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 p-4 rounded-b-xl">
                  <h3 className="text-white text-xl font-bold">{offer.title}</h3>
                  <p className="text-white">{offer.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Left Arrow Button */}
        <button
          onClick={prevOffer}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black text-white p-2 rounded-full opacity-50 hover:opacity-100 transition-opacity duration-300"
        >
          &lt;
        </button>

        {/* Right Arrow Button */}
        <button
          onClick={nextOffer}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black text-white p-2 rounded-full opacity-50 hover:opacity-100 transition-opacity duration-300"
        >
          &gt;
        </button>
      </div>

      {/* Dots for navigation */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {offers.map((offer, index) => (
          <div
            key={offer.id}
            className={`w-3 h-3 rounded-full bg-white ${
              currentIndex === index ? 'bg-opacity-100' : 'bg-opacity-50'
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default OfferSlider;
