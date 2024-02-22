import Sidebar from "@/components/Sidebar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "OpenGet App",
  description: "OpenSource Web platform where you can find all the libraries.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex w-full py-10">
      <Sidebar />
      <main>{children}</main>
    </div>
  );
}
