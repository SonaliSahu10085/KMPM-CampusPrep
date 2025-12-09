import { images } from "../constants/images";
import { useState } from "react";
import {
  Mail,
  LockClose,
  EyeClose,
  Google,
  User,
  LockOpen,
  EyeOpen
} from "../constants/icons";

import {
  ORWithLinesBothSide,
  InputField,
  Button,
  Paragraph,
} from "./Basic";


export default function Form({ type }) {

  const [inputType, setInputType] = useState('password');


  return (
    <div className="border border-[rgb(129,193,205)] shadow-md shadow-gray-400 sm:w-10/12 py-8 px-8 rounded-xl bg-[rgba(217,217,217,0.11)]">
      <img src={images.default.logo} alt="logo" className="h-16 mb-4 mx-auto" />

      {type === "admin" && (
        <h1 className="mt-8 text-2xl text-[#417A8F] text-center font-family-abril-fatface">
          Welcome To Admin
          <br />
          Portal
        </h1>
      )}

      <form className="flex flex-col mt-6">
        {/* Admin Form */}
        {type === "admin" && (
          <>
            <InputField Icon1={User} placeholder="Enter admin email address" inputType="text"/>
            <InputField
              Icon1={LockClose}
              Icon2={EyeClose}
              placeholder="Enter admin password"
              inputType="password"
            />
            <Button label="Verify" />
          </>
        )}

        {/* Login Form */}

        {type === "login" && (
          <>
            <InputField Icon1={Mail} placeholder="Enter your email address" inputType="text" />
            <InputField
              Icon1={inputType === "password" ? LockClose : LockOpen}
              Icon2={inputType === "password" ? EyeClose : EyeOpen}
              placeholder="Enter your password"
              setInputType={setInputType}
              inputType={inputType}
            />

            <p className="text-[rgb(62,107,123)] font-medium italic cursor-pointer hover:underline text-xs mb-2">
              Forget password ?
            </p>

            <Button label="Login" />

            <ORWithLinesBothSide />

            <Button label="Login with Google" Icon={Google} alignIcon="left" />

            <Paragraph
              text="Don't have an account ?"
              highlightedText="Signup"
              redirectTo="/signup"
            />
          </>
        )}

        {/* Signup Form */}
        {type === "signup" && (
          <>
            <InputField Icon1={User} placeholder="Enter your full name" inputType="text" />
            <InputField Icon1={Mail} placeholder="Enter your email address" inputType="text"/>
            <InputField
              Icon1={LockClose}
              Icon2={EyeClose}
              placeholder="Enter a strong password"
              inputType="password"
            />

            <Button label="Create an account" />

            <ORWithLinesBothSide />

            <Button label="Signup with Google" Icon={Google} alignIcon="left" />

            <Paragraph
              text="Already have an account ?"
              highlightedText="Login"
              redirectTo="/login"
            />
          </>
        )}
      </form>
    </div>
  );
}
