import React from "react";
import Link from "next/link";

const PackageSkeleton = () => {
  return (
    // <div
    //   className={`flex flex-col rounded-md border cursor-pointer h-67 p-5 border-grey animate-pulse`}
    // >
    //   <div className="flex p-3 items-center h-10 justify-between rounded-md bg-blue-gray-300">
    //     <h3 className="font-bold flex border-none"></h3>
    //   </div>
    //   <div className="flex p-3 mt-8  h-10 items-center justify-between rounded-md bg-blue-gray-300">
    //     <p>{}</p>
    //   </div>

    //   <div className="flex p-3 mt-8 h-10 items-center justify-between rounded-md bg-blue-gray-300">
    //     <p>{}</p>
    //   </div>

    //   <div className="flex py-5 mt-8">
    //     <Link
    //       href={``}
    //       className="flex justify-center bg-blue-gray-300 h-10 items-center rounded-md p-3 w-3/4 m-auto"
    //     ></Link>
    //   </div>
    // </div>
    <div className="flex flex-col rounded-md border cursor-pointer h-auto sm:h-67 p-5 border-grey animate-pulse">
      <div className="flex p-3 items-center h-10 justify-between rounded-md bg-blue-gray-300">
        <h3 className="font-bold flex border-none"></h3>
      </div>
      <div className="flex p-3 mt-3 sm:mt-8 h-10 items-center justify-between rounded-md bg-blue-gray-300">
        <p>{}</p>
      </div>
      <div className="flex p-3 mt-3 sm:mt-8 h-10 items-center justify-between rounded-md bg-blue-gray-300">
        <p>{}</p>
      </div>
      <div className="flex py-3 sm:py-5 mt-3 sm:mt-8">
        <Link
          href={``}
          className="flex justify-center bg-blue-gray-300 h-10 items-center rounded-md p-3 w-3/4 sm:w-full m-auto"
        ></Link>
      </div>
    </div>
  );
};

export default PackageSkeleton;
