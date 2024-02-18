"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";

const Login = () => {
  return (
    <div className="flex  m-auto justify-center items-center flex-col py-10 px-10 mt-20 w-[270] bg-bodydark1 rounded-md">
      <div className="flex flex-col justify-center items-center">
        <Link href="/" className="flex font-bold text-2xl items-center">
          <Image src="logo.svg" alt="logo" width="100" height="100" />
        </Link>
        <h1 className="text-2xl font-bold text-black-2">Welcome</h1>
        <p>Sign in to your account!</p>
      </div>
      <div className="flex flex-col mt-10 w-full">
        <Link
          href="/"
          className="flex mt-5 rounded-md p-5 bg-whiten items-center"
        >
          <div className="flex w-10">
            <Image src="gitlab.svg" alt="logo" width="100" height="100" />
          </div>
          <div className="flex flex-col ml-8">
            <h3 className="text-2xl font-bold text-black-2">
              Continue with GitLab
            </h3>
            <p>We will not send you unnecessary emails.</p>
          </div>
        </Link>
        <Link
          href="#"
          onClick={() => signIn("github")}
          className="flex mt-5 rounded-md p-5 bg-whiten items-center"
        >
          <div className="flex w-10">
            <Image src="github.svg" alt="logo" width="100" height="100" />
          </div>
          <div className="flex flex-col ml-8">
            <h3 className="text-2xl font-bold text-black-2">
              Continue with GitHub
            </h3>
            <p>We will not send you unnecessary emails.</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Login;
