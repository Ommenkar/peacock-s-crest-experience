import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site-chrome";
import gateway from "@/assets/gateway.webp.asset.json";
import pool from "@/assets/pool.webp.asset.json";
import room from "@/assets/room.webp.asset.json";
import dining from "@/assets/dining.webp.asset.json";
import wedding from "@/assets/wedding.webp.asset.json";
import lakeside from "@/assets/lakeside.webp.asset.json";
import lawn from "@/assets/lawn.webp.asset.json";
import lunch from "@/assets/lunch.mp4.asset.json";
import hero from "@/assets/hero.mp4.asset.json";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Peacock's Crest Resort" },
      { name: "description", content: "Step inside Peacock's Crest — rooms, dining, events and scenic views." },
      { property: "og:title", content: "Gallery · Peacock's Crest" },
      { property: "og:description", content: "Rooms, dining, events and scenic views." },
      { property: "og:image", content: lakeside.url },
    ],
  }),
  component: Gallery,
});

type Item = { src: string; alt: string; video?: boolean; span?: string };
const items: Item[] = [
  { src: gateway.url, alt: "Resort gateway", span: "md:col-span-2 md:row-span-2" },
  { src: pool.url, alt: "Swimming pool" },
  { src: room.url, alt: "Guest room" },
  { src: lakeside.url, alt: "Lakeside cottage", span: "md:row-span-2" },
  { src: dining.url, alt: "Open air dining" },
  { src: lawn.url, alt: "Resort lawns" },
  { src: wedding.url, alt: "Wedding setup", span: "md:col-span-2" },
  { src: hero.url, alt: "Resort tour", video: true, span: "md:col-span-2 md:row-span-2" },
  { src: lunch.url, alt: "Dining moments", video: true },
];

function Gallery() {
  return (
    <PageShell>
      <PageHero eyebrow="Gallery" title="Glimpses of Peacock's Crest." image={lakeside.url} />
      <section className="py-24">
        <div className="container-luxe">
          <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[220px] md:auto-rows-[260px] gap-3">
            {items.map((it, i) => (
              <div key={i} className={`relative overflow-hidden group ${it.span ?? ""}`}>
                {it.video ? (
                  <video src={it.src} autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover" />
                ) : (
                  <img src={it.src} alt={it.alt} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1500ms]" />
                )}
                <div className="absolute inset-0 ring-1 ring-inset ring-white/0 group-hover:ring-gold/40 transition" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
