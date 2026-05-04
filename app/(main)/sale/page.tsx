import type { Metadata } from "next";
import { CategoryCatalog } from "@/components/category/category-catalog";

export const metadata: Metadata = {
  title: "세일 SALE | MAISON",
  description: "MAISON 세일 상품",
};

export default function SalePage() {
  return <CategoryCatalog slug="sale" />;
}
