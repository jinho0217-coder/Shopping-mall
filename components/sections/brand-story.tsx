import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function BrandStory() {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-square md:aspect-[4/5] overflow-hidden rounded-lg">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1558171813-4c088753af8f?q=80&w=987&auto=format&fit=crop')",
              }}
            />
          </div>

          {/* Content */}
          <div className="max-w-lg">
            <p className="text-sm tracking-[0.3em] text-muted-foreground mb-4 uppercase">
              Our Story
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight">
              당신의 일상에<br />
              특별함을 더합니다
            </h2>
            <div className="space-y-4 text-foreground/70 leading-relaxed mb-8">
              <p>
                MAISON은 현대 여성의 세련된 라이프스타일을 위해 탄생했습니다.
                우리는 트렌드를 따르기보다 시대를 초월한 우아함을 추구합니다.
              </p>
              <p>
                엄선된 소재와 정교한 장인정신으로 만들어진 각각의 제품은
                당신의 일상을 더욱 특별하게 만들어 드립니다.
              </p>
            </div>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sm tracking-wider font-medium group"
            >
              <span className="underline underline-offset-4 group-hover:no-underline">
                브랜드 스토리 보기
              </span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
