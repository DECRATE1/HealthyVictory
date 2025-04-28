import { Metadata } from "next";
import Materials from "./Materials";

export const metadata: Metadata = {
  title: "Полезные материалы",
};

export default function MaterialsPage() {
  return <Materials></Materials>;
}
