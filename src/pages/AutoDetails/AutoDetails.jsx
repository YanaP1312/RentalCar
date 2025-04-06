import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectCar, selectIsLoading } from "../../redux/cars/selectors.js";
import { useEffect } from "react";
import CarInfo from "../../components/CarInfo/CarInfo.jsx";
import { fetchCarById } from "../../redux/cars/operations.js";
import Loader from "../../components/Loader/Loader.jsx";
import BookForm from "../../components/BookForm/BookForm.jsx";
import s from "./AutoDetails.module.css";

const AutoDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const car = useSelector(selectCar);
  const loading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchCarById(id));
  }, [dispatch, id]);

  return (
    <div className="container">
      {loading || !car.id ? (
        <Loader />
      ) : (
        <section className={s.detailsWrap}>
          <div>
            <img
              src={car.img}
              alt={car.description}
              width="640"
              className={s.img}
            />
            <BookForm />
          </div>
          <div>
            <CarInfo car={car} />
          </div>
        </section>
      )}
    </div>
  );
};
export default AutoDetails;
