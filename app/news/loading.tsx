import NewsSkeleton from "@/components/skelletons/NewsSkeleton";

export default function Loading() {
  return (
    <main className="m-auto mt-10 sm:mt-20 w-full px-4 sm:px-6 lg:px-8 xl:px-20">
      <div className="flex flex-col sm:flex-row justify-center gap-5 flex-wrap">
        {Array.from(Array(5).keys()).map((element) => (
          <NewsSkeleton key={element} />
        ))}
      </div>
    </main>
  );
}
