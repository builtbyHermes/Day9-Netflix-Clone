import { Outlet } from "react-router-dom";

import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";


function MainLayout() {
  return (
    <div>

      <Navbar />


      <main className="page-content">
        <Outlet />
      </main>


      <Footer />

    </div>
  );
}

export default MainLayout;