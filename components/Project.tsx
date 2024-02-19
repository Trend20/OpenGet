import Link from "next/link";
import { platform } from "os";
import React from "react";
import { FiExternalLink } from "react-icons/fi";

const Project = ({ project }: any) => {
  return (
    <div
      className={`flex flex-col rounded-md border cursor-pointer border-grey`}
    >
      <div className="flex p-3 items-center justify-between">
        <h3 className="font-bold flex border-none">{project.name}</h3>
        <Link href={project.git_url} target="_blank">
          <FiExternalLink color="#0394fc" />
        </Link>
      </div>
      <hr className="border-grey" />
      <div className="flex p-3 items-center justify-between">
        <p>Language:</p> <p>{project.language}</p>
      </div>
      <hr className="border-grey" />
      <div className="flex p-3 items-center justify-between">
        <p>Stars Count:</p> <p>{project.stargazers_count}</p>
      </div>
      <hr className="border-grey" />
      <div className="flex p-3 items-center justify-between">
        <p>Open Issues:</p> <p>{project.open_issues_count}</p>
      </div>
      <hr className="border-grey" />
      <div className="flex p-3 items-center justify-between">
        <p>Forks:</p> <p>{project.forks_count}</p>
      </div>
      <hr className="border-grey" />
      <div className="flex py-8">
        <Link
          href={project.git_url}
          target="_blank"
          className="flex justify-center items-center border border-meta-5 text-meta-5 rounded-md p-3 w-3/4 m-auto hover:bg-meta-5 hover:text-whiten"
        >
          GitHub Link
        </Link>
      </div>
    </div>
  );
};

export default Project;
