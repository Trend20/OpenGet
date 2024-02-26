"use client";
import React, { Suspense, useEffect, useState } from "react";
import Loading from "./loading";
import axios from "axios";
import NewsCard from "@/components/NewsCard";
import { Story } from "@/types/story";

const News: React.FC = () => {
  const [openSourceStories, setOpenSourceStories] = useState<Story[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchOpenSourceStories = async () => {
      setLoading(true);
      try {
        const topStoriesResponse = await axios.get(
          "https://hacker-news.firebaseio.com/v0/topstories.json"
        );
        setLoading(false);
        const topStoryIds = topStoriesResponse.data;

        const openSourceStoriesData = await Promise.all(
          topStoryIds.map(async (storyId: any) => {
            const storyResponse = await axios.get(
              `https://hacker-news.firebaseio.com/v0/item/${storyId}.json`
            );
            const storyData = storyResponse.data;
            // Filter stories related to open-source
            if (
              storyData.title.toLowerCase().includes("open source")
              // storyData.title.toLowerCase().includes("code") ||
              // storyData.title.toLowerCase().includes("software")
            ) {
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

        setLoading(false);
        // Remove null values and set open source stories state
        setOpenSourceStories(openSourceStoriesData.filter(Boolean));
      } catch (error) {
        console.error("Error fetching open source stories:", error);
      }
      setLoading(false);
    };

    fetchOpenSourceStories();
  }, []);
  return (
    <>
      {/* <Suspense fallback={<Loading />}> */}
      {loading ? (
        <Loading />
      ) : (
        <div className="flex w-full flex-col justify-center items-center py-20 px-40">
          <div className="flex justify-center items-center">
            <h1 className="flex text-3xl text-center w-full font-extrabold leading-[1.1] text-boxdark-2">
              Top Tech Stories.
            </h1>
          </div>
          <div className="grid w-full gap-8 py-10">
            {openSourceStories.map((story: Story) => (
              <NewsCard key={story.title} story={story} />
            ))}
          </div>
        </div>
      )}
      {/* </Suspense> */}
    </>
  );
};

export default News;
