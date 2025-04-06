import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCars } from "../../redux/cars/operations.js";
import CarList from "../../components/CarList/CarList.jsx";
import { fetchBrands } from "../../redux/filters/operations.js";
import FilterPanel from "../../components/FilterPanel/FilterPanel.jsx";

const Catalog = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCars());
    dispatch(fetchBrands());
  }, [dispatch]);
  return (
    <section>
      <FilterPanel />
      <CarList />
    </section>
  );
};
export default Catalog;
