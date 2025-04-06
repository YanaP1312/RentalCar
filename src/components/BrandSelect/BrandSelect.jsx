import { useSelector } from "react-redux";
import { selectBrand } from "../../redux/filters/selectors.js";
import { useId } from "react";

const BrandSelect = () => {
  const selectId = useId();
  const brands = useSelector(selectBrand);
  return (
    <div>
      <label htmlFor={selectId}>Car brand</label>
      <div>
        <svg width="16" height="16">
          <use href="/sprite.svg#icon-arrow-down" />
        </svg>
        <select id={selectId} name="brand">
          <option value="">Choose a brand</option>
          {brands.map((brand) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
export default BrandSelect;
