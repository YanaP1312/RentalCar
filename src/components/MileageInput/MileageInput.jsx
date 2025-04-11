import { useDispatch, useSelector } from "react-redux";
import { selectItems } from "../../redux/cars/selectors.js";
import { setMileageFrom, setMileageTo } from "../../redux/filters/slice.js";

const MileageInput = () => {
  const dispatch = useDispatch();

  return (
    <fieldset>
      <legend>Сar mileage / km</legend>

      <div>
        <span>From</span>
        <input
          type="number"
          name="mileageFrom"
          min="3000"
          onChange={(e) => dispatch(setMileageFrom(e.target.value))}
        />
      </div>

      <div>
        <span>To</span>
        <input
          type="number"
          name="mileageTo"
          max="7000"
          onChange={(e) => dispatch(setMileageTo(e.target.value))}
        />
      </div>
    </fieldset>
  );
};
export default MileageInput;
