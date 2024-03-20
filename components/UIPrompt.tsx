import React from "react";

const UIPrompt = () => {
  return (
    <div className="bg-black w-full px-40">
      <div className="mx-auto py-24 sm:pt-32 lg:py-40">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <h2 className="text-2xl font-bold leading-10 tracking-tight text-white">
              Frequently asked questions
            </h2>

            <p className="mt-4 text-base leading-7 text-gray-600">
              Can’t find the answer you’re looking for? Reach out to our
              <a
                href="#"
                className="font-semibold text-indigo-600 hover:text-indigo-500"
              >
                customer support
              </a>
              team.
            </p>
          </div>

          <div className="mt-10 lg:col-span-7 lg:mt-0">
            <dl className="space-y-10">
              <div>
                <dt className="text-base font-semibold leading-7 text-white">
                  What type of opensource projects are listed on your website?
                </dt>

                <dd className="mt-2 text-base leading-7 text-gray-600">
                  We list a variety of opensource projects ranging from software
                  to hardware and everything in between.
                </dd>
              </div>

              <div>
                <dt className="text-base font-semibold leading-7 text-white">
                  Can I submit my own opensource project to be listed on your
                  website?
                </dt>

                <dd className="mt-2 text-base leading-7 text-gray-600">
                  Yes, we welcome submissions of opensource projects from the
                  community. Please use the submission form on our website to
                  submit your project.
                </dd>
              </div>

              <div>
                <dt className="text-base font-semibold leading-7 text-white">
                  Do you have a podcast section on your website?
                </dt>

                <dd className="mt-2 text-base leading-7 text-gray-600">
                  Yes, we have a dedicated section for podcasts related to
                  opensource topics. You can listen to interviews, discussions,
                  and more.
                </dd>
              </div>

              <div>
                <dt className="text-base font-semibold leading-7 text-white">
                  Are the opensource stories on your website user-generated?
                </dt>

                <dd className="mt-2 text-base leading-7 text-gray-600">
                  Yes, the opensource stories on our website are contributed by
                  members of the opensource community. You can share your own
                  story as well.
                </dd>
              </div>

              <div>
                <dt className="text-base font-semibold leading-7 text-white">
                  How often do you update the content on your website?
                </dt>

                <dd className="mt-2 text-base leading-7 text-gray-600">
                  We strive to update our website regularly with new opensource
                  projects, stories, and podcasts. Check back frequently for
                  fresh content.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UIPrompt;
