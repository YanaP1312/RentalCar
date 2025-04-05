import { useSelector } from "react-redux";
import { selectItems } from "../../redux/cars/selectors.js";
import CarCard from "../CarCard/CarCard.jsx";

const CarList = () => {
  const cars = useSelector(selectItems);

  return (
    <ul>
      {cars.map((car) => (
        <CarCard car={car} key={car.id} />
      ))}
    </ul>
  );
};

export default CarList;
