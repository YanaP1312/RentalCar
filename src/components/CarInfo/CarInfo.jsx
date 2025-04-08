import {
  capitalize,
  cutAddressCom,
  formattingNum,
} from "../../utils/stringMethods.js";
import s from "./CarInfo.module.css";

const CarInfo = ({ car }) => {
  const accessAndFunk = [...car.accessories, ...car.functionalities];

  return (
    <div className={s.carInfoWrap}>
      <div className={s.mainInfoWrap}>
        <h2>
          {car.brand}&nbsp;{car.model},&nbsp;{car.year}
        </h2>
        <span style={{ color: "var(--color-grey)" }}>Id:&nbsp;{car.id}</span>
        <div className={s.wrapInfo}>
          <div className={s.wrapLocation}>
            <svg width="16" height="16">
              <use href="/sprite.svg#icon-location" />
            </svg>
            <p>{cutAddressCom(car.address)}</p>
          </div>
          <p>Mileage: {formattingNum(car.mileage)}</p>
        </div>

        <h2 style={{ color: "var(--color-blue)" }}>${car.rentalPrice}</h2>
        <p className={s.description}>{car.description}</p>
      </div>

      <div>
        <ul className={s.listInfo}>
          <h3>Rental Conditions:</h3>
          {car.rentalConditions.map((item) => (
            <li key={item}>
              <svg width="16" height="16">
                <use href="/sprite.svg#icon-check-circle" />
              </svg>
              <p>{item}</p>
            </li>
          ))}
        </ul>

        <ul className={s.listInfo}>
          <h3>Car Specifications:</h3>
          <li>
            <svg width="16" height="16">
              <use href="/sprite.svg#icon-calendar" />
            </svg>
            <p>Year:&nbsp;{car.year}</p>
          </li>
          <li>
            <svg width="16" height="16">
              <use href="/sprite.svg#icon-car" />
            </svg>
            <p>Type:&nbsp;{capitalize(car.type)}</p>
          </li>
          <li>
            <svg width="16" height="16">
              <use href="/sprite.svg#icon-fuel-pump" />
            </svg>
            <p>Fuel Consumption:&nbsp;{car.fuelConsumption}</p>
          </li>
          <li>
            <svg width="16" height="16">
              <use href="/sprite.svg#icon-gear" />
            </svg>
            <p>Engine Size:&nbsp;{car.engineSize}</p>
          </li>
        </ul>

        <ul className={s.listInfo}>
          <h3>Accessories and functionalities:</h3>
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
