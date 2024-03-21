import React from "react";

const UIPrompt = () => {
  return (
    <div className="bg-black w-full px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40">
      <div className="mx-auto py-12 sm:pt-16 lg:py-24 xl:py-40">
        <div className="lg:grid lg:grid-cols-1 lg:gap-8">
          <div className="lg:col-span-1">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold leading-8 tracking-tight text-white">
              Frequently asked questions
            </h2>

            <p className="mt-4 text-base leading-7 text-gray-400 md:text-lg">
              Can’t find the answer you’re looking for? Reach out to our
              <a
                href="#"
                className="font-semibold text-indigo-500 hover:text-indigo-400"
              >
                customer support
              </a>
              team.
            </p>
          </div>
        </div>

        <div className="mt-10">
          <div className="space-y-8 md:space-y-10">
            <div>
              <h6 className="text-base md:text-lg lg:text-xl font-semibold leading-7 text-white">
                What type of opensource projects are listed on your website?
              </h6>

              <p className="mt-2 text-base leading-7 text-gray-400 md:text-lg">
                We list a variety of opensource projects ranging from software
                to hardware and everything in between.
              </p>
            </div>

            <div>
              <h6 className="text-base md:text-lg lg:text-xl font-semibold leading-7 text-white">
                Can I submit my own opensource project to be listed on your
                website?
              </h6>

              <p className="mt-2 text-base leading-7 text-gray-400 md:text-lg">
                Yes, we welcome submissions of opensource projects from the
                community. Please use the submission form on our website to
                submit your project.
              </p>
            </div>

            <div>
              <h6 className="text-base md:text-lg lg:text-xl font-semibold leading-7 text-white">
                Do you have a podcast section on your website?
              </h6>

              <p className="mt-2 text-base leading-7 text-gray-400 md:text-lg">
                Yes, we have a dedicated section for podcasts related to
                opensource topics. You can listen to interviews, discussions,
                and more.
              </p>
            </div>

            <div>
              <h6 className="text-base md:text-lg lg:text-xl font-semibold leading-7 text-white">
                Are the opensource stories on your website user-generated?
              </h6>

              <p className="mt-2 text-base leading-7 text-gray-400 md:text-lg">
                Yes, the opensource stories on our website are contributed by
                members of the opensource community. You can share your own
                story as well.
              </p>
            </div>

            <div>
              <h6 className="text-base md:text-lg lg:text-xl font-semibold leading-7 text-white">
                How often do you update the content on your website?
              </h6>

              <p className="mt-2 text-base leading-7 text-gray-400 md:text-lg">
                We strive to update our website regularly with new opensource
                projects, stories, and podcasts. Check back frequently for fresh
                content.
              </p>
            </div>

            {/* Repeat similar structure for other questions */}
            {/* ... */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UIPrompt;
