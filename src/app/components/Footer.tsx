import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full h-[394px] bg-[#242424] text-white">
      <h1 className="font-black text-[64px] my-4">ЛОРЕМ ИПСУМ</h1>
      <div className="flex justify-between [&>li]:flex [&>li]:flex-col [&>li]:font-light [&>li]:gap-y-3 [&>li]:text-[24px] text-white">
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
