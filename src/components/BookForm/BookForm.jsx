import { useState } from "react";
import { toast } from "react-toastify";
import CustomCalendar from "../CustomCalendar/CustomCalendar.jsx";
import s from "./BookForm.module.css";

const BookForm = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const { name, email, comment } = form.elements;

    const nameValue = name.value.trim();
    const emailValue = email.value.trim();
    const commentValue = comment.value.trim();

    if (!/\S+@\S+\.\S+/.test(emailValue)) {
      toast("🚨 Please enter a valid email address");
      return;
    }
    if (nameValue.length > 10) {
      toast("🚨 Name must be 10 characters or less");
      return;
    }

    toast(
      "🚘 Thanks for your reservation! Our manager will contact you shortly."
    );
    form.reset();
    setSelectedDate(null);
    console.log(nameValue, emailValue, selectedDate, commentValue);
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off" className={s.form}>
      <h3>Book your car now</h3>
      <p style={{ color: "var(--color-grey)" }}>
        Stay connected! We are always ready to help you.
      </p>
      <div className={s.inputsWrap}>
        <input type="text" placeholder="Name*" name="name" required />
        <input type="email" placeholder="Email*" name="email" required />
        <CustomCalendar
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
        />
        <textarea type="text" placeholder="Comment" name="comment" />
      </div>
      <div className={s.btnWrap}>
        <button className={s.sendBtn} type="submit">
          Send
        </button>
      </div>
    </form>
  );
};

export default BookForm;
