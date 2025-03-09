import Footer from "./Footer";
import NewsItem from "./NewsItem";
import PagesList from "./PagesList";

export default function NewsList() {
  return (
    <div className="w-full flex flex-col items-center">
      <h2 className="my-[60px] text-[42px] font-black">НОВОСТИ</h2>
      <div className="w-full h-auto">
        <NewsItem></NewsItem>
        <NewsItem></NewsItem>
        <NewsItem></NewsItem>
        <NewsItem></NewsItem>
      </div>
      <PagesList></PagesList>
    </div>
  );
}
