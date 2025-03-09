"use client";
import { useState } from "react";

export default function PagesList() {
  const [numberPages, setNumberPages] = useState<number[]>([1, 2, 3, 4, 5]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  return (
    <div className="w-full border-t-1 border-[#8F8F8F] flex">
      <li className="flex list-none gap-5">
        {numberPages.map((num, index) => {
          return (
            <button
              onClick={() => setCurrentPage(num)}
              key={index}
              className={`my-10 cursor-pointer w-[58px] h-[58px] ${
                currentPage === num ? `bg-[#E71300]` : `bg-[#828282]`
              } font-semibold text-2xl`}
            >
              {num}
            </button>
          );
        })}
      </li>
      <span className="pl-10 flex w-full items-center font-semibold text-2xl">
        далее
      </span>
    </div>
  );
}
