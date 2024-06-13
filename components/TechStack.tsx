export default function TechStack() {
    const iconStyles = "w-10 h-10 sm:w-14 sm:h-14 transform transition duration-500 hover:scale-125 cursor-pointer"
    const headerStyles = "text-xl font-bold" 
    const iconGroupStyles = "flex justify-center items-center flex-wrap items-center gap-7 m-3"

    return (
        <div className="flex justify-center mx-5">
            <div className="relative -top-16 bg-white sm:w-[1200px] rounded-3xl p-3 text-center flex flex-col gap-5 shadow-xl">
                <div className="flex flex-col gap-3">
                    <p className={`${headerStyles}`}>Programming Languages</p>
                    <div className={`${iconGroupStyles}`}>
                        <img src="/tech-stack/java-original.svg" className={`${iconStyles}`}/>
                        <img src="/tech-stack/python-original.svg" className={`${iconStyles}`}/>
                        <img src="/tech-stack/javascript-original.svg" className={`${iconStyles}`}/>
                        <img src="/tech-stack/typescript-original.svg" className={`${iconStyles}`}/>
                        <img src="/tech-stack/go-original.svg" className={`${iconStyles}`}/>
                        <img src="/tech-stack/cplusplus-original.svg" className={`${iconStyles}`}/>
                        <img src="/tech-stack/c-original.svg" className={`${iconStyles}`}/>
                        <img src="/tech-stack/ruby-original.svg" className={`${iconStyles}`}/>
                    </div>
                </div>

                <div>
                    <p className={`${headerStyles}`}>Libraries | Frameworks</p>
                    <div className={`${iconGroupStyles}`}>
                        <img src="/tech-stack/react-original.svg" className={`${iconStyles}`} />
                        <img src="/tech-stack/nextjs-original.svg" className={`${iconStyles}`} />
                        <img src="/tech-stack/express-original.svg" className={`${iconStyles}`} />
                        <img src="/tech-stack/angular-original.svg" className={`${iconStyles}`} />
                        <img src="/tech-stack/nodejs-original-wordmark.svg" className={`${iconStyles}`} />
                        <img src="/tech-stack/spring-original.svg" className={`${iconStyles}`} />
                        <img src="/tech-stack/bootstrap-original.svg" className={`${iconStyles}`} />
                        <img src="/tech-stack/tailwindcss-original.svg" className={`${iconStyles}`} />
                    </div>
                </div>

                <div>
                    <p className={`${headerStyles}`}>Databases</p>
                    <div className={`${iconGroupStyles}`}>
                        <img src="/tech-stack/postgresql-original.svg" className={`${iconStyles}`} />
                        <img src="/tech-stack/mysql-original.svg" className={`${iconStyles}`} />
                        <img src="/tech-stack/mongodb-original.svg" className={`${iconStyles}`} />
                        <img src="/tech-stack/redis-original.svg" className={`${iconStyles}`} />
                    </div>
                </div>

                <div>
                    <p className={`${headerStyles}`}>Tools | Misc </p>
                    <div className={`${iconGroupStyles}`}>
                        <img src="/tech-stack/git-original.svg" className={`${iconStyles}`} />
                        <img src="/tech-stack/github-original.svg" className={`${iconStyles}`} />
                        <img src="/tech-stack/docker-original.svg" className={`${iconStyles}`} />
                        <img src="/tech-stack/amazonwebservices-original-wordmark.svg" className={`${iconStyles}`} />
                        <img src="/tech-stack/jira-original.svg" className={`${iconStyles}`} />
                    </div>
                </div>
            </div>
        </div>
    )
} 
