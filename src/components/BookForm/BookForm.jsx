import { toast } from "react-toastify";

const BookForm = () => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const { name, email, date, comment } = form.elements;

    const nameValue = name.value.trim();
    const emailValue = email.value.trim();
    const dateValue = date.value.trim();
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
    console.log(nameValue, emailValue, dateValue, commentValue);
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <h3>Book your car now</h3>
      <p>Stay connected! We are always ready to help you.</p>
      <input type="text" placeholder="Name*" name="name" required />
      <input type="email" placeholder="Email*" name="email" required />
      <input type="date" placeholder="Booking date" name="date" />
      <textarea type="text" placeholder="Comment" name="comment" />
      <button type="submit">Send</button>
    </form>
  );
};

export default BookForm;
