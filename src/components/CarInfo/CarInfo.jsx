import {
  capitalize,
  cutAddressCom,
  formattingNum,
} from "../../utils/stringMethods.js";

const CarInfo = ({ car }) => {
  const accessAndFunk = [...car.accessories, ...car.functionalities];

  return (
    <div>
      <div>
        <h2>
          {car.brand}&nbsp;{car.model},&nbsp;{car.year}
        </h2>
        <span>Id:&nbsp;{car.id}</span>
        <div>
          <svg width="16" height="16">
            <use href="/sprite.svg#icon-location" />
          </svg>
          <p>{cutAddressCom(car.address)}</p>
          <p>Mileage: {formattingNum(car.mileage)}</p>
        </div>

        <h2>${car.rentalPrice}</h2>
        <p>{car.description}</p>
      </div>
      <div>
        <ul>
          Rental Conditions:
          {car.rentalConditions.map((item) => (
            <li key={item}>
              <svg width="16" height="16">
                <use href="/sprite.svg#icon-check-circle" />
              </svg>
              <p>{item}</p>
            </li>
          ))}
        </ul>
        <ul>
          Car Specifications:
          <li>
            <svg width="16" height="16">
              <use href="/sprite.svg#icon-calendar" />
            </svg>
            <p>Year:&nbsp;{car.year}</p>
          </li>
          <li>
            <svg width="16" height="16">
              <use href="/sprite.svg#icon-calendar" />
            </svg>
            <p>Type:&nbsp;{capitalize(car.type)}</p>
          </li>
          <li>
            <svg width="16" height="16">
              <use href="/sprite.svg#icon-car" />
            </svg>
            <p>Fuel Consumption:&nbsp;{car.fuelConsumption}</p>
          </li>
          <li>
            <svg width="16" height="16">
              <use href="/sprite.svg#icon-fuel-pump" />
            </svg>
            <p>Engine Size:&nbsp;{car.engineSize}</p>
          </li>
        </ul>
        <ul>
          Accessories and functionalities:
          {accessAndFunk.map((item) => (
            <li key={item}>
              <svg width="16" height="16">
                <use href="/sprite.svg#icon-check-circle" />
              </svg>
              <p>{item}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default CarInfo;
