import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="h-[890px] max-[1280px]:h-screen w-full overflow-hidden text-white text-[42px] font-black flex flex-col mt-5 relative items-center justify-center gap-20 max-[1280px]:gap-y-10">
      <div
        className="absolute inset-0 bg-cover bg-center z-10 h-full"
        style={{ backgroundImage: "url(image2.png)" }}
      >
        <div className="bg-[#3F3D3D85] backdrop-blur-[5px] w-full h-full"></div>
      </div>
      <h2 className="z-20 font-[800px] text-[48px] text-[#DEFEFF]">О НАС</h2>
      <div className="flex z-20 items-center w-full justify-center flex-col max-[1280px]:px-4">
        <div className="w-full flex items-center justify-center flex-col gap-10 max-[1280px]:[&>pre]:w-fit overflow-hidden">
          <pre
            className={`text-[24px] w-[737px] overflow-ellipsis font-raleway font-medium text-center align-middle text-wrap break-all tracking-[-4%]`}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </pre>

          <pre
            className={`text-[24px] w-[737px] overflow-ellipsis font-raleway font-medium text-center align-middle text-wrap break-all`}
          >
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua.
          </pre>
        </div>
      </div>
      <Link
        href={"/"}
        className="bg-[#DEFEFF] w-[229px] h-[58px] z-20 font-semibold text-[24px] text-black uppercase rounded-full tracking-[-4%] items-center flex justify-center"
      >
        Подробнее
      </Link>
    </div>
  );
}
