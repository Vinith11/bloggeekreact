import React from "react";
import {details} from "."
import Card from "./Card";

const Home = () => {
  return (
    <section>
      <div className="flex justify-center  items-center pt-2 gap-4 ">
        <div className="shadow-sm rounded-lg ">
          <div className=" gap-2 p-3 ml-2 max-sm:flex-col ">
            {
              details.map((items)=>(
                <Card key={items.name} {...items}/>
              ))
            }
          </div>
        </div>


      </div>
    </section>
  );
};

export default Home;
