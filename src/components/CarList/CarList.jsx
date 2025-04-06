import { useSelector } from "react-redux";
import { selectItems } from "../../redux/cars/selectors.js";
import CarCard from "../CarCard/CarCard.jsx";
import s from "./CarList.module.css";

const CarList = () => {
  const items = useSelector(selectItems);

  return (
    <ul className={s.carList}>
      {items.map((item) => (
        <CarCard item={item} key={item.id} />
      ))}
    </ul>
  );
};

export default CarList;
