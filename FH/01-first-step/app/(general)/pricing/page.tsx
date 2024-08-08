import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing Page",
  description: "You are in the page Pricing",
  keywords: ["Princing Page", "Marcos", "Princing of products"],
};

export default function PricingPage() {
  return (
    <>
      <span className="text-5xl">Princig Page</span>
    </>
  );
}
