import type { Metadata } from "next";
import { CategoryCatalog } from "@/components/category/category-catalog";

export const metadata: Metadata = {
  title: "액세서리 ACCESSORIES | MAISON",
  description: "MAISON 액세서리 컬렉션",
};

export default function AccessoriesPage() {
  return <CategoryCatalog slug="accessories" />;
}
