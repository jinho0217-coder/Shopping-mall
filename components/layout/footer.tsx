import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const footerLinks = {
  shop: [
    { href: "/new", label: "신상품" },
    { href: "/clothing", label: "의류" },
    { href: "/accessories", label: "액세서리" },
    { href: "/lifestyle", label: "라이프스타일" },
    { href: "/sale", label: "세일" },
  ],
  support: [
    { href: "/faq", label: "자주 묻는 질문" },
    { href: "/shipping", label: "배송 안내" },
    { href: "/returns", label: "교환/반품" },
    { href: "/contact", label: "고객센터" },
  ],
  company: [
    { href: "/about", label: "브랜드 스토리" },
    { href: "/stores", label: "매장 안내" },
    { href: "/careers", label: "채용" },
    { href: "/press", label: "프레스" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Newsletter Section */}
      <div className="border-b border-primary-foreground/10">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="max-w-xl mx-auto text-center">
            <h3 className="font-serif text-2xl md:text-3xl mb-3">
              뉴스레터 구독하기
            </h3>
            <p className="text-sm text-primary-foreground/70 mb-6">
              신상품 소식과 특별한 혜택을 가장 먼저 받아보세요
            </p>
            <form className="flex gap-2 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="이메일 주소를 입력하세요"
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
              />
              <Button variant="secondary" className="shrink-0">
                구독하기
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/">
              <h2 className="font-serif text-2xl font-semibold tracking-wider mb-4">
                MAISON
              </h2>
            </Link>
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              당신만의 특별한 순간을 위한<br />
              프리미엄 라이프스타일 브랜드
            </p>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="text-sm font-medium tracking-wider mb-4">SHOP</h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-sm font-medium tracking-wider mb-4">SUPPORT</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-sm font-medium tracking-wider mb-4">COMPANY</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/50">
          <p>© 2024 MAISON. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-primary-foreground transition-colors">
              개인정보처리방침
            </Link>
            <Link href="/terms" className="hover:text-primary-foreground transition-colors">
              이용약관
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
