import { Routes, Route } from "react-router";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Login from "../pages/Auth/Login";
import SignUp from "../pages/Auth/SignUp";
import ProductItem from "../pages/ProductItem";
import CategoriesItem from "../pages/CategoryItem";

const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route>
          <Route path="/login" element={<Login />} />
        </Route>
        <Route>
          <Route path="/sign-up" element={<SignUp />} />
        </Route>
        <Route>
          <Route path="/category/:slug" element={<CategoriesItem />} />
        </Route>
        <Route>
          <Route path="/product/:id" element={<ProductItem />} />
        </Route>
      </Routes>
    </>
  );
};

export default Routers;
