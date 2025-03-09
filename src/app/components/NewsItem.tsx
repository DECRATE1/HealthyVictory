import Image from "next/image";
import Link from "next/link";

export default function NewsItem() {
  return (
    <div className="border-t-1 border-[#8F8F8F] w-full h-[510px] flex py-16 justify-between">
      <Image
        src="/Rectangle 4.png"
        width={561}
        height={386}
        alt="Square"
      ></Image>
      <div>
        <h2 className="text-[42px] font-black">
          Lorem ipsum sit amet consectetur
        </h2>
        <pre className="break-all w-[698px] h-[224px] text-wrap font-light text-[21px] font-roboto mb-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit.
        </pre>
        <div className="flex justify-between">
          <Link
            href="/"
            className="bg-[#E71300] w-[229px] h-[58px] items-center justify-center flex text-2xl font-semibold uppercase"
          >
            Подробнее
          </Link>
          <span className="font-thin text-[40px] text-[#5F5F5F]">
            01.01.2025
          </span>
        </div>
      </div>
    </div>
  );
}
