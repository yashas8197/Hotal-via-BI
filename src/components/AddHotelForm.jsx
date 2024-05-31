import { useState } from "react";

const AddHotelForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    location: "",
    rating: "",
    website: "",
    phoneNumber: "",
    checkInTime: "",
    checkOutTime: "",
    amenities: "",
    priceRange: "",
    reservationsNeeded: false,
    isParkingAvailable: false,
    isWifiAvailable: false,
    isPoolAvailable: false,
    isSpaAvailable: false,
    isRestaurantAvailable: false,
    photos: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: name === "rating" ? parseInt(value) : value,
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: checked,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://ef38418a-23d9-45f3-a4ae-6eeeae3944b1-00-2mlyxx9qhpjdn.janeway.replit.dev/hotels",
        {
          method: "POST",
          body: JSON.stringify(formData),
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      if (!response.ok) {
        throw "Failed to add Hotel";
      }

      const data = await response.json();
      console.log(data);
      console.log(formData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Add New Hotel</h2>
      <form onSubmit={handleFormSubmit}>
        <label>Name:</label>
        <br />
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <br />
        <br />
        <label>Category: </label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="Budget">Budget</option>
          <option value="Mid-Range">Mid-Range</option>
          <option value="Luxury">Luxury</option>
          <option value="Boutique">Boutique</option>
          <option value="Resort">Resort</option>
          <option value="Other">Other</option>
        </select>
        <br />
        <br />
        <label>Location:</label>
        <br />
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
        />
        <br />
        <br />
        <label>Rating:</label>
        <br />
        <input
          type="number"
          name="rating"
          value={formData.rating}
          onChange={handleChange}
        />
        <br />
        <br />
        <label>Website:</label>
        <br />
        <input
          type="text"
          name="website"
          value={formData.website}
          onChange={handleChange}
        />
        <br />
        <br />
        <label>Phone Number:</label>
        <br />
        <input
          type="text"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
        />
        <br />
        <br />
        <label>Check in Time:</label>
        <br />
        <input
          type="text"
          name="checkInTime"
          value={formData.checkInTime}
          onChange={handleChange}
        />
        <br />
        <br />
        <label>Check out Time:</label>
        <br />
        <input
          type="text"
          name="checkOutTime"
          value={formData.checkOutTime}
          onChange={handleChange}
        />
        <br />
        <br />
        <label>Amenities:</label>
        <br />
        <input
          type="text"
          name="amenities"
          value={formData.amenities}
          onChange={handleChange}
        />
        <br />
        <br />
        <label>Price Range: </label>
        <select
          value={formData.priceRange}
          name="priceRange"
          onChange={handleChange}
        >
          <option value="$$ (11-30)">$$ (11-30)</option>
          <option value="$$$ (31-60)">$$$ (31-60)</option>
          <option value="$$$$ (61+)">$$$$ (61+)</option>
          <option value="Other">Other</option>
        </select>
        <br />
        <br />
        <label>Reservations Needed:</label>
        <input
          type="checkbox"
          name="reservationsNeeded"
          checked={formData.reservationsNeeded}
          onChange={handleCheckboxChange}
        />
        <br />
        <br />
        <label>Is Parking available: </label>
        <input
          type="checkbox"
          name="isParkingAvailable"
          checked={formData.isParkingAvailable}
          onChange={handleCheckboxChange}
        />
        <br />
        <br />
        <label>Is Wifi available: </label>
        <input
          type="checkbox"
          name="isWifiAvailable"
          checked={formData.isWifiAvailable}
          onChange={handleCheckboxChange}
        />
        <br />
        <br />
        <label>Is Pool available: </label>
        <input
          type="checkbox"
          name="isPoolAvailable"
          checked={formData.isPoolAvailable}
          onChange={handleCheckboxChange}
        />
        <br /> <br />
        <label>Is Spa available</label>
        <input
          type="checkbox"
          name="isSpaAvailable"
          checked={formData.isSpaAvailable}
          onChange={handleCheckboxChange}
        />
        <br />
        <br />
        <label>Is Restaurant available</label>
        <input
          type="checkbox"
          name="isRestaurantAvailable"
          checked={formData.isRestaurantAvailable}
          onChange={handleCheckboxChange}
        />
        <br /> <br />
        <label>Photos:</label>
        <input
          type="text"
          name="photos"
          value={formData.photos}
          onChange={handleChange}
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddHotelForm;
