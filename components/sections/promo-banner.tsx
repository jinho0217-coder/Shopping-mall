import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function PromoBanner() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {/* Left Banner */}
          <div className="relative aspect-[4/5] md:aspect-auto md:h-[600px] overflow-hidden rounded-lg">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=1170&auto=format&fit=crop')",
              }}
            />
            <div className="absolute inset-0 bg-foreground/30" />
            <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end text-primary-foreground">
              <p className="text-xs tracking-[0.3em] text-primary-foreground/70 mb-2">
                SPECIAL OFFER
              </p>
              <h3 className="font-serif text-3xl md:text-4xl mb-4 text-balance">
                시즌 오프<br />
                최대 40% 할인
              </h3>
              <Button
                asChild
                variant="secondary"
                className="w-fit"
              >
                <Link href="/sale">
                  세일 상품 보기
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Side - Two Banners */}
          <div className="flex flex-col gap-6 md:gap-8">
            {/* Top Right */}
            <div className="relative flex-1 min-h-[250px] overflow-hidden rounded-lg">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1064&auto=format&fit=crop')",
                }}
              />
              <div className="absolute inset-0 bg-foreground/30" />
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end text-primary-foreground">
                <p className="text-xs tracking-[0.3em] text-primary-foreground/70 mb-2">
                  NEW ARRIVAL
                </p>
                <h3 className="font-serif text-2xl md:text-3xl mb-3">
                  베이직 컬렉션
                </h3>
                <Link
                  href="/basics"
                  className="text-sm tracking-wider underline underline-offset-4 hover:no-underline"
                >
                  자세히 보기
                </Link>
              </div>
            </div>

            {/* Bottom Right */}
            <div className="relative flex-1 min-h-[250px] overflow-hidden rounded-lg bg-muted">
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-center">
                <p className="text-xs tracking-[0.3em] text-muted-foreground mb-2">
                  MEMBERSHIP
                </p>
                <h3 className="font-serif text-2xl md:text-3xl mb-3">
                  회원가입 시<br />
                  10% 할인 쿠폰 증정
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  특별한 혜택과 함께하세요
                </p>
                <Button asChild variant="default" className="w-fit">
                  <Link href="/signup">
                    회원가입
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
