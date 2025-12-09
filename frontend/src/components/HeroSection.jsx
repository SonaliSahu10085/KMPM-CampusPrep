import { images } from "../constants/images";
import { RightArrow, Play } from "../constants/icons";
import Animate from "./Animate";
import TypingEffect from "./TypingEffect";

export function RedBtn({ text }) {
  return (
    <button
      type="button"
      className="flex items-center gap-2 bg-orange-500 px-5 py-2 rounded-md text-white border border-gray-300 shadow-md shadow-gray-400 zoom-animation font-bold"
    >
      <span>{text}</span> <RightArrow />
    </button>
  );
}

export function HeroSection() {
  return (
    <section className="mx-4 sm:mx-20 px-2 flex flex-col sm:flex-row my-14">
      <div className="flex-1 sm:my-auto text-center sm:text-start">
        <h1 className="text-brand-gradient text-5xl sm:text-6xl font-family-abril-fatface pb-4">
          <span className="bg-red-400 rounded-4xl text-white/90 px-4 py-1 leading-28 sm:text-6xl text-4xl italic">
            Stop
          </span>
          &nbsp;Dreaming <br />
          <TypingEffect text="Start Doing|" />
        </h1>

        <p className="text-gray-75 max-w-md my-2 leading-6">
          Get interview-ready with AI-powered practice and instant feedback.
          Master your skills and land your dream job with confidence.
        </p>
        <div className="flex mt-5">
          <button
            type="button"
            className="flex items-center gap-2 font-medium px-10 py-2 rounded-sm shadow-sm bg-orange-500 text-white hover:bg-white hover:text-orange-500 transform transition-transform cursor-pointer"
          >
            <span className="font-medium">Try For Free</span>
          </button>

          <button
            type="button"
            className="flex items-center gap-2 font-medium border border-orange-500 px-5 py-2 rounded-md ms-5 shadow-md hover:bg-white hover:text-black"
          >
            <Play />
            <span className="">Watch Demo</span>
          </button>
        </div>
      </div>

      {/* <Animate direction="right"> */}
        <img
          src={images.default.heroSection}
          alt="Hero Section"
          className="h-96 flex-1 mt-8 sm:mt-0 "
        />
      {/* </Animate> */}
    </section>
  );
}
