import { useNavigate } from "react-router-dom";

import {
  capitalize,
  cutAddress,
  formattingNum,
} from "../../utils/stringMethods.js";
import { useDispatch, useSelector } from "react-redux";

import { selectFavorites } from "../../redux/favorites/selectors.js";
import { toggleFavoritesCar } from "../../redux/favorites/slice.js";

const CarCard = ({ item }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);

  const isFavorite = favorites.some((car) => car.id === item.id);

  return (
    <li>
      <div
        onClick={() => {
          dispatch(toggleFavoritesCar(item));
        }}
      >
        <svg width="16" height="16">
          <use
            href={
              isFavorite
                ? "/sprite.svg#icon-heart-fill"
                : "/sprite.svg#icon-heart-inv"
            }
          />
        </svg>
        <img src={item.img} alt={item.description} width="276" />
      </div>
      <div>
        <div>
          <h4>
            {item.brand}&nbsp;
            <span>{item.model}</span>,&nbsp;{item.year}
          </h4>
          <p>
            {cutAddress(item.address)}&nbsp;|&nbsp;
            {item.rentalCompany}
            &nbsp;|&nbsp;{capitalize(item.type)}&nbsp;|&nbsp;
            {formattingNum(item.mileage)}
          </p>
        </div>
        <div>
          <h4>${item.rentalPrice}</h4>
        </div>
      </div>
      <button onClick={() => navigate(`/catalog/${item.id}`)}>Read more</button>
    </li>
  );
};
export default CarCard;
