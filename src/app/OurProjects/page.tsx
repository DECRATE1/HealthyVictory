"use client";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import ProjectItem from "../components/ProjectItem";

export default function OurProjects() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const getProjects = await client.fetch(
        "*[_type == 'Projects']{Date, Title, _id, Text, Preview{asset->{url}}}"
      );
      setProjects(getProjects);
    };
    getData();
  }, []);
  return (
    <div className="w-full flex flex-col min-h-screen [&>div]:px-15 max-[1280px]:px-4 max-[1280px]:[&>div]:px-0 max-[1280px]:items-center max-[1280px]:justify-center [&>header]:px-15 bg-white">
      <span className="text-black max-[1280px]:w-full max-[1280px]:text-center h-10 mt-40 w-full font-raleway font-extrabold text-[48px] tracking-[-4%] flex items-center justify-center mb-16">
        НАШИ ПРОЕКТЫ
      </span>

      <div className="w-full h-auto">
        {projects &&
          projects.map(
            (project: {
              Date: "string";
              Title: "string";
              _id: "string";
              Text: "string";
              Preview: { asset: { url: string } } | null;
            }) => {
              return (
                <ProjectItem
                  key={project._id}
                  pre={project.Preview ? project.Preview.asset.url : ""}
                  text={project.Text}
                  id={project._id}
                  title={project.Title}
                  date={project.Date}
                ></ProjectItem>
              );
            }
          )}
      </div>
    </div>
  );
}
