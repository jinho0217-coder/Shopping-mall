import { Hero } from "@/components/sections/hero";
import { Categories } from "@/components/sections/categories";
import { FeaturedProducts } from "@/components/sections/featured-products";
import { PromoBanner } from "@/components/sections/promo-banner";
import { BrandStory } from "@/components/sections/brand-story";
import { InstagramFeed } from "@/components/sections/instagram-feed";

export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <FeaturedProducts />
      <PromoBanner />
      <BrandStory />
      <InstagramFeed />
    </>
  );
}
