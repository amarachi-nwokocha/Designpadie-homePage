import React, { useState } from "react";
import {FaBarsStaggered} from 'react-icons/fa6'


const Navbar = () => {
  const [nav, setNav] = useState(false)
    const togglenav =() =>{
      setNav(!nav);
      console.log(nav);
    } 

  return (
    <header className="">
      <nav className="flex justify-between items-center w-[92%] mx-auto py-5">
        <div>
          <a className="hover:text-[#FF9A2B] text-[#444445] font-bold text-2xl" href="/"> Designpaddies</a>
        </div>
        <div className="md:static absolute md:min-h-fit hidden  min-h-[60vh] left-0 top-[9%] md:w-auto w-full md:flex items-center px-5 ">
          <ul className=" flex md:flex-row flex-col  md:items-center md:gap-[4vw] gap-8">
            <li>
              <a className="hover:text-[#FF9A2B]" href="">Home</a>
            </li>
            <li>
              <a className="hover:text-[#FF9A2B]" href="">About Us</a>
            </li>
            <li>
              <a className="hover:text-[#FF9A2B]" href="">Contact Us</a>
            </li>
            <li>
              <a className="hover:text-[#FF9A2B]" href="">Blog</a>
            </li>
          </ul>
        </div>
        <div>
          <button className="text-[#FF9A2B] hidden md:block border-[#FF9A2B] border-2 px-4 py-4 rounded-md hover:bg-[#FF9A2B] hover:text-white">
            Join our community
          </button>
          
        <FaBarsStaggered onClick={togglenav} size={20} className="md:hidden" ></FaBarsStaggered>
        </div>
        {/* mobile nav starts */}
        <div className=
        {nav ?
        "absolute bg-[#FF9A2B] flex-col justify-center rounded-lg ease-in   min-h-[50vh] right-0 top-[9%]  w-44 md:hidden items-center px-5 " 
        : "hidden"}
        >
          <ul  className= "flex md:flex-row flex-col pt-4 text-white  md:items-center md:gap-[4vw] gap-8">
            <li>
              <a className="hover:text-[#FF9A2B]" href="">Home</a>
            </li>
            <li>
              <a className="hover:text-[#FF9A2B]" href="">About Us</a>
            </li>
            <li>
              <a className="hover:text-[#FF9A2B]" href="">Contact Us</a>
            </li>
            <li>
              <a className="hover:text-[#FF9A2B]" href="">Blog</a>
            </li>
          </ul>
        </div>
        {/* mobile nav ends */}
      </nav>
    </header>
  );
};

export default Navbar;
