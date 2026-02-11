import { RightArrow } from "../constants/icons";
import Animate from "./Animate";
import TypingEffect from "./TypingEffect";

export default function PlaceJourney() {
  return (
    <Animate>
      <section className="text-white text-center bg-gradient flex flex-col items-center justify-center h-72">
        <h4 className="text-4xl leading-12 font-family-abril-fatface">
          <TypingEffect text="Ready to start your placement journey?" />
        </h4>
        <p className="leading-6 mt-3 mb-8">
          Our exclusive community only for KMPM BCA Students
        </p>
        <button
          type="button"
          className="flex items-center gap-2 bg-red-500 px-5 py-2 rounded-md text-white border-4 border-red-100 shadow-md shadow-gray-400 zoom-animation font-bold "
        >
          <span>Join Now</span> <RightArrow />
        </button>
      </section>
    </Animate>
  );
}
