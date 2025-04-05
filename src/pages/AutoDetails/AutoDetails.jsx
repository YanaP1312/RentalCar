import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectCar } from "../../redux/cars/selectors.js";
import { useEffect } from "react";
import CarInfo from "../../components/CarInfo/CarInfo.jsx";
import { fetchCarById } from "../../redux/cars/operations.js";

const AutoDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const car = useSelector(selectCar);

  useEffect(() => {
    dispatch(fetchCarById(id));
  }, [dispatch, id]);

  return (
    <section>
      <div>
        <img src={car.img} alt={car.description} width="640" />
        {/* <BookForm /> */}
      </div>
      <div>
        <CarInfo car={car} />
      </div>
    </section>
  );
};
export default AutoDetails;
