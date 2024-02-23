"use client";
import React from "react";
import Image from "next/image";
import { signIn } from "next-auth/react";

const AuthButton = () => {
  return (
    <div className="flex flex-col w-96">
      <button
        onClick={() => signIn("github")}
        className="flex w-full rounded-md p-5 text-white bg-black-2 items-center"
      >
        <div className="flex w-10">
          <Image
            src="github.svg"
            alt="logo"
            width="100"
            height="100"
            className="flex w-4.5"
          />
        </div>
        <div className="flex flex-col ml-3">
          <h3 className="text-sm font-bold">Continue with GitHub</h3>
        </div>
      </button>
    </div>
  );
};

export default AuthButton;
