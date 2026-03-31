import React from "react";

import { toast } from "react-toastify";

const Cart = ({ carts,setcarts }) => {
 
    const totalvalu=carts.reduce((sum,item)=> sum+item.price,0)
    
   const handleempty = () => {
    setcarts([])
    toast.error('Remove all the products from the cart ');
   }

   const handledelete = (item) => {
 const filterdel = carts.filter(car => car.id !== item.id)
setcarts(filterdel)
toast.error(' Remove from cart section.');
   }

  return (
    
      <div className="p-10 space-y-5 w-auto mx-auto md:w-9/12 mx-auto">
        <h1 className="text-5xl font-bold mb-10">Your Cart</h1>

         {
            carts.length===0 ? <p className="p-10 text-3xl text-center text-gray-400">Your cart is empty</p> :
            <>
          {carts.map((item) => (
          <div
            key={item.id}
            className="flex justify-between  items-center border border-zinc-300 bg-[#F9FAFC] p-5 rounded-2xl"
          >
            <div className="flex items-center gap-3">
              <div>
                <img
                  className=" h-5 w-5   md:h-10 w-10 object-contain"
                  src={item.icon}
                  alt=""
                />
              </div>
              <div>
                <h1 className="text-3xl font-bold">{item.name}</h1>
               
              </div>
            </div>
            <div className="flex justify-between gap-6 ">
              <p className="text-3xl font-bold">${item.price}/month</p>
              <button onClick={()=>handledelete(item)} className="btn btn-error rounded-2xl">Remove</button>
            </div>
          </div>
        ))}

        <div className="flex justify-between items-center p-7 bg-base-300 text-black text-3xl font-bold rounded-xl mt-11">
          <div>Total</div>
          <div className="text-black">${totalvalu}</div>
        </div>
        <div onClick={handleempty} className=" bg-gradient-to-r from-[#4F39F6] to-[#9514FA] btn w-full rounded-3xl p-10 text-2xl text-white">
            <button>Proceed to Checkout</button>
        </div>
            
            </>
         }

        
      </div>
      
   
  );
};

export default Cart;
