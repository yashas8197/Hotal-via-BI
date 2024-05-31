import "./App.css";
import AddHotelForm from "./components/AddHotelForm";
import Hotel from "./components/Hotel";
import HotelByName from "./components/HotelByName";

export default function App() {
  return (
    <main>
      <AddHotelForm />
      <Hotel />
      <HotelByName hotelName="Sunset Resort" />
    </main>
  );
}
