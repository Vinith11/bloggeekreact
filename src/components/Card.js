import React from "react";
import Ronaldo from "../assets/Ronaldo.webp";

const Card = () => {
  return (
    <section>
      <div className="flex flex-row gap-4 max-sm:flex-col ">
        <div className="flex justify-center shadow-sm rounded-lg parent-div">
          <div className="child-div w-11/12 ">
            <img
              src={Ronaldo}
              width={360}
              alt=""
              className="rounded-lg mx-auto block"
            />
            <h1>C++</h1>
            <div>Posted By</div>
            <span> Date: </span>
          </div>
        </div>
        <div className="flex justify-center shadow-sm rounded-lg parent-div">
          <div className="child-div w-11/12 ">
            <img
              src={Ronaldo}
              width={360}
              alt=""
              className="rounded-lg mx-auto block"
            />
            <h1>C++</h1>
            <div>Posted By</div>
            <span> Date: </span>
          </div>
        </div>
        <div className="flex justify-center shadow-sm rounded-lg parent-div">
          <div className="child-div w-11/12 ">
            <img
              src={Ronaldo}
              width={360}
              alt=""
              className="rounded-lg mx-auto block"
            />
            <h1>C++</h1>
            <div>Posted By</div>
            <span> Date: </span>
          </div>
        </div>
        <div className="flex justify-center shadow-sm rounded-lg parent-div">
          <div className="child-div w-11/12 ">
            <img
              src={Ronaldo}
              width={360}
              alt=""
              className="rounded-lg mx-auto block"
            />
            <h1>C++</h1>
            <div>Posted By</div>
            <span> Date: </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
