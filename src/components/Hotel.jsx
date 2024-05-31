import { useState } from "react";
import useFetch from "./useFetch";
const Hotel = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const { data, loading, error } = useFetch(
    "https://ef38418a-23d9-45f3-a4ae-6eeeae3944b1-00-2mlyxx9qhpjdn.janeway.replit.dev/hotels",
  );

  if (loading) return <p>Loading....</p>;
  if (error) return <p>An error occured....</p>;
  if (!data) return <p>No data found....</p>;

  const handleDelete = async (hotelId) => {
    try {
      const response = await fetch(
        `https://ef38418a-23d9-45f3-a4ae-6eeeae3944b1-00-2mlyxx9qhpjdn.janeway.replit.dev/hotels/${hotelId}`,
        { method: "DELETE" },
      );
      if (!response.ok) {
        throw "Failed to delete Hotal";
      }
      const data = await response.json();
      if (data) {
        setSuccessMessage("Hotel deleted successfullt");
        window.location.reload();
      }
    } catch (error) {
      throw error;
    }
  };
  return (
    <>
      <h2>All Hotels</h2>
      <ul>
        {data?.map((hotel) => (
          <li key={hotel._id}>
            {hotel.name}{" "}
            <button onClick={() => handleDelete(hotel._id)}>delete</button>
          </li>
        ))}
      </ul>

      <p>{successMessage}</p>
    </>
  );
};

export default Hotel;
