import React from "react";
import eclipse from "../assets/Ellipse1.svg";
import image2 from "../assets/image2.svg";
const Feedback = () => {
  return (
    <div className="flex justify-center mx-auto">
      <div className="grid grid-cols-2">
        {/* card 1 */}
        <div className="w-[350px] h-16 ">
          <p>
            “Participating in the design contest on was a game-changer for my
            career. The exposure and recognition I received opened doors to
            exciting opportunities and collaborations. It's a platform that
            truly values and celebrates design talent.”{" "}
          </p>
          <div className="flex justify-between">
            <div className="flex">
              <img src={eclipse} alt="" />
              <div className="leading-0">
                <p>Sarah C</p>
                <span>Graphic designer</span>
              </div>
            </div>
            <div>
              <img src={image2} alt="" />
            </div>
          </div>
        </div>
        {/* card 2 */}
        <div className="w-[350px] h-16 ">
          <p>
            “Participating in the design contest on was a game-changer for my
            career. The exposure and recognition I received opened doors to
            exciting opportunities and collaborations. It's a platform that
            truly values and celebrates design talent.”{" "}
          </p>
          <div className="flex justify-between">
            <div className="flex">
              <img src={eclipse} alt="" />
              <div className="leading-0">
                <p>Sarah C</p>
                <span>Graphic designer</span>
              </div>
            </div>
            <div>
              <img src={image2} alt="" />
            </div>
          </div>
        </div>
        {/* card 3 */}
        <div className="w-[350px] h-16 ">
          <p>
            “Participating in the design contest on was a game-changer for my
            career. The exposure and recognition I received opened doors to
            exciting opportunities and collaborations. It's a platform that
            truly values and celebrates design talent.”{" "}
          </p>
          <div className="flex justify-between">
            <div className="flex">
              <img src={eclipse} alt="" />
              <div className="leading-0">
                <p>Sarah C</p>
                <span>Graphic designer</span>
              </div>
            </div>
            <div>
              <img src={image2} alt="" />
            </div>
          </div>
        </div>
        {/* card 4 */}
        <div className="w-[350px] h-16 ">
          <p>
            “Participating in the design contest on was a game-changer for my
            career. The exposure and recognition I received opened doors to
            exciting opportunities and collaborations. It's a platform that
            truly values and celebrates design talent.”{" "}
          </p>
          <div className="flex justify-between">
            <div className="flex">
              <img src={eclipse} alt="" />
              <div className="leading-0">
                <p>Sarah C</p>
                <span>Graphic designer</span>
              </div>
            </div>
            <div>
              <img src={image2} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
