import React from "react";
import Topic from "./Topic";
import Content from "./Content";

const Javascript = () => {
  return (
    <div className="">
      <div className="flex max-sm:flex-col gap-4">
        <Topic />
        <Content/>
      </div>
    </div>
  );
};

export default Javascript;