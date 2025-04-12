"use client";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function AboutUsPage() {
  const [info, setInfo] = useState<{
    Big: string;
    SecondImage: { asset: { url: string } };
  }>();
  useEffect(() => {
    const getInfo = async () => {
      const data = await client.fetch(
        "*[_type == 'AboutUs'][0]{Big, SecondImage{asset->{url}}}"
      );
      console.log(data);
      setInfo(data);
    };
    getInfo();
  }, []);
  return (
    <div className="w-full h-fit flex flex-col items-center min-h-[1095px] max-[1280px]:justify-center">
      <span className="text-black h-10 mt-40 w-full font-raleway font-extrabold text-[48px] tracking-[-4%] flex items-center justify-center mb-16">
        О НАС
      </span>

      {info && (
        <div className="w-full h-fit flex justify-between items-center max-[1280px]:justify-center max-[1280px]:flex-col max-[1280px]:text-center max-[1280px]:gap-5">
          <Image
            src={info.SecondImage.asset.url}
            width={639}
            height={427}
            alt="О нас"
            className="w-[639px] h-[427px] rounded-[50px] object-cover"
          ></Image>

          <pre className="font-raleway font-normal tracking-[-4%] text-[24px] text-wrap break-words w-[50%] h-fit">
            {info.Big}
          </pre>
        </div>
      )}

      <Link
        href={"/"}
        className="w-[229px] h-[58px] rounded-[67px] bg-[#DEFEFF] font-raleway tracking-[-4%] text-[24px] font-semibold mt-24 max-[1280px]:mb-10 items-center justify-center flex"
      >
        НА ГЛАВНУЮ
      </Link>
    </div>
  );
}
