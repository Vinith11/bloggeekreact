import React from "react";
import Dropdown from "./Dropdown";
import {navLinks} from ".";

const Topic = () => {
  return (
    <div>
      
      {/* Sidebar */}
      <div className="max-sm:hidden bg-gray-200 fixed">
        <p className=" p-3 ">Topic</p>
        <div className="flex flex-col pr-[180px] h-screen rounded-lg shadow-xl p-3">
          <div className="">
            <ul>
              {navLinks.map((items)=>(
                <li key={items.label}><a href={items.href}>{items.label}</a></li>
              ))}
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
