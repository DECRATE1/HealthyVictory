"use client";

import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
/*Media: item.Media.map((media: any) => {
            const [_file, id, extension] = media.asset._ref.split("-");
            return `https://cdn.sanity.io/files/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/${process.env.NEXT_PUBLIC_SANITY_DATASET}/${id}.${extension}`;
          }),*/
export default function MaterialRead() {
  const fileFormats = [
    ".pdf", // PDF файлы
    ".doc", // Word документы
    ".docx", // Word документы (новый формат)
    ".xls", // Excel файлы
    ".xlsx", // Excel файлы (новый формат)
    ".ppt", // PowerPoint файлы
    ".pptx", // PowerPoint файлы (новый формат)
    ".txt", // Текстовые файлы
    ".csv", // CSV файлы
    ".zip", // ZIP архивы
    ".rar", // RAR архивы
    ".tar", // TAR архивы
    ".gz", // GZ архивы
  ].map((item) => item.split(".")[1]);
  const videoFormats = [
    ".mp4",
    ".avi",
    ".mov",
    ".wmv",
    ".mkv",
    ".flv",
    ".webm",
    ".mpeg",
    ".mpg",
    ".3gp",
  ].map((item) => item.split(".")[1]);

  const path = usePathname();
  const id = path.split("/")[2];
  const [data, setData] = useState<{
    Date: string;
    Title: string;
    Preview: string | null;
    Text: string;
    Documents: any[] | null;
  }>();
  useEffect(() => {
    const getMaterials = async () => {
      const data = await client.getDocument(id).then(async (item: any) => {
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
            : null,
          Text: item.Text,
          Documents:
            item.Document ?
              await Promise.all(
                item.Documents.map(async (item: any) => {
                  return await client.fetch(`*[_id == $fileref][0]`, {
                    fileref: item.asset._ref,
                  });
                })
              )
            : null,
        };
      });

      setData(data);
      console.log(data);
    };

    getMaterials();
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
          {data.Preview && (
            <Image
              width={650}
              height={411}
              alt={data.Text}
              src={data.Preview}
              className="rounded-[50px] object-center w-[800px] h-auto max-[1280px]:px-4"
            ></Image>
          )}

          <div className="flex w-full h-auto mt-5 text-center items-center justify-center">
            <span className="font-normal text-[24px]">{data.Text}</span>
          </div>

          <div className="w-full flex flex-col gap-10 mt-10 items-center justify-center">
            {data.Documents?.map((item) => {
              return (
                <a
                  href={item.url}
                  key={item._id}
                  className="text-black text-[24px] h-[10px]"
                >
                  {item.originalFilename}
                </a>
              );
            })}
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
