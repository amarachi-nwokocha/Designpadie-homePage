import React from "react";

const Bod = () => {
  const navLinks = document.querySelector(".nav-links");
  function onToggleMenu(e) {
    console.log(e);
    e.name = e.name === "menu" ? "close" : "menu";
    navLinks.classList.toggle("top-[9%]");
  }
  return (
    <header className="bg-white">
      <nav className="flex justify-between items-center w-[92%] py-5 mx-auto">
        <div>
          <a
            className="hover:text-[#FF9A2B] text-[#444445] font-bold text-2xl"
            href="/"
          >
            {" "}
            Designpaddies
          </a>
        </div>
        <div className="nav-links duration-500 md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto  w-full flex items-center px-5">
          <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
            <li>
              <a className="hover:text-[#FF9A2B]" href="">
                Home
              </a>
            </li>
            <li>
              <a className="hover:text-[#FF9A2B]" href="">
              About Us
              </a>
            </li>
            <li>
              <a className="hover:text-[#FF9A2B]" href="">
              Contact Us
              </a>
            </li>
            <li>
              <a className="hover:text-[#FF9A2B]" href="">
                Blog
              </a>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-6">
          <button className="text-[#FF9A2B] border-[#FF9A2B] border-2 px-4 py-1 rounded-md hover:bg-[#FF9A2B] hover:text-white">
            Join our community
          </button>
          <i
            className="fa-solid fa-bars fa-flip text-3xl cursor-pointer md:hidden"
            onClick={() => onToggleMenu(this)}
            name="menu"
          ></i>

          <ion-icon></ion-icon>
        </div>
      </nav>
    </header>
  );
};

export default Bod;
