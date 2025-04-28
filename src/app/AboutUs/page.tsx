import { Metadata } from "next";
import AboutUs from "./AboutUs";
export const metadata: Metadata = {
  title: "О нас",
};
export default function AboutUsPage() {
  return <AboutUs></AboutUs>;
}
