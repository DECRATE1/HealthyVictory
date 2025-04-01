import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-screen h-[212px] bg-[#DEFEFF] text-black py-5 self-center">
      <div className="flex justify-between [&>li]:flex [&>li]:flex-col [&>li]:font-light [&>li]:gap-y-3 [&>li]:text-[24px]">
        <div className="flex size-[100px]">
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

        <li>
          <Link href="/">ГЛАВНАЯ</Link>
          <Link href="/">О НАС</Link>
          <Link href="/">КОНТАКТЫ</Link>
          <Link href="/">ОБРАТНАЯ СВЯЗЬ</Link>
        </li>

        <li>
          <Link href="/">test@test.com</Link>
          <Link href="/">+7 999 999 999</Link>
          <Link href="/">Тейково, ул.Пушкина д. 9</Link>
          <Link href="/">https://vk.com/public218276417</Link>
        </li>

        <li>
          <Link href="/">ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ</Link>
          <Link href="/">ПОЛЬЗОВАТЕЛЬСКОЕ СОГЛАШЕНИЕ</Link>
        </li>
      </div>
    </footer>
  );
}
