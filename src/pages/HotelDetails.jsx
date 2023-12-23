import React, { useState } from "react";
import hotels from "../data/hotels";
import { useParams } from "react-router-dom";
import { MapPin, Phone } from "lucide-react";
import rooms from "../data/rooms";
import RoomCard from "../components/RoomCard";
import BookingModal from "../components/BookingModal";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const HotelDetails = () => {
  const { hotelId } = useParams();
  const hotel = hotels.find((hotel) => hotel.id === parseInt(hotelId));
  const [showModal, setShowModal] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState("all");

  const navigate = useNavigate();

  const user = useSelector((state) => state.auth.user);

  const handleClick = () => {
    if (user) {
      setShowModal(true);
    } else {
      navigate("/login");
    }
  };

  const handleRoomSelect = (e) => {
    setSelectedRoom(e.target.value);
  };

  if (!hotel) {
    return <div>Sorry, but the hotel was not found</div>;
  }

  return (
    <div className="flex flex-col items-center pb-10">
      <div className="flex flex-col w-full justify-center py-6 px-10 gap-5">
        <img src={hotel.image} alt={hotel.name} className="rounded-xl" />
      </div>
      <div className="w-full px-10 flex gap-3 items-center justify-between">
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-medium">{hotel.name}</h2>
          <p className="font-sm text-gray-400">{hotel.address}</p>
          <p className="flex gap-2 text-lg items-center">
            <MapPin /> {hotel.location}
          </p>
          <p className="flex gap-2 text-lg items-center">
            <Phone /> {hotel.phone}
          </p>
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleClick}
        >
          {user ? "Book Now" : "Login to Book"}
        </button>
      </div>
      <div className="flex flex-col w-full px-10 my-10">
        <h2 className="text-3xl font-medium py-3">Types of rooms: </h2>
        <select
          className="w-1/4 rounded-md py-2 px-3 text-gray-700 leading-tight border mb-5"
          onChange={handleRoomSelect}
        >
          <option value="all">All bed sizes</option>
          <option value="Single">Single</option>
          <option value="King">King</option>
          <option value="Queen">Queen</option>
        </select>
        <div className="grid grid-cols-5 gap-5">
          {rooms
            .filter(
              (room) =>
                room.bed_size.toLowerCase() === selectedRoom.toLowerCase() ||
                selectedRoom === "all"
            )
            .map((room, i) => (
              <RoomCard room={room} key={i} />
            ))}
        </div>
      </div>
      {showModal && <BookingModal toggle={setShowModal} hotel_id={hotelId} />}
    </div>
  );
};

export default HotelDetails;
