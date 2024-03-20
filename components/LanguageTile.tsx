import Link from "next/link";
import Image from "next/image";
import React from "react";
import { GoIssueOpened } from "react-icons/go";
import { MdOutlineStar } from "react-icons/md";
import { PiGitForkBold } from "react-icons/pi";
import { GoGlobe } from "react-icons/go";
import { FaGithub } from "react-icons/fa6";

const LanguageTile = ({ repo }: any) => {
  return (
    <div
      className={`flex flex-col rounded-md border cursor-pointer border-grey`}
    >
      <div className="flex p-3 items-center justify-between">
        <div className="flex items-center">
          <div className="flex bg-blue-gray-100 p-2 rounded-full">
            <Image
              src={repo.owner.avatar_url}
              alt={repo.name}
              width="100"
              height="100"
              className="flex w-10.5 rounded-full"
            />
          </div>
          <h3 className="font-bold flex border-none ml-2">{repo.name}</h3>
        </div>
        <div className="flex space-x-3">
          {repo.homepage !== "" && repo.homepage !== null ? (
            <Link href={repo.homepage} target="_blank">
              <GoGlobe color="#0394fc" size={20} />
            </Link>
          ) : (
            <Link href={repo.html_url} target="_blank">
              <GoGlobe color="#0394fc" size={20} />
            </Link>
          )}
          <Link href={repo.html_url} target="_blank">
            <FaGithub color="#0394fc" size={20} />
          </Link>
        </div>
      </div>
      <div className="flex p-3 items-center justify-between">
        <p>{repo.description}</p>
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
    </div>
  );
};

export default LanguageTile;
