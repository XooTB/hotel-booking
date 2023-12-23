import React from "react";
import hotels from "../data/hotels";
import HotelCard from "../components/HotelCard";

const home = () => {
  return (
    <div>
      <h1 className="text-3xl py-5 px-10 font-serif">
        Best Hotels all around the world
      </h1>
      <div>
        <h2 className="text-3xl font-semibold px-10 py-6">Top Hotels</h2>
        <div className="flex gap-6 px-5 border-y py-4">
          {hotels.slice(0, 5).map((hotel) => (
            <HotelCard key={hotel.id} hotel={hotel} />
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-3xl font-semibold px-10 py-6">
          Hotels with the Best Views
        </h2>
        <div className="flex gap-6 px-5 border-y py-4">
          {hotels.slice(5, 10).map((hotel) => (
            <HotelCard key={hotel.id} hotel={hotel} />
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-3xl font-semibold px-28 py-6">Most Popular</h2>
        <div className="grid grid-cols-5 gap-4 px-10">
          {hotels.slice(10, 17).map((hotel) => (
            <HotelCard key={hotel.id} hotel={hotel} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default home;
