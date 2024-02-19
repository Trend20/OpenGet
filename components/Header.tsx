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
  {
    id: 3,
    linkName: "Package Managers",
    linkUrl: "/platforms",
  },
  {
    id: 4,
    linkName: "Languages",
    linkUrl: "/languages",
  },
  {
    id: 5,
    linkName: "Projects",
    linkUrl: "/projects",
  },
];

const Header = () => {
  return (
    <div className="flex w-full items-center justify-between py-10">
      <div className="flex w-20 justify-start items-center">
        <Link href="/" className="flex font-bold text-2xl items-center">
          <Image src="logo.svg" alt="logo" width="100" height="100" />
          OpenGet
        </Link>
      </div>
      <div className="flex items-center justify-between w-1/2">
        {headerLinks.map((link) => (
          <Link key={link.id} href={link.linkUrl}>
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
