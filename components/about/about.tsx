import Image from "next/image";
import MyPicture from "../../assets/MyPicture.png";
import React from "react";

export default function AboutMe() {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="w-full flex flex-col justify-center items-center text-6xl">
        <h1 className="h-fit w-fit mt-10">ABOUT</h1>
        <span className="flex justify-center h-fit w-fit">‾‾‾‾‾</span>
      </div>
      <div className="hero min-h-screen w-full flex items-start justify-center">
        <div className="hero-content lg:flex-row w-fit flex items-center justify-center">
          <div className="w-56 h-56 overflow-hidden rounded-full mask mask-hexagon">
            <Image
              src={MyPicture.src}
              alt="My Picture"
              width={1920}
              height={1080}
              className="object-fill -rotate-[25deg] scale-125"
            />
          </div>

          <div className="w-5/12 h-fit">
            <h1 className="text-5xl font-bold w-full">Who am i!</h1>
            <p className="py-6 w-full">
              I`m a Full Stack Developer for eValue in Bulgaria. I have a
              serious passion for developer skill, building and creating
              intuitive, dynamic sites. Let`s make something special.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
