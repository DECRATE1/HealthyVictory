"use client";
import { MouseEvent, useEffect, useState } from "react";
import NewsItem from "../components/NewsItem";
import PageButton from "../components/PageButton";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { client } from "@/sanity/lib/client";

export default function NewsPage() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [news, setNews] = useState<any>([]);
  const [pages, setPages] = useState<number[]>();
  const handleCurrentPage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  useEffect(() => {
    const getNews = async () => {
      const data = await client.fetch(
        `*[_type == 'News']{Text, Title, Preview{asset->{url}}, Date, _id}`
      );
      setNews(data);
    };
    getNews();
  }, []);
  useEffect(() => {
    setPages(Array.from({ length: Math.ceil(news.length / 5) }));
  }, [news]);
  return (
    <div className="w-full flex flex-col min-h-screen [&>div]:px-15 max-[1280px]:px-4 max-[1280px]:[&>div]:px-0 max-[1280px]:items-center max-[1280px]:justify-center [&>header]:px-15 bg-white">
      <span className="text-black  max-[1280px]:w-full max-[1280px]:text-center h-10 mt-40 w-full font-raleway font-extrabold text-[48px] tracking-[-4%] flex items-center justify-center mb-16">
        НОВОСТИ И СОБЫТИЯ
      </span>
      {news && (
        <div className="w-full h-auto">
          <div className="border-t-2 border-[#8F8F8F] w-full px-32" />
          {news.map((item: any, index: number) => {
            return (
              <NewsItem
                key={index}
                text={item.Text}
                title={item.Title}
                date={item.Date}
                pre={item.Preview.asset.url}
                id={item._id}
              />
            );
          })}
        </div>
      )}

      {pages && pages.length !== 1 && (
        <div className="w-full h-40 flex items-center gap-6 max-[1280px]:gap-2">
          {currentPage > 1 ?
            <FaArrowLeftLong
              size={18}
              onClick={() =>
                setCurrentPage(
                  currentPage === 1 ? currentPage : currentPage - 1
                )
              }
            ></FaArrowLeftLong>
          : ""}

          {pages.map((_, index) => {
            return (
              <PageButton
                pageNumber={index + 1}
                key={index}
                currentPage={index + 1 === currentPage ? true : false}
                handleCurrentPage={handleCurrentPage}
              ></PageButton>
            );
          })}

          {currentPage < pages[pages.length - 1] ?
            <FaArrowRightLong
              size={18}
              onClick={() =>
                setCurrentPage(
                  currentPage === pages[pages.length - 1] ?
                    currentPage
                  : currentPage + 1
                )
              }
            ></FaArrowRightLong>
          : ""}
        </div>
      )}
    </div>
  );
}
