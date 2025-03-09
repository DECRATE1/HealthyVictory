import Image from "next/image";
import { roboto } from "../layout";

export default function Hero() {
  return (
    <div className="h-[600px] bg-[#121212] text-white text-[42px] font-black flex flex-col">
      <h2 className="my-[60px] self-center">О НАС</h2>
      <div className="flex justify-between">
        <Image
          src="/image 2.png"
          width={644}
          height={368}
          alt="О нас"
          className="scale-100"
        />
        <pre
          className={`${roboto.className} text-[20px] font-light w-[586px] h-[364px] text-wrap break-all overflow-ellipsis`}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.{" "}
        </pre>
      </div>
    </div>
  );
}
