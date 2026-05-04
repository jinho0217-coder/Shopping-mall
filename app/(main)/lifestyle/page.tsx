import type { Metadata } from "next";
import { CategoryCatalog } from "@/components/category/category-catalog";

export const metadata: Metadata = {
  title: "라이프스타일 LIFESTYLE | MAISON",
  description: "MAISON 라이프스타일 컬렉션",
};

export default function LifestylePage() {
  return <CategoryCatalog slug="lifestyle" />;
}
