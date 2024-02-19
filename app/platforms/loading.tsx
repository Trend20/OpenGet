import { CircleLoader } from "react-spinners";

export default function Loading() {
  return (
    <main>
      <h1>Libraries</h1>
      <div>
        {Array.from(Array(31).keys()).map((element) => (
          <CircleLoader key={element} color="#36d7b7" />
        ))}
      </div>
    </main>
  );
}
