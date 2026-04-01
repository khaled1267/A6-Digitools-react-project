const StatsSection = () => {
  return (
    <div className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 items-center text-white">
        
          <div className="flex flex-col items-center md:border-r border-white/20 ">
            <h2 className="text-5xl md:text-6xl font-bold mb-3">50K+</h2>
            <p className="text-lg  font-medium">Active Users</p>
          </div>

          
          <div className="flex flex-col items-center md:border-r border-white/20 ">
            <h2 className="text-5xl md:text-6xl font-bold mb-3">200+</h2>
            <p className="text-lg  font-medium">Premium Tools</p>
          </div>

         
          <div className="flex flex-col items-center">
            <h2 className="text-5xl md:text-6xl font-bold mb-3">4.9</h2>
            <p className="text-lg  font-medium">Rating</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
