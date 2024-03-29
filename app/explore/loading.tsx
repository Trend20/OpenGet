import { CircleLoader } from "react-spinners";

export default function Loading() {
  return (
    <>
      <div className="h-10 w-48 animate-pulse rounded-md bg-stone-100 dark:bg-stone-800" />
      <div className="flex h-full w-full items-center justify-center">
        <CircleLoader color="#65aee6" />
      </div>
    </>
  );
}
