import React, { useState } from "react";
import { IoCheckmarkSharp } from "react-icons/io5";
import { toast } from "react-toastify";

const Maincart = ({ digital, carts, setcarts }) => {
  const [isSelected, setisSelected] = useState(false);

  const handlesbeynow = () => {
    const isfound = carts.find((item) => item.id === digital.id);

    if (isfound) {
      toast.error("Item Already Selected");
      return;
    }

    setisSelected(true);
    setcarts([...carts, digital]);
    toast.success("Added on the carts!");
  };

  const badgecolour = (tag) => {
    if (tag === "popular") {
      return "bg-[#F2EEFF] text-[#7D53FF]";
    } else if (tag === "new") {
      return "bg-[#E5F9F1] text-[#1F9B71]";
    } else if (tag === "best seller") {
      return "bg-[#FEF9E3] text-[#C78722]";
    } else {
      return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <div
      className={`text-2xl shadow-lg rounded-2xl overflow-hidden bg-[#F2F2F2] transition-all duration-300 cursor-pointer 
      hover:scale-[1.03] hover:-translate-y-3 hover:shadow-2xl 
      ${isSelected ? " border-2 border-green-800 " : " border border-transparent "}`}
    >
      <div className=" flex justify-between p-5 items-center">
        <img
          className="w-[32px] h-[32px] mt-[38px] mb-[28px] object-contain"
          src={digital.icon}
          alt={digital.title}
        />

        <p
          className={`text-[16px] rounded-xl p-2 mb-18 ${badgecolour(digital.tag)} `}
        >
          {digital.tagType}
        </p>
      </div>

      <div className="p-4 space-y-5 -mt-10">
        <h1 className="text-3xl font-bold">{digital.name}</h1>
        <p className="text-[16px] text-[#627382]">{digital.description}</p>
        <p className="text-3xl font-bold ">
          ${digital.price} <span className="text-xl text-[#627382]">/{digital.period} </span>
        </p>

        <div className="mt-8 space-y-4">
          {digital.features.map((item, index) => (
            <li key={index} className="flex items-center gap-3 list-none">
              <div className=" w-5 h-5 rounded-full flex items-center justify-center">
                <span className="text-green-700">
                  <IoCheckmarkSharp />
                </span>
              </div>
              <span className="text-slate-600 text-[15px] font-medium">
                {item}
              </span>
            </li>
          ))}
        </div>

        <button
          onClick={() => handlesbeynow()}
          className={`w-full rounded-3xl p-5 text-xl text-white transition-all duration-300 active:scale-95
          ${isSelected ? " bg-green-700 " : "bg-gradient-to-r from-[#4F39F6] to-[#9514FA]"}`}
        >
          {isSelected ? "Added to cart" : "Buy Now"}
        </button>
      </div>
    </div>
  );
};

export default Maincart;
