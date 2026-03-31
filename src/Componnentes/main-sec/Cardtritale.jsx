import React, { use } from "react";
import Maincart from "./Maincart";

const Cardtritale = ({ digipromose ,carts,setcarts }) => {
  const digidata = use(digipromose);
  return (
    <div className="">
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mt-18 w-10/12 mx-auto">
        {digidata.map((digital) => (
          <Maincart key={digital.id} digital={digital} carts={carts} setcarts={setcarts}></Maincart>
        ))}
      </div>
    </div>
  );
};

export default Cardtritale;
