import React from "react";

const StarRating = ({ rating, totalStars = 5 }) => {
  const starFillPercentage = (rating / totalStars) * 100;

  return (
    <div className="inline-flex relative items-center">
      <svg viewBox="0 0 110 20" className="w-20 h-4">
        <defs>
          <linearGradient id={rating}>
            <stop offset="0%" stopColor="#FFD700" />
            <stop offset={`${starFillPercentage}%`} stopColor="#FFD700" />
            <stop offset={`${starFillPercentage}%`} stopColor="#E0E0E0" />
            <stop offset="100%" stopColor="#E0E0E0" />
          </linearGradient>
          <clipPath id="starClip">
            {[...Array(totalStars)].map((_, index) => (
              <path
                key={index}
                d="M10 2l2.6 5.3 5.8.8-4.2 4.1 1 5.8L10 15.3 5.8 18l1-5.8L2.6 8.1l5.8-.8z"
                transform={`translate(${index * 22}, 0)`}
              />
            ))}
          </clipPath>
        </defs>

        <rect width="100%" height="100%" fill={`url(#${rating})`} clipPath="url(#starClip)" />
        <g clipPath="url(#starClip)">
          {[...Array(totalStars)].map((_, index) => (
            <path
              key={index}
              d="M10 2l2.6 5.3 5.8.8-4.2 4.1 1 5.8L10 15.3 5.8 18l1-5.8L2.6 8.1l5.8-.8z"
              transform={`translate(${index * 22}, 0)`}
              fill="none"
              stroke="#FFD700"
              strokeWidth="1"
            />
          ))}
        </g>
      </svg>
    </div>
  );
};

export default StarRating;
