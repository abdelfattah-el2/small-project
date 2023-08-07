import {  Outlet } from "react-router-dom";
import Navbar from "../navbar/Nab-index";


function RootLayout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;