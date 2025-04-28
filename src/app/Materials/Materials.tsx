"use client";
import { client } from "@/sanity/lib/client";
import { useEffect, useState } from "react";
import MaterialItem from "../components/MaterialItem";

export default function Materials() {
  const [materials, setMaterials] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const getMaterials = await client.fetch(
        "*[_type == 'Materials']{Date, Title, _id, Text, Preview{asset->{url}}}"
      );
      setMaterials(getMaterials);
    };
    getData();
  }, []);
  return (
    <div className="w-full flex flex-col min-h-screen [&>div]:px-15 max-[1280px]:px-4 max-[1280px]:[&>div]:px-0 max-[1280px]:items-center max-[1280px]:justify-center [&>header]:px-15 bg-white">
      <span className="text-black max-[1280px]:w-full max-[1280px]:text-center h-10 mt-40 w-full font-raleway font-extrabold text-[48px] tracking-[-4%] flex items-center justify-center mb-16">
        Материалы
      </span>

      <div className="w-full h-auto">
        {materials &&
          materials.map(
            (material: {
              Date: "string";
              Title: "string";
              _id: "string";
              Text: "string";
              Preview: { asset: { url: string } } | null;
            }) => {
              return (
                <MaterialItem
                  key={material._id}
                  pre={material.Preview ? material.Preview.asset.url : ""}
                  text={material.Text}
                  id={material._id}
                  title={material.Title}
                  date={material.Date}
                ></MaterialItem>
              );
            }
          )}
      </div>
    </div>
  );
}
