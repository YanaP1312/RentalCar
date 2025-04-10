import { RiseLoader } from "react-spinners";
import s from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={s.loaderWrap}>
      <RiseLoader color="var(--color-blue)" />
    </div>
  );
};
export default Loader;
