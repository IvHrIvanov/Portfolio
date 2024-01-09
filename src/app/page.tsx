"use client";
import AboutMe from "../../components/about/about";
import { ParallaxProvider } from "react-scroll-parallax";
import Projects from "../../components/porjects/projects";

export default function Home() {
  return (
    <ParallaxProvider scrollAxis="vertical">
      <div className="w-full h-full items-center justify-center flex flex-col dark:bg-black">
        <AboutMe />
        <Projects />
      </div>
    </ParallaxProvider>
  );
}
