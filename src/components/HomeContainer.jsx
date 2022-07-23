import React from "react";
import Bike from "../img/delivery.png";
import HeroBg from "../img/heroBg.png";
import { motion } from "framer-motion";
import { heroData } from "../utils/data";

const HomeContainer = () => {
  return (
    <section
      className="grid  bg-primary grid-cols-1 md:grid-cols-2 gap-2 h-[calc()]"
      id="home"
    >
      <div className="py-2 flex-1 flex flex-col items-start sm:justify-center gap-6">
        <div className="flex flex-row items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full ">
          <p className="text-base text-orange-500 font-semibold">
            Bike delivery
          </p>
          <div className="w-8 h-8 rounded-full bg-white drop-shadow-2xl overflow-hidden">
            <img
              initial={{ opacity: 0, x: -400 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 200 }}
              src={Bike}
              className="w-full h-full object-contain"
              alt="Bike"
            />
          </div>
        </div>
        <p className="text-[2.5rem]  lg:text-[3rem] font-bold font- tracking-wider text-cartBg">
          The fastest delivery in{" "}
          <span className="text-orange-500 text-[3rem] lg:text-[4.5rem] font-extrabold">
            Your City
          </span>
        </p>
        <p className="text-textColor text-center md:text-left lg:w-[80%]">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima
          obcaecati quae sit at officiis neque eos aut sequi sunt non nemo eius
          deserunt fuga repudiandae officia, in dolorum aspernatur sed.
        </p>
        <button
          type="button"
          className="bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2 text-white rounded-lg hover:shadow-2xl hover:translate-y-1 transition-all ease-in-out duration-100"
        >
          Order Now
        </button>
      </div>
      <div className="py-2 flex-1 items-center relative">
          <img
            src={HeroBg}
            className="ml-auto h-[580px] w-full lg:w-auto lg:h-[585px]"
            alt="hero-bg"
          />
          <div className="w-full h-full absolute  top-0 left-0 flex items-center justify-center px-32 py-4 gap-5 flex-wrap overflow-y-hidden overflow-x-hidden">
            {heroData && heroData.map(n=>(<div
            key={n.id}
            className="w-150 p-4 my-3 bg-cardLayout backdrop-blur-md rounded-md flex flex-col items-center hover:scale-105 transition-all ease-in-out duration-100 ">
                <img src={n.img} className="w-35 -mt-20" alt="" />
                <p className="text-sm font-extrabold text-[72%]">{n.name}</p>
                <p className="text-sm font-medium text-[72%] text-gray-500 my-1 text-center">{n.description}</p>
                <p className="text-sm font-semibold"><span className="text- text-red-500">$</span>{n.price}</p>
            </div>))}
          </div>  
      </div>
    </section>
  );
};

export default HomeContainer;
