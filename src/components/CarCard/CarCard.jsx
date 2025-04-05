import { useNavigate } from "react-router-dom";

import {
  capitalize,
  cutAddress,
  formatingNum,
} from "../../utils/stringMethods.js";

const CarCard = ({ item }) => {
  const navigate = useNavigate();
  return (
    <li>
      <div>
        <img src={item.img} alt={item.description} width="276" />
      </div>
      <div>
        <div>
          <h3>
            {item.brand}&nbsp;
            <span>{item.model}</span>,&nbsp;{item.year}
          </h3>
          <p>
            {cutAddress(item.address)}&nbsp;|&nbsp;
            {item.rentalCompany}
            &nbsp;|&nbsp;{capitalize(item.type)}&nbsp;|&nbsp;
            {formatingNum(item.mileage)}
          </p>
        </div>
        <div>
          <h3>${item.rentalPrice}</h3>
        </div>
      </div>
      <button onClick={() => navigate(`/catalog/${item.id}`)}>Read more</button>
    </li>
  );
};
export default CarCard;
