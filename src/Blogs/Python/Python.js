import React from "react";
import Topic from "./Topic";
import Content from "./Content";

const Python = () => {
  return (
    <div id="#python">
      <div className="flex max-sm:flex-col gap-4">
        <Topic />
        <Content/>
      </div>
    </div>
  );
};

export default Python;
