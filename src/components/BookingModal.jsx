import React, { useEffect, useState } from "react";
import { X } from "lucide-react";
import useGetAvailable from "../hooks/getAvailable";
import rooms from "../data/rooms";
import useBooking from "../hooks/book";
import { useSelector } from "react-redux";

const BookingModal = ({ toggle, hotel_id }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [room, setRoom] = useState(null);

  const { booked, getAvailable } = useGetAvailable();
  const { bookRoom, isLoading } = useBooking();
  const user = useSelector((state) => state.auth.user);

  const bookedRooms = booked.map((room) => parseInt(room.room_number));

  useEffect(() => {
    getAvailable(hotel_id);
  }, [isLoading]);

  const handleChange = (e) => {
    setRoom(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (room) {
      bookRoom(hotel_id, room, name, user.email, phone);
    }
    setRoom(null);
  };

  return (
    <div className="w-full fixed flex justify-center px-10 py-20 bg-white bg-opacity-30 top-0 duration-75">
      <div className="w-3/4 bg-white min-h-screen rounded">
        <div className="flex justify-between px-10 pt-5">
          <h1 className="text-2xl">Book your stay with us</h1>
          <X
            onClick={() => toggle(false)}
            className="hover:cursor-pointer hover:bg-red-600 hover:text-white rounded-md"
          />
        </div>
        <div className="w-full flex justify-center">
          <form
            className="flex flex-col px-10 py-5 w-3/4 gap-5"
            onSubmit={handleSubmit}
          >
            <label className="text-xl">Name</label>
            <input
              className="border-2 border-gray-300 rounded-md p-2"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <label className="text-xl">Phone</label>
            <input
              className="border-2 border-gray-300 rounded-md p-2"
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            <lable className="text-xl">Select your room: </lable>
            <select
              className="border px-3 py-3 rounded-lg"
              onChange={handleChange}
              required
            >
              <option>None Selected</option>
              {rooms.map((room) => {
                const bkd = bookedRooms.includes(parseInt(room.room_number));
                return (
                  <option
                    value={room.room_number}
                    key={room.room_number}
                    disabled={bkd}
                  >
                    {room.room_type} {bkd ? "(Booked)" : "(Available)"}
                  </option>
                );
              })}
            </select>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white rounded-md p-2 mt-5"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : "Book Now"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
