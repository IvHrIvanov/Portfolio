"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import DeskImg from "../../assets/DeskImg.png";
import TypingAnimation from "./TypingAnimation";
import NavBar from "./navBar";
import Arrow from "../../assets/arrow.svg";
import { ParallaxBanner, ParallaxProvider } from "react-scroll-parallax";

export const MainHeader: React.FC = () => {
  return (
    <ParallaxProvider>
      <header className="relative w-full h-[100dvh] flex justify-start items-start overflow-hidden">
        <div className="w-full h-full relative flex justify-center items-center flex-col">
          <NavBar />
          <div className="w-fit h-fit flex flex-col gap-7 items-center justify-center z-10">
            <p className="z-10 text-4xl text-white text-center outline-2 p-2 outline">
              Hello, I`m <span className="text-nameColor">Ivan Ivanov</span>
              <br />
              Full Stack Web Developer
            </p>
            <button className="z-10 bg-cyan-50 bg-opacity-25 group relative flex flex-row justify-evenly items-center gap-3 w-fit p-5 h-14 text-xl border-2 text-white hover:bg-cyan-500 hover:ease-in-out hover:border-cyan-500 hover:duration-1000 duration-500">
              Check my work
              <Image
                src={Arrow.src}
                alt="Desk image"
                width="20"
                height="20"
                className="group-hover:rotate-90 group-hover:duration-700 group-hover:ease-in-out duration-300"
              />
            </button>
          </div>
          <div className="absolute w-full h-full top-0 mt-4">
            <ParallaxBanner
              layers={[
                {
                  image: DeskImg.src,
                  speed: -20,
                },
              ]}
              className="aspect-[2/1]"
            />
          </div>
          {/* <TypingAnimation /> */}
        </div>
      </header>
    </ParallaxProvider>
  );
};
export default MainHeader;
