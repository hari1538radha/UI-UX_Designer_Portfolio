import React from "react";
import Profile from "../Images/profile.svg";

const About = () => {
  return (
    <div className="flex justify-between h-[683px] pr-[10%] ">
      <div className="flex flex-col w-2/4 justify-center text-start items-center pl=[10%]">
        <p className="text-[40px] font-medium">Roshan B</p>
        <p className="text-[30px] font-medium text-[#4FA095]">
          UI & UX Designer
        </p>
      </div>
      <div className="pt-11">
        <img src={Profile}></img>
      </div>
    </div>
  );
};

export default About;
