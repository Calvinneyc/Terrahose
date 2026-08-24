import { Metadata } from "next";
import { ContactPage } from "@/components/ContactPage";
import { pages } from "@/data/pages";

export async function generateMetadata(): Promise<Metadata> {
  const p = pages.contact;
  return { title: p.title, description: p.description };
}

export default function Contact() {
  return <ContactPage />;
}
