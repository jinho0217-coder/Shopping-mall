"use client";

import { useMemo, useState } from "react";
import { Slider } from "@/components/ui/slider";
import type { CategoryProduct } from "@/lib/category-products";
import { CategoryProductGrid } from "./category-product-grid";

function formatWon(n: number) {
  return `₩${n.toLocaleString("ko-KR")}`;
}

export function AccessoriesPriceFilter({ products }: { products: CategoryProduct[] }) {
  const bounds = useMemo(() => {
    if (products.length === 0) {
      return { min: 0, max: 0 };
    }
    const prices = products.map((p) => p.price);
    const min = Math.min(...prices);
    const max = Math.max(...prices);
    return { min, max };
  }, [products]);

  const [range, setRange] = useState<[number, number]>(() => {
    if (products.length === 0) return [0, 0];
    const prices = products.map((p) => p.price);
    return [Math.min(...prices), Math.max(...prices)];
  });

  const filtered = useMemo(
    () =>
      products.filter(
        (p) => p.price >= range[0] && p.price <= range[1],
      ),
    [products, range],
  );

  const step = 10000;

  if (products.length === 0) {
    return <CategoryProductGrid products={[]} />;
  }

  if (bounds.min === bounds.max) {
    return <CategoryProductGrid products={products} />;
  }

  return (
    <>
      <section className="border-b border-border bg-secondary">
        <div className="container mx-auto px-4 py-8 md:py-10">
          <div className="max-w-xl">
            <p className="text-sm tracking-[0.2em] text-muted-foreground uppercase mb-2">
              Filter
            </p>
            <h2 className="font-serif text-xl md:text-2xl mb-6">가격대</h2>
            <Slider
              aria-label="가격 범위"
              min={bounds.min}
              max={bounds.max}
              step={step}
              value={[range[0], range[1]]}
              onValueChange={(v) => {
                const next: [number, number] = [v[0] ?? bounds.min, v[1] ?? bounds.max];
                setRange(next);
              }}
              className="py-4"
            />
            <div className="flex justify-between text-sm text-muted-foreground tracking-wide mt-2">
              <span>{formatWon(range[0])}</span>
              <span>{formatWon(range[1])}</span>
            </div>
          </div>
        </div>
      </section>

      {filtered.length > 0 ? (
        <CategoryProductGrid products={filtered} />
      ) : (
        <section className="pb-16 md:pb-24 bg-secondary">
          <div className="container mx-auto px-4 py-16 text-center text-muted-foreground">
            선택한 가격대에 해당하는 상품이 없습니다. 슬라이더 범위를 넓혀 보세요.
          </div>
        </section>
      )}
    </>
  );
}
