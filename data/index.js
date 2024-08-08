export const navBarItems = [
    { name: "Home", id: 1, link: "/"}, 
    { name: "Experiences", id: 2, link: "#experiences" },
    { name: "Projects", id: 3, link: "#projects"}, 
    { name: "Contact", id: 4, link: "#contact" }
]
  
export const jobDetailsData = [
    {
        id: 1,
        startDate: "Aug 2023",
        endDate: "Dec 2023",
        companyName: "Coinhako",
        jobTitle: "Software Engineer Intern",
        jobDescription: "Part of the Trading Desk Team where I worked with Relational Managers and Traders to develop features that are required from them.",
        techStack: [
            {
                point: "Go",
                id: 1,
            },
            {
                point: "Python",
                id: 2
            },
            {
                point: "Ruby on Rails",
                id: 3
            },
            {
                point: "PostgreSQL",
                id: 4
            },
            {
                point: "Redis",
                id: 5
            },
        ],
        companyImage: "/companies/coinhako-original.png",
        companyLink: "https://www.coinhako.com/"
    },
    {
        id: 2,
        startDate: "May 2023",
        endDate: "July 2023",
        companyName: "Switcheo Labs",
        jobTitle: "Software Engineer Intern",
        jobDescription: "Part of the backend team where I worked on maintaining and developing features related to our core blockchain services.",
        techStack: [
            {
                point: "Go",
                id: 1,
            },
            {
                point: "TypeScript",
                id: 2
            },
            {
                point: "PostgreSQL",
                id: 3
            }
        ],
        companyImage: "/companies/switcheo-labs-original.png",
        companyLink: "https://www.switcheo.com/"
    },
    {
        id: 3,
        startDate: "Jan 2023",
        endDate: "Nov 2023",
        companyName: "NUS School of Computing",
        jobTitle: "Teaching Assistant",
        jobDescription: "Assisted in the teaching of CS1010S, CS1010A (Programming Methodology) and CS2103T (Software Engineering).",
        techStack: [
            {
                point: "Python",
                id: 1
            },
            {
                point: "Java",
                id: 2
            },
            {
                point: "UML Diagrams",
                id: 3
            }
        ],
        companyImage: "/companies/nus-original.png",
        companyLink: "https://www.comp.nus.edu.sg/"
    } 

]

export const projectData = [
    {
        id: 6,
        projectName: "JSON Parser",
        projectDescription: "A JSON Parser that parses inputs to check if it is a valid JSON and to format it.",
        techStack: [
            {
                id: 1,
                point: "Python"
            }, 
            {
                id: 2,
                point: "React"
            },
            {
                id: 3,
                point: "AWS" 
            }
        ],
        projectImage: "/projects/json-parser.png",
        projectLink: "https://main.d1scyhyot6rdm4.amplifyapp.com/",
        githubLink: "https://pangrwa.github.io/bob-the-builder/cc-fyi/json-parser/"
    },
    {
        id: 1, 
        projectName: "TinyTrace",
        projectDescription: "A URL shortener service.",
        techStack: [
            {
                id: 1,
                point: "React"
            },
            {
                id: 2, 
                point: "Bootstrap"
            },
            {
                id: 3,
                point: "Spring Boot"
            },
            {
                id: 4,
                point: "MongoDb"
            }
        ],
        projectImage: "/projects/tinytrace.png",
        projectLink: "https://pangrwa.github.io/TinyTrace/",
        githubLink: "https://github.com/pangrwa/TinyTrace"
    },
    {
        id: 2,
        projectName: "Advisio", 
        projectDescription: "Advis.io (AIO) is a all-in-one solution for financial advisors with problems managing their clientele." ,
        techStack: [
            {
                id: 1,
                point: "Java"
            },
            {
                id: 2,
                point: "JavaFx"
            },
            {
                id: 3,
                point: "JUnit"
            }
        ],
        projectImage: "/projects/advisio.png",
        projectLink: "https://ay2223s2-cs2103t-t09-4.github.io/tp/",
        githubLink: "https://github.com/pangrwa/Advisio"
    },
    {
        id: 3,
        projectName: "Alfred",
        projectDescription: "Alfred is a desktop application that has a personal assistant named Alfred to help users keep track of various things such as deadlines.",
        techStack: [
            {
                id: 1,
                point: "Java"
            },
            {
                id: 2,
                point: "JavaFx"
            },
            {
                id: 3,
                point: "JUnit"
            }
        ],
        projectImage: "/projects/alfred.png",
        projectLink: "https://pangrwa.github.io/Alfred/",
        githubLink: "https://github.com/pangrwa/Alfred"
    },
    {
        id: 4,
        projectName: "Mindcue",
        projectDescription: "A note taking application that supports Markdown.",
        techStack: [
            {
                id: 1,
                point: "TypeScript"
            },
            {
                id: 2,
                point: "React"
            },
            {
                id: 3,
                point: "Bootstrap"
            }
        ],
        projectImage: "/projects/mindcue.png",
        projectLink: "https://pangrwa.github.io/Mindcue/",
        githubLink: "https://github.com/pangrwa/Mindcue"
    },
    {
        id: 5,
        projectName: "Wintry",
        projectDescription: "A weather application.",
        techStack: [
            {
                id: 1,
                point: "JavaScript"
            },
            {
                id: 2,
                point: "HTML"
            },
            {
                id: 3,
                point: "CSS"
            }
        ],
        projectImage: "/projects/wintry.png",
        projectLink: "https://pangrwa.github.io/Wintry/",
        githubLink: "https://github.com/pangrwa/Wintry"
    }
]
