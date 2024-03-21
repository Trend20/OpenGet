import React from "react";
import Link from "next/link";

const NewsSkeleton = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center rounded-md border bg-blue-gray-300 min-h-30 border-grey p-3 justify-between w-full animate-pulse">
      <div className="flex flex-col">
        <h3 className="leading-8 font-bold p-5"></h3>
        <p className="leading-8"></p>
        <p className="leading-8"></p>
        <p className="leading-8"></p>
      </div>
      <div className="flex justify-center sm:w-30 sm:ml-5 mt-5 sm:mt-0">
        <Link
          href={""}
          target="_blank"
          className="flex justify-center w-full items-center p-3 text-white rounded-md"
        ></Link>
      </div>
    </div>
  );
};

export default NewsSkeleton;
