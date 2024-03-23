import React, { Suspense } from "react";
import Loading from "./loading";
import axios from "axios";
import NewsCard from "@/components/NewsCard";
import { Story } from "@/types/story";
const key = process.env.NEXT_NEWS_API_KEY;

async function getData() {
  const topStoriesResponse = await axios.get(
    "https://hacker-news.firebaseio.com/v0/topstories.json"
  );
  const topStoryIds = topStoriesResponse.data;
  const openSourceStoriesData = await Promise.all(
    topStoryIds.map(async (storyId: any) => {
      const storyResponse = await axios.get(
        `https://hacker-news.firebaseio.com/v0/item/${storyId}.json`
      );
      const storyData = storyResponse.data;
      // Filter stories related to open-source
      if (storyData.title.toLowerCase().includes("open source")) {
        return {
          title: storyData.title,
          url: storyData.url,
          score: storyData.score,
          author: storyData.by,
          type: storyData.type,
        };
      }
      return null;
    })
  );
  return openSourceStoriesData.filter(Boolean);
}

const News = async () => {
  const openSourceStories = await getData();
  return (
    <>
      <Suspense fallback={<Loading />}>
        <div className="flex flex-col items-center justify-center py-10 px-4 sm:px-6 lg:px-8 xl:px-20 mt-10">
          <div className="flex justify-center items-center">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl text-center font-extrabold leading-[1.1] text-boxdark-2">
              OpenSource Stories.
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full py-10">
            {openSourceStories.map((story: Story) => (
              <NewsCard key={story.title} story={story} />
            ))}
          </div>
        </div>
      </Suspense>
    </>
  );
};

export default News;
