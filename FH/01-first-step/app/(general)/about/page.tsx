import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page",
  description: "You are in the page About",
  keywords: ["About Page", "Marcos", "Information of Users"],
};

export default function AboutPage() {
  return (
      <span className="text-5xl">About Page</span>
  );
}
