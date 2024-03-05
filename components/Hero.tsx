"use client";
import Link from "next/link";
import React from "react";
import { MdOutlineExplore } from "react-icons/md";

export default function Hero() {
  return (
    <div className="flex w-full flex-col justify-center m-auto items-center py-40 px-40 mt-10">
      <h1 className="text-7xl text-center w-3/4 font-extrabold py-5 leading-[1.08] text-boxdark-2">
        Tools and Resources for busy programmers. Everything OpenSource!
      </h1>
      <p className="text-lg text-center mt-10 w-1/2">
        Welcome to the world of OpenSource Software! We help you to speed up
        your development process by reducing the time you take to search for
        development libraries. We have a collections of popular libraries that
        helps you ship your applications faster.
      </p>
      <div className="flex mt-10">
        <div className="px-3">
          <Link
            href="/explore"
            prefetch={false}
            className="flex mt-3 bg-meta-4 text-sm md:text-base uppercase text-white justify-center items-center p-4 rounded-md"
          >
            <i className="mr-3">
              <MdOutlineExplore size={25} />
            </i>
            Explore Projects
          </Link>
        </div>
      </div>
    </div>
  );
}
