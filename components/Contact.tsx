"use client";
import Link from "next/link";
import { Github, Linkedin, Email } from "./Icons";
import { useContext, useState } from "react";
import { createContext } from "react";
import { Reveal } from "./ui/Reveal";

export const HoverContext = createContext(false);

export function ContactBorder({
  children,
  href,
}: {
  children: React.ReactNode;
  href?: string;
}) {
  const [isHover, setIsHover] = useState(false);

  return (
    <HoverContext.Provider value={isHover}>
      <a href={href} target="_blank">
        <div
          className={`flex justify-center items-center w-10 h-10 border-2 border-white rounded-full transition duration-500 hover:scale-110 cursor-pointer ${
            isHover ? "bg-white" : ""
          }`}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          {children}
        </div>
      </a>
    </HoverContext.Provider>
  );
}

export default function Contact() {
  return (
    <Reveal>
      <div className="bg-my-purple text-white flex justify-center items-center pt-8 mt-10">
        <div className="flex flex-col mb-20 items-center justify-center gap-5">
          <div className="w-[100px] h-[100px] relative -top-20 rounded-full bg-my-purple border-white border-4 p-6 transition duration-500 hover:scale-110 cursor-pointer">
            <Link href="/">
              <img src="/logo.svg" className="object-contain" />
            </Link>
          </div>
          <div className="relative -top-10 text-3xl text-3xl text-3xl text-3xl font-extrabold" id="contact">
            Let&apos;s keep in touch!
          </div>
          <div className="flex justify-content items-center gap-10">
            <ContactBorder href="https://github.com/pangrwa">
              <Github className="h-6 w-8" hoverFill="#8C52FF" />
            </ContactBorder>
            <ContactBorder href="https://www.linkedin.com/in/pang-rui-wei-a94940143/">
              <Linkedin className="h-6 w-6" hoverFill="#8C52FF" />
            </ContactBorder>
            <ContactBorder href="mailto:ruiwei.pang@u.nus.edu">
              <Email className="h-6 w-6" hoverFill="#8C52FF" />
            </ContactBorder>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
