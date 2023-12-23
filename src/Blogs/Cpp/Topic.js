import React from "react";
import Dropdown from "./Dropdown";

const Topic = () => {
  return (
    <div>
      
      {/* Sidebar */}
      <div className="max-sm:hidden bg-gray-200 fixed">
        <p className=" ">Topic</p>
        <div className="flex flex-col pr-[180px] h-screen rounded-lg shadow-xl p-3">
          <div className="">
            <ul>
            <li><a href="#1.1">1.1</a></li>
            <li><a href="#1.2">1.2</a></li>
            <li><a href="#1.3">1.3</a></li>
            <li><a href="#1.4">1.4</a></li>
            <li><a href="#1.5">1.5</a></li>
            </ul>
          </div>
        </div>
      </div>
      {/* Dropdown for mobile */}
      <div className="flex justify-center items-center sm:hidden">
          {/* Dropdown for smaller screens */}
          <Dropdown/>
        </div>

        
    </div>
  );
};

export default Topic;
