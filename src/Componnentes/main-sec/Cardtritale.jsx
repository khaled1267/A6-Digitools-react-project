import React, { use } from "react";
import Maincart from "./Maincart";

const Cardtritale = ({ digipromose ,carts,setcarts }) => {
  const digidata = use(digipromose);
  return (
    <div className="">
      <div className="text-center">
        <h1 className="text-5xl font-bold mt-[120px] mb-[16px] ">
          Premium Digital Tools
        </h1>
        <p className="text-[#627382] font-semibold mb-[16px] ">
          Choose from our curated collection of premium digital products
          designed <br /> to boost your productivity and creativity.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mt-18 w-10/12 mx-auto">
        {digidata.map((digital) => (
          <Maincart key={digital.id} digital={digital} carts={carts} setcarts={setcarts}></Maincart>
        ))}
      </div>
    </div>
  );
};

export default Cardtritale;
