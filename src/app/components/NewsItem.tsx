import Image from "next/image";
import Link from "next/link";

export default function NewsItem() {
  return (
    <div className="border-t-2 border-[#8F8F8F] w-full h-[510px] flex py-16 justify-between ">
      <div className="w-fit flex relative">
        <Image
          src="/image2.png"
          width={561}
          height={386}
          alt="Square"
          className="bg-center object-center rounded-[50px] "
        ></Image>
        <span className="absolute bottom-3 left-0 right-0 mx-auto w-fit font-light text-[24px] tracking-[-4%] text-[#93FBFF]">
          01.01.2025
        </span>
      </div>

      <div className="max-[1281px]:w-[500px] h-full">
        <h2 className="text-[42px] font-extrabold">
          Lorem ipsum sit amet consectetur
        </h2>
        <pre className="break-all min-[1281px]:w-[698px] h-[224px] text-wrap font-light text-[24px] font-raleway mb-5 tracking-[-4%] max-[1281px]:text-[20px] break-words">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute
          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum.
        </pre>
        <div className="flex justify-between">
          <Link
            href="/"
            className="w-[229px] h-[58px] items-center justify-center flex text-2xl font-semibold uppercase rounded-full bg-[#DEFEFF] hover:border-[1px] hover:bg-white hover:drop-shadow-[0px_0px_40.1px_#DEFEFF]"
          >
            Подробнее
          </Link>
        </div>
      </div>
    </div>
  );
}
