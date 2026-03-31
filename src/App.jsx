
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
  const res = await fetch("/public/Digitool.json");
  return res.json();
  
};
const digipromose =digitool()
function App() {

 const [activecard , setactivecard] =useState("Products")
  const [carts,setcarts] = useState([])

  return (
   <>
   <NavBar></NavBar>
   <Banner></Banner>
   <StatsSection></StatsSection>
    
    

  
    <div className="tabs tabs-box justify-center ">
          <input
            type="radio"
            name="my_tabs_1"
            className={`btn ${activecard === "Products" ? "btn bg-gradient-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-white " :""}rounded-xl text-[#25065D] px-10  `}
            onClick={() => setactivecard("Products")}
            aria-label="Products"
          />
          
          <input
            type="radio"
            name="my_tabs_1"
            className= {`btn ${activecard === "Cart" ? "btn bg-gradient-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-white" :""}  rounded-xl text-[#25065D] `}
            onClick={() => setactivecard("Cart")}
            aria-label={`Cart (${carts.length})`}
       
          />
        </div>
 {/* { activecard === "Models" && < Aimodels  modelpromise={modelpromise} carts={carts} setcarts={setcarts}  />}
      {activecard === "Cart" && <Cart carts={carts} setcarts={setcarts} />} */}

        { activecard === "Products" && <Cardtritale digipromose={digipromose} carts={carts} setcarts={setcarts}></Cardtritale>}

        { activecard === "Cart"&& <Cart carts={carts} setcarts={setcarts}></Cart>}


   <Getstart></Getstart>
   <PricingTable></PricingTable>
   <Worksection></Worksection>
   <Footer></Footer>

   <ToastContainer />
   </>
  )
}

export default App
