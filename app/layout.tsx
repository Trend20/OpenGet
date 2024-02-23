import type { Metadata } from "next";
import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { NextAuthProvider } from "./provider";

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
        <NextAuthProvider>
          <div className="flex min-h-screen flex-col w-full px-40">
            <Header />
            {children}
            {/* <Footer /> */}
          </div>
        </NextAuthProvider>
      </body>
    </html>
  );
}
