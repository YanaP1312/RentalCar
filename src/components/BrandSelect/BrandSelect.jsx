import { useDispatch, useSelector } from "react-redux";
import { selectBrand, selectBrandList } from "../../redux/filters/selectors.js";
import Select from "react-select";
import DropdownIndicator from "../DropdownIndicator/Dropdownindicator.jsx";
import { setBrand } from "../../redux/filters/slice.js";

const BrandSelect = () => {
  const dispatch = useDispatch();
  const brands = useSelector(selectBrandList);
  const selected = useSelector(selectBrand);
  const options = brands.map((brand) => ({ value: brand, label: brand }));

  const handleBrandChange = (selected) => {
    dispatch(setBrand(selected?.value || ""));
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
