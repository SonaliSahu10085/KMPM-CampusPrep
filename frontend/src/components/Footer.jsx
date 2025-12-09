import { images } from "@/constants/images"
import { Mail, OutlinedMail, OutlinedTelegram } from "@/constants/icons"
import { useStore } from "@/constants/store"
import { Link } from "react-router-dom";
import Animate from "./Animate";


// bg-[rgba(217,217,217,0.10)]
export default function Footer() {

    const { theme } = useStore();
    return (
        <Animate>
            <footer className={`mx-2 mt-5 relative bottom-2  backdrop-blur-sm bg-transparent rounded-t-2xl ${theme === "dark" ? "footer-dark-shadow" : "footer-light-shadow"}`}
            >
                {/* First Row  */}
                <div className="flex flex-col sm:flex-row sm:mx-20 mx-4 py-8 gap-10">
                    {/* First Col  */}
                    <div className="sm:max-w-xs space-y-4">
                        {/* logo */}
                        <img src={images.default.logo} alt="" className="h-16" />

                        {/* Para  */}
                        <p className="leading-6">Your complete placement preparation partner. From first year to final placement, we've got you covered.</p>

                        {/* Download App  */}
                        <div className="border flex space-x-4 max-w-3/4 items-center p-2 bg-white/20 rounded-md border-gray-300">
                            <img src={images.default.appqrcode} alt="" className="h-14" />
                            <p className="font-extrabold text-md text-brand-gradient">Scan to Download the App now</p>
                        </div>
                    </div>

                    {/* Second Col  */}
                    <div className="flex flex-col sm:flex-row-reverse flex-1 sm:flex-wrap sm:justify-between gap-6">





                        <div className="space-y-6">
                            <h5 className="text-secondary text-md font-family-abril-fatface">Stay Updated</h5>
                            <p className="leading-6 max-w-xs">Get the latest updates, tips, and resources delivered to your inbox.</p>
                            <div className="flex border-2 rounded-xs border-red-400 bg-[rgba(217,217,217,0.16)]">

                                <input placeholder="Enter your email" className="flex-1 p-2 focus:outline-none" />

                                <div className="border-l-2 border-red-400 p-2 flex items-center justify-between text-xl text-red-400">
                                    <Mail />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <h5 className="text-secondary text-md font-family-abril-fatface">Quick Links</h5>
                            <ul className="flex flex-col gap-3">
                                <Link to={'/contributors#top'} className="transition-transform transform hover:underline">Our Contributors</Link>
                                <Link to={"/privacy_policy"} className="transition-transform transform hover:underline">Privacy Policy</Link>
                                <Link to={'/contact_us'} className="transition-transform transform hover:underline">Contact Us</Link>
                            </ul>
                        </div>

                        <div className="space-y-6">
                            <h5 className="text-secondary text-md font-family-abril-fatface ">Useful Links</h5>
                            <ul className="space-y-3">
                                <li>Year Wise Roadmap</li>
                                <li>Complete Resources</li>
                                <li>AI Mock Interviews</li>
                                <li>Internship & Job Portal</li>
                            </ul>
                        </div>

                        <div className="space-y-6 sm:w-xs">
                            <h5 className="text-secondary text-md font-family-abril-fatface">Connect With Us</h5>
                            <div className="flex gap-2 text-2xl text-red-400">
                                <OutlinedMail />
                                <OutlinedTelegram />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-center border-t-2 sm:mx-20 mx-4 py-6 border-gray-300">
                    <span className="text-xl mx-1 font-light">&copy;</span> 2025 KMPM CampusPrep. All rights reserved.
                </div>
            </footer>
        </Animate>
    )
}