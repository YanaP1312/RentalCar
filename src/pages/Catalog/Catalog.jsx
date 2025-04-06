import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCars } from "../../redux/cars/operations.js";
import CarList from "../../components/CarList/CarList.jsx";
import { fetchBrands } from "../../redux/filters/operations.js";
import FilterPanel from "../../components/FilterPanel/FilterPanel.jsx";
import { selectPage } from "../../redux/cars/selectors.js";
import LoadMore from "../../components/LoadMore/LoadMore.jsx";

const Catalog = () => {
  const dispatch = useDispatch();
  const page = useSelector(selectPage);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch, page]);

  useEffect(() => {
    dispatch(fetchBrands());
  }, [dispatch]);
  return (
    <section>
      <FilterPanel />
      <CarList />
      <LoadMore />
    </section>
  );
};
export default Catalog;
