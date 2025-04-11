import { useDispatch, useSelector } from "react-redux";
import { selectBrand, selectBrandList } from "../../redux/filters/selectors.js";
import Select from "react-select";
import "./BrandSelect.module.css";
import DropdownIndicator from "../DropdownIndicator/Dropdownindicator.jsx";
import {
  setBrand,
  setMileageFrom,
  setMileageTo,
  setPrice,
} from "../../redux/filters/slice.js";
import { fetchCars } from "../../redux/cars/operations.js";

const BrandSelect = () => {
  const dispatch = useDispatch();
  const brands = useSelector(selectBrandList);
  const selected = useSelector(selectBrand);
  const options = brands.map((brand) => ({ value: brand, label: brand }));

  const handleBrandChange = (selected) => {
    dispatch(setBrand(selected?.value || ""));
    dispatch(setPrice(""));
    dispatch(setMileageFrom(null));
    dispatch(setMileageTo(null));
    dispatch(fetchCars());
  };

  return (
    <div>
      <label className="select-label">Car brand</label>
      <Select
        options={options}
        value={selected ? { value: selected, label: selected } : null}
        placeholder="Choose a brand"
        isClearable
        classNamePrefix="custom-select"
        components={{ DropdownIndicator, IndicatorSeparator: () => null }}
        onChange={handleBrandChange}
      />
    </div>
  );
};
export default BrandSelect;
