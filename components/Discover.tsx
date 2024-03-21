import Link from "next/link";
import React from "react";
import { RiProjectorLine } from "react-icons/ri";
import { MdOutlineWorkHistory } from "react-icons/md";
import { LuPodcast } from "react-icons/lu";

const discoverInfo = [
  {
    id: 1,
    title: "Projects",
    desc: "Browse a curated list of open source projects for inspiration and collaboration",
    url: "/explore",
    icon: <RiProjectorLine size={30} />,
  },
  {
    id: 2,
    title: "Stories",
    desc: "Read inspiring stories from the open source community and learn about their journey",
    url: "/news",
    icon: <MdOutlineWorkHistory size={30} />,
  },
  {
    id: 3,
    title: "Podcasts",
    desc: "Listen to podcasts featuring discussions on open source technologies, trends, and best practices",
    url: "/podcasts",
    icon: <LuPodcast size={30} />,
  },
];

export default function Discover() {
  return (
    <div className="bg-black w-full px-6 py-10 sm:px-40 sm:py-20">
      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-4xl">
            Discover, Learn, and Engage with Open Source
          </p>

          <p className="mt-6 text-lg leading-7 text-indigo-200">
            Explore a variety of open source projects, stories, and podcasts to
            stay informed and inspired in the open source community
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {discoverInfo.map((item) => (
              <div key={item.id} className="flex flex-col">
                <h6 className="flex items-center gap-x-3 text-lg font-semibold leading-7 text-white">
                  <i>{item.icon}</i>
                  {item.title}
                </h6>

                <div className="mt-4 flex flex-auto flex-col text-base leading-7 text-indigo-200">
                  <p className="flex-auto">{item.desc}</p>
                  <Link
                    href={item.url}
                    className="mt-4 text-sm font-semibold leading-6 text-white"
                  >
                    Learn more <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
