import { MouseEvent, useEffect, useState } from "react";
import NewsItem from "../components/NewsItem";
import PageButton from "../components/PageButton";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { client } from "@/sanity/lib/client";
import News from "./News";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Новости",
};
export default function NewsPage() {
  return <News></News>;
}
