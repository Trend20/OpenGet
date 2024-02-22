import PlatformCard from "@/components/PlatformCard";
import React, { Suspense } from "react";
import Loading from "./loading";
const api_key = process.env.NEXT_PUBLIC_API_KEY;

export async function getPackages() {
  const res = await fetch(
    `https://libraries.io/api/platforms?api_key=${api_key}`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data;
}

const Platforms = async () => {
  const packages = await getPackages();
  return (
    <>
      <Suspense fallback={<Loading />}>
        <div className="flex w-full flex-col justify-center items-center py-20">
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
        </div>
      </Suspense>
    </>
  );
};

export default Platforms;
