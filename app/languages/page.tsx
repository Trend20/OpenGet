"use client";
import React, { Suspense, useEffect, useState } from "react";
import Loading from "./loading";
import LanguageTile from "@/components/LanguageTile";

const Languages = ({ language }: any) => {
  const [repositories, setRepositories] = useState([]);

  // Effect to fetch repositories when the component mounts
  useEffect(() => {
    // Function to fetch repositories
    async function fetchRepositories() {
      try {
        // Make a GET request to GitHub's API based on the selected language
        const response = await fetch(
          `https://api.github.com/search/repositories?q=language:${language}`
        );
        const data = await response.json();
        // Extract the list of repositories from the response
        const repos = data.items;

        // Sort repositories by contribution count (descending order)
        repos.sort(
          (a: { contributions: number }, b: { contributions: number }) =>
            b.contributions - a.contributions
        );

        // Update the state with the sorted list of repositories
        setRepositories(repos);
      } catch (error) {
        console.error("Error fetching repositories:", error);
      }
    }
    // Call the fetchRepositories function
    fetchRepositories();
  }, [language]); // Depend on language parameter
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
