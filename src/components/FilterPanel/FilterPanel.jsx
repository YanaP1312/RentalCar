import { useDispatch, useSelector } from "react-redux";
import BrandSelect from "../BrandSelect/BrandSelect.jsx";
import MileageInput from "../MileageInput/MileageInput.jsx";
import PriceSelect from "../PriceSelect/PriceSelect.jsx";
import SearchBtn from "../SearchBtn/SearchBtn.jsx";
import { fetchCars } from "../../redux/cars/operations.js";
import { resetItems } from "../../redux/cars/slice.js";
import s from "./FilterPanel.module.css";
import {
  selectBrand,
  selectMileageFrom,
  selectMileageTo,
  selectPrice,
} from "../../redux/filters/selectors.js";
import { useEffect } from "react";

const FilterPanel = ({ setShowFavorites }) => {
  const dispatch = useDispatch();

  // const brand = useSelector(selectBrand);
  // const price = useSelector(selectPrice);
  // const mileageFrom = useSelector(selectMileageFrom);
  // const mileageTo = useSelector(selectMileageTo);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowFavorites(false);
    dispatch(resetItems());
    dispatch(fetchCars());
  };

  // useEffect(() => {
  //   dispatch(fetchCars());
  // }, [brand, price, mileageFrom, mileageTo]);

  return (
    <form onSubmit={handleSubmit} className={s.searchForm}>
      <BrandSelect />
      <PriceSelect />
      <MileageInput />
      <SearchBtn />
    </form>
  );
};
export default FilterPanel;
