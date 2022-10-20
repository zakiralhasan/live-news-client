import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Pages/Shared/Footer/Footer";
import NaveBar from "../Components/Pages/Shared/NaveBar/NaveBar";
import RightSide from "../Components/Pages/Shared/RightSide/RightSide";
import LeftSide from "../Components/Pages/Shared/LeftSide/LeftSide";

const Main = () => {
  return (
    <div>
      <NaveBar></NaveBar>
      <div className="grid grid-cols-12 ">
        <div className="col-span-2">
          <LeftSide></LeftSide>
        </div>
        <div className="col-span-7">
          <Outlet></Outlet>
        </div>
        <div className="col-span-3">
          <RightSide></RightSide>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
