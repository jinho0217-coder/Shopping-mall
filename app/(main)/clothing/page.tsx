import type { Metadata } from "next";
import { CategoryCatalog } from "@/components/category/category-catalog";

export const metadata: Metadata = {
  title: "의류 CLOTHING | MAISON",
  description: "MAISON 의류 컬렉션",
};

export default function ClothingPage() {
  return <CategoryCatalog slug="clothing" />;
}
