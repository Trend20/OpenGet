"use client";
import PlatformCard from "@/components/PlatformCard";
import axios from "axios";
import React, { useState, useEffect } from "react";

const Platforms = () => {
  const [platforms, setPlatforms] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://libraries.io/api/platforms?api_key=144ec2346fed12d536edc991d346019e"
        );
        const platformsData = response.data;
        console.log(platformsData);
        setPlatforms(platformsData);
      } catch (error) {
        console.error("Error fetching platforms:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex w-full flex-col justify-center items-center py-20">
      <div className="flex justify-center items-center">
        <h1 className="flex text-3xl text-center w-1/2 font-extrabold leading-[1.1] text-boxdark-2">
          Discover popular open-source libraries and how to use them to build
          your projects.
        </h1>
      </div>
      <div className="grid w-full grid-cols-4 gap-8 py-10">
        {platforms.map((platform: any) => (
          <PlatformCard key={platform.name} platform={platform} />
        ))}
      </div>
    </div>
  );
};

export default Platforms;
