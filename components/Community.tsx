import Link from "next/link";
import React from "react";

const Community = async () => {
  return (
    <div className="bg-white w-full px-6 sm:px-10 md:px-20 lg:px-40">
      <div className="py-12 sm:py-24 md:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
            <br />
            Discover a world of open source projects, stories, and podcasts
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-base sm:text-lg leading-7 text-gray-600">
            Join our community of open source enthusiasts and stay updated on
            the latest projects and stories.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Link
              href="#"
              className="rounded-md bg-black text-white p-3 sm:p-4 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Browse Projects
            </Link>
            <Link
              href="/podcasts"
              className="text-sm font-semibold leading-6 text-gray-600 flex items-center gap-1"
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
