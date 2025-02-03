import React from 'react';
import Image from 'next/image';
import { MdElectricBolt } from 'react-icons/md';
import { FaBed, FaBath, FaExpandArrowsAlt } from 'react-icons/fa';

type Property = {
  id: number;
  propertyName: string;
  location: string;
  bedrooms: number;
  bathrooms: number;
  size: number;
  price: number;
  imageUrl: string;
};

type Props = {
  property: Property;
};

const PropertyCard: React.FC<Props> = ({ property }) => {
  return (
    <div className="bg-white overflow-hidden group rounded-lg shadow-lg transition hover:shadow-xl cursor-pointer w-[350px]">
      {/* Image & Labels */}
      <div className="relative">
        <Image
          src={property.imageUrl}
          alt={`${property.propertyName} in ${property.location}`}
          width={350}
          height={250}
          className="w-full h-[250px] object-cover group-hover:scale-105 transition-transform duration-300"
          priority
        />
        {/* Price Tag */}
        <div className=" bg-rose-800 text-sm px-4 py-1.5 rounded-lg font-semibold">
          <span className="text-base font-bold">${property.price.toLocaleString()}</span> /mo
        </div>
      </div>

      {/* Property Details */}
      <div className="p-5">
        <h2 className="text-lg font-semibold">{property.propertyName}</h2>
        <p className="text-gray-600 text-sm">{property.location}</p>

        {/* Property Features */}
        <div className="flex items-center justify-between text-gray-700 text-sm mt-4">
          <div className="flex items-center space-x-1">
            <FaBed className="text-red-500" />
            <span>{property.bedrooms} Beds</span>
          </div>
          <div className="flex items-center space-x-1">
            <FaBath className="text-blue-500" />
            <span>{property.bathrooms} Bath</span>
          </div>
          <div className="flex items-center space-x-1">
            <FaExpandArrowsAlt className="text-green-500" />
            <span>{property.size} sqft</span>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-4 text-red-700 text-sm">For Rent</div>
      </div>
    </div>
  );
};

export default PropertyCard;
