import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Maincart = ({digital ,carts,setcarts}) => {

  const [isSelected, setisSelected] = useState(false);

  const handlesbeynow = () => {

const isfound = carts.find((item)=> item.id === digital.id)

if(isfound){
  toast.error("Item Already Selected")
  return
}

    setisSelected(true);
    setcarts([...carts,digital]);
    toast.success('Added on the carts!');
  };
    
    return (
        
             <div className="text-2xl shadow-lg border border-zinc-300 rounded-2xl overflow-hidden ">
      <div className=" flex justify-between p-5   items-center">
        <img
          className="w-[32px] h-[32px] mt-[38px] mb-[28px]  object-contain"
          src={digital.icon}
        //   alt={model.title}
        />
        <p className='text-[16px]'>{digital.tagType===""}</p>
      </div>
      <div className="p-4 space-y-5">
        <h1 className="text-3xl font-bold">{digital.name}</h1>
        <p className="text-[16px] text-[#627382]">{digital.description}</p>
        <p className="text-3xl font-bold ">${digital.price}/mo</p>
            <p className='text-[#627382] text-[16px]'>{digital.features}</p>

            <button
          onClick={()=>handlesbeynow()}
          className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] btn w-full rounded-3xl p-7 text-2xl text-white"
        >
          {isSelected ? "Added to cart" : "Buy Now"}
        </button>
        </div>
        </div>
    );
};

export default Maincart;