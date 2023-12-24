import React from "react";
import Topic from "./Topic";
import Content from "./Content";
import ScrollButton from "../../components/scrollBtn/ScrollButton";

const Python = () => {
  return (
    <div id="#python">
      <div className="flex max-sm:flex-col gap-4">
        <Topic />
        <Content/>
        <ScrollButton /> 
      </div>
    </div>
  );
};

export default Python;
