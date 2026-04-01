import React from "react";
import userimg from "/assets/user.png";
import pacimg from "/assets/package.png";
import rocimg from "/assets/rocket.png";

const Getstart = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 ">
      <div className="text-center">
        <h1 className="text-5xl font-bold mt-[120px] mb-[16px]">
          Get Started in 3 Steps
        </h1>
        <p className="text-[#627382] font-semibold mb-[16px]">
          Start using premium digital tools in minutes, not hours <br /> to
          boost your productivity and creativity.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
        {/* Card 01 */}
        <div className="bg-[#F1F1F1] p-10 text-center rounded-xl flex flex-col items-center">
          <button className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full w-10 h-10 mb-4 ml-[280px]">
            01
          </button>
          <img className="mb-4 w-20" src={userimg} alt="User" />
          <h1 className="text-xl font-bold mb-2">Create Account</h1>
          <p className="text-gray-600">
            Sign up for free in seconds. No credit card required to get started.
          </p>
        </div>

        {/* Card 02 */}
        <div className="bg-[#F1F1F1] p-10 text-center rounded-xl flex flex-col items-center">
          <button className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full w-10 h-10 mb-4 ml-[280px]">
            02
          </button>
          <img className="mb-4 w-20" src={pacimg} alt="Package" />
          <h1 className="text-xl font-bold mb-2">Choose Package</h1>
          <p className="text-gray-600">
            Select the best plan that fits your professional needs perfectly.
          </p>
        </div>

        {/* Card 03 */}
        <div className="bg-[#F1F1F1] p-10 text-center rounded-xl flex flex-col items-center">
          <button className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full w-10 h-10 mb-4 ml-[280px]">
            03
          </button>
          <img className="mb-4 w-20" src={rocimg} alt="Rocket" />
          <h1 className="text-xl font-bold mb-2">Launch Project</h1>
          <p className="text-gray-600">
            Deploy your work and see the magic happen instantly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Getstart;
