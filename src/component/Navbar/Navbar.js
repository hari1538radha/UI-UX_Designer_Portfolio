import React from "react";
import User from "../Images/User.svg";
const Navbar = () => {
  return (
    <div className="flex justify-between pt-[14px] text-poppins">
      <div className="pl-[9%]">
        <img src={User}></img>
      </div>
      <div className="flex gap-x-[72px] text-[#153462] font-medium  pr-[10%]">
        <a className="" href="#">
          Home
        </a>
        <a href="#">About</a>
        <a href="#">Project</a>
        <a href="#">Contact</a>
      </div>
    </div>
  );
};

export default Navbar;
