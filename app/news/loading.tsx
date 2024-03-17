import NewsSkeleton from "@/components/skelletons/NewsSkeleton";

export default function Loading() {
  return (
    <main className="m-auto mt-50 w-full px-40">
      <div className="flex justify-center gap-5 flex-wrap">
        {Array.from(Array(10).keys()).map((element) => (
          <NewsSkeleton key={element} />
        ))}
      </div>
    </main>
  );
}
