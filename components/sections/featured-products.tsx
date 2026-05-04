"use client";

import Link from "next/link";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const products = [
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
    isNew: false,
  },
  {
    id: 4,
    name: "리넨 랩 원피스",
    price: 248000,
    image:
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=983&auto=format&fit=crop",
    category: "DRESSES",
    isNew: false,
  },
];

function ProductCard({ product }: { product: (typeof products)[0] }) {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="group">
      <Link href={`/product/${product.id}`} className="block">
        <div className="relative aspect-[3/4] overflow-hidden rounded-lg mb-4 bg-muted">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
            style={{ backgroundImage: `url('${product.image}')` }}
          />
          {product.isNew && (
            <span className="absolute top-3 left-3 bg-accent text-accent-foreground text-xs px-3 py-1 rounded-full tracking-wider">
              NEW
            </span>
          )}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-3 right-3 bg-background/80 backdrop-blur-sm hover:bg-background"
            onClick={(e) => {
              e.preventDefault();
              setIsLiked(!isLiked);
            }}
          >
            <Heart
              className={`h-4 w-4 transition-colors ${
                isLiked ? "fill-accent text-accent" : ""
              }`}
            />
          </Button>

          {/* Quick Add */}
          <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <Button className="w-full" variant="secondary">
              장바구니 담기
            </Button>
          </div>
        </div>
      </Link>

      <div className="space-y-1">
        <p className="text-xs text-muted-foreground tracking-wider">
          {product.category}
        </p>
        <h3 className="font-medium">{product.name}</h3>
        <p className="text-sm text-foreground/80">
          ₩{product.price.toLocaleString()}
        </p>
      </div>
    </div>
  );
}

export function FeaturedProducts() {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <p className="text-sm tracking-[0.3em] text-muted-foreground mb-2 uppercase">
              Featured
            </p>
            <h2 className="font-serif text-3xl md:text-4xl">추천 상품</h2>
          </div>
          <Link
            href="/new"
            className="mt-4 md:mt-0 text-sm tracking-wider text-foreground/70 hover:text-foreground transition-colors underline underline-offset-4"
          >
            모든 상품 보기
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
