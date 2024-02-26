"use client";
import React, { Suspense, useEffect, useState } from "react";
import Loading from "./loading";
import LanguageTile from "@/components/LanguageTile";

const Languages = ({ language }: any) => {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    async function fetchRepositories() {
      try {
        const response = await fetch(
          `https://api.github.com/search/repositories?q=language:${language}`
        );
        const data = await response.json();
        const repos = data.items;
        repos.sort(
          (a: { contributions: number }, b: { contributions: number }) =>
            b.contributions - a.contributions
        );
        setRepositories(repos);
      } catch (error) {
        console.error("Error fetching repositories:", error);
      }
    }
    fetchRepositories();
  }, [language]);
  return (
    <>
      <Suspense fallback={<Loading />}>
        <div className="flex p-3 w-full">
          <div className="grid w-full grid-cols-4 gap-8">
            {repositories.map((repo: any) => (
              <LanguageTile key={repo.id} repo={repo} />
            ))}
          </div>
        </div>
        ;
      </Suspense>
    </>
  );
};

export default Languages;
