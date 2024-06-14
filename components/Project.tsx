"use client"
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";
import { projectData } from "@/data";
import { Reveal } from "./ui/Reveal";
import { TechStack } from "./Experience";
import TechStackButton from "./TechStackButton";

export default function Project() {
  return (
    <div className="flex justify-center items-center mx-5 my-10">
      <div className="max-w-7xl w-full sm:w-[1200px]">
        <Reveal>
          <h1 className="text-2xl sm:text-5xl font-extrabold" id="projects">Projects</h1>
        </Reveal>
        <BentoGrid className=" gap-10 my-10">
          {projectData.map((item) => (
            <Reveal key={item.id} >
            <CardContainer  className="inter-var w-full h-full">
              <CardBody className="bg-gray-50 relative group/card border-my-purple/[0.2]   rounded-xl border-2 w-full h-full p-4">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600"
                >
                  {item.projectName}
                </CardItem>

                <div className="flex justify-center items-center">
                  <CardItem translateZ="100" className="mt-4 self-center">
                    <a href={item.projectLink} target="_blank">
                      <img
                        src={item.projectImage}
                        className="h-52 md:w-96 object-cover object-[0,0] rounded-xl group-hover/card:shadow-xl"
                        alt="thumbnail"
                      />
                    </a>
                  </CardItem>
                </div>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 h-16"
                >
                  {item.projectDescription}
                </CardItem>

                <div className="pt-5 flex justify-between items-center ">
                  <div className="flex flex-wrap gap-1">
                    {item.techStack.map((tech) => (
                      <CardItem key={tech.id} translateZ="100">
                        <TechStackButton tech={tech.point} />
                      </CardItem>
                    ))}
                  </div>
                  <CardItem
                    translateZ={20}
                    as="button"
                    className=""
                  >
                    <a href={item.githubLink} target="_blank">
                      <img src="/tech-stack/github-original.svg"
                        className="h-8 w-8"
                      />
                    </a>
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
            </Reveal>
          ))}
        </BentoGrid>
      </div>
    </div>
  );
}
