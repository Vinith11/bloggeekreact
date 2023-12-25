import React from "react";
import Topic from "./Topic";
import Content from "./Content";
import ScrollButton from "../../components/scrollBtn/ScrollButton";
import Dropdown from "./Dropdown";

const Cpp = () => {
  return (
    <div id="#cpp">
      <div className="flex max-sm:flex-col gap-4">
      <div className="flex justify-center items-center sm:hidden">
          {/* Dropdown for smaller screens */}
          <Dropdown />
        </div>
        <Topic />
        <Content />
        <ScrollButton />
        {/* Dropdown for mobile */}
        
      </div>
    </div>
  );
};

export default Cpp;
