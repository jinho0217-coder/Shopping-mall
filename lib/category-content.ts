export type CategorySlug =
  | "new"
  | "clothing"
  | "accessories"
  | "lifestyle"
  | "sale";

export const categoryContent: Record<
  CategorySlug,
  { eyebrow: string; title: string; description: string }
> = {
  new: {
    eyebrow: "NEW ARRIVALS",
    title: "신상품",
    description:
      "이번 시즌 새롭게 들어온 피스를 한곳에서 만나보세요. 한정 수량으로 준비된 아이템도 있습니다.",
  },
  clothing: {
    eyebrow: "CLOTHING",
    title: "의류",
    description:
      "데일리부터 포멀까지, 실루엣과 소재에 집중한 MAISON 의류 컬렉션입니다.",
  },
  accessories: {
    eyebrow: "ACCESSORIES",
    title: "액세서리",
    description:
      "가방, 주얼리, 스카프 등 작은 디테일로 완성도를 높여 보세요.",
  },
  lifestyle: {
    eyebrow: "LIFESTYLE",
    title: "라이프스타일",
    description:
      "홈 프래그런스, 리빙 소품 등 일상의 분위기를 바꿔 줄 큐레이션입니다.",
  },
  sale: {
    eyebrow: "SALE",
    title: "세일",
    description:
      "시즌오프 및 특가 상품입니다. 교환·환불 정책은 상세 페이지에서 확인해 주세요.",
  },
};
