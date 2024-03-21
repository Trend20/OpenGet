"use client";
import React, { Suspense, useEffect, useState } from "react";
import LanguageTile from "@/components/LanguageTile";
import Pagination from "@/components/Pagination";
import Sidebar from "@/components/Sidebar";
import Search from "@/components/Search";

const Languages = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 9;
  const [repositories, setRepositories] = useState([]);
  const [language, setLanguage] = useState("javascript");

  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

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
        console.log(repos);
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

  const filteredRepos = repositories.filter((repo: any) =>
    repo.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const handlePageChange = ({ selected }: any) => {
    setCurrentPage(selected);
  };
  return (
    <div className="flex flex-col lg:flex-row w-full justify-between mt-10">
      <div className="flex">
        <Sidebar setLang={setLanguage} />
      </div>
      <div className="flex flex-col p-3 rounded-md border border-grey w-full lg:w-3/4 xl:w-4/5">
        <div className="flex items-center justify-between">
          <h5 className="flex capitalize px-3 py-2 font-medium text-sm w-auto bg-meta-4 text-white rounded-md">
            {language} Projects
          </h5>
          <Search value={searchQuery} onChange={handleSearchChange} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-5">
          {filteredRepos.map((repo: any) => (
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
