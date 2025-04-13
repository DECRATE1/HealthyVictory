"use client";

import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function OurProjectsRead() {
  const videoFormats = ["mp4", "avi", "mov", "wmv", "mkv", "flv", "webm"];
  const path = usePathname();
  const id = path.split("/")[2];
  const [data, setData] = useState<{
    Date: string;
    Title: string;
    Preview: string | null;
    Text: string;
    Media: string[] | null;
  }>();
  useEffect(() => {
    const getProjects = async () => {
      const data = await client.getDocument(id).then((item: any) => {
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
          Media: item.Media.map((media: any) => {
            const [_file, id, extension] = media.asset._ref.split("-");
            return `https://cdn.sanity.io/files/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/${process.env.NEXT_PUBLIC_SANITY_DATASET}/${id}.${extension}`;
          }),
        };
      });
      setData(data);
    };

    getProjects();
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

          <div className="mt-10 flex flex-col gap-10 w-full items-center justify-center mb-10">
            {data.Media?.map((item: any, index) => {
              return videoFormats.includes(item.split(".")[3]) ?
                  <video
                    key={index}
                    src={item}
                    width={840}
                    controls
                    className=""
                  ></video>
                : <Image
                    key={index}
                    src={item}
                    width={840}
                    height={620}
                    alt={data.Title}
                    className="w-auto"
                  ></Image>;
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
