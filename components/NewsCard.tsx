import Link from "next/link";
import React from "react";
import Image from "next/image";
import { BiUpvote } from "react-icons/bi";

const NewsCard = ({ story }: any) => {
  return (
    <div className="flex flex-col sm:flex-row items-center rounded-md border border-grey p-3 justify-between w-full">
      <div className="flex flex-col sm:flex-row">
        {/* <h3 className="leading-8 font-bold text-xl py-3 sm:pr-4">
          {story.title}
        </h3> */}
        <Image
          loading="lazy"
          src={story.urlToImage}
          alt="logo"
          width="50"
          height="50"
          className="flex w-8.5"
        />
        <h3 className="leading-8 font-bold text-xl py-3 sm:pr-4">
          {story.title}
        </h3>
        <h3 className="leading-8 font-bold text-xl py-3 sm:pr-4">
          {story.description}
        </h3>
        <p className="leading-8 py-3 flex items-center font-bold">
          <i className="rounded-full p-2 border border-meta-5 mr-3">
            <BiUpvote size={15} fill="#0394fc" />
          </i>{" "}
          {story.score}
        </p>
      </div>
      <div className="flex justify-center sm:justify-end items-center mt-3 sm:mt-0">
        <Link
          href={story.url}
          target="_blank"
          className="flex justify-center items-center p-3 bg-meta-4 text-white rounded-md"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;
