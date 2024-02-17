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
    <div className="flex w-full">
      <div className="flex">
        <Link href="/">OpenGet</Link>
      </div>
      <div className="flex">
        {headerLinks.map((link) => (
          <Link key={link.id} href={link.linkUrl}>
            {link.linkName}
          </Link>
        ))}
        <Link href="/login">Get Started</Link>
      </div>
    </div>
  );
};

export default Header;
