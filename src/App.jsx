
import { useState } from 'react'
import './App.css'
import Banner from './Componnentes/banner/Banner'

import Cardtritale from './Componnentes/main-sec/Cardtritale'
import NavBar from './Componnentes/navber/Navber'
import StatsSection from './Componnentes/state/State'
import Getstart from './Componnentes/get-start/Getstart'
import Pricing from './Componnentes/get-start/Pricing'
import PricingTable from './Componnentes/get-start/Pricing'
import Worksection from './Componnentes/get-start/Workflow'
import Footer from './Componnentes/footer/Footer'
import Cart from './Componnentes/cart/Cart'
import { ToastContainer } from 'react-toastify'

const digitool = async () => {
  const res = await fetch("/Digitool.json");
  return res.json();
  
};
const future = async () => {
  const resp = await fetch("/Feture.json");
  return resp.json();
  
};

const digipromose =digitool()
const feturepro = future()
function App() {

 const [activecard , setactivecard] =useState("Products")
  const [carts,setcarts] = useState([])

  return (
   <>
   <NavBar carts={carts}></NavBar>
   <Banner></Banner>
   <StatsSection></StatsSection>
    
    <div>
      <div className="text-center">
        <h1 className="text-5xl font-bold mt-[120px] mb-[16px] ">
          Premium Digital Tools
        </h1>
        <p className="text-[#627382] font-semibold mb-[16px] ">
          Choose from our curated collection of premium digital products
          designed <br /> to boost your productivity and creativity.
        </p>
      </div>

      
    <div className="tabs tabs-box justify-center gap-2 ">
      
          <input
            type="radio"
            name="my_tabs_1"
            className={`btn ${activecard === "Products" ? "btn bg-gradient-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-white " :""}rounded-2xl text-[#25065D] px-10  `}
            onClick={() => setactivecard("Products")}
            aria-label="Products"
          />
          
          <input
            type="radio"
            name="my_tabs_1"
            className= {`btn ${activecard === "Cart" ? "btn bg-gradient-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-white" :""}  rounded-2xl text-[#25065D] px-10`}
            onClick={() => setactivecard("Cart")}
            aria-label={`Cart (${carts.length})`}
       
          />
        </div>
    </div>
    

  
 

        { activecard === "Products" && <Cardtritale digipromose={digipromose} carts={carts} setcarts={setcarts}></Cardtritale>}

        { activecard === "Cart"&& <Cart carts={carts} setcarts={setcarts}></Cart>}


   <Getstart></Getstart>
   <PricingTable feturepro={feturepro} ></PricingTable>
   <Worksection></Worksection>
   <Footer></Footer>

   <ToastContainer />
   </>
  )
}

export default App
