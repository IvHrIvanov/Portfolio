"use client";
import AboutMe from "../../components/about/about";
import { ParallaxProvider } from "react-scroll-parallax";

export default function Home() {
  return (
    <ParallaxProvider scrollAxis="vertical">
      <div className="w-full h-full">
        <AboutMe />
      </div>
    </ParallaxProvider>
  );
}
