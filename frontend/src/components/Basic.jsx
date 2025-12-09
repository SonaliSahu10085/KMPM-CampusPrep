import { useStore } from "@/constants/store";
import { Link } from "react-router-dom";

function Loading() {
  return (
    <div className="bg-transparent flex items-center justify-center">
      <span className="loading loading-spinner loading-xl"></span>
    </div>
  )
}

// OR Component
function ORWithLinesBothSide() {
  return (
    <div className="flex justify-center items-center font-medium text-center">
      <div className="w-20 border-t-2 border-gray-300"></div>
      <span className="mx-3 text-gray-400 text-xs">OR</span>
      <div className="w-20 border-t-2  border-gray-300"></div>
    </div>
  );
}


function InputField({ Icon1, Icon2, placeholder, setInputType, inputType }) {
  const { theme } = useStore();
  const toggleType = () => {
    if (setInputType) {
      setInputType(inputType === "password" ? "text" : "password");
    }
  }
  return (
    <div className="my-3 border flex items-center gap-3 px-4 py-2 bg-[rgba(217,217,217,0.38)] rounded-md border-[rgb(129,193,205)] dark:text-gray-50">
      <Icon1 className="text-gray-600 cursor-pointer dark:text-gray-50" />
      <div className="flex flex-1 items-center justify-between">
        <input
          placeholder={placeholder}
          type={inputType}
          className={`flex-1 bg-transparent focus:outline-none ${theme === 'dark'? "text-gray-50" :"text-gray-700"}`}
        />
        {Icon2 && (
          <Icon2
            className="text-gray-600 cursor-pointer ms-4"
            onClick={toggleType()}
          />
        )}
      </div>
    </div>
  );
}

function Button({ Icon, alignIcon, label }) {
  return (
    <button
      type="submit"
      className={`flex ${alignIcon === "left"
        ? "flex-row-reverse border-2 bg-[rgb(129,193,205,0.18)] text-[#417A8F]"
        : "border text-white bg-[rgb(62,107,123)]"
        } justify-center items-center w-full  py-2 rounded-md gap-2 my-3 font-medium border-[rgb(129,193,205)]`}
    >
      <span>{label}</span>
      {Icon && <Icon className="text-xl" />}
    </button>
  );
}

// Bottom Paragraph Component

function Paragraph({ text, highlightedText, redirectTo }) {
  return (
    <p className="text-center text-xs italic">
      {text}
      <Link to={redirectTo ?? "/"} className="text-[rgb(62,107,123)] font-medium  hover:underline cursor-pointer">
        {" "}
        {highlightedText}
      </Link>
    </p>
  );
}

export { Loading, ORWithLinesBothSide, InputField, Button, Paragraph };
