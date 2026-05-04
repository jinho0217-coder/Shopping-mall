"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Search, ShoppingBag, User, Menu, X, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const navLinks = [
  { href: "/new", label: "NEW" },
  { href: "/clothing", label: "CLOTHING" },
  { href: "/accessories", label: "ACCESSORIES" },
  { href: "/lifestyle", label: "LIFESTYLE" },
  { href: "/sale", label: "SALE" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      {/* Top announcement bar */}
      <div className="bg-primary text-primary-foreground text-center py-2 text-xs tracking-widest">
        무료배송 | 10만원 이상 구매 시
      </div>

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 -ml-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="메뉴 열기"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          {/* Logo */}
          <Link href="/" className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0">
            <h1 className="font-serif text-2xl md:text-3xl font-semibold tracking-wider">
              MAISON
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 ml-12">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm tracking-wider text-foreground/80 hover:text-foreground transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-foreground hover:after:w-full after:transition-all"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right icons */}
          <div className="flex items-center gap-2 md:gap-4">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Search className="h-5 w-5" />
              <span className="sr-only">검색</span>
            </Button>
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Heart className="h-5 w-5" />
              <span className="sr-only">위시리스트</span>
            </Button>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="ghost" size="icon" type="button">
                  <User className="h-5 w-5" />
                  <span className="sr-only">마이페이지</span>
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>마이페이지</DialogTitle>
                  <DialogDescription>환영합니다!</DialogDescription>
                </DialogHeader>
                <div className="relative mx-auto h-[260px] w-full max-w-sm">
                  <Image
                    src="/frog.png"
                    alt="녹색 청개구리"
                    fill
                    className="object-contain object-center drop-shadow-sm"
                    sizes="(max-width: 640px) 100vw, 384px"
                    priority
                  />
                </div>
              </DialogContent>
            </Dialog>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs w-5 h-5 rounded-full flex items-center justify-center">
                0
              </span>
              <span className="sr-only">장바구니</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm tracking-wider py-2 border-b border-border/50"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex gap-4 pt-4">
              <Button variant="ghost" size="icon">
                <Search className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Heart className="h-5 w-5" />
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
