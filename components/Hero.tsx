import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="flex w-full flex-col justify-center items-center">
      <h1 className="flex text-5xl text-center w-1/2 font-extrabold leading-10- text-boxdark-2">
        Tools and Resources for busy programmers! Everything OpenSource
      </h1>
      <p className="flex text-lg text-center mt-8 w-1/2">
        Speed up your development process by reducing the time you take to
        search for development libraries. We have a collections of popular
        libraries that helps you ship your applications faster.
      </p>
      <Link
        href="/login"
        className="flex w-50 mt-3 bg-boxdark-2 text-sm uppercase text-white justify-center items-center p-3 rounded-md"
      >
        <i className="mr-3">
          <FaGithub />
        </i>
        Login with github
      </Link>
    </div>
  );
};

export default Hero;
