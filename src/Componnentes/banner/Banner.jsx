import { FaDotCircle } from "react-icons/fa";
import bannerimg from "../../assets/banner.png";

import playimg from "../../assets/Play.png"

const Banner = () => {
  return (
    <div className="relative min-h-162.5 flex items-center overflow-hidden">
      <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
        
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#E1E7FF] border border-[#E1E7FF] text-[#9514FA] text-sm font-medium px-5 py-2 rounded-full">
            <FaDotCircle></FaDotCircle> New: AI-Powered Tools Available
          </div>

          <h1 className="text-4xl lg:text-6xl font-bold leading-tight tracking-tighter text-[#101727]">
            Supercharge Your <br />
            Digital Workflow
          </h1>

          <p className="text-lg text-[#627382] max-w-lg">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today. Explore
            Products
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <div className="flex gap-2">
              <a className="btn bg-gradient-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-white">
                Explore Products
              </a>

              <div  className="rounded-full border-2 border-[#9514FA] px-3 py-1 text-lg mb-2 flex font-semibold text-white">
                
                  <h1 className=" bg-gradient-to-r from-[#4F39F6]  to-[#9514FA] bg-clip-text text-transparent flex items-center ml-2">
                   <span ><img src={playimg} alt="" /></span > Watch Demo
                  </h1>
                
              </div>
            </div>
          </div>
        </div>

     
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative">
            <img
              className="relative h-130 w-auto object-contain drop-shadow-2xl rounded-3xl animate-pulse "
              src={bannerimg}
              alt="AI Models Banner"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
