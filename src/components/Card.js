import React from "react";
import Ronaldo from "../assets/Ronaldo.webp";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <section>
      <div className="flex h-screen w-full pt-2 flex-row gap-4 max-sm:flex-col ">
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
            <div className="flex bg-red-600 rounded-lg items-center justify-center font-bold text-white p-2 m-2 mb-3">
              <Link to="/cpp">Get Started</Link>
            </div>
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
            <h1>Python</h1>
            <div>Posted By</div>
            <span> Date: </span>
            <div className="flex bg-red-600 rounded-lg items-center justify-center font-bold text-white p-2 m-2 mb-3">
              <Link to="/python">Get Started</Link>
            </div>
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
            <h1>Java Script</h1>
            <div>Posted By</div>
            <span> Date: </span>
            <div className="flex bg-red-600 rounded-lg items-center justify-center font-bold text-white p-2 m-2 mb-3">
              <Link to="/javascript">Get Started</Link>
            </div>
          </div>
        </div>

        <div className="flex justify-center shadow-sm rounded-lg parent-div">
          <a href="/" className="child-div w-11/12 ">
            <img
              src={Ronaldo}
              width={360}
              alt=""
              className="rounded-lg mx-auto block"
            />
            <h1>C++</h1>
            <div>Posted By</div>
            <span> Date: </span>
            <div className="flex bg-red-600 rounded-lg items-center justify-center font-bold text-white p-2 m-2 mb-3">
              <Link>Get Started</Link>
            </div>
          </a>{" "}
        </div>
      </div>
    </section>
  );
};

export default Card;
