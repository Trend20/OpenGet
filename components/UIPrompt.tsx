import { Question } from "@/types/question";
import { quiz } from "@/utils";
import React from "react";

const UIPrompt = () => {
  return (
    <div className="bg-black w-full px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40">
      <div className="mx-auto py-12 md:flex-col lg:flex-col sm:flex-col sm:pt-16 lg:py-24 xl:py-40">
        <div className="lg:grid lg:grid-cols-1 lg:gap-8">
          <div className="lg:col-span-1">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold leading-8 tracking-tight text-white">
              Frequently asked questions
            </h2>

            <p className="mt-4 text-base leading-7 text-gray-400 md:text-lg">
              Can’t find the answer you’re looking for? Reach out to our &nbsp;
              <a
                href="#"
                className="font-semibold text-indigo-500 hover:text-indigo-400"
              >
                customer support
              </a>
              &nbsp; team.
            </p>
          </div>
        </div>
        <div className="mt-10">
          <div className="space-y-8 md:space-y-10">
            {quiz.map((item: Question) => (
              <div key={item.id}>
                <h6 className="text-base md:text-lg lg:text-xl font-semibold leading-7 text-white">
                  {item.question}
                </h6>

                <p className="mt-2 text-base leading-7 text-gray-400 md:text-lg">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UIPrompt;
