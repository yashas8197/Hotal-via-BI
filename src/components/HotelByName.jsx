import useFetch from "./useFetch";

const HotelByName = ({ hotelName }) => {
  const { data, error, loading } = useFetch(
    `https://ef38418a-23d9-45f3-a4ae-6eeeae3944b1-00-2mlyxx9qhpjdn.janeway.replit.dev/hotels/${hotelName}`,
  );

  if (loading) return <p>Loading......</p>;
  if (error) return <p>An error occured...</p>;
  if (!data) return <p>No data found.</p>;
  const { name, location, rating, priceRange } = data;
  return (
    <>
      <h2>{name}</h2>
      <p>
        <strong>Location: </strong>
        {location}
      </p>
      <p>
        <strong>Rating: </strong>
        {rating}
      </p>
      <p>
        <strong>Price Range: </strong>
        {priceRange}
      </p>
    </>
  );
};

export default HotelByName;
