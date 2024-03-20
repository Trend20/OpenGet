"use client";
import Link from "next/link";
import React from "react";
import { RiProjectorLine } from "react-icons/ri";
import { MdOutlineWorkHistory } from "react-icons/md";
import { LuPodcast } from "react-icons/lu";

export default function Discover() {
  return (
    <div className="bg-black w-full px-40 py-20 sm:py-10">
      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Discover, Learn, and Engage with Open Source
          </p>

          <p className="mt-6 text-lg leading-8 text-indigo-200">
            Explore a variety of open source projects, stories, and podcasts to
            stay informed and inspired in the open source community
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            <div className="flex flex-col">
              <h6 className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                <i>
                  <RiProjectorLine size={30} />
                </i>
                Projects
              </h6>

              <div className="mt-4 flex flex-auto flex-col text-base leading-7 text-indigo-200">
                <p className="flex-auto">
                  Browse a curated list of open source projects for inspiration
                  and collaboration
                </p>
                <Link
                  href="/explore"
                  className="mt-6 text-sm font-semibold leading-6 text-white"
                >
                  Learn more <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            <div className="flex flex-col">
              <h6 className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                <i>
                  <MdOutlineWorkHistory size={30} />
                </i>
                Stories
              </h6>

              <div className="mt-4 flex flex-auto flex-col text-base leading-7 text-indigo-200">
                <p className="flex-auto">
                  Read inspiring stories from the open source community and
                  learn about their journey
                </p>
                <Link
                  href="/news"
                  className="mt-6 text-sm font-semibold leading-6 text-white"
                >
                  Learn more <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            <div className="flex flex-col">
              <h6 className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                <i>
                  <LuPodcast size={30} />
                </i>
                Podcasts
              </h6>

              <div className="mt-4 flex flex-auto flex-col text-base leading-7 text-indigo-200">
                <p className="flex-auto">
                  Listen to podcasts featuring discussions on open source
                  technologies, trends, and best practices
                </p>
                <Link
                  href="/podcasts"
                  className="mt-6 text-sm font-semibold leading-6 text-white"
                >
                  Learn more <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
