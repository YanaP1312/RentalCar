import { Link, NavLink } from "react-router-dom";
import clsx from "clsx";
import s from "./Navigation.module.css";

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const Navigation = () => {
  return (
    <header className={s.header}>
      <div className={s.wrapForAbs}>
        <div className={s.navWrap}>
          <Link className={s.logo} to="/">
            <img src="/logo.svg" alt="RentalCar Logo" />
          </Link>
          <nav>
            <NavLink to="/" className={buildLinkClass}>
              Home
            </NavLink>
            <NavLink to="/catalog" className={buildLinkClass}>
              Catalog
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
