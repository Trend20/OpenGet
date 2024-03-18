import React from "react";
import Link from "next/link";

const NewsSkeleton = () => {
  return (
    <div className="flex items-center rounded-md border bg-blue-gray-300  min-h-30 border-grey p-3 justify-between w-full animate-pulse">
      <div className="flex flex-col">
        <h3 className="leading-8 font-bold p-5"></h3>
        <p className="leading-8"></p>
        <p className="leading-8"></p>
        <p className="leading-8"></p>
      </div>
      <div className="flex w-30 justify-center items-center">
        <Link
          href={""}
          target="_blank"
          className="flex justify-center w-full items-center p-3  text-whiten rounded-md"
        ></Link>
      </div>
    </div>
  );
};

export default NewsSkeleton;
