import { Metadata } from "next";
import Hero from "./components/Hero";
import NewsList from "./components/NewsList";
import Head from "next/head";
export const metadata = {
  title: "Главная",
  description: "Главная страница",
};
export default function Home() {
  return (
    <div className="flex flex-col h-fit bg-white z-10 ">
      <Hero></Hero>
      <NewsList></NewsList>
    </div>
  );
}
