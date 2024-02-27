"use client";

import React, { Suspense, useEffect, useState } from "react";
import Loading from "./loading";
import Pagination from "@/components/Pagination";
import CommunityCard from "@/components/CommunityCard";

const Communities = () => {
  const [communities, setCommunities] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 16;
  useEffect(() => {
    async function getCommunities(pageNumber: number, itemsPerPage: number) {
      const res = await fetch(
        `https://api.github.com/search/repositories?q=topic:community&page=${pageNumber}&per_page=${itemsPerPage}`
      );
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await res.json();
      const totalItems = data.total_count;
      console.log(totalItems);
      const pages = Math.ceil(totalItems / itemsPerPage);
      console.log(pages);
      setTotalPages(pages);
      setCommunities(data.items);
    }
    getCommunities(currentPage + 1, itemsPerPage);
  }, [currentPage]);

  const handlePageChange = ({ selected }: any) => {
    setCurrentPage(selected);
  };
  return (
    <>
      <Suspense fallback={<Loading />}>
        <div className="flex w-full flex-col justify-center items-center py-20 px-40">
          <div className="flex justify-center items-center">
            <h1 className="flex text-3xl text-center w-full font-extrabold leading-[1.1] text-boxdark-2">
              Explore Communities.
            </h1>
          </div>
          <div className="grid w-full grid-cols-4 gap-8 py-10">
            {communities.map((community: any) => (
              <CommunityCard key={community.name} community={community} />
            ))}
          </div>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </Suspense>
    </>
  );
};

export default Communities;
