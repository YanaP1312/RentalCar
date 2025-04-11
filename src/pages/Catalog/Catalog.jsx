import { useEffect, useState } from "react";
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
  const [showFavorites, setShowFavorites] = useState(false);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch, page]);

  useEffect(() => {
    dispatch(fetchBrands());
  }, [dispatch]);
  return (
    <section className="container">
      <FilterPanel />
      <button type="button" onClick={() => setShowFavorites((prev) => !prev)}>
        {showFavorites ? (
          "Show all"
        ) : (
          <>
            Show&nbsp;
            <svg width="16" height="16">
              <use href="/sprite.svg#icon-heart-fill" />
            </svg>
          </>
        )}
      </button>
      <CarList showFavorites={showFavorites} />
      {!showFavorites && <LoadMore />}
    </section>
  );
};
export default Catalog;
