import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import s from "./PageNotFound.module.css";

const PageNotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/", { replace: true });
    }, 2000);
    return () => clearTimeout(timer);
  }, [navigate]);
  return (
    <div className="container">
      <div className={s.notFoundWrap}>
        <h1>
          🚨 Page not found.
          <span> Let's go to home and start searching!</span>
        </h1>
      </div>
    </div>
  );
};

export default PageNotFound;
