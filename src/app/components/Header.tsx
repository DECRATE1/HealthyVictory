"use client";
import { client } from "@/sanity/lib/client";
import { sanityFetch } from "@/sanity/lib/live";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";

export default function Header() {
  const [menuIsHide, setMenuIsHide] = useState<boolean>(true);

  const [data, setData] = useState<{
    PhoneNumber: string;
    Logo: { asset: { url: string } };
  }>();
  useEffect(() => {
    const getData = async () => {
      const info = await client.fetch(
        `*[_type == 'Info'][0]{PhoneNumber, Logo{asset->{url}}}`
      );
      setData(info);
    };
    getData();
  }, []);
  return (
    <header className="w-full h-[91px] rounded-b-[40px] bg-white items-center text-black flex justify-between list-none absolute z-20 text-[20px] tracking-[-4%] hover:drop-shadow-[0px_0px_40.1px_#DEFEFF]">
      {data && (
        <Link href={"/"} className="cursor-pointer">
          <Image
            src={data.Logo.asset.url}
            width={53}
            height={53}
            alt="Logo"
            style={{ objectFit: "contain" }}
            className="drop-shadow-[0_0px_10px_rgba(0,0,0,0.25)]"
          ></Image>
        </Link>
      )}
      <li className="flex gap-24 min-[1280px]:gap-10 min-[1920px]:gap-24  text-[20px] [&>a]:tracking-[-4%] font-semibold max-[1280px]:hidden">
        <Link href="/">ГЛАВНАЯ</Link>
        <Link href="/News">НОВОСТИ</Link>
        <Link href="/AboutUs">О НАС</Link>
        <Link href="/Contacts">КОНТАКТЫ</Link>
        <Link href="/TakePart">ПРИНЯТЬ УЧАСТИЕ</Link>
        <Link href="/OurProjects">ПРОЕКТЫ</Link>
        <Link href="/Materials">МАТЕРИАЛЫ</Link>
      </li>
      <FaBars
        className="min-[1280px]:hidden fill-[#93FBFF] size-8"
        onClick={() => setMenuIsHide(!menuIsHide)}
      ></FaBars>
      {!menuIsHide && (
        <li className="flex gap-24 max-[1441px]:gap-10 max-[1281px]:gap-5 text-[20px] [&>a]:tracking-[-4%] font-semibold absolute bg-white flex-col w-full inset-0 py-10 mt-13 -z-10 items-center transition-all duration-500 overflow-hidden h-fit">
          <Link href="/">ГЛАВНАЯ</Link>
          <Link href="/News">НОВОСТИ</Link>
          <Link href="/AboutUs">О НАС</Link>
          <Link href="/Contacts">КОНТАКТЫ</Link>
          <Link href="/TakePart">ПРИНЯТЬ УЧАСТИЕ</Link>
          <Link href="/OurProjects">ПРОЕКТЫ</Link>
          <Link href="/Materials">МАТЕРИАЛЫ</Link>
        </li>
      )}
      {data && (
        <span className="font-semibold max-[1280px]:hidden">
          {data?.PhoneNumber}
        </span>
      )}
    </header>
  );
}
