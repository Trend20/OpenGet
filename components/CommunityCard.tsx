"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { FiExternalLink } from "react-icons/fi";
import { GrCaretUp, GrCaretDown } from "react-icons/gr";

const CommunityCard = ({ community }: any) => {
  const [showTopics, setShowTopics] = useState<boolean>(false);
  return (
    <div
      className={`flex flex-col rounded-md border cursor-pointer border-grey bg-${community.color}`}
    >
      <div className="flex">
        <Image
          src={community.owner.avatar_url}
          alt={community.name}
          width="100"
          height="100"
        />
      </div>
      <div className="flex p-3 items-center justify-between">
        <h3 className="font-bold flex border-none">{community.name}</h3>
        <Link href={community.homepage} target="_blank">
          <FiExternalLink color="#0394fc" />
        </Link>
      </div>
      <hr className="border-grey" />
      <div className="flex p-3 items-center">
        <p>{community.description}</p>
      </div>
      <hr className="border-grey" />
      <div className="flex p-3 items-center justify-between">
        <p>Projects:</p> <p>{community.project_count}</p>
      </div>
      <hr className="border-grey" />
      <div className="flex items-center relative">
        <span
          className="flex p-3 items-center justify-between w-full"
          onClick={() => setShowTopics((prev) => !prev)}
        >
          <p>Topics</p>
          <p>
            {" "}
            <i>
              {showTopics ? <GrCaretUp color="#0394fc" /> : <GrCaretDown />}
            </i>
          </p>
        </span>
        <div
          className={`flex-col absolute bg-meta-4 p-3 rounded-md text-whiten w-full top-10 ${
            showTopics ? "grid grid-cols-3 gap-3" : "hidden"
          }`}
        >
          {community.topics.map(
            (
              topic:
                | string
                | number
                | boolean
                | React.ReactElement<
                    any,
                    string | React.JSXElementConstructor<any>
                  >
                | Iterable<React.ReactNode>
                | React.ReactPortal
                | React.PromiseLikeOfReactNode
                | null
                | undefined,
              index: React.Key | null | undefined
            ) => (
              <p
                key={index}
                className="flex justify-center items-center text-sm p-1 bg-meta-5 rounded-full"
              >
                {topic}
              </p>
            )
          )}
        </div>
      </div>
      <hr className="border-grey" />

      <div className="flex py-8">
        <Link
          href={`/platform/${community.name}`}
          className="flex justify-center items-center border border-meta-5 text-meta-5 rounded-md p-3 w-3/4 m-auto hover:bg-meta-5 hover:text-whiten"
        >
          Explore Package
        </Link>
      </div>
    </div>
  );
};

export default CommunityCard;
