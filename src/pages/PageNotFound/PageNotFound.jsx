import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/", { replace: true });
    }, 2000);
    return () => clearTimeout(timer);
  }, [navigate]);
  return <h1>Page not found. Let's go to home and start searching...</h1>;
};

export default PageNotFound;
