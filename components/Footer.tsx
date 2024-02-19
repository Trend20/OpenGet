import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="flex w-full mt-25 flex-col justify-center items-center max-md:w-full max-md:flex-col">
      <div className="flex w-1/4 justify-between">
        {/* <p className="text-sm max-md:p-1">All Rights Reserved</p> */}
        <p className="text-sm max-md:p-1">
          © {new Date().getFullYear()} OpenGet
        </p>
        <p className="text-sm max-md:p-1 flex">
          Created with ♥ from Nairobi by{" "}
          <Link
            href="https://github.com/Trend20"
            className="flex ml-3 text-meta-5"
            target="_blank"
          >
            Dev Enock
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
