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
      toast(
        "🚨 Please enter a valid email address. For example:  example@gmail.com."
      );
      return;
    }
    if (nameValue.length > 10) {
      toast("🚨 Name must be 10 characters or less");
      return;
    }
    if (nameValue.length < 1) {
      toast("🚨 Please, enter your name");
      return;
    }

    toast(
      "🚘 Thanks for your reservation! Our manager will contact you shortly."
    );
    form.reset();
    setSelectedDate(null);
  };

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      autoComplete="off"
      className={s.form}
    >
      <h3>Book your car now</h3>
      <p style={{ color: "var(--color-grey)" }}>
        Stay connected! We are always ready to help you.
      </p>
      <div className={s.inputsWrap}>
        <input
          type="text"
          placeholder="Name*"
          pattern="[A-Za-zА-Яа-яЁё\s\-']+"
          name="name"
          required
          onInvalid={(e) => {
            e.target.setCustomValidity("");
          }}
        />
        <input
          type="email"
          placeholder="Email*"
          name="email"
          required
          onInvalid={(e) => {
            e.target.setCustomValidity("");
          }}
        />
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
