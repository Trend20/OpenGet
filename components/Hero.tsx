import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa6";
import { MdOutlineExplore } from "react-icons/md";

const Hero = async () => {
  return (
    <div className="flex w-full flex-col justify-center items-center py-40">
      <h1 className="flex text-7xl text-center w-3/4 font-extrabold leading-[1.08] text-boxdark-2">
        Tools and Resources for busy programmers. Everything OpenSource!
      </h1>
      <p className="flex text-lg text-center mt-10 w-1/2">
        Welcome to the world of OpenSource Software! We help you to speed up
        your development process by reducing the time you take to search for
        development libraries. We have a collections of popular libraries that
        helps you ship your applications faster.
      </p>
      <div className="flex mt-15">
        <div className="flex px-3">
          <Link
            href="/projects"
            className="flex mt-3 bg-boxdark-2 text-sm uppercase text-white justify-center items-center p-4 rounded-md"
          >
            <i className="mr-3">
              <MdOutlineExplore size={25} />
            </i>
            Explore Projects
          </Link>
        </div>
        <div className="flex px-3">
          <Link
            href="/login"
            className="flex mt-3 bg-boxdark-2 text-sm uppercase text-white justify-center items-center p-4 rounded-md"
          >
            <i className="mr-3">
              <FaGithub size={25} />
            </i>
            Connect github
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
