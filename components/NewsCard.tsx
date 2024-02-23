import Link from "next/link";
import React from "react";

const NewsCard = ({ story }: any) => {
  return (
    <div className="flex items-center rounded-md border border-grey p-3 justify-between w-full">
      <div className="flex flex-col">
        <h3 className="leading-8 font-bold">{story.title}</h3>
        <p className="leading-8">Upvote: {story.score}</p>
        <p className="leading-8">Author: {story.author}</p>
        <p className="leading-8">Type: {story.type}</p>
      </div>
      <div className="flex w-30 justify-center items-center">
        <Link
          href={story.url}
          target="_blank"
          className="flex justify-center w-full items-center p-3 bg-meta-4 text-whiten rounded-md"
        >
          Visit
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;
