import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="flex w-full mt-20 flex-col justify-center items-center max-md:w-full max-md:flex-col">
      <p className="text-sm max-md:p-1">© {new Date().getFullYear()} OpenGet</p>
      <p className="text-sm max-md:p-1">All Rights Reserved</p>
      <p className="text-sm max-md:p-1">
        Created with ♥ from Nairobi by{" "}
        <Link href="https://github.com/Trend20" target="_blank">
          Dev Enock
        </Link>
      </p>
    </div>
  );
};

export default Footer;
