import Image from 'next/image';
import React from 'react';

interface CardProps {
  title: string;
  description?: string;
  price: number;
  image: string;
  bestSeller?: boolean;
  category?: string;
  colors?: number;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  price,
  image,
  bestSeller = false,
  category,
  colors,
}) => {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-lg border bg-white shadow-md transition-transform hover:-translate-y-1">
      {/* Best Seller Tag */}
      {bestSeller && (
        <div className="absolute right-2 top-2 z-10 rounded-md bg-red-500 px-3 py-1 text-sm font-medium text-white">
          Best Seller
        </div>
      )}
      
      {/* Image Container */}
      <div className="relative h-64 w-full overflow-hidden bg-gray-100">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      {/* Content */}
      <div className="flex flex-1 flex-col justify-between p-4">
        <div>
          <h3 className="text-xl font-bold text-gray-900">{title}</h3>
          {category && (
            <p className="mt-1 text-sm text-gray-500">{category}</p>
          )}
          {description && (
            <p className="mt-2 text-sm text-gray-600">{description}</p>
          )}
          {colors && (
            <p className="mt-1 text-sm text-gray-500">{colors} Colours</p>
          )}
        </div>
        
        <div className="mt-4">
          <p className="text-lg font-semibold text-gray-900">₹{price.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
