import { useId } from "react";
import { useSelector } from "react-redux";
import { selectItems } from "../../redux/cars/selectors.js";

const PriceSelect = () => {
  const selectId = useId();
  const items = useSelector(selectItems);

  const prices = [
    ...new Set(items.map((item) => Number(item.rentalPrice))),
  ].sort((a, b) => a - b);

  return (
    <div>
      <label htmlFor={selectId}>Price/ 1 hour</label>
      <div>
        <svg width="16" height="16">
          <use href="/sprite.svg#icon-arrow-down" />
        </svg>
        <select id={selectId} name="price">
          <option value="">Choose a price</option>
          {prices.map((price) => (
            <option key={price} value={price}>
              {price}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
export default PriceSelect;
