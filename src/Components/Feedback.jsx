import React from "react";
import eclipse from "../assets/Ellipse1.svg";
import image2 from "../assets/image2.svg";
const Feedback = () => {
  return (
    <div className="flex flex-col-reverse ml-20 md:ml-0 md:flex-row md:justify-around ">
      <div className="grid gap-4 mt-14 md:mt-0 grid-cols-1 md:grid-cols-2">
        {/* card 1 */}
        <div className="p-4 w-72">
          <p className="text-md text-[#514D4D]">
            “Participating in the design contest on was a game-changer for my
            career. The exposure and recognition I received opened doors to
            exciting opportunities and collaborations. It's a platform that
            truly values and celebrates design talent.”{" "}
          </p>
          <div className="flex  mt-10 justify-between">
            <div className="flex">
              <img src={eclipse} alt="" />
              <div className="leading-0 pl-3">
                <p className="font-bold">Sarah C</p>
                <span className="text-sm text-[#9F9393]">Graphic designer</span>
              </div>
            </div>
            <div>
              <img src={image2} alt="" />
            </div>
          </div>
        </div>
        {/* card 2 */}
        <div className="p-4 w-72">
          <p className="text-md text-[#514D4D]">
            “Participating in the design contest on was a game-changer for my
            career. The exposure and recognition I received opened doors to
            exciting opportunities and collaborations. It's a platform that
            truly values and celebrates design talent.”{" "}
          </p>
          <div className="flex  mt-10 justify-between">
            <div className="flex">
              <img src={eclipse} alt="" />
              <div className="leading-0 pl-3">
                <p className="font-bold">Sarah C</p>
                <span className="text-sm text-[#9F9393]">Graphic designer</span>
              </div>
            </div>
            <div>
              <img src={image2} alt="" />
            </div>
          </div>
        </div>
        {/* card 3 */}
        <div className="p-4 w-72">
          <p className="text-md text-[#514D4D]" >
            “Participating in the design contest on was a game-changer for my
            career. The exposure and recognition I received opened doors to
            exciting opportunities and collaborations. It's a platform that
            truly values and celebrates design talent.”{" "}
          </p>
          <div className="flex  mt-10 justify-between">
            <div className="flex">
              <img src={eclipse} alt="" />
              <div className="leading-0 pl-3">
                <p className="font-bold">Sarah C</p>
                <span className="text-sm text-[#9F9393]">Graphic designer</span>
              </div>
            </div>
            <div>
              <img src={image2} alt="" />
            </div>
          </div>
        </div>
        {/* card 4 */}
        <div className="p-4 w-72">
          <p className="text-md text-[#514D4D]" >
            “Participating in the design contest on was a game-changer for my
            career. The exposure and recognition I received opened doors to
            exciting opportunities and collaborations. It's a platform that
            truly values and celebrates design talent.”{" "}
          </p>
          <div className="flex  mt-10 justify-between">
            <div className="flex">
              <img src={eclipse} alt="" />
              <div className="leading-0 pl-3">
                <p className="font-bold">Sarah C</p>
                <span className="text-sm text-[#9F9393]">Graphic designer</span>
              </div>
            </div>
            <div>
              <img src={image2} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className="font-bold text-2xl mb-10 md:mb-0 md:mt-56">Designers review  about Design paddies</h2>
        <p className="pr-10">Hear people speak about life changing moments with us</p>
      </div>
    </div>
  );
};

export default Feedback;
