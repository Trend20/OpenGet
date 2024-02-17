import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

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
    <html lang="en">
      <body>
        <div className="flex flex-col w-full px-40">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
