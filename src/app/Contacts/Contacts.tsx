"use client";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BsTelephone } from "react-icons/bs";
import { IoMailOutline } from "react-icons/io5";
import { PiTelegramLogoLight } from "react-icons/pi";
import { SlSocialVkontakte } from "react-icons/sl";

export default function Contacts() {
  const [phoneNumber, setPhoneNumber] = useState("Телефон");
  const [telegramLink, setTelegramLink] = useState();
  const [vkLink, setVkLink] = useState();
  const [email, setEmail] = useState("E-MAIL");
  useEffect(() => {
    const getInfo = async () => {
      const data = await client.fetch(
        "*[_type == 'Info'][0]{PhoneNumber, Telegram, Vk, Email}"
      );
      setPhoneNumber(data.PhoneNumber);
      setTelegramLink(data.Telegram);
      setVkLink(data.Vk);
      setEmail(data.Email);
    };
    getInfo();
  }, []);
  return (
    <div className="w-full h-fit flex flex-col items-center min-h-[1085px] ">
      <span className="text-black h-10 mt-40 w-full font-raleway font-extrabold text-[48px] tracking-[-4%] flex items-center justify-center mb-16">
        КОНТАКТЫ
      </span>

      {telegramLink && (
        <div className="flex flex-col gap-5 mt-10">
          <div className="select-none gap-4 w-auto h-[58px] hover:border-[1px] rounded-[50px] relative hover:bg-white bg-[#DEFEFF] text-[24px] font-semibold tracking-[-4%] flex items-center justify-center border-0 hover:drop-shadow-[0px_0px_40.1px_#DEFEFF]">
            <IoMailOutline className="" />
            {email}
          </div>

          <div className="select-none w-[315px] h-[58px] hover:border-[1px] rounded-[50px] relative hover:bg-white bg-[#DEFEFF] text-[24px] font-semibold tracking-[-4%] flex items-center justify-center border-0 hover:drop-shadow-[0px_0px_40.1px_#DEFEFF]">
            <BsTelephone className="absolute left-5" />
            {phoneNumber}
          </div>

          {telegramLink && (
            <a
              href={telegramLink}
              className="select-none w-[315px] h-[58px] hover:border-[1px] rounded-[50px] relative hover:bg-white bg-[#DEFEFF] text-[24px] font-semibold tracking-[-4%] flex items-center justify-center border-0 hover:drop-shadow-[0px_0px_40.1px_#DEFEFF]"
            >
              <PiTelegramLogoLight className="absolute left-5" />
              Telegram
            </a>
          )}

          {vkLink && (
            <a
              href={vkLink}
              className="select-none w-[315px] h-[58px] hover:border-[1px] rounded-[50px] relative hover:bg-white bg-[#DEFEFF] text-[24px] font-semibold tracking-[-4%] flex items-center justify-center border-0 hover:drop-shadow-[0px_0px_40.1px_#DEFEFF]"
            >
              <SlSocialVkontakte className="absolute left-5" />
              VK
            </a>
          )}
        </div>
      )}
    </div>
  );
}
