import { useState } from "react";

export default function useGetAvailable() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [booked, setBooked] = useState([]);

  const getAvailable = async (hotel_id) => {
    try {
      const response = await fetch(
        `http://localhost:3001/booked?hotel_id=${hotel_id}`
      );
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong!");
      }
      setBooked(data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
      throw error;
    }
  };

  return { booked, loading, error, getAvailable };
}
