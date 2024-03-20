"use client";
import Link from "next/link";
import React from "react";
import { MdOutlineExplore } from "react-icons/md";

export default function Hero() {
  return (
    <div className="flex w-full flex-col justify-center m-auto items-center py-20 px-40 mt-20">
      <h1 className="text-7xl text-center w-3/4 font-extrabold py-5 leading-[1.08] text-boxdark-2 mt-10">
        Explore the World of Open Source
      </h1>
      <p className="text-lg text-center w-1/2">
        Discover a collection of open source projects, inspiring stories, and
        insightful podcasts. Contribute, star, and build amazing things.
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
