import ContributerCard from "@/components/ContributerCard";
import { FaArrowLeft } from "react-icons/fa";
import { images } from "../constants/images";
import { Footer, Navbar } from "@/components";
import Animate from "@/components/Animate";

export default function Contributors() {
    return (
        <>
            <Navbar />

            <section className="text-center p-5" id="top">
                {/* Heading */}
                <h1 className="text-brand-gradient text-4xl font-family-abril-fatface leading-12 mt-6">
                    Meet Our Contributors !
                </h1>
                <p className="my-3 leading-6 mb-6">
                    The talented team behind KMPM CampusPrep, dedicated to helping students
                    achieve their career goals.
                </p>

                {/* Cards Section */}
                <div className="flex sm:flex-row flex-col gap-4 sm:justify-center">
                    <ContributerCard
                        image={images.default.ajay}
                        name="Ajay Kumar Ray"
                        position="Full Stack Web Developer"
                        description="Full-stack developer passionate about education technology and AI."
                        linkedin="https://www.linkedin.com/in/dev-ajay-kumar/"
                        github="https://github.com/ajay-so"
                    />

                    <ContributerCard
                        image={images.default.sonali}
                        name="Sonali Sahu"
                        position="Full Stack Web Developer"
                        description="Full-stack developer passionate about education technology and AI."
                        linkedin="https://www.linkedin.com/in/sonalisahu246/"
                        github="https://github.com/SonaliSahu10085"
                    />
                </div>


                {/* CTA Section */}
                <Animate>
                    <div className="flex flex-col gap-4 items-center sm:my-10 my-8">
                        <h2 className="text-2xl font-family-abril-fatface text-brand-gradient">
                            Want to Contribute ?
                        </h2>
                        <p>
                            We’re always looking for passionate individuals to join our mission of helping students succeed.
                        </p>
                        <button className="bg-[#0090af] text-white px-4 py-2 rounded-xl shadow-md transition-transform transform hover:scale-110">
                            Get in Touch
                        </button>
                    </div>
                
                {/* Back Button */}
                
                    <button className="sm:my-12 my-8 flex items-center gap-2 bg-white/20 border-2 border-gray-300 px-4 py-2 rounded-full transition-transform transform hover:scale-110 mx-auto">
                        <FaArrowLeft /> Back to home
                    </button>
                </Animate>
            </section>

            <Footer />
        </>
    );
}
