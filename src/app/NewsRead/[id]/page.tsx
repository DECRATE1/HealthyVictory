import { client } from "@/sanity/lib/client";
import NewsRead from "../NewsRead";
import { Metadata, ResolvingMetadata } from "next";
export async function generateMetadata({ params }: any): Promise<Metadata> {
  const { id } = await params;
  const newsTitle = await client.fetch(
    `*[_type == 'News' && _id == $id][0]{Title}`,
    {
      id: id,
    }
  );

  return {
    title: newsTitle.Title,
  };
}
export default function NewsReadPage() {
  return <NewsRead></NewsRead>;
}
