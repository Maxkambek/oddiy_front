import { Routes, Route, useLocation } from "react-router";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Login from "../pages/Auth/Login";
import SignUp from "../pages/Auth/SignUp";
import ProductItem from "../pages/ProductItem";
import CategoriesItem from "../pages/CategoryItem";
import Success from "../pages/Success";

const Routers = () => {
  const location = useLocation();
  return (
    <>
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route>
          <Route path="/login" element={<Login />} />
        </Route>
        <Route>
          <Route path="/sign-up" element={<SignUp />} />
        </Route>
        <Route>
          <Route path="/category/:name" element={<CategoriesItem />} />
        </Route>
        <Route>
          <Route path="/product/:id" element={<ProductItem />} />
        </Route>
        <Route>
          <Route path="success/:id" element={<Success />} />
        </Route>
      </Routes>
    </>
  );
};

export default Routers;
