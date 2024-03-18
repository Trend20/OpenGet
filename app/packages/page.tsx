"use client";
import PlatformCard from "@/components/PlatformCard";
import React, { useEffect, useState } from "react";
import Loading from "./loading";
import Pagination from "@/components/Pagination";
const api_key = process.env.NEXT_PUBLIC_API_KEY;

const Platforms = () => {
  const [packages, setPackages] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const itemsPerPage = 8;

  useEffect(() => {
    async function getPackages(pageNumber: number, itemsPerPage: number) {
      setLoading(true);
      const res = await fetch(
        `https://libraries.io/api/platforms?api_key=${api_key}&page=${pageNumber}&per_page=${itemsPerPage}`
      );
      if (!res.ok) {
        setLoading(false);
        throw new Error("Failed to fetch data");
      }
      setLoading(false);
      const data = await res.json();
      const totalItems = data.length;
      const pages = Math.ceil(totalItems / itemsPerPage);
      setTotalPages(pages);
      setPackages(data);
    }
    getPackages(currentPage + 1, itemsPerPage);
  }, [currentPage]);

  const handlePageChange = ({ selected }: any) => {
    setCurrentPage(selected);
  };

  console.log(packages);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="flex w-full flex-col justify-center items-center py-20 px-40 mt-20">
          <div className="flex justify-center items-center">
            <h1 className="flex text-3xl text-center w-full font-extrabold leading-[1.1] text-boxdark-2">
              Discover Popular Package Managers.
            </h1>
          </div>
          <div className="grid w-full grid-cols-4 gap-8 py-10">
            {packages.map((platform: any) => (
              <PlatformCard key={platform.name} platform={platform} />
            ))}
          </div>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      )}
    </>
  );
};

export default Platforms;
