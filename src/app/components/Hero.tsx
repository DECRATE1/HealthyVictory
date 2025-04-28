"use client";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Hero() {
  const [aboutUsInfo, setAboutUsInfo] = useState<{
    Short: string;
    MainImage: { asset: { url: string } };
  }>();
  useEffect(() => {
    const getHero = async () => {
      const getInfo = await client.fetch(
        `*[_type == 'AboutUs'][0]{Short, MainImage{asset->{url}}}`
      );
      setAboutUsInfo(getInfo);
    };
    getHero();
  }, []);
  return (
    <div className="h-[890px] max-[1280px]:h-screen w-full overflow-hidden text-white text-[42px] font-black flex flex-col mt-5 relative items-center justify-center gap-20 max-[1280px]:gap-y-10">
      {aboutUsInfo && (
        <div
          className="absolute inset-0 bg-cover bg-center z-10 h-full"
          style={{
            backgroundImage: `url(${aboutUsInfo?.MainImage.asset.url})`,
          }}
        >
          <div className="bg-[#3F3D3D85] backdrop-blur-[5px] w-full h-full"></div>
        </div>
      )}
      <h2 className="z-20 font-[800px] text-[48px] text-[#DEFEFF]">О НАС</h2>
      <div className="flex z-20 items-center w-full justify-center flex-col max-[1280px]:px-4">
        <div className="w-full flex items-center justify-center flex-col gap-10 max-[1280px]:[&>pre]:w-fit overflow-hidden">
          {aboutUsInfo && (
            <pre
              className={`text-[24px] w-[737px] overflow-ellipsis font-raleway font-medium text-center align-middle text-wrap break-all tracking-[-4%]`}
            >
              {aboutUsInfo?.Short}
            </pre>
          )}
        </div>
      </div>
      <Link
        href={"/AboutUs"}
        className="bg-[#DEFEFF] w-[229px] h-[58px] z-20 font-semibold text-[24px] text-black uppercase rounded-full tracking-[-4%] items-center flex justify-center"
      >
        Подробнее
      </Link>
    </div>
  );
}
