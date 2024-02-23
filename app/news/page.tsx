import React, { Suspense } from "react";
import Loading from "./loading";

async function getNews() {
  try {
    const topStoriesResponse = await fetch(
      "https://hacker-news.firebaseio.com/v0/topstories.json"
    );
    const topStoryIds = await topStoriesResponse.json();

    const openSourceStoriesData = await Promise.all(
      topStoryIds.map(async (storyId: any) => {
        const storyResponse = await fetch(
          `https://hacker-news.firebaseio.com/v0/item/${storyId}.json`
        );
        const storyData = await storyResponse.json();
        // Filter stories related to open-source
        if (storyData.title.toLowerCase().includes("open source")) {
          return {
            title: storyData.title,
            url: storyData.url,
            score: storyData.score,
          };
        }
        return null;
      })
    );

    // Remove null values and set open source stories state
    return openSourceStoriesData.filter(Boolean);
    // return topStoryIds;
  } catch (error) {
    console.error("Error fetching open source stories:", error);
  }
}

const News = () => {
  const fetchedNews = getNews();
  console.log(fetchedNews);
  return (
    <>
      <Suspense fallback={<Loading />}>
        <div className="flex w-full flex-col justify-center items-center py-20">
          <div className="flex justify-center items-center">
            <h1 className="flex text-3xl text-center w-full font-extrabold leading-[1.1] text-boxdark-2">
              Top OpenSource News.
            </h1>
          </div>
          <div className="grid w-full grid-cols-4 gap-8 py-10"></div>
        </div>
      </Suspense>
    </>
  );
};

export default News;
