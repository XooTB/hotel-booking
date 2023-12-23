import React from "react";
import { Link } from "react-router-dom";
import { DollarSign } from "lucide-react";

const HotelCard = ({ room }) => {
  return (
    <div className="hotel-card border-2 px-2 py-2 rounded-lg hover:cursor-pointer hover:shadow-lg duration-75 flex flex-col items-center">
      <img src={room.image} alt={room.name} className="h-48 w-80 rounded-lg" />
      <div className="w-full px-5">
        <h2 className="text-xl font-semibold py-2">{room.room_type}</h2>
        <p className="text-sm text-gray-500 flex gap-2">
          <span className="font-semibold text-black">Price:</span>$
          {room.base_rate}
        </p>
        <p className="text-sm text-gray-600">
          <span className="text-black font-medium">Amenities: </span>
          {room.amenities}{" "}
        </p>
      </div>
    </div>
  );
};

export default HotelCard;
