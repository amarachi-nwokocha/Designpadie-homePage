import React from "react";

const Values = () => {
  return (
    <div className="flex justify-around pl-6 md:pl-0 ">
      
    <div className="mt-20 block px-3 text-center md:flex md:flex-row md:justify-around sm:flex-col  md:items-center">
      <div className="max-w-md" >
        {/* flex-container */}
        <h2 className="text-center md:text-left  font-bold text-xl leading-9 ">
          Our Values and Goals
        </h2>
        <p className="leading-7 md:text-left">
          {" "}
          We believe that design has the potential to transform industries,
          solve problems, and inspire change
        </p>
      </div>

      <div className=" border-l-4  grid grid-cols-1 md:w-4/12 mb-36 sm:py-4 font-display">
      <div className="hover:border-l-4 p-5 hover:cursor-pointer hover:border-[#FF9A2B] snap-start">
        <h3 className="text-left font-bold text-xl leading-9 "> Growth and Skill Development</h3>
        <p className="text-left lead mt-4 text-[#514D4D] text-sm leading-7">Through the process of participating, receiving feedback, and pushing your creative boundaries, you'll enhance your skills, expand your design repertoire, and discover new techniques.</p>
        <p className="text-[#514D4D] text-left text-sm mt-3">Learn more</p>
      </div>
      <div className="hover:border-[#FF9A2B] hover:border-l-4 hover:cursor-pointer p-5 ">
        <h3 className="text-left font-bold text-xl leading-9 ">Growth and Skill Development</h3>
        <p className="text-left text-[#514D4D] text-sm leading-7">Through the process of participating, receiving feedback, and pushing your creative boundaries, you'll enhance your skills, expand your design repertoire, and discover new techniques.</p>
        <p className="text-[#514D4D] text-left text-sm mt-3">Learn more</p>
      </div>
      <div className="hover:border-[#FF9A2B] hover:border-l-4 hover:cursor-pointer p-5 ">
        <h3 className="text-left font-bold text-xl leading-9 ">Growth and Skill Development</h3>
        <p className="text-left text-[#514D4D] text-sm leading-7">Through the process of participating, receiving feedback, and pushing your creative boundaries, you'll enhance your skills, expand your design repertoire, and discover new techniques.</p>
        <p className="text-[#514D4D] text-left text-sm mt-3">Learn more</p>
      </div>
      </div>
    </div>
    <div >
    </div>
    </div>
  );
};

export default Values;
