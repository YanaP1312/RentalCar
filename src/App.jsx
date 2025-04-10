import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation.jsx";
import { Suspense, lazy } from "react";
import { ToastContainer } from "react-toastify";
import Loader from "./components/Loader/Loader.jsx";

const Home = lazy(() => import("./pages/Home/Home.jsx"));
const Catalog = lazy(() => import("./pages/Catalog/Catalog.jsx"));
const AutoDetails = lazy(() => import("./pages/AutoDetails/AutoDetails.jsx"));
const PageNotFound = lazy(() =>
  import("./pages/PageNotFound/PageNotFound.jsx")
);

const App = () => {
  return (
    <div>
      <Navigation />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/catalog/:id" element={<AutoDetails />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        pauseOnHover={true}
        draggable={true}
        theme="dark"
      />
    </div>
  );
};
export default App;
