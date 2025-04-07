import Hero from "./components/Hero";
import NewsList from "./components/NewsList";

export default function Home() {
  return (
    <div className="flex flex-col h-fit bg-white z-10 ">
      <Hero></Hero>
      <NewsList></NewsList>
    </div>
  );
}
