"use client";
import { Reveal } from "./ui/Reveal";
import {
  TypewriterEffectSmooth,
  TypewriterEffect,
} from "./ui/typewritter-effect";

const words = [
  {
    text: "Hey,",
    className:
      "text-black -purple text-lg base xs:text-2xl  md:text-5xl font-extrabold text-center",
  },
  {
    text: "I'm",
    className:
      "text-black text-lg xs:text-2xl md:text-5xl font-extrabold text-center",
  },
  {
    text: "Rui",
    className:
      "text-my-purple text-lg xs:text-2xl md:text-5xl font-extrabold text-center",
  },
  {
    text: "Wei",
    className:
      "text-my-purple text-lg xs:text-2xl md:text-5xl font-extrabold text-center",
  },
  {
    text: ".",
    className:
      "text-my-purple text-lg xs:text-2xl md:text-5xl font-extrabold text-center",
  },
];
export default function Hero() {
  return (
    <>
      <div className="w-full flex justify-center items-center">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-5 mt-20 p-3 w-full max-w-7xl mx-5">
          <div className="flex flex-col gap-3 justify-between items-center">
            <Reveal>
              {/* <h1 className="text-2xl sm:text-5xl font-extrabold text-center">
                  Aspiring Full Stack Engineer
                </h1> */}

              <TypewriterEffectSmooth words={words} />
            </Reveal>
            <Reveal>
              <div className="text-lg sm:text-2xl text-center">
                I code simple things, and I love solving problems.
              </div>
            </Reveal>
          </div>
          <Reveal>
            <img
              src="/profile.svg"
              className="w-52 h-52 rounded-full 
                             cursor-pointer transform transition duration-500 hover:scale-110"
            />
          </Reveal>
        </div>
      </div>
      <div className="w-full flex justify-center items-center ">
        <Reveal>
          <img
            src="/hero-design.svg"
            className="relative -bottom-32 sm:mt-10"
          />
        </Reveal>
      </div>
    </>
  );
}
