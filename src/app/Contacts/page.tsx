import { Metadata } from "next";
import Contacts from "./Contacts";
export const metadata: Metadata = {
  title: "Контакты",
};
export default function ContactsPage() {
  return <Contacts></Contacts>;
}
