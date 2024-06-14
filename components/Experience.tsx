"use client"
import { jobDetailsData } from "@/data";
import { Reveal } from "./ui/Reveal";
import  React  from "react"
import TechStackButton from "./TechStackButton";

interface JobDetails {
    id: number, 
    startDate: string,
    endDate: string,
    companyName: string,
    jobTitle: string,
    jobDescription?: string,
    techStack?: {point: string, id: number}[],
    companyImage?: string,
    companyLink?: string
}


export function TechStack( { techStack = [] } : { techStack : JobDetails["techStack"] } ) {
    return (
        <div className="flex gap-2 flex-wrap">
            {techStack.map((tech) => (
                <React.Fragment key={tech.id}>
                    <TechStackButton tech={tech.point} />
                </React.Fragment>
            ))}
        </div>
    )
}

function JobBox( { jobDetails } : { jobDetails : JobDetails }) { 
    const boxDesign = "rounded-2xl border-2 shadow-xl p-4 flex flex-col justify-center gap-2"
    const imageStyles = "w-10 h-10 transform transition duration-500 hover:scale-125 cursor-pointer"
    const headerStyles = "flex items-center gap-3"

    const { startDate, endDate, companyName, jobTitle, jobDescription, techStack, companyImage, companyLink } = jobDetails;

    return (
        <div className={`${boxDesign}`}>
            <div className={headerStyles} >
                <a href={companyLink} target="_blank">
                    <img src={companyImage} className={imageStyles} />
                </a>
                <div className="text-xl font-bold">{companyName}</div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between">
                <div className="italic font-light">{jobTitle}</div> 
                <div className="italic font-light text-s">{startDate}<span>&nbsp;-&nbsp;</span>{endDate}</div>
            </div>
            <div>
                {jobDescription}
            </div>
            <TechStack techStack={techStack} />
        </div>
    )
}


export default function Experience() { 
    const hrStyle = "bg-my-purple/[0.2] my-2 h-0.5"
    return (
        <div className="flex justify-center items-center mx-5">
            <div className="max-w-7xl w-full sm:w-[1200px]">
                <Reveal>
                <h1 className="text-2xl sm:text-5xl font-extrabold" id="experiences">Experiences</h1>
                </Reveal>
                <div className="flex flex-col gap-4">
                    <Reveal>
                        <hr className={hrStyle} />
                    </Reveal>
                    {jobDetailsData.map((job) => (
                      <Reveal key={job.id}>
                        <div className="flex flex-col gap-4">
                            <JobBox jobDetails={job} key={job.id} />
                            <hr className={hrStyle} />
                        </div>
                      </Reveal>
                    ))}
                </div>
            </div>
        </div>
    )
}
