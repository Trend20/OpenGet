import Link from "next/link";
import React from "react";
import { TbCategoryPlus } from "react-icons/tb";

export default async function Category() {
  return (
    <div className="flex w-full flex-col justify-center items-center">
      <h1 className="flex text-2xl w-1/2 justify-center items-center font-extrabold leading-10- text-boxdark-2">
        Browse by Category
      </h1>
      <p className="flex text-lg text-center mt-3 w-1/2">
        From small NPM modules to fully functional libraries, we give you access
        a wide list of tools that can help you get on speed building and
        shipping your application.
      </p>
      <Link
        href="/login"
        className="flex w-50 mt-3 bg-boxdark-2 text-sm uppercase text-white justify-center items-center p-3 rounded-md"
      >
        <i className="mr-3">
          <TbCategoryPlus />
        </i>
        Categories
      </Link>
    </div>
  );
}
