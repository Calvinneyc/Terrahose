import { Metadata } from "next";
import { AboutPage } from "@/components/AboutPage";
import { pages } from "@/data/pages";

export async function generateMetadata(): Promise<Metadata> {
  const p = pages.about;
  return { title: p.title, description: p.description };
}

export default function About() {
  return <AboutPage />;
}
