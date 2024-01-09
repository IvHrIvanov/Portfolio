import NodeJsImg from "../../../assets/TechStack/NodeJSIMG.png";
import React from "../../../assets/TechStack/ReactIMG.png";
import Csharp from "../../../assets/TechStack/CsharpIMG.png";
import Tailwind from "../../../assets/TechStack/TailwindIMG.png";
import TypeScript from "../../../assets/TechStack/TypeScriptIMG.png";
import RenderImages from "../../renderImages/renderImages";
import { IMAGE_STYLING } from "../../../constans/styleConstans";
export default function TechStack() {
  const imgArray = [NodeJsImg, React, Csharp, Tailwind, TypeScript];
  const width = 100;
  const height = 100;
  return (
    <div className="w-full min-h-screen ">
      <div className="w-full h-fit flex justify-end items-end text-3xl ">
        <h1 className="h-fit w-fit mt-5 underline underline-offset-[15px] mr-10 dark:text-white">
          TECH STACK
        </h1>
      </div>
      <div className="w-full flex items-center justify-center flex-col mt-10">
        <div className="carousel w-2/5 h-[150px] group">
          <div className="w-full flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_1,_black_100px,_black_calc(100%-100px),transparent_100%)]">
            <ul className="flex items-center p-2 justify-center md:justify-start [&_li]:mx-4 [&_img]:max-w-none animate-infinite-scroll">
              <RenderImages
                arrayOfImages={imgArray}
                width={width}
                height={height}
                imageStyling={IMAGE_STYLING}
              />
            </ul>
            <ul className="flex items-center p-2 justify-center md:justify-start [&_li]:mx-4 [&_img]:max-w-none animate-infinite-scroll">
              <RenderImages
                arrayOfImages={imgArray}
                width={width}
                height={height}
                imageStyling={IMAGE_STYLING}
              />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
