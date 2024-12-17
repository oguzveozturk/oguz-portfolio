import React from "react";

const StarRating = ({ rating = 4.8, totalStars = 5 }) => {
  const starFillPercentage = (rating / totalStars) * 100;

  return (
    <div className="inline-flex relative items-center ">
      <svg viewBox="0 0 110 20" className="w-20 h-4">
        <defs>
          <linearGradient id="starGradient">
            <stop offset={`${starFillPercentage}%`} stopColor="#FFD700" />
            <stop offset={`${starFillPercentage}%`} stopColor="#E0E0E0" />
          </linearGradient>
        </defs>

        {[...Array(5)].map((_, index) => (
          <path
            key={index}
            d="M10 2l2.6 5.3 5.8.8-4.2 4.1 1 5.8L10 15.3 5.8 18l1-5.8L2.6 8.1l5.8-.8z"
            transform={`translate(${index * 22}, 0)`}
            fill="url(#starGradient)"
            stroke="#FFD700"
            strokeWidth="1"
          />
        ))}
      </svg>
    </div>
  );
};

export default StarRating;
