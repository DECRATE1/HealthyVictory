import type { Metadata } from "next";
import { Raleway, Roboto } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Header from "./components/Header";

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

const raleway = Raleway({
  subsets: ["cyrillic"],
  display: "swap",
  variable: "--font-raleway",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="flex flex-col items-center bg-white">
      <body
        className={`${raleway.className} max-w-[1920px] w-full h-auto flex flex-col grow-3 [&>header]:px-15 max-[1280px]:[&>header]:px-5 max-[1280px]:[&>footer]:px-5 [&>footer]:px-15 relative`}
      >
        <Header></Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
