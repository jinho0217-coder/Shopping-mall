import Link from "next/link";
import type { CategorySlug } from "@/lib/category-content";
import { categoryContent } from "@/lib/category-content";
import { categoryProducts } from "@/lib/category-products";
import { AccessoriesPriceFilter } from "./accessories-price-filter";
import { CategoryProductGrid } from "./category-product-grid";

const navOrder: { slug: CategorySlug; href: string; label: string }[] = [
  { slug: "new", href: "/new", label: "NEW" },
  { slug: "clothing", href: "/clothing", label: "CLOTHING" },
  { slug: "accessories", href: "/accessories", label: "ACCESSORIES" },
  { slug: "lifestyle", href: "/lifestyle", label: "LIFESTYLE" },
  { slug: "sale", href: "/sale", label: "SALE" },
];

export function CategoryCatalog({ slug }: { slug: CategorySlug }) {
  const copy = categoryContent[slug];
  const products = categoryProducts[slug];

  return (
    <>
      <section className="border-b border-border bg-background">
        <div className="container mx-auto px-4 py-10 md:py-14">
          <nav className="text-xs text-muted-foreground tracking-wider mb-6">
            <Link href="/" className="hover:text-foreground transition-colors">
              HOME
            </Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">{copy.eyebrow}</span>
          </nav>
          <p className="text-sm tracking-[0.3em] text-muted-foreground mb-2 uppercase">
            {copy.eyebrow}
          </p>
          <h1 className="font-serif text-3xl md:text-5xl mb-4">{copy.title}</h1>
          <p className="max-w-2xl text-muted-foreground leading-relaxed">
            {copy.description}
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            {navOrder.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-xs tracking-wider px-4 py-2 rounded-full border transition-colors ${
                  item.slug === slug
                    ? "border-foreground bg-foreground text-background"
                    : "border-border text-foreground/70 hover:border-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
      {slug === "accessories" ? (
        <AccessoriesPriceFilter products={products} />
      ) : (
        <CategoryProductGrid products={products} />
      )}
    </>
  );
}
