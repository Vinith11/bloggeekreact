import React from "react";
import LinkList from "./LinkList";

const Topic = ({navLinks}) => {
  return (
    <div>
      {/* Sidebar */}
      <div className="max-sm:hidden bg-gray-200 fixed">
        <p className=" p-4 ">Topic</p>
        <div className="flex flex-col pr-[180px] h-screen rounded-lg shadow-xl p-4">
          <div className="flex flex-col">
            {navLinks.map((items) => (
                <LinkList key={items.label} {...items} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topic;
