import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import NewsList from "./components/NewsList";

export default function Home() {
  return (
    <div className="flex flex-col h-fit [&>div]:px-15 [&>header]:px-15 bg-white">
      <Hero></Hero>
      <NewsList></NewsList>
    </div>
  );
}
