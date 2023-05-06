import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/Navbar.js";
import Footer from "../components/layout/Footer.js";

const SharedLayout = () => {
  return (
    <>
      <Navbar />
      <div>
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default SharedLayout;
