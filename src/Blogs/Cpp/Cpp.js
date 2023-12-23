import React from "react";
import Topic from "./Topic";
import Content from "./Content";

const Cpp = () => {
  return (
    <div className="">
      <div className="flex max-sm:flex-col gap-4">
        <Topic />
        <Content/>
      </div>
    </div>
  );
};

export default Cpp;
