import React from "react";
import Topic from "./Topic";
import Content from "./Content";

const Python = () => {
  return (
    <div className="">
      <div className="flex max-sm:flex-col gap-4">
        <Topic />
        <Content/>
      </div>
    </div>
  );
};

export default Python;