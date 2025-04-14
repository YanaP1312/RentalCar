import { useDispatch, useSelector } from "react-redux";
import BrandSelect from "../BrandSelect/BrandSelect.jsx";
import MileageInput from "../MileageInput/MileageInput.jsx";
import PriceSelect from "../PriceSelect/PriceSelect.jsx";
import SearchBtn from "../SearchBtn/SearchBtn.jsx";
import { fetchCars } from "../../redux/cars/operations.js";
import { resetItems } from "../../redux/cars/slice.js";
import s from "./FilterPanel.module.css";
import { useSearchParams } from "react-router-dom";
import {
  selectBrand,
  selectMileageFrom,
  selectMileageTo,
  selectPrice,
} from "../../redux/filters/selectors.js";
import {
  setBrand,
  setMileageFrom,
  setMileageTo,
  setPrice,
} from "../../redux/filters/slice.js";
import { useEffect } from "react";

const FilterPanel = ({ setShowFavorites }) => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const brand = useSelector(selectBrand);
  const price = useSelector(selectPrice);
  const mileageFrom = useSelector(selectMileageFrom);
  const mileageTo = useSelector(selectMileageTo);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowFavorites(false);
    dispatch(resetItems());
    dispatch(fetchCars());

    const newParams = {};
    if (brand) newParams.brand = brand;
    if (price) newParams.price = price;
    if (mileageFrom) newParams.mileageFrom = mileageFrom;
    if (mileageTo) newParams.mileageTo = mileageTo;

    setSearchParams(newParams);
  };

  useEffect(() => {
    const brandParam = searchParams.get("brand");
    const priceParam = searchParams.get("price");
    const mileageFromParam = searchParams.get("mileageFrom");
    const mileageToParam = searchParams.get("mileageTo");

    if (brandParam) dispatch(setBrand(brandParam));
    if (priceParam) dispatch(setPrice(Number(priceParam)));
    if (mileageFromParam) dispatch(setMileageFrom(Number(mileageFromParam)));
    if (mileageToParam) dispatch(setMileageTo(Number(mileageToParam)));
  }, [searchParams, dispatch]);

  useEffect(() => {
    if (brand || price || mileageFrom || mileageTo) {
      dispatch(fetchCars());
    }
  }, [brand, price, mileageFrom, mileageTo, dispatch]);

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
