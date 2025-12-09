import { FaLinkedin, FaGithub } from "react-icons/fa";
import Animate from "./Animate";
import { useStore } from "@/constants/store";


export default function ContributerCard({
    image,
    name,
    position,
    description,
    linkedin,
    github,
}) {

    const { theme } = useStore();
    return (
        <Animate>
            <div className={`${theme === 'dark'? 'bg-black/60' : 'bg-white/60'} shadow-md shadow-gray-400 hover:shadow-lg rounded-xl w-full sm:w-70 p-5 flex flex-col items-center text-center gap-2 mx-auto sm:mx-4`}>
                <img
                    src={image}
                    alt={name}
                    className="w-28 h-28 rounded-full object-cover"
                />
                <h2 className="text-lg font-family-abril-fatface">{name}</h2>
                <p className="text-cyan-600 font-medium text-sm leading-5">{position}</p>
                <p className="text-xs leading-5">{description}</p>

                <div className="flex space-x-5 mt-2">
                    <a href={linkedin} target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="text-2xl text-cyan-600 transition-transform transform hover:scale-110" />
                    </a>
                    <a href={github} target="_blank" rel="noopener noreferrer">
                        <FaGithub className="text-2xl text-gray-600 transition-transform transform hover:scale-110" />
                    </a>
                </div>
            </div>
        </Animate>
    );
}
