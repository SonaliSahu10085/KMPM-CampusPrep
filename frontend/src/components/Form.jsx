import { images } from "../constants/images";
import toast from "react-hot-toast";
import { useState } from "react";
import {
  Mail,
  LockClose,
  EyeClose,
  Google,
  User,
  LockOpen,
  EyeOpen,
} from "../constants/icons";

import { ORWithLinesBothSide, InputField, Button, Paragraph } from "./Basic";
import { useStore } from "../constants/store";
import { useNavigate, useLocation } from "react-router-dom";

export default function Form({ type }) {
  const redirectTo = useNavigate();
  const currLocation = useLocation();

  const {
    isLoading,
    setIsLoading,
    user,
    setUser,
    token,
    setToken,
    BACKEND_API_URL,
  } = useStore();
  const [showPassword, setShowPassword] = useState(false);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleAuth = async (e) => {
    if (e) e.preventDefault(); // Prevent page reload

    setIsLoading(true);

    let endpoint = "";
    let payload = { email, password };

    if (type === "login" || type === "admin") {
      endpoint = "/auth/login";

      // console.log("type", type);
      // console.log("loading", isLoading);
      // console.log("payload", payload);
    } else if (type === "signup") {
      endpoint = "/auth/signup";
      payload = {
        fullName,
        email,
        password,
      };

      console.log("type", type);
      console.log("payload", payload);
    }

    try {
      const response = await fetch(`${BACKEND_API_URL}${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("success:", data);

        if (!token && !user) {
          setToken(data.token);
          setUser(data.user);
        }

        toast.success(`Welcome back ${data.user.fullName}!`);

        if (type === "admin") {
          redirectTo("/admin/dashboard");
        } else {
          redirectTo("/");
        }
      } else {
        toast.error(data.error || "something went wrong");
        redirectTo(currLocation.pathname);
      }
    } catch (err) {
      console.error("Connection Error");
      redirectTo(currLocation.pathname);
      toast.error("Failed to connect to server");
    } finally {
      setIsLoading(false);
      // console.log("token after", token);
      // console.log("user after ", user);
    }
  };

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

      <form className="flex flex-col mt-6" onSubmit={handleAuth}>
        {/* Admin Form */}
        {type === "admin" && (
          <>
            <InputField
              Icon1={User}
              placeholder="Enter admin email address"
              inputType="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <InputField
              Icon1={!showPassword ? LockClose : LockOpen}
              Icon2={!showPassword ? EyeClose : EyeOpen}
              placeholder="Enter admin password"
              inputType={!showPassword ? "password" : "text"}
              setShowPassword={setShowPassword}
              showPassword={showPassword}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              label={isLoading ? "Verifying....." : "Please Verify Yourself"}
            />
          </>
        )}

        {/* Login Form */}

        {type === "login" && (
          <>
            <InputField
              Icon1={Mail}
              placeholder="Enter your email address"
              inputType="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <InputField
              Icon1={!showPassword ? LockClose : LockOpen}
              Icon2={!showPassword ? EyeClose : EyeOpen}
              placeholder="Enter your password"
              inputType={!showPassword ? "password" : "text"}
              setShowPassword={setShowPassword}
              showPassword={showPassword}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <p className="text-[rgb(62,107,123)] font-medium italic cursor-pointer hover:underline text-xs mb-2">
              Forget password ?
            </p>

            <Button label="Login" />

            <ORWithLinesBothSide />

            <Button
              label={isLoading ? "Logging In....." : "Login with Google"}
              Icon={Google}
              alignIcon="left"
            />

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
            <InputField
              Icon1={User}
              placeholder="Enter your full name"
              inputType="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
            <InputField
              Icon1={Mail}
              placeholder="Enter your email address"
              inputType="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <InputField
              Icon1={!showPassword ? LockClose : LockOpen}
              Icon2={!showPassword ? EyeClose : EyeOpen}
              placeholder="Enter a strong password"
              inputType={!showPassword ? "password" : "text"}
              setShowPassword={setShowPassword}
              showPassword={showPassword}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button label={isLoading ? "Creating....." : "Create an account"} />

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
