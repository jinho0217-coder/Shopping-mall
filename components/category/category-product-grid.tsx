"use client";

import Link from "next/link";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import type { CategoryProduct } from "@/lib/category-products";

function ProductCard({ product }: { product: CategoryProduct }) {
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
          {product.originalPrice != null && (
            <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full tracking-wider">
              SALE
            </span>
          )}
          <Button
            type="button"
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
          {product.originalPrice != null && (
            <span className="text-muted-foreground line-through mr-2">
              ₩{product.originalPrice.toLocaleString()}
            </span>
          )}
          ₩{product.price.toLocaleString()}
        </p>
      </div>
    </div>
  );
}

export function CategoryProductGrid({ products }: { products: CategoryProduct[] }) {
  return (
    <section className="pb-16 md:pb-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
