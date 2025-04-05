import { useSelector } from "react-redux";
import { selectItems } from "../../redux/cars/selectors.js";

const CarList = () => {
  const cars = useSelector(selectItems);

  return (
    <ul>
      {cars.map((car) => (
        <CarCard {...car} key={car.id} />
      ))}
    </ul>
  );
};

export default CarList;
