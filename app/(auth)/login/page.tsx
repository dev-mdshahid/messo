import React from "react";
import LoginForm from "./_components/LoginForm/LoginForm";
import LoginSideBanner from "./_components/LoginSideBanner/LoginSideBanner";

export default function LoginPage() {
  return (
    <div className="grid w-full max-w-[1000px] overflow-hidden rounded-xl bg-white shadow-xl  md:grid-cols-2 ">
      {/* Left column */}
      <LoginForm />

      {/* Right side */}
      <LoginSideBanner />
    </div>
  );
}
