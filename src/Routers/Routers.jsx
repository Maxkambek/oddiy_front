import { Routes, Route, useLocation } from "react-router";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Login from "../pages/Auth/Login";
import SignUp from "../pages/Auth/SignUp";
import ProductItem from "../pages/ProductItem";
import CategoriesItem from "../pages/CategoryItem";
import Success from "../pages/Success";
import NavigationLayout from "../components/NavigationLayout";
import AdminMain from "../components/AdminMain";
import Product from "../components/Product";
import Flow from "../components/Flow";
import Settings from "../components/Settings";
import Diamond from "../components/Diamond";
import Payment from "../components/Payment";
import Requests from "../components/Requests";
import FlowStats from "../components/FlowStats";

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
        <Route element={<NavigationLayout />}>
          <Route element={<AdminMain />} path="/admin" />
          <Route element={<Product />} path="/product" />
          <Route element={<Flow />} path="/flow" />
          <Route element={<FlowStats />} path="/flow-statistics" />
          <Route element={<Requests />} path="/requests" />
          <Route element={<Settings />} path="/settings" />
          <Route element={<Diamond />} path="/diamond" />
          <Route element={<Payment />} path="/payment" />
        </Route>
      </Routes>
    </>
  );
};

export default Routers;
