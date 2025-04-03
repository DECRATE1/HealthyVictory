"use client";
import { MouseEvent, useState } from "react";
import NewsItem from "../components/NewsItem";
import PageButton from "../components/PageButton";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
export default function NewsPage() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const pages = [1, 2, 3, 4, 5];
  const handleCurrentPage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  return (
    <div className="w-full flex flex-col min-h-screen [&>div]:px-15 [&>header]:px-15 bg-white">
      <span className="text-black h-10 mt-40 w-full font-raleway font-extrabold text-[48px] tracking-[-4%] flex items-center justify-center mb-16">
        НОВОСТИ И СОБЫТИЯ
      </span>
      <div className="w-full h-auto">
        <NewsItem></NewsItem>
        <NewsItem></NewsItem>
        <NewsItem></NewsItem>
        <NewsItem></NewsItem>
        <div className="border-t-2 border-[#8F8F8F] w-full px-32"></div>
      </div>

      <div className="w-full h-40 flex items-center gap-6">
        {currentPage > 1 ? (
          <FaArrowLeftLong
            size={18}
            onClick={() =>
              setCurrentPage(
                currentPage === pages[0] ? currentPage : currentPage - 1
              )
            }
          ></FaArrowLeftLong>
        ) : (
          ""
        )}

        {pages.map((number, index) => {
          return (
            <PageButton
              pageNumber={number}
              key={index}
              currentPage={index + 1 === currentPage ? true : false}
              handleCurrentPage={handleCurrentPage}
            ></PageButton>
          );
        })}

        {currentPage < pages[pages.length - 1] ? (
          <FaArrowRightLong
            size={18}
            onClick={() =>
              setCurrentPage(
                currentPage === pages[pages.length - 1]
                  ? currentPage
                  : currentPage + 1
              )
            }
          ></FaArrowRightLong>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
