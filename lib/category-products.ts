import type { CategorySlug } from "./category-content";

export type CategoryProduct = {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  isNew?: boolean;
  originalPrice?: number;
};

export const categoryProducts: Record<CategorySlug, CategoryProduct[]> = {
  new: [
    {
      id: 101,
      name: "오간자 실크 셔츠",
      price: 189000,
      image:
        "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=1000&auto=format&fit=crop",
      category: "TOPS",
      isNew: true,
    },
    {
      id: 102,
      name: "크롭 테일러드 재킷",
      price: 358000,
      image:
        "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1000&auto=format&fit=crop",
      category: "OUTER",
      isNew: true,
    },
    {
      id: 103,
      name: "메리노 울 스커트",
      price: 218000,
      image:
        "https://images.unsplash.com/photo-1583496661160-fb5886a0aa0b?q=80&w=1000&auto=format&fit=crop",
      category: "BOTTOMS",
      isNew: true,
    },
    {
      id: 104,
      name: "레더 미니 백",
      price: 278000,
      image:
        "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1000&auto=format&fit=crop",
      category: "BAGS",
      isNew: true,
    },
  ],
  clothing: [
    {
      id: 201,
      name: "테일러드 울 코트",
      price: 498000,
      image:
        "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?q=80&w=1000&auto=format&fit=crop",
      category: "OUTER",
    },
    {
      id: 202,
      name: "캐시미어 크루넥 니트",
      price: 298000,
      image:
        "https://images.unsplash.com/photo-1576566588028-4147f3842e27?q=80&w=1000&auto=format&fit=crop",
      category: "KNITWEAR",
    },
    {
      id: 203,
      name: "스트레이트 데님",
      price: 168000,
      image:
        "https://images.unsplash.com/photo-1541094609-a2a4de224731?q=80&w=1000&auto=format&fit=crop",
      category: "BOTTOMS",
    },
    {
      id: 204,
      name: "실크 슬립 드레스",
      price: 328000,
      image:
        "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1000&auto=format&fit=crop",
      category: "DRESSES",
    },
  ],
  accessories: [
    {
      id: 301,
      name: "체인 네크리스",
      price: 128000,
      image:
        "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1000&auto=format&fit=crop",
      category: "JEWELRY",
    },
    {
      id: 302,
      name: "실크 스카프 90",
      price: 98000,
      image:
        "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?q=80&w=1000&auto=format&fit=crop",
      category: "SCARVES",
    },
    {
      id: 303,
      name: "스트럭처드 토트",
      price: 368000,
      image:
        "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=1000&auto=format&fit=crop",
      category: "BAGS",
    },
    {
      id: 304,
      name: "레더 벨트",
      price: 118000,
      image:
        "https://images.unsplash.com/photo-1624222247344-550fb60583fd?q=80&w=1000&auto=format&fit=crop",
      category: "BELTS",
    },
  ],
  lifestyle: [
    {
      id: 401,
      name: "우디 앰버 캔들",
      price: 68000,
      image:
        "https://images.unsplash.com/photo-1603006905006-38f2aebaf012?q=80&w=1000&auto=format&fit=crop",
      category: "HOME",
    },
    {
      id: 402,
      name: "리넨 테이블 러너",
      price: 89000,
      image:
        "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1000&auto=format&fit=crop",
      category: "HOME",
    },
    {
      id: 403,
      name: "세라믹 머그 세트",
      price: 72000,
      image:
        "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?q=80&w=1000&auto=format&fit=crop",
      category: "TABLEWARE",
    },
    {
      id: 404,
      name: "룸 스프레이",
      price: 52000,
      image:
        "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?q=80&w=1000&auto=format&fit=crop",
      category: "FRAGRANCE",
    },
  ],
  sale: [
    {
      id: 501,
      name: "울 블렌드 블레이저",
      price: 248000,
      originalPrice: 398000,
      image:
        "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=1000&auto=format&fit=crop",
      category: "OUTER",
    },
    {
      id: 502,
      name: "와이드 코튼 팬츠",
      price: 138000,
      originalPrice: 198000,
      image:
        "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?q=80&w=1000&auto=format&fit=crop",
      category: "BOTTOMS",
    },
    {
      id: 503,
      name: "캐시미어 가디건",
      price: 228000,
      originalPrice: 328000,
      image:
        "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=1000&auto=format&fit=crop",
      category: "KNITWEAR",
    },
    {
      id: 504,
      name: "리넨 랩 원피스",
      price: 178000,
      originalPrice: 248000,
      image:
        "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1000&auto=format&fit=crop",
      category: "DRESSES",
    },
  ],
};
