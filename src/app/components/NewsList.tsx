import Footer from "./Footer";
import NewsItem from "./NewsItem";
import PagesList from "./PagesList";

export default function NewsList() {
  return (
    <div className="w-full flex flex-col items-center max-[1280px]:justify-center max-[1280px]:px-4">
      <h2 className="my-[60px] text-[42px] font-black tracking-[-4%]">
        НОВОСТИ
      </h2>
      <div className="w-full h-auto">
        <NewsItem></NewsItem>
        <NewsItem></NewsItem>
        <NewsItem></NewsItem>
        <NewsItem></NewsItem>
      </div>

      <button className="rounded-full text-black text-[24px] tracking-[-4%] font-semibold bg-[#DEFEFF] w-[229px] h-[58px] my-10 self-start max-[1280px]:self-auto">
        ВСЕ НОВОСТИ
      </button>
    </div>
  );
}
