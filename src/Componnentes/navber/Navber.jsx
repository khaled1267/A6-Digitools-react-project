import { MdOutlineShoppingCart } from "react-icons/md";

const NavBar = ({ carts }) => {
  return (
    
    <div className="navbar p-2 w-full md:w-11/12 mx-auto sticky top-0 z-50 bg-white/80 backdrop-blur-md">
      <div className="navbar-start">
        <div>
          <h1 className="text-5xl py-3 font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#4F39F6] to-[#9514FA] ">
            DigiTools
          </h1>
        </div>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal gap-2 px-1 text-lg">
          <li><a>Products</a></li>
          <li><a>Features</a></li>
          <li><a>Pricing</a></li>
          <li><a>Testimonials</a></li>
          <li><a>FAQ</a></li>
        </ul>
      </div>
      <div className="navbar-end gap-5">
        <button className="btn px-5 flex items-center">
          <MdOutlineShoppingCart size={20}/>
          {carts.length > 0 && (
            <p className="-mt-5 -ml-2.5 px-1 rounded-full bg-red-600 text-white font-bold">
              {carts.length}
            </p>
          )}
          <span className="ml-3">Login</span>
        </button>
        <a className="btn bg-gradient-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-white">
          Get Started
        </a>
      </div>
    </div>
  );
};

export default NavBar;