import type { CategoryProduct } from "./category-products";
import { categoryProducts } from "./category-products";

/** 홈 추천 상품과 동일한 데이터 (featured-products.tsx와 맞춤) */
const featuredProducts: CategoryProduct[] = [
  {
    id: 1,
    name: "실크 블렌드 블라우스",
    price: 158000,
    image:
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=1160&auto=format&fit=crop",
    category: "TOPS",
    isNew: true,
  },
  {
    id: 2,
    name: "와이드 울 팬츠",
    price: 198000,
    image:
      "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?q=80&w=987&auto=format&fit=crop",
    category: "BOTTOMS",
    isNew: true,
  },
  {
    id: 3,
    name: "캐시미어 니트 가디건",
    price: 328000,
    image:
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=1010&auto=format&fit=crop",
    category: "KNITWEAR",
  },
  {
    id: 4,
    name: "리넨 랩 원피스",
    price: 248000,
    image:
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=983&auto=format&fit=crop",
    category: "DRESSES",
  },
];

const allFromCategories = Object.values(categoryProducts).flat();

export function getProductById(id: number): CategoryProduct | undefined {
  return (
    featuredProducts.find((p) => p.id === id) ??
    allFromCategories.find((p) => p.id === id)
  );
}
