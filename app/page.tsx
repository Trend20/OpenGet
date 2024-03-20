import Community from "@/components/Community";
import Discover from "@/components/Discover";
import Hero from "@/components/Hero";
import UIPrompt from "@/components/UIPrompt";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <Discover />
      <Community />
      <UIPrompt />
    </main>
  );
}
