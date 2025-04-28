import { client } from "@/sanity/lib/client";
import { Metadata } from "next";
import { title } from "process";
import OurProjectsRead from "../OurProjectsRead";

export async function generateMetadata({ params }: any) {
  const { id } = await params;
  const projectTitle = await client.fetch(
    "*[_type == 'Projects' && _id == $id][0]{Title}",
    { id: id }
  );
  return {
    title: projectTitle.Title,
  };
}

export default function OurProjectsReadPage() {
  return <OurProjectsRead />;
}
