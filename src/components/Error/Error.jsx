import s from "./Error.module.css";

const Error = () => {
  return (
    <did className={s.errorWrap}>
      <p>
        🚨 Something went wrong, <span>please try again!</span>
      </p>
    </did>
  );
};

export default Error;
