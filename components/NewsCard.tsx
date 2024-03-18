import Link from "next/link";
import React from "react";
import { BiUpvote } from "react-icons/bi";

const NewsCard = ({ story }: any) => {
  return (
    <div className="flex items-center rounded-md border border-grey p-3 justify-between w-full">
      <div className="flex flex-col">
        <h3 className="leading-8 font-bold text-xl py-3">{story.title}</h3>
        <p className="leading-8 py-3 flex items-center font-bold">
          <i className="rounded-full p-2 border border-meta-5 mr-3">
            <BiUpvote size={15} fill="#0394fc" />
          </i>{" "}
          {story.score}
        </p>
        {/* <p className="leading-8 text-lg font-medium">Author {story.author}</p> */}
      </div>
      <div className="flex w-30 justify-center items-center">
        <Link
          href={story.url}
          target="_blank"
          className="flex justify-center w-full items-center p-3 bg-meta-4 text-whiten rounded-md"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;
