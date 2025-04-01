import Image from "next/image";
import Link from "next/link";
export default function Header() {
  return (
    <header className="w-full h-[91px] rounded-b-[40px] bg-white items-center text-black flex justify-between list-none absolute z-20 text-[20px] tracking-[-4%]">
      <Image
        src={"/logo.png"}
        width={53}
        height={53}
        alt="Logo"
        style={{ objectFit: "contain" }}
        className="drop-shadow-[0_0px_10px_rgba(0,0,0,0.25)]"
      ></Image>
      <li className="flex gap-24 max-[1441px]:gap-10 max-[1281px]:gap-5 text-[20px] [&>a]:tracking-[-4%] font-semibold">
        <Link href="/">ГЛАВНАЯ</Link>
        <Link href="/">НОВОСТИ</Link>
        <Link href="/">О НАС</Link>
        <Link href="/">КОНТАКТЫ</Link>
        <Link href="/">ПРИНЯТЬ УЧАСТИЕ</Link>
        <Link href="/">ПРОЕКТЫ</Link>
        <Link href="/">МАТЕРИАЛЫ</Link>
      </li>
      <span className="font-semibold">8 999 876 54 32</span>
    </header>
  );
}
