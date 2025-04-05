// import { useNavigation } from "react-router-dom";

import {
  capitalize,
  cutAddress,
  formatingNum,
} from "../../utils/stringMethods.js";

const CarCard = ({ car }) => {
  const navigate = useNavigation();
  return (
    <li>
      <div>
        <img src={car.img} alt={car.description} width="276" />
      </div>
      <div>
        <div>
          <h3>
            {car.brand}&nbsp;
            <span>{car.model}</span>,&nbsp;{car.year}
          </h3>
          <p>
            {cutAddress(car.address)}&nbsp;|&nbsp;
            {car.rentalCompany}
            &nbsp;|&nbsp;{capitalize(car.type)}&nbsp;|&nbsp;
            {formatingNum(car.mileage)}
          </p>
        </div>
        <div>
          <h3>${car.rentalPrice}</h3>
        </div>
      </div>
      <button onClick={() => navigate(`/catalog/${car.id}`)}>Read more</button>
    </li>
  );
};
export default CarCard;
