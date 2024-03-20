import Discover from "@/components/Discover";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <Discover />
    </main>
  );
}
