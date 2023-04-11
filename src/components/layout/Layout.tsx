import React, { ReactNode } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

// type layoutProps = {
//   children: ReactNode;
// };

const layout: React.FC = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
};
export default layout;
