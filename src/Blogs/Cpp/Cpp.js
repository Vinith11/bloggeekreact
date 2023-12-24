import React from "react";
import Topic from "./Topic";
import Content from "./Content";
import ScrollButton from "../../components/scrollBtn/ScrollButton";

const Cpp = () => {
  return (
    <div id="#cpp">
      <div className="flex max-sm:flex-col gap-4">
        <Topic />
        <Content/>
        <ScrollButton /> 
      </div>
    </div>
  );
};

export default Cpp;
