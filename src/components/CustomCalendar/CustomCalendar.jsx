import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./CustomCalendar.css";
import { registerLocale } from "react-datepicker";
import enUS from "date-fns/locale/en-US";

// registerLocale("en", {
//   ...enUS,
//   options: {
//     ...enUS.options,
//     weekStartsOn: 1,
//   },
// });

const CustomCalendar = ({ selected, onChange }) => {
  return (
    <DatePicker
      selected={selected}
      onChange={onChange}
      placeholderText="Booking date"
      dateFormat="dd.MM.yyyy"
      locale="en"
      className="custom-datepicker"
      popperPlacement="bottom-start"
      calendarClassName="calendar-custom"
      popperClassName="calendar-popper"
    />
  );
};
export default CustomCalendar;
