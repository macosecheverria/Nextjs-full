import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page",
  description: "You are in the page Contact",
  keywords: ["Contact Page", "Marcos", "Contact of Users"],
};

export default function ContactPage() {
  return (
    <>
      <span className="text-5xl">Contact Page</span>
    </>
  );
}
