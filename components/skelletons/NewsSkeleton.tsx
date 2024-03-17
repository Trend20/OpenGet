import React from "react";
import Link from "next/link";

const NewsSkeleton = () => {
  return (
    <div className="flex items-center rounded-md border  min-h-40 border-grey p-3 justify-between w-full">
      <div className="flex flex-col">
        <h3 className="leading-8 font-bold bg-blue-gray-200"></h3>
        <p className="leading-8 bg-blue-gray-200"></p>
        <p className="leading-8 bg-blue-gray-200"></p>
        <p className="leading-8 bg-blue-gray-200"></p>
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
