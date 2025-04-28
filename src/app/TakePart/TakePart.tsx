"use client";
import { ChangeEvent, useEffect, useRef, useState } from "react";

export default function TakePart() {
  const areaRef = useRef<HTMLTextAreaElement>(null);
  const [message, setMessage] = useState("");
  const handleMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  useEffect(() => {
    const changeHeight = () => {
      if (areaRef.current) {
        areaRef.current.style.height = "0px";
        areaRef.current.style.height = areaRef.current.scrollHeight + "px";
      }
    };
    changeHeight();
  }, [message]);
  const placeholders = ["Имя", "Телефон", "E-mail", "Сообщение"];
  return (
    <div className="w-full h-fit flex flex-col items-center min-h-[1100px]">
      <span className="text-black h-10 mt-40 w-full font-raleway font-extrabold text-[48px] tracking-[-4%] flex items-center justify-center mb-16 max-[1280px]:text-center">
        ПРИНЯТЬ УЧАСТИЕ
      </span>

      <div className="border-t-2 border-[#8F8F8F] w-full pt-32"></div>
      <div className="w-full max-[1280px]:screen max-[1280px]:px-4 items-center justify-center flex flex-col gap-5 mb-32">
        {placeholders.map((item, index) => {
          return item !== "Сообщение" ?
              <input
                key={index}
                placeholder={item}
                className="border-[1px] border-black w-[1080px] max-[1280px]:w-11/12 h-[82px] rounded-[50px] pl-10 placeholder-black text-[32px] font-normal tracking-[-6%]"
              ></input>
            : <textarea
                key={index}
                placeholder={item}
                value={message}
                onChange={(e) => handleMessage(e)}
                ref={areaRef}
                className="border-[1px] border-black w-[1080px] max-[1280px]:w-11/12 rounded-[50px] pl-10 placeholder-black text-[32px] font-normal tracking-[-6%] resize-none pt-2 pr-10 pb-10 overflow-hidden"
                style={{ minHeight: "333px" }}
              ></textarea>;
        })}
      </div>
      <div className="border-t-2 border-[#8F8F8F] w-full px-32"></div>

      <div className="flex flex-col items-center justify-center"></div>

      <div className="my-24 flex items-center justify-center">
        <button className="bg-[#DEFEFF] w-[244px] h-[58px] rounded-[50px] font-raleway font-semibold tracking-[-6%] text-[24px]">
          ОТПРАВИТЬ
        </button>
      </div>
    </div>
  );
}
