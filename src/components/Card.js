import React from "react";
import { Link } from "react-router-dom";

const Card = ({ pname,date,img, author, href, width}) => {
  const cardStyle = ` rounded-lg mx-auto block`;

  return (
    <div >
      <div className="w-[325px] ">
        <img
          src={img}
          alt=""
          className={cardStyle}
          width={width}
        />
        <h1>{pname}</h1>
        <div>{author}</div>
        <span> Date: {date} </span>
        <div className="flex bg-red-600 rounded-lg items-center justify-center font-bold text-white p-2 m-2 mb-3">
          <Link to={href}>Get Started</Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
