import { useDispatch, useSelector } from "react-redux";
import BrandSelect from "../BrandSelect/BrandSelect.jsx";
import MileageInput from "../MileageInput/MileageInput.jsx";
import PriceSelect from "../PriceSelect/PriceSelect.jsx";
import SearchBtn from "../SearchBtn/SearchBtn.jsx";
import { fetchCars } from "../../redux/cars/operations.js";
import { resetItems } from "../../redux/cars/slice.js";

const FilterPanel = ({ setShowFavorites }) => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowFavorites(false);
    dispatch(resetItems());
    dispatch(fetchCars());
  };

  return (
    <form onSubmit={handleSubmit}>
      <BrandSelect />
      <PriceSelect />
      <MileageInput />
      <SearchBtn />
    </form>
  );
};
export default FilterPanel;
