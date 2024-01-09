import ChallengemeProject from "../../assets/ChallengemeProject.png";
import RecordsChallengeme from "../../assets/RecordsChallengeme.png";
import MyPortfolio from "../../assets/MyPortfolio.png";
import TechStack from "./TechStack/TechStack";
import RenderImages from "../renderImages/renderImages";
import { IMAGE_STYLING } from "../../constans/styleConstans";
export default function Projects() {
  const imgArray = [ChallengemeProject, RecordsChallengeme, MyPortfolio];
  const width = 720;
  const height = 720;

  return (
    <div className="w-full min-h-screen">
      <div className="w-full h-fit flex justify-end items-end text-3xl">
        <h1 className="h-fit w-fit mt-5 underline underline-offset-[15px] mr-10 dark:text-white">
          PROJECTS
        </h1>
      </div>
      <div className="w-full flex items-center justify-center flex-col mt-10">
        <div className="carousel rounded-box w-10/12 h-4/6">
          <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_1,_black_100px,_black_calc(100%-100px),transparent_100%)]">
            <ul className="flex items-center  justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
              <RenderImages
                arrayOfImages={imgArray}
                width={width}
                height={height}
                imageStyling={IMAGE_STYLING}
              />
            </ul>
            <ul
              className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
              aria-hidden="true"
            >
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
      <TechStack />
    </div>
  );
}
