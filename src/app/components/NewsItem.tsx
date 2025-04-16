import { url } from "inspector";
import Image from "next/image";
import Link from "next/link";

export default function NewsItem({
  title,
  text,
  date,
  pre,
  id,
}: {
  title: string;
  text: string;
  date: string;
  pre: string;
  id: string;
}) {
  return (
    <div className="border-t-2 border-[#8F8F8F] w-full h-[510px] max-[1280px]:h-fit flex py-16 justify-between overflow-hidden">
      <div className="w-fit flex relative max-[1280px]:hidden">
        <Image
          src={pre}
          width={561}
          height={386}
          alt="Square"
          className="bg-center object-center rounded-[50px] "
        ></Image>
        <span className="absolute bottom-3 left-0 right-0 mx-auto w-fit font-light text-[24px] tracking-[-4%] text-[#93FBFF]">
          {date}
        </span>
      </div>

      <div className="max-[1281px]:w-[500px] h-full max-[1280px]:flex  max-[1280px]:flex-col max-[1280px]:items-center max-[1280px]:justify-center max-[1280px]:gap-10  max-[1280px]:text-center max-[1280px]:w-full">
        <h2 className="text-[42px] font-extrabold max-[1280px]:text-[24px]">
          {title}
        </h2>
        <span className="break-all min-[1281px]:w-[698px] h-[224px] text-wrap font-light text-[24px] font-raleway mb-5 tracking-[-4%] max-[1281px]:text-[20px] break-words max-[1280px]:px-4 max-[1280px]:hidden">
          {text}
        </span>

        {/*Mobile Phone*/}
        <div className="flex relative min-[1280px]:hidden max-[800px]:w-full h-[350px]">
          {pre && (
            <Image
              src={pre}
              width={561}
              height={386}
              alt="Square"
              className="object-center rounded-[50px] flex w-full"
            ></Image>
          )}
          <div className="flex items-center w-full flex-col h-20 absolute rounded-b-[50px] bottom-0 bg-white/10 backdrop-blur-xl justify-center">
            <span className="break-all min-[1281px]:w-[698px] h-[224px] max-[1280px]:max-h-32 max-[1280px]:h-fit max-[1280px]:line-clamp-2 text-white max-[1280px]:text-[12px] flex truncate overflow-hidden text-wrap font-light text-[24px] font-raleway max-[1280px]:mb-0 mb-5 tracking-[-4%] max-[1281px]:text-[20px] break-words max-[1280px]:px-4">
              {text}
            </span>
            <span className="bottom-3 left-0 right-0 mx-auto w-fit font-light text-[24px] max-[1280px]:text-[15px] tracking-[-4%] text-[#93FBFF] ">
              {date}
            </span>
          </div>
        </div>
        <div className="flex items-center">
          <Link
            href={`/NewsRead/${id}`}
            className="w-[229px] h-[58px] items-center justify-center flex text-2xl font-semibold uppercase rounded-full bg-[#DEFEFF] hover:border-[1px] hover:bg-white hover:drop-shadow-[0px_0px_40.1px_#DEFEFF]"
          >
            Подробнее
          </Link>
        </div>
      </div>
    </div>
  );
}
