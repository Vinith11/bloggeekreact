import React from "react";
import Topic from "../../components/links/Topic";
import Content from "./Content";
import ScrollButton from "../../components/scrollBtn/ScrollButton";
import Dropdown from "../../components/links/Dropdown";
import { navLinks } from "./index";

const Javascript = () => {
  return (
    <div id="#javascript">
      <div className="flex max-sm:flex-col gap-4">

<div>
  <div className="flex justify-center items-center sm:hidden">
    <Dropdown navLinks={navLinks} />
  </div>
  <Topic navLinks={navLinks} />
</div>

<Content />
<ScrollButton />
{/* Dropdown for mobile */}
</div>
    </div>
  );
};

export default Javascript;
