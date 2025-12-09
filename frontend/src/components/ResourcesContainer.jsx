import { images } from "../constants/images";
import Animate from "./Animate";

function Card({ h5, p, imgSrc }) {
  return (
    <Animate>
      <div className="bg-[#F9F9F9] shadow-sm shadow-gray-300 hover:shadow-lg hover:shadow-gray-400 hover:scale-105 transform transition-transform rounded-lg cursor-pointer">
        <img src={imgSrc} alt="image" className="" />
        <div className="text-white p-6 bg-gradient rounded-t-4xl rounded-b-lg h-40 shadow-sm shadow-teal-200">
          <h5 className="text-md leading-10 font-family-abril-fatface">{h5}</h5>
          <p className="font-medium leading-6 tracking-wide">{p}</p>
        </div>
      </div>
    </Animate>
  );
}

export default function ResourcesContainer() {
  const cards = [
    {
      h5: "Year Wise Roadmaps",
      p: "Clear guidance for all three years of BCA with structured learning paths, resources, and practice materials tailored to each year.",
      imgSrc: images.default.roadmaps,
    },
    {
      h5: "Internship & Job Opportunites",
      p: "Find the best opportunites here as per your skills.",
      imgSrc: images.default.internshipOppor,
    },
    {
      h5: "AI Mock Interview",
      p: "Practice with AI-powered mock interviews in English or Hinglish voice mode. Get comfortable and confident in your preferred language.",
      imgSrc: images.default.aiMockInterview,
    },
    {
      h5: "Complete Resources",
      p: "Access notes, links, practice materials, and a comprehensive resource section to support your learning journey.",
      imgSrc: images.default.resources,
    },
  ];

  return (
    <section className="mx-4 sm:mx-20 py-10">
      {/* Heading  */}
      <Animate>
        <h2 className="text-brand-gradient text-4xl font-family-abril-fatface leading-12 text-center">
          Everything you need to ace your interview
        </h2>

        {/* Paragraph  */}
        <p className="my-4 leading-6 max-w-sm text-center mx-auto">
          Practice with AI, get instant feedback, and build confidence for your
          next interview
        </p>
      </Animate>

      {/* Resources  */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
        {cards.map((card, idx) => (
          <Card key={idx} h5={card.h5} p={card.p} imgSrc={card.imgSrc} />
        ))}
      </div>
    </section>
  );
}
