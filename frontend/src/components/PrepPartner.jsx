import { images } from "../constants/images";
import HeadPart from "./HeadPart";
import Animate from "./Animate";

function Label({ labels }) {
    return (
        <div className="flex flex-wrap gap-5 max-w-md justify-center sm:justify-start mx-auto sm:mx-0">
            {labels.map((text, idx) => (
                <div
                    key={idx}
                    className="py-2 px-4 text-white font-medium bg-red-400 rounded-full border border-gray-300"
                >
                    {text}
                </div>
            ))}
        </div>
    );
}

function BottomPart({
    h3,
    p,
    img,
    labels,
    alignImg,
}) {
    return (
        <Animate>
            <div
                className={`flex flex-col sm:gap-24 sm:items-center ${alignImg === "right" ? "sm:flex-row-reverse" : "sm:flex-row"
                    }`}
            >
                <img src={img} alt="" className={`h-96 ${alignImg === 'right' ? "slide-right" : "slide-left"} duration-75`} />
                <div className="mt-6 sm:mt-0 text-center sm:text-start p-2">
                    <h3 className="text-cyan-600 text-xl font-family-abril-fatface">
                        {h3}
                    </h3>
                    <p className="my-4 leading-6">{p}</p>
                    <Label labels={labels} />
                </div>
            </div>
        </Animate>
    );
}

export default function PrepPartner() {
    const contents = [
        {
            h2: "Your Complete Placement Preparation Partner",
            p: "Designed exclusively for KMPM BCA students to guide you from first year to final placement",
        },
        {
            h3: "Who We Serve",
            p: "KMPM CampusPrep is built specifically for BCA students at KMPM College, from 1st year through final year.We understand your journey and provide tailored guidance at every step of your academic and placement preparation.",
            lables: [
                "KMPM BCA Students",
                "1st Year",
                "2nd Year",
                "3rd Year",
                "Final Year",
            ],
        },
        {
            h3: "Our Mission",
            p: "To provide KMPM BCA students with a complete learning and placement preparation platform that guides them from their first year to final year with clear roadmaps, useful resources, and  AI-powered practice interviews. We help students build confidence, improve their skills, and successfully land their dream jobs.",
            lables: [
                "English & Hinglish Support",
                "Voice-Based Practice",
                "Instant Feedback",
                "Progress Tracking",
            ],
        },
    ];

    return (
        <section className="mx-4 sm:mx-20">

            <HeadPart h2={contents[0].h2} p={contents[0].p} maxWh2="max-w-xl mx-auto" />
            <BottomPart
                img={images.light.weServe}
                h3={contents[1].h3}
                p={contents[1].p}
                labels={contents[1].lables}
                alignImg="left"
            />
            <BottomPart
                img={images.light.ourMission}
                h3={contents[2].h3}
                p={contents[2].p}
                labels={contents[2].lables}
                alignImg="right"
            />
        </section>
    );
}
