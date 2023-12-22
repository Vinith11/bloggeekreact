import React from "react";
import Topic from "./Topic";
import Content from "./Content";

const Sidebar = () => {
  return (
    <div className="flex gap-4">
      <Topic/>
      <Content/>
    </div>
  );
};

export default Sidebar;
