import Link from "next/link";
import Image from "next/image";
import React from "react";
import { FiExternalLink } from "react-icons/fi";
import { GoIssueOpened } from "react-icons/go";
import { MdOutlineStar } from "react-icons/md";
import { PiGitForkBold } from "react-icons/pi";

const LanguageTile = ({ repo }: any) => {
  return (
    <div
      className={`flex flex-col rounded-md border cursor-pointer border-grey`}
    >
      <div className="flex p-3 items-center justify-between">
        <div className="flex items-center">
          <Image
            src={repo.owner.avatar_url}
            alt={repo.name}
            width="100"
            height="100"
            className="flex w-10.5 rounded-full"
          />
          <h3 className="font-bold flex border-none ml-2">{repo.name}</h3>
        </div>
        <Link href={repo.html_url} target="_blank">
          <FiExternalLink color="#0394fc" size={20} />
        </Link>
      </div>
      <hr className="border-grey" />
      <div className="flex p-3 items-center justify-between">
        <p>Language:</p> <p>{repo.language}</p>
      </div>
      <hr className="border-grey" />
      <div className="flex p-3 items-center justify-between">
        <p>
          <MdOutlineStar color="#0394fc" size={20} />
        </p>{" "}
        <p>{repo.stargazers_count}</p>
      </div>
      <hr className="border-grey" />
      <div className="flex p-3 items-center justify-between">
        {" "}
        <p>
          <GoIssueOpened color="#0394fc" size={20} />
        </p>{" "}
        <p>{repo.open_issues_count}</p>
      </div>
      <hr className="border-grey" />
      <div className="flex p-3 items-center justify-between">
        <p>
          <PiGitForkBold color="#0394fc" size={20} />
        </p>{" "}
        <p>{repo.forks_count}</p>
      </div>
      <hr className="border-grey" />
      <div className="flex py-8">
        <Link
          href={repo.html_url}
          target="_blank"
          className="flex justify-center items-center border border-meta-5 text-meta-5 rounded-md p-3 w-3/4 m-auto hover:bg-meta-5 hover:text-whiten"
        >
          GitHub Link
        </Link>
      </div>
    </div>
  );
};

export default LanguageTile;
