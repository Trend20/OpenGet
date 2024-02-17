import Image from "next/image";
import Link from "next/link";
import React from "react";

const headerLinks = [
  {
    id: 1,
    linkName: "Home",
    linkUrl: "/",
  },
  {
    id: 2,
    linkName: "About",
    linkUrl: "/about",
  },
];

const Header = () => {
  return (
    <div className="flex w-full items-center justify-between py-10">
      <div className="flex w-30 justify-start items-center">
        <Link href="/" className="flex font-bold text-2xl items-center">
          <Image
            src="logo.svg"
            alt="logo"
            width="100"
            height="100"
            className="w-3/4"
          />
          OpenGet
        </Link>
      </div>
      <div className="flex items-center justify-between w-1/4">
        {headerLinks.map((link) => (
          <Link key={link.id} href={link.linkUrl} className="">
            {link.linkName}
          </Link>
        ))}
        <Link
          href="/login"
          className="flex w-40 bg-boxdark-2 text-white justify-center items-center p-3 rounded-md"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default Header;
