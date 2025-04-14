import { useSelector } from "react-redux";
import {
  selectError,
  selectIsLoading,
  selectItems,
} from "../../redux/cars/selectors.js";
import CarCard from "../CarCard/CarCard.jsx";
import s from "./CarList.module.css";
import Error from "../Error/Error.jsx";
import { selectFavorites } from "../../redux/favorites/selectors.js";
import { RiseLoader } from "react-spinners";

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
        <div className={s.wrapLoader}>
          <RiseLoader color="var(--color-blue)" />
        </div>
      ) : (
        <ul className={s.carList}>
          {listToRender.length === 0 ? (
            <div className={s.emptyWrap}>
              <p>
                🚨 No cars were found for your request,&nbsp;
                <span>please try again!</span>
              </p>
            </div>
          ) : (
            listToRender.map((item) => <CarCard item={item} key={item.id} />)
          )}
        </ul>
      )}
    </div>
  );
};

export default CarList;
