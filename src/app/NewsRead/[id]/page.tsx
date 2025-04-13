"use client";

import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function NewsReadPage() {
  const path = usePathname();
  const id = path.split("/")[2];
  const [data, setData] = useState<{
    Date: string;
    Title: string;
    Preview: string;
    Text: string;
  }>();

  useEffect(() => {
    const getNews = async () => {
      const data = await client
        .getDocument(id, { tag: "Preview" })
        .then((item: any) => {
          return {
            Date: item.Date,
            Title: item.Title,
            Preview:
              item.Preview ?
                urlFor(item.Preview.asset._ref)
                  .auto("format")
                  .fit("max")
                  .width(720)
                  .toString()
              : "",
            Text: item.Text,
          };
        });
      setData(data);
    };

    getNews();
  }, []);
  return (
    <div className="w-full h-fit flex flex-col items-center min-h-[1100px]">
      {data && (
        <span className="text-black h-10 mt-40 w-full font-raleway font-extrabold text-[48px] tracking-[-4%] flex items-center justify-center mb-16 max-[1280px]:text-center">
          {data.Title}
        </span>
      )}

      {data && (
        <div className="w-full flex items-center flex-col">
          <Image
            width={650}
            height={411}
            alt={data.Text}
            src={data.Preview}
            className="rounded-[50px] object-center w-[800px] h-auto max-[1280px]:px-4"
          ></Image>

          <div className="flex w-full h-auto mt-5 text-center items-center justify-center">
            <span className="font-normal text-[24px]">{data.Text}</span>
          </div>
        </div>
      )}

      <Link
        className="mt-auto mb-10 rounded-[50px] bg-[#DEFEFF] px-7 py-2 font-semibold text-[24px]"
        href={"/"}
      >
        НА ГЛАВНУЮ
      </Link>
    </div>
  );
}
