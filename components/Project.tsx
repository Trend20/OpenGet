import Link from "next/link";
import React from "react";
import { FiExternalLink } from "react-icons/fi";
import { MdOutlineStar } from "react-icons/md";
import { PiGitForkBold } from "react-icons/pi";
import { GoIssueOpened } from "react-icons/go";

export default async function Project({ project }: any) {
  return (
    <div
      className={`flex flex-col rounded-md border cursor-pointer border-grey`}
    >
      <div className="flex p-3 items-center justify-between">
        <h3 className="font-bold flex border-none">{project.name}</h3>
        <Link href={project.html_url} target="_blank">
          <FiExternalLink color="#0394fc" size={20} />
        </Link>
      </div>
      <hr className="border-grey" />
      <div className="flex p-3 items-center justify-between">
        <p>Language:</p> <p>{project.language}</p>
      </div>
      <hr className="border-grey" />
      <div className="flex p-3 items-center justify-between">
        <p>
          <MdOutlineStar color="#0394fc" size={20} />
        </p>{" "}
        <p>{project.stargazers_count}</p>
      </div>
      <hr className="border-grey" />
      <div className="flex p-3 items-center justify-between">
        {" "}
        <p>
          <GoIssueOpened color="#0394fc" size={20} />
        </p>{" "}
        <p>{project.open_issues_count}</p>
      </div>
      <hr className="border-grey" />
      <div className="flex p-3 items-center justify-between">
        <p>
          <PiGitForkBold color="#0394fc" size={20} />
        </p>{" "}
        <p>{project.forks_count}</p>
      </div>
      <hr className="border-grey" />
      <div className="flex py-8">
        <Link
          href={project.html_url}
          target="_blank"
          className="flex justify-center items-center border border-meta-5 text-meta-5 rounded-md p-3 w-3/4 m-auto hover:bg-meta-5 hover:text-whiten"
        >
          GitHub Link
        </Link>
      </div>
    </div>
  );
}
