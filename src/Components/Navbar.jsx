import React from "react";

const Navbar = () => {
  return (
    <header className="bg-white shadow-xl">
      <nav className="flex justify-between items-center w-[92%] mx-auto py-5">
        <div>
          <a className="hover:text-[#FF9A2B] text-[#444445] font-bold text-2xl" href="/"> Designpaddies</a>
        </div>
        <div className="md:static absolute md:min-h-fit  min-h-[60vh] left-0 top-[9%] md:w-auto w-full flex items-center px-5 ">
          <ul className="bg-white shadow-xl flex md:flex-row flex-col  md:items-center md:gap-[4vw] gap-8">
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
          <button className="text-[#FF9A2B] border-[#FF9A2B] border-2 px-4 rounded-md hover:bg-[#FF9A2B] hover:text-white">
            Join our community
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
