"use client";
import { Reveal } from "./ui/Reveal";

export default function About() {

    return (
        <div className="bg-my-purple text-white flex justify-center pt-32 pb-28 mt-10">
            <Reveal>
            <div className="w-full max-w-2xl flex flex-col items-center justify-center gap-5 px-5">
                <h1 className="text-2xl sm:text-5xl font-extrabold text-center">About me.</h1>
                <p className="text-center">
                    I&apos;m currently a final year student at the National University of Singapore, majoring in Computer Science. I&apos;m passionate about software development and I&apos;m always looking for opportunities to learn and grow. 
                </p>
            </div>
            </Reveal>
        </div>
    )
}
