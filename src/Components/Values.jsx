import React from "react";

const Values = () => {
  return (
    <div className="flex justify-around ">
      
    <div className="mt-20 block px-3 text-center md:flex md:justify-around md:items-center">
      <div className="max-w-md" >
        {/* flex-container */}
        <h2 className="text-left font-bold text-xl leading-9 ">
          Our Values and Goals
        </h2>
        <p className="leading-7 md:text-left">
          {" "}
          We believe that design has the potential to transform industries,
          solve problems, and inspire change
        </p>
      </div>

      <div className="h-60 grid grid-cols-1 w-4/12 mb-36 sm:py-4 font-display">
      <div className="focus:border-l-4 p-5 focus:border-[#FF9A2B] snap-start">
        <h3 className="text-left font-bold text-xl leading-9 "> Growth and Skill Development</h3>
        <p className="text-left lead mt-4 text-[#514D4D] text-sm leading-7">Through the process of participating, receiving feedback, and pushing your creative boundaries, you'll enhance your skills, expand your design repertoire, and discover new techniques.</p>
        <p className="text-[#514D4D] text-left text-sm mt-3">Learn more</p>
      </div>
      <div className="focus:border-l-4 p-5 focus:border-[#FF9A2B]">
        <h3 className="text-left font-bold text-xl leading-9 ">Growth and Skill Development</h3>
        <p className="text-left text-[#514D4D] text-sm leading-7">Through the process of participating, receiving feedback, and pushing your creative boundaries, you'll enhance your skills, expand your design repertoire, and discover new techniques.</p>
        <p className="text-[#514D4D] text-left text-sm mt-3">Learn more</p>
      </div>
      <div className="focus:border-l-4 p-5 focus:border-[#FF9A2B]">
        <h3 className="text-left font-bold text-xl leading-9 ">Growth and Skill Development</h3>
        <p className="text-left text-[#514D4D] text-sm leading-7">Through the process of participating, receiving feedback, and pushing your creative boundaries, you'll enhance your skills, expand your design repertoire, and discover new techniques.</p>
        <p className="text-[#514D4D] text-left text-sm mt-3">Learn more</p>
      </div>
      </div>
    </div>
    <div >
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
      </h1>
    </div>
    </div>
  );
};

export default Values;
