import { client } from "@/sanity/lib/client";
import MaterialRead from "../MaterialsRead";

export async function generateMetadata({ params }: any) {
  const { id } = await params;
  const materialTitle = await client
    .fetch("*[_type == 'Materials' && _id == $id][0]{Title}", { id: id })
    .then((item) => {
      return item.Title;
    });
  return {
    title: materialTitle,
  };
}
export default function MaterialReadPage() {
  return <MaterialRead></MaterialRead>;
}
