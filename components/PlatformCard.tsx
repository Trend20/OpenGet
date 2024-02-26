import Link from "next/link";
import React from "react";
import { FiExternalLink } from "react-icons/fi";
import Image from "next/image";

export default async function PlatformCard({ platform }: any) {
  return (
    <div
      className={`flex flex-col rounded-md border cursor-pointer h-65 border-grey bg-${platform.color}`}
    >
      <div className="flex p-3 items-center justify-between">
        <h3 className="font-bold flex border-none">{platform.name}</h3>
        <Link href={platform.homepage} target="_blank">
          <FiExternalLink color="#0394fc" />
        </Link>
      </div>
      <hr className="border-grey" />
      <div className="flex p-3 items-center justify-between">
        <p>Language:</p> <p>{platform.default_language}</p>
      </div>
      <hr className="border-grey" />
      <div className="flex p-3 items-center justify-between">
        <p>Projects:</p> <p>{platform.project_count}</p>
      </div>
      <hr className="border-grey" />
      <div className="flex py-8">
        <Link
          href={`/platform/${platform.name}`}
          className="flex justify-center items-center border border-meta-5 text-meta-5 rounded-md p-3 w-3/4 m-auto hover:bg-meta-5 hover:text-whiten"
        >
          Explore Package
        </Link>
      </div>
    </div>
  );
}
