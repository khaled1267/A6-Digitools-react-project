import { MdOutlineShoppingCart } from "react-icons/md";

const NavBar = () => {
  return (
    <div className="navbar p-5 w-full md:w-11/12 mx-auto">
      <div className="navbar-start">
        <div>
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#4F39F6] to-[#9514FA] ">
            DigiTools
          </h1>
        </div>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal gap-10 px-1 text-lg">
          <li>
            <a>Products</a>
          </li>
          <li>
            <a>Features</a>
          </li>
          <li>
            <a>Pricing</a>
          </li>
          <li>
            <a>Testimonials</a>
          </li>
          <li>
            <a>FAQ</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-5">
        <button className=" btn">
          <MdOutlineShoppingCart></MdOutlineShoppingCart> Login
        </button>
        <a className="btn bg-gradient-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-white">Get Started</a>
      </div>
    </div>
  );
};

export default NavBar;
