import React, { Suspense } from "react";
import Loading from "./loading";
import LanguageTile from "@/components/LanguageTile";

// export async function getLanguageProjects({ name }: any) {
//   const res = await fetch(
//     `https://api.github.com/search/repositories?q=javascript`
//   );
//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }
//   const data = await res.json();
//   return data.items;
// }

const Languages = async ({ params }: { params: { name: string } }) => {
  const name = params.name;
  // const languages = getLanguageProjects(name);
  // console.log(languages);

  return (
    <>
      <Suspense fallback={<Loading />}>
        <div className="flex mt-16">
          <div className="grid w-full grid-cols-4 gap-8 py-10">
            {/* {languages.map((lan: any) => (
              <LanguageTile key={lan.name} />
            ))} */}
            <p>Project</p>
          </div>
        </div>
        ;
      </Suspense>
    </>
  );
};

export default Languages;
