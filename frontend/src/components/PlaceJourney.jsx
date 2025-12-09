import { RedBtn } from "./HeroSection";
import Animate from "./Animate";
import TypingEffect from "./TypingEffect";

export default function PlaceJourney() {
    return (
        <Animate>
            <section className="text-white text-center bg-gradient flex flex-col items-center justify-center h-72">
                <h4 className="text-4xl leading-12 font-family-abril-fatface">
                    <TypingEffect text="Ready to start your placement journey?" /></h4>
                <p className="leading-6 mt-3 mb-8">Our exclusive community only for KMPM BCA Students</p>
                <RedBtn text="Join Now" />
            </section>
        </Animate>
    )
}