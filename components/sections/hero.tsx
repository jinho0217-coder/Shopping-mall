import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[70vh] md:min-h-[85vh] flex items-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-foreground/30" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <p className="text-primary-foreground/90 text-sm tracking-[0.3em] mb-4 uppercase">
            2024 Spring Collection
          </p>
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl text-primary-foreground leading-tight mb-6 text-balance">
            우아함이 만나는<br />
            일상의 순간
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-md leading-relaxed">
            섬세한 디테일과 편안한 실루엣으로<br className="hidden md:block" />
            당신만의 스타일을 완성하세요
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              size="lg"
              className="bg-primary-foreground text-foreground hover:bg-primary-foreground/90 tracking-wider"
            >
              <Link href="/new">
                컬렉션 보기
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 tracking-wider"
            >
              <Link href="/about">브랜드 스토리</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
