import Project from "@/components/Project";
import React, { Suspense } from "react";
import Loading from "./loading";

async function getProjects() {
  const res = await fetch("https://api.github.com/search/repositories?q=all");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data.items;
}

const Projects = async () => {
  const projects = await getProjects();
  console.log(projects);
  return (
    <>
      <Suspense fallback={<Loading />}>
        <div className="flex flex-col justify-center items-center py-10 px-40">
          <div className="flex justify-center items-center">
            <h1 className="flex text-3xl text-center w-full font-extrabold leading-[1.1] text-boxdark-2">
              Discover Trending OpenSource Projects.
            </h1>
          </div>
          <div className="grid w-full grid-cols-4 gap-8 py-10">
            {projects.map((project: any) => (
              <Project key={project.id} project={project} />
            ))}
          </div>
        </div>
      </Suspense>
    </>
  );
};

export default Projects;
