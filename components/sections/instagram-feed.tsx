import Link from "next/link";
import { Instagram } from "lucide-react";

const instagramPosts = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=420&auto=format&fit=crop",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=420&auto=format&fit=crop",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=420&auto=format&fit=crop",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?q=80&w=420&auto=format&fit=crop",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=420&auto=format&fit=crop",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?q=80&w=420&auto=format&fit=crop",
  },
];

export function InstagramFeed() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Link
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm tracking-wider text-muted-foreground hover:text-foreground transition-colors mb-3"
          >
            <Instagram className="h-5 w-5" />
            @maison_official
          </Link>
          <h2 className="font-serif text-3xl md:text-4xl">#MAISONMOMENT</h2>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-4">
          {instagramPosts.map((post) => (
            <Link
              key={post.id}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden rounded-lg"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url('${post.image}')` }}
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-colors flex items-center justify-center">
                <Instagram className="h-6 w-6 text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
