"use client";
import Languages from "@/app/languages/page";
import { ILanguages } from "@/types/languages";
import Image from "next/image";
import React, { useState } from "react";

const languages: ILanguages[] = [
  {
    id: 1,
    name: "javascript",
    icon: "/icons/javascript.svg",
  },
  {
    id: 2,
    name: "python",
    icon: "/icons/python.svg",
  },
  {
    id: 3,
    name: "php",
    icon: "/icons/php.svg",
  },
  {
    id: 4,
    name: "rust",
    icon: "/icons/rust.svg",
  },
  {
    id: 5,
    name: "java",
    icon: "/icons/java.svg",
  },
  {
    id: 6,
    name: "ruby",
    icon: "/icons/ruby.svg",
  },
  {
    id: 7,
    name: "kotlin",
    icon: "/icons/kotlin.svg",
  },
  {
    id: 8,
    name: "c",
    icon: "/icons/c.svg",
  },
  {
    id: 9,
    name: "csharp",
    icon: "/icons/csharp.svg",
  },
  {
    id: 10,
    name: "cpp",
    icon: "/icons/cpp.svg",
  },
  {
    id: 11,
    name: "typescript",
    icon: "/icons/typescript.svg",
  },
  {
    id: 12,
    name: "golang",
    icon: "/icons/go.svg",
  },
];

const Sidebar: React.FC = () => {
  const [clicked, setClicked] = useState("javascript");
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="flex w-full items-start">
      <ul className="flex-col  w-1/4 border border-grey rounded-md text-sm font-medium text-gray-500 dark:text-gray-400 md:me-4 mb-4 md:mb-0">
        {languages.map((lang) => (
          <li key={lang.id} className={`flex w-full border-b border-b-grey`}>
            <button
              onClick={() => {
                setClicked(lang.name);
              }}
              className={`flex justify-center items-center px-4 py-4 text-white rounded-lg active w-full bg-blue-gray-50`}
              aria-current="page"
            >
              <div className="flex w-8 justify-center items-center">
                <Image
                  src={lang.icon}
                  alt={lang.name}
                  width="100"
                  height="100"
                  className="w-full flex"
                />
              </div>
            </button>
          </li>
        ))}
      </ul>
      <div className="flex border border-grey rounded-md w-3/4">
        <Languages language={clicked} />
      </div>
    </div>
  );
};

export default Sidebar;
