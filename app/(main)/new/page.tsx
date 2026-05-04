import type { Metadata } from "next";
import { CategoryCatalog } from "@/components/category/category-catalog";

export const metadata: Metadata = {
  title: "신상품 NEW | MAISON",
  description: "MAISON 신상품 컬렉션",
};

export default function NewPage() {
  return <CategoryCatalog slug="new" />;
}
