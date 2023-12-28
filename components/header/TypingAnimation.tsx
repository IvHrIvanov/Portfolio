"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";

export default function TypingAnimation() {
  return (
    <TypeAnimation
      sequence={[
        "Passionate about crafting digital experiences",
        1500,
        "I love taking on new coding adventures",
        1500,
        "My code is so clean, it makes my laundry jealous 😄",
        1500,
      ]}
      wrapper="span"
      speed={50}
      preRenderFirstString={false}
      className={
        "text-xl inline-block text-white rounded-xl z-50 bg-black bg-opacity-70 px-2 py-1"
      }
      repeat={Infinity}
    />
  );
}
