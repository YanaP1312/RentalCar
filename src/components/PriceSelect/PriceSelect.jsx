import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import DropdownIndicator from "../DropdownIndicator/Dropdownindicator.jsx";
import SingleValue from "../SingleValue/SingleValue.jsx";
import { setPrice } from "../../redux/filters/slice.js";
import { selectPrice } from "../../redux/filters/selectors.js";

const PriceSelect = () => {
  const dispatch = useDispatch();
  const selected = useSelector(selectPrice);

  const prices = Array.from({ length: 6 }, (_, i) => 30 + i * 10);

  const options = prices.map((price) => ({
    value: price.toString(),
    label: price,
  }));

  const handlePriceChange = (selected) => {
    dispatch(setPrice(selected?.value || ""));
  };

  return (
    <div>
      <label className="select-label">Price/ 1 hour</label>
      <Select
        options={options}
        value={selected ? { value: selected, label: selected } : null}
        placeholder="Choose a price"
        isClearable
        classNamePrefix="custom-select"
        components={{
          DropdownIndicator,
          IndicatorSeparator: () => null,
          SingleValue,
        }}
        onChange={handlePriceChange}
      />
    </div>
  );
};
export default PriceSelect;
