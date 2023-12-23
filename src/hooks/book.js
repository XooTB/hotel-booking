import { useState } from "react";

export default function useBooking() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const bookRoom = async (hotel_id, room_number, name, email, phone_number) => {
    setIsLoading(true);
    try {
      const res = await fetch(`http://localhost:3001/booked`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          hotel_id,
          room_number,
          name,
          email,
          phone_number,
        }),
      });
      const data = await res.json();
      setIsLoading(false);
      return data;
    } catch (err) {
      setError(err);
      setIsLoading(false);
    }
  };

  return { isLoading, error, bookRoom };
}
