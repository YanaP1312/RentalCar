import { useDispatch, useSelector } from "react-redux";
import { selectItems } from "../../redux/cars/selectors.js";
import { setMileageFrom, setMileageTo } from "../../redux/filters/slice.js";

const MileageInput = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectItems);

  const mileageValues = [...new Set(items.map((item) => item.mileage))];
  const minMileage = Math.min(...mileageValues);
  const maxMileage = Math.max(...mileageValues);

  return (
    <fieldset>
      <legend>Сar mileage / km</legend>

      <div>
        <span>From</span>
        <input
          type="number"
          name="mileageFrom"
          min={minMileage}
          onChange={(e) => dispatch(setMileageFrom(e.target.value))}
        />
      </div>

      <div>
        <span>To</span>
        <input
          type="number"
          name="mileageTo"
          max={maxMileage}
          onChange={(e) => dispatch(setMileageTo(e.target.value))}
        />
      </div>
    </fieldset>
  );
};
export default MileageInput;
