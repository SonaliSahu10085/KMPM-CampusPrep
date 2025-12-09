import { images } from "../constants/images";
import { Menu, Close, Light, Dark } from "../constants/icons";
import { useStore } from "../constants/store";
import { Link } from "react-router-dom";
import { useEffect } from "react";


function ThemeIcon() {
    const { setTheme, theme } = useStore();
    console.log(theme);

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme])


    return (<label className="swap swap-rotate" >
        {/* hidden input just for DaisyUI animation */}
        <input type="checkbox" onClick={() => setTheme(theme === "light" ? "dark" : "light")} />

        <Dark className="swap-off fill-current text-4xl text-[#417A8F] bg-white/10 rounded-full p-2 border border-gray-400 " />

        <Light className="swap-on fill-current text-4xl text-[#417A8F] bg-black/10 rounded-full p-2 border border-gray-600" />

    </label>)
}

export default function Navbar() {
    const { isAuthenticatedUser, setIsAuthenticatedUser, setLoading, theme } = useStore();

    const authHandler = function () {
        setLoading(true);
        setIsAuthenticatedUser(true);
        setLoading(false);
    }

    const logoutHandler = function () {
        setIsAuthenticatedUser(false);
    }

    return (
        <div className={`z-999 backdrop-blur-sm border border-transparent sticky top-0 ${theme === "light" ? "bg-white/20" : "bg-black/20"} mx-4 sm:mx-20 rounded-b-3xl`}>
            <nav className={`flex items-center justify-between sm:px-10 py-4 px-6 rounded-3xl shadow-md shadow-gray-500 mt-4`}>
                <img src={images.default.logo} alt="logo" className="h-12" />



                <div className="sm:hidden flex gap-4 items-center">

                    <ThemeIcon />
                    {/* Mobile Menu  */}
                    <label className="swap swap-rotate">
                        {/* hidden input just for DaisyUI animation */}
                        <input type="checkbox" />

                        {/* hamburger icon */}
                        <Menu className="swap-off fill-current text-4xl text-[#417A8F]" />


                        {/* close icon */}
                        <Close className="swap-on fill-current text-4xl text-[#417A8F]" />

                    </label>

                </div>






                {/* Desktop Menu  */}

                <ul className="hidden sm:flex font-medium gap-8 cursor-pointer text-primary items-center font-family-abril-fatface">
                    <li><ThemeIcon /></li>
                    <Link onClick={logoutHandler} to={"/"}>
                        Home
                        <div className="w-1/2 border-b-4 border-b-red-400 rounded-md mx-auto"></div>
                    </Link>
                    <Link to={"/aboutus"}>About Us
                        <div className="w-1/2 border-b-4 border-b-transparent rounded-md mx-auto"></div>
                    </Link>
                    <Link onClick={authHandler} to={isAuthenticatedUser ? "/user/dashboard" : "/login"}>
                        {isAuthenticatedUser ? "My Dashboard" : "Login"}
                        <div className="w-1/2 border-b-4 border-b-transparent rounded-md mx-auto"></div>
                    </Link>
                    <Link to={isAuthenticatedUser ? "/" : "/signup"}>{isAuthenticatedUser ? (<div className="avatar">
                        <div className="h-10 rounded-full">
                            <img src="https://cdn.pixabay.com/photo/2024/02/12/17/23/ai-generated-8569065_1280.jpg" />
                        </div>
                    </div>) : "Signup"}
                        <div className="w-1/2 border-b-4 border-b-transparent rounded-md mx-auto"></div>
                    </Link>
                </ul>
            </nav>
        </div>
    );
}
