import { useSelector } from "react-redux";
import { selectItems } from "../../redux/cars/selectors.js";

const MileageInput = () => {
  const items = useSelector(selectItems);

  const mileageValues = [...new Set(items.map((item) => item.mileage))];
  const minMileage = Math.min(...mileageValues);
  const maxMileage = Math.max(...mileageValues);

  return (
    <fieldset>
      <legend>Сar mileage / km</legend>

      <div>
        <span>From</span>
        <input type="number" name="mileageFrom" min={minMileage} />
      </div>

      <div>
        <span>To</span>
        <input type="number" name="mileageTo" max={maxMileage} />
      </div>
    </fieldset>
  );
};
export default MileageInput;
