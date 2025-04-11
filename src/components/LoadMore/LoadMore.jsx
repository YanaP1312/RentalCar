import { useDispatch, useSelector } from "react-redux";
import { selectPage, selectTotalPages } from "../../redux/cars/selectors.js";
import { setPage } from "../../redux/cars/slice.js";
import s from "./LoadMore.module.css";

const LoadMore = () => {
  const dispatch = useDispatch();
  const totalPages = useSelector(selectTotalPages);
  const page = useSelector(selectPage);

  if (page >= totalPages) return null;

  return (
    <div className={s.wrapBtn}>
      <button
        className={s.loadMoreBtn}
        onClick={() => dispatch(setPage(page + 1))}
      >
        Load more
      </button>
    </div>
  );
};
export default LoadMore;
