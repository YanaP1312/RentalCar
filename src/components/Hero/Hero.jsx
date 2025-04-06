import { useNavigate } from "react-router-dom";
import s from "./Hero.module.css";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className={s.heroWrap}>
      <div className="container">
        <div className={s.infoBlock}>
          <h1>Find your perfect rental car</h1>
          <h2>Reliable and budget-friendly rentals for any journey</h2>
          <button onClick={() => navigate("/catalog")}>View Catalog</button>
        </div>
      </div>
    </div>
  );
};
export default Hero;
