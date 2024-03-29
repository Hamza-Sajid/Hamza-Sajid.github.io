import React from "react";
import P1 from "../assets/p1.jpg";
import P2 from "../assets/p2.jpg";
import P3 from "../assets/P3.jpg";

function Projects() {
  return (
    <div className="w-4/5 m-auto p-6 mt-16">
      <h2 className="  font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-blue-900 via-gray-200">
        Few Project Showcase
      </h2>

      {/* PROJECTS LIST */}

      <div className="flex flex-wrap">
        <div>
          <a href="https://github.com/Hamza-Sajid/ApniDukan-E-commerece-Store">
            <img src={P1} width="500" alt="" className="" />
            <p className="text-xl relative -top-6 sm:-top-10 text-gray-700 normal_font text-center">
              E-commerce Store
            </p>
          </a>
        </div>

        <div>
          <a href="https://github.com/Hamza-Sajid/Resume-Generator">
            <img src={P2} width="500" alt="" />
            <p className="text-xl -top-6 sm:-top-10 text-gray-700 normal_font text-center">
              Resume Generator
            </p>
          </a>
        </div>

        <div>
          <a href="https://github.com/Hamza-Sajid/Smart-Cruiter-FYP">
            <img src={P3} width="500" alt="" />
            <p className="text-xl relative sm:-top-10 -top-1 text-gray-700 normal_font text-center">
              Smart Cruiter (FYP)
            </p>
          </a>
        </div>

        <div className="mt-16 sm:ml-16 -ml-6">
          <a href="https://github.com/Hamza-Sajid?tab=repositories">
            <div className="w-72 p-12 ">
              <h2
                className="hover:border-b-2 border-gray-700 
              
              transition ease-in-out delay-200 bg-blue-500 hover:-translate-y-8 hover:scale-110 hover:bg-indigo-500 duration-300 
              font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-gray-900 via-blue-200"
              >
                VIEW MORE++
              </h2>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
