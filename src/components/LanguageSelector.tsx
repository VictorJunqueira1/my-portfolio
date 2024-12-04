import Image from "next/image";

type LanguageSelectorProps = {
    activeCategory: string;
    setActiveCategory: (category: string) => void;
};

const LanguageSelector = ({ activeCategory, setActiveCategory }: LanguageSelectorProps) => {
    const languages = [
        {
            name: "JavaScript (Front-End)",
            svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
            color: "ring-yellow-400 dark:ring-yellow-600 peer-checked:bg-yellow-300 duration-500 transition-all ease-in-out",
        },
        {
            name: "JavaScript (Back-End)",
            svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
            color: "ring-green-600 peer-checked:bg-green-800 duration-500 transition-all ease-in-out",
        },
        {
            name: "Python",
            svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
            color: "ring-blue-600 peer-checked:bg-blue-800 duration-500 transition-all ease-in-out",
        },
        {
            name: "C#",
            svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
            color: "ring-purple-600 peer-checked:bg-purple-500 duration-500 transition-all ease-in-out",
        },
    ];

    return (
        <div className="flex flex-col items-center gap-6 p-6 w-full">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 items-center gap-6 md:gap-8">
                {languages.map((lang) => (
                    <div
                        key={lang.name}
                        className="relative flex h-[70px] w-[70px] sm:h-[80px] sm:w-[80px] items-center justify-center group"
                        title={lang.name}
                    >
                        <input
                            type="radio"
                            name="language"
                            value={lang.name}
                            id={lang.name}
                            className="peer z-10 h-full w-full cursor-pointer opacity-0"
                            checked={activeCategory === lang.name}
                            onChange={() => setActiveCategory(lang.name)}
                        />
                        <div
                            className={`absolute h-full w-full rounded-full p-4 shadow-sm shadow-[#00000050] ring-2 transition-transform duration-300 peer-checked:scale-110 ${lang.color}`}
                        ></div>
                        <Image
                            width={1}
                            height={1}
                            src={lang.svg}
                            alt={lang.name}
                            className="absolute h-8 w-8 sm:h-10 sm:w-10 peer-checked:scale-125 transition-transform duration-100"
                        />
                    </div>
                ))}
            </div>
            {activeCategory && (
                <div className="flex flex-col md:flex-row text-lg font-semibold text-zinc-700 self-center">
                    <span>Linguagem Selecionada:</span>
                    <span
                        className={`md:ml-2
                            ${activeCategory.includes("JavaScript (Front-End)") ? "text-yellow-500" : ""}
                            ${activeCategory.includes("JavaScript (Back-End)") ? "text-green-500" : ""}
                            ${activeCategory.includes("Python") ? "text-blue-500" : ""}
                            ${activeCategory.includes("C#") ? "text-purple-500" : ""}
                        `}
                    >
                        {activeCategory}
                    </span>
                </div>
            )}
        </div>
    );
};

export default LanguageSelector;