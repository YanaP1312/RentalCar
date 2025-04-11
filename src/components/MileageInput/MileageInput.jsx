import { useDispatch, useSelector } from "react-redux";
import { setMileageFrom, setMileageTo } from "../../redux/filters/slice.js";
import {
  selectMileageFrom,
  selectMileageTo,
} from "../../redux/filters/selectors.js";
import { useEffect, useState } from "react";
import s from "./MileageInput.module.css";

const MileageInput = () => {
  const dispatch = useDispatch();
  const mileageFromRedux = useSelector(selectMileageFrom);
  const mileageToRedux = useSelector(selectMileageTo);

  const [mileageFrom, setMileageFromLocal] = useState(mileageFromRedux || "");
  const [mileageTo, setMileageToLocal] = useState(mileageToRedux || "");
  const [fromError, setFromError] = useState(false);
  const [toError, setToError] = useState(false);

  useEffect(() => {
    if (mileageFromRedux) {
      setMileageFromLocal(formatValue(String(mileageFromRedux)));
    }
    if (mileageToRedux) {
      setMileageToLocal(formatValue(String(mileageToRedux)));
    }
  }, [mileageFromRedux, mileageToRedux]);

  const formatValue = (value) => {
    const digitsOnly = value.replace(/\D/g, "");
    return digitsOnly.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  const handleMileageChange = (e, setLocalValue, setError, dispatchAction) => {
    const raw = e.target.value;
    const digits = raw.replace(/\D/g, "");
    const formatted = formatValue(digits);
    setLocalValue(formatted);

    const numeric = parseInt(digits, 10);
    const isInvalid = numeric < 4000 || numeric > 7000;
    setError(isInvalid);

    if (!isInvalid && digits) {
      dispatch(dispatchAction(numeric));
    }
  };

  return (
    <fieldset>
      <legend className="select-label">Сar mileage / km</legend>
      <div>
        <span>From</span>
        <input
          type="text"
          inputMode="numeric"
          name="mileageFrom"
          placeholder="4 000"
          value={mileageFrom}
          onChange={(e) =>
            handleMileageChange(
              e,
              setMileageFromLocal,
              setFromError,
              setMileageFrom
            )
          }
        />
        {fromError && (
          <p style={{ color: "red", fontSize: "12px" }}>
            Mileage must be between 4 000 and 7 000 km
          </p>
        )}
      </div>

      <div>
        <span>To</span>
        <input
          type="text"
          inputMode="numeric"
          name="mileageTo"
          placeholder="7 000"
          value={mileageTo}
          onChange={(e) =>
            handleMileageChange(e, setMileageToLocal, setToError, setMileageTo)
          }
        />
        {toError && (
          <p style={{ color: "red", fontSize: "12px" }}>
            Mileage must be between 4 000 and 7 000 km
          </p>
        )}
      </div>
    </fieldset>
  );
};
export default MileageInput;
