import Link from "next/link";
import { ArrowRight } from "lucide-react";

const categories = [
  {
    title: "Clothing",
    subtitle: "의류",
    description: "시즌 컬렉션",
    href: "/clothing",
    image:
      "https://images.unsplash.com/photo-1551232864-3f0890e580d9?q=80&w=987&auto=format&fit=crop",
  },
  {
    title: "Accessories",
    subtitle: "액세서리",
    description: "포인트 아이템",
    href: "/accessories",
    image:
      "https://images.unsplash.com/photo-1611923134239-b9be5b4d1b42?q=80&w=987&auto=format&fit=crop",
  },
  {
    title: "Lifestyle",
    subtitle: "라이프스타일",
    description: "리빙 & 홈",
    href: "/lifestyle",
    image:
      "https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=1160&auto=format&fit=crop",
  },
];

export function Categories() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-sm tracking-[0.3em] text-muted-foreground mb-2 uppercase">
            Categories
          </p>
          <h2 className="font-serif text-3xl md:text-4xl">카테고리 둘러보기</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {categories.map((category) => (
            <Link
              key={category.href}
              href={category.href}
              className="group relative aspect-[3/4] overflow-hidden rounded-lg"
            >
              {/* Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('${category.image}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/20 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end text-primary-foreground">
                <p className="text-xs tracking-[0.2em] text-primary-foreground/70 mb-1">
                  {category.description}
                </p>
                <h3 className="font-serif text-2xl md:text-3xl mb-1">
                  {category.title}
                </h3>
                <p className="text-sm text-primary-foreground/80 mb-4">
                  {category.subtitle}
                </p>
                <div className="flex items-center gap-2 text-sm tracking-wider opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <span>자세히 보기</span>
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
