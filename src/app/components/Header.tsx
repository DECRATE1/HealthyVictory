import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full h-[112px] bg-[#E71300] items-center text-white flex justify-between list-none">
      <span className="font-black text-[64px]">ЛОРЕМ ИПСУМ</span>
      <li className="flex gap-24 text-2xl font-light">
        <Link href="/">ГЛАВНАЯ</Link>
        <Link href="/">О НАС</Link>
        <Link href="/">КОНТАКТЫ</Link>
        <Link href="/">ОБРАТНАЯ СВЯЗЬ</Link>
      </li>
    </header>
  );
}
