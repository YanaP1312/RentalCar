import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  selectCar,
  selectError,
  selectIsLoading,
} from "../../redux/cars/selectors.js";
import { useEffect } from "react";
import CarInfo from "../../components/CarInfo/CarInfo.jsx";
import { fetchCarById } from "../../redux/cars/operations.js";
import Loader from "../../components/Loader/Loader.jsx";
import BookForm from "../../components/BookForm/BookForm.jsx";
import s from "./AutoDetails.module.css";
import { selectFavorites } from "../../redux/favorites/selectors.js";
import { toggleFavoritesCar } from "../../redux/favorites/slice.js";
import Error from "../../components/Error/Error.jsx";

const AutoDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const car = useSelector(selectCar);
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const favorites = useSelector(selectFavorites) || [];

  const isFavorite = favorites.some((items) => items.id === car.id);

  useEffect(() => {
    dispatch(fetchCarById(id));
  }, [dispatch, id]);

  return (
    <div className="container">
      {error ? (
        <Error />
      ) : loading || !car.id ? (
        <Loader className={s.loader} />
      ) : (
        <section className={s.detailsSection}>
          <div>
            <div
              className={s.imgWrap}
              onClick={() => {
                dispatch(toggleFavoritesCar(car));
              }}
            >
              <svg width="16" height="16" className={s.svgHeart}>
                <use
                  href={
                    isFavorite
                      ? "/sprite.svg#icon-heart-fill"
                      : "/sprite.svg#icon-heart-inv"
                  }
                />
              </svg>
              <img
                src={car.img}
                alt={car.description}
                width="640"
                style={{ borderRadius: "19px" }}
              />
            </div>
            <BookForm />
          </div>
          <div>
            <CarInfo car={car} />
          </div>
        </section>
      )}
    </div>
  );
};
export default AutoDetails;
