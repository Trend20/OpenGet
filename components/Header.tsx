"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { redirect, usePathname, useRouter } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import { FaXTwitter, FaGithub, FaDiscord } from "react-icons/fa6";

interface HeaderLinks {
  id: number;
  linkName: string;
  linkUrl: string;
}

const headerLinks: HeaderLinks[] = [
  {
    id: 1,
    linkName: "Projects",
    linkUrl: "/explore",
  },
  {
    id: 2,
    linkName: "Stories",
    linkUrl: "/news",
  },
  {
    id: 3,
    linkName: "Podcasts",
    linkUrl: "/podcasts",
  },
  {
    id: 4,
    linkName: "About",
    linkUrl: "/about",
  },
];

const Header: React.FC = () => {
  const pathname = usePathname();
  const { data: session } = useSession();
  if (!session) {
    if (session) return redirect("/explore");
  }
  return (
    <div className="flex px-40 w-full items-center justify-between py-5 shadow z-99">
      <div className="flex w-1/4 justify-start items-center">
        <Link href="/" className="flex font-bold w-full text-2xl items-center">
          <div className="flex items-center">
            <Image
              loading="lazy"
              src="logo.svg"
              alt="logo"
              width="50"
              height="50"
              className="flex w-8.5"
            />
            <p className="flex text-black">OpenGet</p>
          </div>
        </Link>
      </div>
      <div className="flex items-center space-x-8 justify-center w-1/4">
        {headerLinks.map((link) => (
          <Link
            prefetch={false}
            key={link.id}
            href={link.linkUrl}
            className={`flex text-lg text-black ${
              pathname === link.linkUrl ? "active" : ""
            }`}
          >
            {link.linkName}
          </Link>
        ))}
      </div>

      <div className="flex w-1/4 space-x-5 justify-end">
        <Link href={"https://github.com/Trend20/OpenGet"} target="_blank">
          <i>
            <FaGithub size={20} fill="#1c2434" />
          </i>
        </Link>
        <Link href={"https://github.com/Trend20/OpenGet"} target="_blank">
          <i>
            <FaDiscord size={20} fill="#1c2434" />
          </i>
        </Link>
        <Link href={"https://github.com/Trend20/OpenGet"} target="_blank">
          <i>
            <FaXTwitter size={20} fill="#1c2434" />
          </i>
        </Link>
      </div>
    </div>
  );
};

export default Header;
