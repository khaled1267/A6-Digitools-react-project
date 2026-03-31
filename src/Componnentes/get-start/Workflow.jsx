import React from 'react';

const Worksection = () => {
  return (
    <div className=" bg-gradient-to-br from-[#7C3AED] to-[#9333EA] px-6 py-20 text-center text-white">
   
      

      <div className=" mx-auto ">
        <h2 className="mb-6 text-4xl font-bold md:text-5xl">
          Ready To Transform Your Workflow?
        </h2>
        
        <p className="mx-auto mb-10  ">
          Join thousands of professionals who are already using Digitools to work smarter. 
          Start your free trial today.
        </p>

        <div className="mb-8 flex  items-center justify-center gap-4 ">
         
          <button className="rounded-full bg-white px-8 py-3 font-semibold text-[#7C3AED] shadow-lg ">
            Explore Products
          </button>
          
          {/* Secondary Button */}
          <button className="rounded-full border-2 border-white px-6 py-2 text-lg font-semibold text-white ">
            View Pricing
          </button>
        </div>

        <p className="text-sm tracking-wide opacity-80">
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>
    </div>
  );
};

export default Worksection;