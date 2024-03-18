import PackageSkeleton from "@/components/skelletons/PackageSkeleton";

export default function Loading() {
  return (
    <main className="m-auto mt-50 w-full px-40">
      <div className="grid grid-cols-4 justify-center gap-5 flex-wrap">
        {Array.from(Array(8).keys()).map((element) => (
          <PackageSkeleton key={element} />
        ))}
      </div>
    </main>
  );
}
