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

export default function Project() {
  return (
    <div className="flex justify-center items-center mx-5 my-10">
      <div className="max-w-7xl w-full sm:w-[1200px]">
        <h1 className="text-3xl font-extrabold" id="projects">Projects</h1>
        <BentoGrid className=" gap-10 my-10">
          {projectData.map((item) => (
            <CardContainer key={item.id} className="inter-var w-full h-full">
              <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-my-purple/[0.2]   rounded-xl border-2 w-full h-full p-4">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white"
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
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 h-16"
                >
                  {item.projectDescription}
                </CardItem>

                <div className="pt-5 flex justify-end items-center ">
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
          ))}
        </BentoGrid>
      </div>
    </div>
  );
}
