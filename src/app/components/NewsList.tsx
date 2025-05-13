"use client";
import { useEffect, useState } from "react";
import Footer from "./Footer";
import NewsItem from "./NewsItem";
import PagesList from "./PagesList";
import { client } from "@/sanity/lib/client";
import Link from "next/link";

export default function NewsList() {
  const [news, setNews] = useState<
    {
      Title: string;
      Text: string;
      Preview: { asset: { url: string } };
      Date: string;
      _id: string;
    }[]
  >();
  useEffect(() => {
    const getNews = async () => {
      const news = await client.fetch(
        "*[_type =='News']{Title, Text, Preview{asset -> {url}}, Date, _id}"
      );
      setNews(news);
    };
    getNews();
  }, []);
  return (
    <div className="w-full flex flex-col items-center max-[1280px]:justify-center max-[1280px]:px-4">
      <h2 className="my-[60px] text-[42px] font-black tracking-[-4%]">
        НОВОСТИ
      </h2>
      <div className="w-full h-auto">
        {news?.map((item, index) => {
          return index <= 3 ?
              <NewsItem
                title={item.Title}
                text={item.Text}
                pre={item.Preview.asset.url}
                date={item.Date}
                id={item._id}
                key={index}
              ></NewsItem>
            : "";
        })}
      </div>

      <Link
        href={"/News"}
        className="rounded-full text-black text-[24px] tracking-[-4%] font-semibold bg-[#DEFEFF] w-[229px] h-[58px] my-10 self-start max-[1280px]:self-auto items-center justify-center flex"
      >
        ВСЕ НОВОСТИ
      </Link>
    </div>
  );
}
