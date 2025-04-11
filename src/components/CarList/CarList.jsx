import { useSelector } from "react-redux";
import {
  selectError,
  selectIsLoading,
  selectItems,
} from "../../redux/cars/selectors.js";
import CarCard from "../CarCard/CarCard.jsx";
import s from "./CarList.module.css";
import Loader from "../Loader/Loader.jsx";
import Error from "../Error/Error.jsx";
import { selectFavorites } from "../../redux/favorites/selectors.js";

const CarList = ({ showFavorites }) => {
  const items = useSelector(selectItems);
  const favorites = useSelector(selectFavorites);
  const error = useSelector(selectError);
  const loading = useSelector(selectIsLoading);

  const listToRender = showFavorites ? favorites : items;

  return (
    <div>
      {error ? (
        <Error />
      ) : loading ? (
        <Loader />
      ) : (
        <ul className={s.carList}>
          {listToRender.map((item) => (
            <CarCard item={item} key={item.id} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default CarList;
