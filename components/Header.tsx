import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GrProjects } from "react-icons/gr";
import { TbPackages } from "react-icons/tb";

const headerLinks = [
  {
    id: 1,
    linkName: "Communities",
    linkUrl: "/communities",
  },
  {
    id: 2,
    linkName: "Package Managers",
    linkUrl: "/platforms",
  },
  {
    id: 3,
    linkName: "Languages",
    linkUrl: "/languages",
  },
  {
    id: 4,
    linkName: "Projects",
    linkUrl: "/projects",
  },
];

const Header = async () => {
  return (
    <div className="flex w-full items-center justify-between py-10">
      <div className="flex w-25.5 justify-start items-center">
        <Link href="/" className="flex font-bold w-full text-2xl items-center">
          <div className="flex items-center">
            <Image
              src="logo.svg"
              alt="logo"
              width="50"
              height="50"
              className="flex w-8.5"
            />
            <p className="flex text-black-2">OpenGet</p>
          </div>
        </Link>
      </div>
      <div className="flex items-center justify-between w-1/2">
        {headerLinks.map((link) => (
          <Link
            key={link.id}
            href={link.linkUrl}
            className="flex font-semibold"
          >
            {link.linkName}
          </Link>
        ))}
        <Link
          href="/login"
          className="flex w-40 bg-boxdark-2 text-white justify-center items-center p-4 rounded-md"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default Header;
