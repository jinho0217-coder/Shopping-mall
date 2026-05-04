import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { getProductById } from "@/lib/product-by-id";

type Props = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const num = Number(id);
  const product = Number.isFinite(num) ? getProductById(num) : undefined;
  if (!product) {
    return { title: "상품을 찾을 수 없습니다 | MAISON" };
  }
  return {
    title: `${product.name} | MAISON`,
    description: `${product.name} — ${product.category}`,
  };
}

export default async function ProductPage({ params }: Props) {
  const { id } = await params;
  const num = Number(id);
  const product = Number.isFinite(num) ? getProductById(num) : undefined;

  if (!product) {
    notFound();
  }

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-10 md:py-16">
        <nav className="text-xs text-muted-foreground tracking-wider mb-8">
          <Link href="/" className="hover:text-foreground transition-colors">
            HOME
          </Link>
          <span className="mx-2">/</span>
          <Link href="/new" className="hover:text-foreground transition-colors">
            SHOP
          </Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">{product.category}</span>
        </nav>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
          <div
            className="aspect-[3/4] rounded-lg bg-muted bg-cover bg-center"
            style={{ backgroundImage: `url('${product.image}')` }}
          />
          <div className="space-y-6">
            <p className="text-xs tracking-[0.25em] text-muted-foreground">
              {product.category}
            </p>
            <h1 className="font-serif text-3xl md:text-4xl">{product.name}</h1>
            <div className="text-lg">
              {product.originalPrice != null && (
                <span className="text-muted-foreground line-through mr-3">
                  ₩{product.originalPrice.toLocaleString()}
                </span>
              )}
              <span className="font-medium">₩{product.price.toLocaleString()}</span>
            </div>
            <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
              MAISON 시그니처 라인업입니다. 소재와 실루엣에 집중한 디자인으로
              오래 입을 수 있도록 제작되었습니다. 사이즈 가이드는 고객센터로
              문의해 주세요.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button size="lg" className="tracking-wider">
                장바구니 담기
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/new">쇼핑 계속하기</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
