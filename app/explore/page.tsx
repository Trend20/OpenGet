"use client";
import React, { Suspense, useEffect, useState } from "react";
import Loading from "./loading";
import LanguageTile from "@/components/LanguageTile";
import Pagination from "@/components/Pagination";
import Sidebar from "@/components/Sidebar";

const Languages = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 8;
  const [repositories, setRepositories] = useState([]);
  const [language, setLanguage] = useState("javascript");

  useEffect(() => {
    async function fetchRepositories(pageNumber: number, itemsPerPage: number) {
      try {
        const response = await fetch(
          `https://api.github.com/search/repositories?q=language:${language}&page=${pageNumber}&per_page=${itemsPerPage}`
        );
        const data = await response.json();
        const totalItems = data.total_count;
        console.log(totalItems);
        const pages = Math.ceil(totalItems / itemsPerPage);
        console.log(pages);
        const repos = data.items;
        repos.sort(
          (a: { contributions: number }, b: { contributions: number }) =>
            b.contributions - a.contributions
        );
        setTotalPages(pages);
        setRepositories(repos);
      } catch (error) {
        console.error("Error fetching repositories:", error);
      }
    }
    fetchRepositories(currentPage + 1, itemsPerPage);
  }, [language, currentPage]);
  const handlePageChange = ({ selected }: any) => {
    setCurrentPage(selected);
  };
  return (
    <div className="flex w-full justify-between">
      <div className="flex">
        <Sidebar setLang={setLanguage} />
      </div>
      <div className="flex flex-col p-3 border rounded-md border-grey w-full">
        <div className="grid w-full grid-cols-4 gap-5">
          {repositories.map((repo: any) => (
            <LanguageTile key={repo.id} repo={repo} />
          ))}
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default Languages;
