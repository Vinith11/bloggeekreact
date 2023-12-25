import React from "react";
import {details} from "."
import Card from "./Card";

const Home = () => {
  return (
    <section>
      <div className="pt-2 gap-4 ">
        <div className="flex justify-center items-center shadow-sm rounded-lg ">
          <div className="flex  gap-2 p-3 ml-2 max-sm:flex-col ">
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
