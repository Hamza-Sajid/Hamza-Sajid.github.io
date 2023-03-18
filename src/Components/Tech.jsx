import React from "react";
import Curve from "../assets/curve.svg";
import JSLogo from "../assets/js.png";
import ReactLogo from "../assets/React.png";
import Node from "../assets/node.png";
import Mongo from "../assets/mongo.png";
import Figma from "../assets/fig.png";
function Tech() {
  return (
    <div>
      <h2 className=" text-center font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-gray-900 to-gray-300">
        Tools i work with
      </h2>

      <div className="w-3/4 m-auto flex flex-wrap justify-around mt-10">
        <div className="inline">
          <img
            width={120}
            className="rounded-xl inline
            sm:w-28 
          cursor-pointer
          transform hover:scale-150 hover:rotate-12 hover: transition duration-700 ease-in-out  py-2 px-4           "
            src={JSLogo}
            alt=""
          />
        </div>

        <div className="inline relative top-14">
          <img
            width={120}
            className="rounded-xl inline cursor-pointer
            transform hover:scale-150 hover:rotate-12 hover: transition duration-700 ease-in-out  py-2 px-4                      "
            src={ReactLogo}
            alt=""
          />
        </div>

        <div className="inline">
          <img
            width={120}
            className="rounded-xl inline cursor-pointer
            transform hover:scale-150 hover:rotate-12 hover: transition duration-700 ease-in-out  py-2 px-4           "
            src={Node}
            alt=""
          />
        </div>

        <div className="inline relative top-14">
          <img
            width={190}
            className="rounded-xl inline cursor-pointer
          transform hover:scale-150 hover:rotate-12 hover: transition duration-700 ease-in-out  py-2 px-4           
          "
            src={Mongo}
            alt=""
          />
        </div>

        <div className="inline">
          <img
            width={120}
            className="rounded-xl cursor-pointer inline transform hover:scale-150 hover:rotate-12 hover: transition duration-700 ease-in-out  py-2 px-4           "
            src={Figma}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Tech;
