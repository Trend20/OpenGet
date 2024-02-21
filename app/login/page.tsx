"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { TbHexagonNumber1 } from "react-icons/tb";
import { TbHexagonNumber2 } from "react-icons/tb";

const Login = () => {
  return (
    <div className="flex m-auto justify-between items-center py-10 px-10 mt-30 w-1/2 h-[300] bg-bodydark1 rounded-md">
      <div className="flex flex-col w-3/4">
        <h1 className="text-2xl font-bold text-black-2">Welcome to OpenGet!</h1>
        <p className="w-3/4 mt-5">
          Your one-stop place for getting open source software and libraries to
          fuel your development journey.
        </p>
        <div className="flex flex-col mt-7">
          <p className="flex items-center px-5 py-2">
            <i className="mr-5 text-black-2">
              <TbHexagonNumber1 size={20} />
            </i>{" "}
            No access to your private repositories.
          </p>
          <p className="flex items-center px-5 py-2">
            {" "}
            <i className="mr-5 text-black-2">
              <TbHexagonNumber2 size={20} />
            </i>
            No spam email.
          </p>
        </div>
      </div>
      <div className="flex flex-col w-96">
        <Link
          href="#"
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
        </Link>
      </div>
    </div>
  );
};

export default Login;
