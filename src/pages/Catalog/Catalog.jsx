import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCars } from "../../redux/cars/operations.js";

const Catalog = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);
  return (
    <section>
      <FilterPanel />
      <CarList />
    </section>
  );
};
export default Catalog;
