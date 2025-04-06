import { useDispatch, useSelector } from "react-redux";
import { selectItems } from "../../redux/cars/selectors.js";
import Select from "react-select";
import DropdownIndicator from "../DropdownIndicator/Dropdownindicator.jsx";
import "./PriceSelect.module.css";
import { setPrice } from "../../redux/filters/slice.js";
import { selectPrice } from "../../redux/filters/selectors.js";

const PriceSelect = () => {
  const dispatch = useDispatch();
  const selected = useSelector(selectPrice);

  const prices = Array.from({ length: 15 }, (_, i) => 20 + i * 10);

  const options = prices.map((price) => ({
    value: price.toString(),
    label: price,
  }));

  return (
    <div>
      <label className="select-label">Price/ 1 hour</label>
      <Select
        options={options}
        value={selected ? { value: selected, label: selected } : null}
        placeholder="Choose a price"
        isClearable
        classNamePrefix="custom-select"
        components={{ DropdownIndicator, IndicatorSeparator: () => null }}
        onChange={(selected) => dispatch(setPrice(selected?.value || ""))}
      />
    </div>
  );
};
export default PriceSelect;
