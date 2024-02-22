"use client";
import Project from "@/components/Project";
import axios from "axios";
import React, { Suspense, useEffect, useState } from "react";
import Loading from "./loading";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://api.github.com/search/repositories?q=all`
        );
        const platformsData = response.data;
        console.log(platformsData);
        setProjects(platformsData.items);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching platforms:", error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);
  return (
    <div className="flex flex-col justify-center items-center py-10">
      <div className="flex justify-center items-center">
        <h1 className="flex text-3xl text-center w-full font-extrabold leading-[1.1] text-boxdark-2">
          Discover Trending OpenSource Projects.
        </h1>
      </div>
      {/* {loading ? (
        <div className="flex mt-10">
          <CircleLoader color="#65aee6" />
        </div>
      ) : ( */}
      <div className="grid w-full grid-cols-4 gap-8 py-10">
        {projects.map((project: any) => (
          <Suspense key={project.id} fallback={<Loading />}>
            <Project project={project} />
          </Suspense>
        ))}
      </div>
      {/* )} */}
    </div>
  );
};

export default Projects;
