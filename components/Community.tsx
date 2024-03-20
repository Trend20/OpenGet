import Link from "next/link";
import React from "react";

const Community = () => {
  return (
    <div className="bg-whiten w-full px-40">
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight  sm:text-4xl">
            <br />
            Discover a world of open source projects, stories, and podcasts
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-indigo-200">
            Join our community of open source enthusiasts and stay updated on
            the latest projects and stories.
          </p>

          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="#"
              className="rounded-md bg-black text-white p-4 text-sm font-semibold  shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Browse Projects
            </Link>
            <Link
              href="/podcasts"
              className="text-sm font-semibold leading-6 text-meta-4"
            >
              Listen to Podcasts
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
