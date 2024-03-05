"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const tech = [
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
    name: "ruby",
    icon: "/icons/ruby.svg",
  },
  {
    id: 5,
    name: "java",
    icon: "/icons/java.svg",
  },
  {
    id: 6,
    name: "typescript",
    icon: "/icons/typescript.svg",
  },
];

const Libraries = () => {
  const [selectedTech, setSelectedTech] = useState("paginate");
  return (
    <div className="flex w-full flex-col justify-center items-center py-20 px-40 mt-20">
      <div className="flex justify-center items-center">
        <h1 className="flex text-3xl text-center w-full font-extrabold text-boxdark-2">
          Choose Project Stack
        </h1>
      </div>

      <div className="grid w-1/2 m-auto grid-cols-3 gap-5 mt-40 border border-grey  px-5 py-10 rounded-md">
        {tech.map((item) => (
          <Link
            href={`/libraries/${item.name}`}
            className="flex flex-col bg-blue-gray-50 p-5 justify-center items-center rounded-md"
            key={item.id}
          >
            <Image
              src={item.icon}
              alt={item.name}
              width="100"
              height="100"
              className="flex w-10.5 h-10.5"
            />
            <p className="flex capitalize mt-2">{item.name} Project</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Libraries;
