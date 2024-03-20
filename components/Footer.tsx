import Link from "next/link";
import React from "react";
import { FaXTwitter, FaGithub, FaDiscord } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full py-6 justify-center items-center px-40 bg-black">
      <div className="flex items-center justify-between gap-4 px-4 text-sm md:gap-6 md:px-6">
        <div className="flex items-center space-x-4">
          <Link
            className="rounded-full hover:bg-gray-100 p-2 transition-colors text-gray-500 dark:hover:bg-gray-800 dark:text-gray-400"
            href="#"
          >
            <FaDiscord className="h-4 w-4" />
            <span className="sr-only">Facebook</span>
          </Link>
          <Link
            className="rounded-full hover:bg-gray-100 p-2 transition-colors text-gray-500 dark:hover:bg-gray-800 dark:text-gray-400"
            href="#"
          >
            <FaXTwitter className="h-4 w-4" />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link
            className="rounded-full hover:bg-gray-100 p-2 transition-colors text-gray-500 dark:hover:bg-gray-800 dark:text-gray-400"
            href="#"
          >
            <FaGithub className="h-4 w-4" />
            <span className="sr-only">Instagram</span>
          </Link>
        </div>
        <nav className="flex items-center space-x-4">
          <Link
            className="font-medium transition-colors hover:text-gray-900 dark:hover:text-gray-50"
            href="#"
          >
            Terms of Service
          </Link>
          <Link
            className="font-medium transition-colors hover:text-gray-900 dark:hover:text-gray-50"
            href="#"
          >
            Privacy Policy
          </Link>
          <Link
            className="font-medium transition-colors hover:text-gray-900 dark:hover:text-gray-50"
            href="#"
          >
            Contact Us
          </Link>
        </nav>
        <p className="text-gray-500 text-xs tracking-wider dark:text-gray-400">
          © 2024 Acme Inc. All rights reserved.
        </p>
      </div>
    </footer>
    // <div className="flex bg-black w-full py-8 flex-col justify-center items-center max-md:w-full max-md:flex-col">
    //   <div className="flex w-1/4 justify-between">
    //     {/* <p className="text-sm max-md:p-1">All Rights Reserved</p> */}
    //     <p className="text-sm max-md:p-1">
    //       © {new Date().getFullYear()} OpenGet
    //     </p>
    //     <p className="text-sm max-md:p-1 flex">
    //       Created with ♥ from Nairobi by{" "}
    //       <Link
    //         href="https://github.com/Trend20"
    //         className="flex ml-3 text-meta-5"
    //         target="_blank"
    //       >
    //         Dev Enock
    //       </Link>
    //     </p>
    //   </div>
    // </div>
  );
};

export default Footer;
