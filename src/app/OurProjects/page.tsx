import { Metadata } from "next";
import OurProjects from "./OurProjects";

export const metadata: Metadata = {
  title: "Наши проекты",
};

export default function OurProjectsPage() {
  return <OurProjects></OurProjects>;
}
