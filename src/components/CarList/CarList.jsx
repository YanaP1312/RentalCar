import { useSelector } from "react-redux";
import { selectItems } from "../../redux/cars/selectors.js";
import CarCard from "../CarCard/CarCard.jsx";

const CarList = () => {
  const items = useSelector(selectItems);

  return (
    <ul>
      {items.map((item) => (
        <CarCard item={item} key={item.id} />
      ))}
    </ul>
  );
};

export default CarList;
