import s from "./Error.module.css";

const Error = () => {
  return (
    <did className={s.errorWrap}>
      <p>
        <span style={{ fontStyle: "normal" }}>🚨</span> Something went wrong,
        please try again!
      </p>
    </did>
  );
};

export default Error;
