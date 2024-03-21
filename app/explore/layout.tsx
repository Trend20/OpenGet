import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Languages layout",
  description: "Application language layout",
};

export default function LanguagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col lg:flex-row w-full py-10 px-5 lg:px-40">
      <main className="w-full">{children}</main>
    </div>
  );
}
