
export default function Hero() { 

    return (
        <div className="w-full flex justify-center items-center">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-5 mt-20 p-3 w-full max-w-7xl mx-5">
                <div className="flex flex-col gap-3 justify-between">
                    <h1 className="text-2xl sm:text-5xl font-extrabold text-center">Aspiring Full Stack Engineer</h1>
                    <div className="text-lg sm:text-2xl text-center">I design and code beautiful simple things, and I love solving problems.</div>
                </div>
                <img src="/profile.svg"
                    className="w-52 h-52 rounded-full 
                    cursor-pointer transform transition duration-500 hover:scale-110"
                />
            </div>
        </div>
    )
}
