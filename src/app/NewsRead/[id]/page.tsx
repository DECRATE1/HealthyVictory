"use client";

import { dataset } from "@/sanity/env";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { imageLoader } from "next-sanity/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useEditState } from "sanity";

export default function NewsReadPage() {
  const path = usePathname();
  const id = path.split("/")[2];

  const [title, setTitle] = useState();
  useEffect(() => {
    const getNews = async () => {
      const data = await client
        .getDocument(id, { tag: "Preview" })
        .then((item: any) => {
          return {
            Date: item.Date,
            Title: item.Title,
            Preview: urlFor(item.Preview.asset._ref)
              .auto("format")
              .fit("max")
              .width(720)
              .toString(),
            Text: item.Text,
          };
        });
    };
    getNews();
  }, []);
  return <div></div>;
}
