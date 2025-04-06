import { useDispatch, useSelector } from "react-redux";
import { selectPage, selectTotalPages } from "../../redux/cars/selectors.js";
import { setPage } from "../../redux/cars/slice.js";

const LoadMore = () => {
  const dispatch = useDispatch();
  const totalPages = useSelector(selectTotalPages);
  const page = useSelector(selectPage);
  return (
    <div>
      <button onClick={(e) => dispatch(setPage(page + 1))}>Load more</button>
    </div>
  );
};
export default LoadMore;
