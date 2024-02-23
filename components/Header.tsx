"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { redirect, usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import { LiaCaretDownSolid } from "react-icons/lia";
import { FaRegUser } from "react-icons/fa";
import { TbLogout } from "react-icons/tb";

interface HeaderLinks {
  id: number;
  linkName: string;
  linkUrl: string;
}

const headerLinks: HeaderLinks[] = [
  {
    id: 1,
    linkName: "Communities",
    linkUrl: "/communities",
  },
  {
    id: 2,
    linkName: "Package Managers",
    linkUrl: "/packages",
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
  {
    id: 5,
    linkName: "News",
    linkUrl: "/news",
  },
];

const Header: React.FC = () => {
  const pathname = usePathname();
  const [showDiv, setShowDiv] = useState<boolean>(false);
  const { data: session } = useSession();
  if (!session) {
    if (session) return redirect("/projects");
  }

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
            className={`flex font-semibold ${
              pathname === link.linkUrl ? "active" : ""
            }`}
          >
            {link.linkName}
          </Link>
        ))}
        {!session ? (
          <Link
            href="/login"
            className="flex w-40 bg-boxdark-2 text-white justify-center items-center p-4 rounded-md"
          >
            Get Started
          </Link>
        ) : (
          <div className="flex cursor-pointer flex-col">
            <div
              className="flex items-center cursor-pointer"
              onClick={() => setShowDiv((prev) => !prev)}
            >
              <Image
                src={session.user?.image}
                alt="Avatar"
                width="100"
                height="100"
                className="flex rounded-full w-10.5 h-10.5"
              />
              <i className="px-3">
                <LiaCaretDownSolid />
              </i>
            </div>
            {showDiv ? (
              <div className="flex flex-col absolute bg-blue-gray-50 top-20 px-3 py-5 h-25.5 rounded-md items-start- justify-start">
                <Link
                  href="/profile"
                  className="flex items-center rounded-md p-1 hover:bg-meta-4 hover:text-whiten"
                >
                  <i className="mr-3">
                    <FaRegUser />
                  </i>
                  {session.user?.name}
                </Link>
                <button
                  onClick={() => signOut({ redirect: true })}
                  className="flex items-center p-1 rounded mt-5 hover:bg-meta-4 hover:text-whiten"
                >
                  <i className="mr-3">
                    <TbLogout />
                  </i>
                  Logout
                </button>
              </div>
            ) : (
              ""
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
