import React from "react";
import { Link } from "react-router-dom";

const HotelCard = ({ hotel }) => {
  return (
    <div className="hotel-card border-2 px-2 py-2 rounded-lg hover:cursor-pointer hover:shadow-lg duration-75">
      <Link to={`/hotels/${hotel.id}`}>
        <img
          src={hotel.image}
          alt={hotel.name}
          className="h-48 w-80 rounded-lg"
        />
        <h2 className="text-xl font-semibold py-2">{hotel.name}</h2>
        <p className="text-sm text-gray-400">{hotel.address}</p>
      </Link>
    </div>
  );
};

export default HotelCard;
