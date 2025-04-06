import { useNavigate } from "react-router-dom";

import {
  capitalize,
  cutAddress,
  formattingNum,
} from "../../utils/stringMethods.js";
import { useDispatch, useSelector } from "react-redux";

import { selectFavorites } from "../../redux/favorites/selectors.js";
import { toggleFavoritesCar } from "../../redux/favorites/slice.js";
import s from "./CarCard.module.css";

const CarCard = ({ item }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites) || [];

  const isFavorite = favorites.some((car) => car.id === item.id);

  return (
    <li className={s.carCard}>
      <div
        onClick={() => {
          dispatch(toggleFavoritesCar(item));
        }}
        className={s.imgWrap}
      >
        <svg width="16" height="16" className={s.svgWrap}>
          <use
            href={
              isFavorite
                ? "/sprite.svg#icon-heart-fill"
                : "/sprite.svg#icon-heart-inv"
            }
          />
        </svg>
        <img
          className={s.img}
          src={item.img}
          alt={item.description}
          width="276"
        />
      </div>

      <div className={s.titleWrap}>
        <h4>
          {item.brand}&nbsp;
          <span>{item.model}</span>,&nbsp;{item.year}
        </h4>
        <h4>${item.rentalPrice}</h4>
      </div>

      <p className={s.carDscr}>
        {cutAddress(item.address)}&nbsp;|&nbsp;
        {item.rentalCompany}
      </p>
      <p className={s.carDscr}>
        {capitalize(item.type)}&nbsp;|&nbsp;
        {formattingNum(item.mileage)}
      </p>

      <button
        className={s.readMoreBtn}
        onClick={() => navigate(`/catalog/${item.id}`)}
      >
        Read more
      </button>
    </li>
  );
};
export default CarCard;
