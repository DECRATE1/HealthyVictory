import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Footer() {
  const [data, setData] = useState<{
    PhoneNumber: string;
    Email: string;
    Adress: string;
    Logo: { asset: { url: string } };
    Vk: string;
  }>();
  useEffect(() => {
    const getData = async () => {
      const data = await client.fetch(
        "*[_type == 'Info'][0]{PhoneNumber, Email, Adress, Logo{asset->{url}}, Vk}"
      );

      setData(data);
    };
    getData();
  }, []);
  return (
    <footer className="w-screen h-fit overflow-hidden bg-[#DEFEFF] text-black py-5 self-center">
      <div className="flex justify-between [&>li]:flex [&>li]:flex-col [&>li]:font-light [&>li]:gap-y-3 [&>li]:text-[24px] max-[1280px]:hidden">
        <div className="flex size-[100px]">
          {data && (
            <Image
              src={data.Logo.asset.url}
              alt="Logo"
              sizes="100px"
              width={79}
              height={79}
              style={{ objectFit: "contain" }}
              className="drop-shadow-[0_0px_10px_rgba(0,0,0,0.25)] "
            ></Image>
          )}
        </div>

        <li>
          <Link href="/">ГЛАВНАЯ</Link>
          <Link href="/AboutUs">О НАС</Link>
          <Link href="/Contacts">КОНТАКТЫ</Link>
          <Link href="/TakePart">ОБРАТНАЯ СВЯЗЬ</Link>
        </li>

        {data && (
          <li>
            <span>{data.Email}</span>
            <span>{data.PhoneNumber}</span>
            <span>{data.Adress}</span>
            <Link href={data.Vk}>{data.Vk}</Link>
          </li>
        )}

        <li>
          <Link href="/">ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ</Link>
          <Link href="/">ПОЛЬЗОВАТЕЛЬСКОЕ СОГЛАШЕНИЕ</Link>
        </li>
      </div>

      <div className="flex w-full flex-col [&>li]:flex [&>li]:flex-col [&>li]:font-light [&>li]:gap-y-3 max-[1280px]:[&>li]:gap-y-1 [&>li]:text-[14px] min-[1280px]:hidden">
        <div className="flex w-full [&>li]:flex [&>li]:flex-col [&>li]:font-light [&>li]:gap-y-3 [&>li]:text-[14px] max-[1280px]:[&>li]:gap-y-1">
          <div className="size-[100px]">
            <Image
              src={"/logo.png"}
              alt="Logo"
              sizes="100px"
              width={79}
              height={79}
              style={{ objectFit: "contain" }}
              className="drop-shadow-[0_0px_10px_rgba(0,0,0,0.25)] "
            ></Image>
          </div>
          <li className="flex flex-col">
            <Link href="/">ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ</Link>
            <Link href="/">ПОЛЬЗОВАТЕЛЬСКОЕ СОГЛАШЕНИЕ</Link>
          </li>
        </div>
        <div className="flex w-full [&>li]:flex [&>li]:flex-col [&>li]:font-light [&>li]:gap-y-3 [&>li]:text-[14px] max-[1280px]:[&>li]:gap-y-1">
          <li>
            <Link href="/">ГЛАВНАЯ</Link>
            <Link href="/AboutUs">О НАС</Link>
            <Link href="/Contacts">КОНТАКТЫ</Link>
            <Link href="/TakePart">ОБРАТНАЯ СВЯЗЬ</Link>
          </li>

          <li className="ml-auto">
            <span>test@test.com</span>
            <span>+7 999 999 999</span>
            <span>Тейково, ул.Пушкина д. 9</span>
            <Link href="/">https://vk.com/public218276417</Link>
          </li>
        </div>
      </div>
    </footer>
  );
}
