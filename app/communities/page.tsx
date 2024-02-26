import React, { Suspense } from "react";
import Loading from "./loading";
import CommunityCard from "@/components/CommunityCard";

async function getCommunities() {
  const res = await fetch(
    `https://api.github.com/search/repositories?q=topic:community`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data.items;
}

const Communities = async () => {
  const communities = await getCommunities();
  console.log(communities);
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
        </div>
      </Suspense>
    </>
  );
};

export default Communities;
