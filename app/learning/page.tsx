import React from "react";
const key = process.env.NEXT_YOUTUBE_DATA_API_KEY;

async function getData() {
  const res = await fetch(
    `https://www.googleapis.com/youtube/v3/search?key=${key}&part=snippet&q=opensource&type=video&maxResults=30`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Learning = async () => {
  const videos = await getData();
  console.log(videos);
  return (
    <div className="flex flex-col w-full justify-center items-center">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl text-center font-extrabold leading-[1.1] text-boxdark-2">
        Open Source Videos
      </h2>
      <ul className="grid grid-cols-3 px-40 gap-5 mt-5">
        {videos.items.map((video: any) => (
          <li key={video.id.videoId} className="mx-5">
            <iframe
              title={video.snippet.title}
              width="500"
              height="315"
              src={`https://www.youtube.com/embed/${video.id.videoId}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Learning;
