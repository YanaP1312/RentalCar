import s from "./Error.module.css";

const Error = () => {
  return (
    <div className={s.errorWrap}>
      <p>
        🚨 Something went wrong, <span>please try again!</span>
      </p>
    </div>
  );
};

export default Error;
