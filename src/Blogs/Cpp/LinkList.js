import React from "react";


const LinkList = ({href, label}) => {
  return (
    <>
      <a href={href} className="">
        {label}
      </a>
    </>
  );
};

export default LinkList;
