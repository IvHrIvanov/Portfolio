import Image from "next/image";
import MyPicture from "../../assets/MyProfilePicture.png";
import React, { useEffect, useState } from "react";

export default function AboutMe() {
  const [isOnPosition, setIsOnPosition] = useState<boolean>(false);

  const scrollHeader = () => {
    if (window.scrollY >= 100) {
      setIsOnPosition(true);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollHeader);
    return () => {
      window.addEventListener("scroll", scrollHeader);
    };
  }, []);
  const [opacity, setOpacity] = useState<number>(0);

  useEffect(() => {
    const fadeInDuration = 3000;

    if (isOnPosition) {
      let startTime: number;

      const animate = (timestamp: number) => {
        if (!startTime) {
          startTime = timestamp;
        }

        const progress = timestamp - startTime;
        const calculatedOpacity = Math.min(progress / fadeInDuration, 1);

        setOpacity(calculatedOpacity);

        if (progress < fadeInDuration) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isOnPosition]);
  useEffect(() => {
    scrollHeader();
  }, []);
  return (
    <div className="w-full h-full flex flex-col">
      <div className="w-full h-fit flex justify-end items-end text-3xl">
        <h1 className="h-fit w-fit mt-5 underline underline-offset-[15px] mr-10">
          ABOUT
        </h1>
      </div>
      {isOnPosition && (
        <div className="min-h-screen w-full flex items-center justify-center flex-col">
          <div
            className="flex items-center justify-center w-full h-full"
            style={{ opacity: opacity }}
          >
            <div className="w-96 h-fit overflow-hidden rounded-md shadow-xl">
              <Image
                src={MyPicture.src}
                alt="My Picture"
                width={1920}
                height={1080}
              />
            </div>

            <div className="w-4/12 h-fit mx-4">
              <p className="py-6 w-full text-2xl">
                Hello! I`m Ivan Ivanov, a Full Stack Developer at eValue in
                Bulgaria and I`m a freelancer. Passionate about crafting dynamic
                sites, I specialize in React and Node.js for seamless frontend
                and backend development. I`m also well-versed in C#, .NET, and
                TypeScript, with a knack for using Next.js for server-side
                rendering. Driven by a passion for developer skill, I thrive on
                building intuitive web experiences. Each project is an
                opportunity to fuse innovation and functionality into a digital
                masterpiece. Let`s collaborate and create something special!
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
