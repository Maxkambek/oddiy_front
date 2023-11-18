import { Routes, Route } from "react-router";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Elektironika from "../pages/Elektironika";
import Gozallik from "../pages/Gozallik";
import Sovgalar from "../pages/Sovgalar";
import Ayollaruchun from "../pages/Ayollaruchun";
import Erkaklaruchun from "../pages/Erkaklaruchun";
import Avtomobiluchun from "../pages/Avtmobiluchun";
import Salomatlikuchun from "../pages/Salomatlikuchun";

const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route>
          <Route path="/elektronika" element={<Elektironika />} />
        </Route>
        <Route>
          <Route path="gozallik" element={<Gozallik />} />
        </Route>
        <Route>
          <Route path="sovgalar" element={<Sovgalar />} />
        </Route>
        <Route>
          <Route path="ayollar-uchun" element={<Ayollaruchun />} />
        </Route>
        <Route>
          <Route path="erkaklar-uchun" element={<Elektironika />} />
        </Route>
        <Route>
          <Route path="bolalar-uchun" element={<Erkaklaruchun />} />
        </Route>
        <Route>
          <Route path="avtomobil-uchun" element={<Avtomobiluchun />} />
        </Route>
        <Route>
          <Route path="salomatlik-uchun" element={<Salomatlikuchun />} />
        </Route>
      </Routes>
    </>
  );
};

export default Routers;
