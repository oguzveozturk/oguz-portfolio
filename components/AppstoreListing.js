import React from 'react';
import Link from "next/link";
import Image from 'next/image';
import StarRating from "./StarRating";

const AppStoreListing = ({ folder, title, description, link, subtitle, popularity, score ,rating, time, role }) => {
  return (
    <Link href={link} >
        <div className="p-4 rounded-lg transition-shadow duration-300 hover:shadow-xl 
        font-['-apple-system','BlinkMacSystemFont','Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif] ">
        <div className="flex flex-row space-x-4 "
        >
    {/* App Icon */}
    <div className="flex-shrink-0 w-40 h-40"> {/* Set fixed size */}
        <div 
            className="w-full h-full relative overflow-hidden shadow-lg"
            style={{ backgroundColor: '#c11f25', borderRadius:'2rem' }}
        >
            <Image 
                src={`/images/${folder}/logo.webp`}
                alt={title}
                layout="fill"
                objectFit="cover"
            />
        </div>
    </div>

    {/* App Details */}
      <div className="flex-grow flex flex-col justify-start">
        <div className="flex items-center space-x-3 mb-1">
          <h1 className="text-2xl font-semibold tracking-[-0.022em]">{title}</h1>
        </div>

        <h2 className="text-lg text-gray-600 mb-1.5 tracking-[-0.022em]">{description}</h2>

        <div>
          <a 
            className="text-blue-600 text-sm font-normal"
          >
            {subtitle}
          </a>
        </div>

        <div className="flex flex-col space-y-1">
          <a 
            className="text-gray-600 text-sm"
          >
            {popularity}
          </a>

          {score > 0 && (
            <div className="flex left-8">
              <StarRating 
              rating={score} 
              totalStars={5}
              />
            </div>
          )}
        </div>

        
          <div>
          {score > 0 && (
            <span className="text-gray-600 text-sm">{score} • {rating}</span>
        )}
          </div>

      </div>
      </div>
      <div className="flex flex-col space-y-0 items-start text-left">
          <h1 className="uppercase text-base lg:text-xl tracking-widest mt-4 lg:mt-8">
          • {role}
          </h1>
          <p className='text-sm  text-gray-500 mt-4 max-w-xs pl-5'>
            {time}
            </p>
        </div>
      </div>
    </Link>
  );
};

export default AppStoreListing;