"use client";
import PlatformCard from "@/components/PlatformCard";
import axios from "axios";
import React, { useState, useEffect, Suspense } from "react";
import Loading from "./loading";
const api_key = process.env.NEXT_PUBLIC_API_KEY;

const Platforms = () => {
  const [platforms, setPlatforms] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://libraries.io/api/platforms?api_key=${api_key}`
        );
        const platformsData = response.data;
        console.log(platformsData);
        setPlatforms(platformsData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching platforms:", error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className="flex w-full flex-col justify-center items-center py-20">
      <div className="flex justify-center items-center">
        <h1 className="flex text-3xl text-center w-full font-extrabold leading-[1.1] text-boxdark-2">
          Discover Popular Package Managers.
        </h1>
      </div>

      <Suspense fallback={<Loading />}>
        <div className="grid w-full grid-cols-4 gap-8 py-10">
          {platforms.map((platform: any) => (
            <PlatformCard key={platform.name} platform={platform} />
          ))}
        </div>
      </Suspense>
    </div>
  );
};

export default Platforms;
