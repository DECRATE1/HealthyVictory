import Image from "next/image";

export default function AboutUsPage() {
  return (
    <div className="w-full h-fit flex flex-col items-center min-h-[1095px] max-[1280px]:justify-center">
      <span className="text-black h-10 mt-40 w-full font-raleway font-extrabold text-[48px] tracking-[-4%] flex items-center justify-center mb-16">
        О НАС
      </span>

      <div className="w-full h-fit flex justify-between items-center max-[1280px]:justify-center max-[1280px]:flex-col max-[1280px]:text-center max-[1280px]:gap-5">
        <Image
          src={"/image2.png"}
          width={639}
          height={427}
          alt="О нас"
          className="w-[639px] h-[427px] rounded-[50px] object-cover"
        ></Image>

        <pre className="font-raleway font-normal tracking-[-4%] text-[24px] text-wrap break-words w-[50%] h-fit">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit
          amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit.
        </pre>
      </div>

      <button className="w-[229px] h-[58px] rounded-[67px] bg-[#DEFEFF] font-raleway tracking-[-4%] text-[24px] font-semibold mt-24 max-[1280px]:mb-10">
        НА ГЛАВНУЮ
      </button>
    </div>
  );
}
