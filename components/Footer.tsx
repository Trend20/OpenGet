import Link from "next/link";
import React from "react";
import { FaXTwitter, FaGithub, FaDiscord } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full py-4 md:py-6 justify-center items-center px-6 md:px-12 lg:px-40 bg-black">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 px-4 text-xs md:text-sm">
        <div className="flex items-center space-x-4">
          <Link
            className="rounded-full hover:bg-gray-100 p-2 transition-colors text-gray-500 dark:hover:bg-gray-800 dark:text-gray-400"
            href="#"
          >
            <FaDiscord className="h-4 w-4" />
            <span className="sr-only">Discord</span>
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
            <span className="sr-only">GitHub</span>
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
            href="mailto:enockomondi305@gmail.com"
          >
            Contact Us
          </Link>
        </nav>
        <p className="text-gray-500 text-xs tracking-wider dark:text-gray-400 mt-4 md:mt-0">
          © {new Date().getFullYear()} OpenGet. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
