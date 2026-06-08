import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { PageShell } from "@/components/site-chrome";
import { usePageMeta } from "@/lib/page-meta";
import heroVideo from "@/assets/hero.mp4.asset.json";
import gateway from "@/assets/gateway.webp.asset.json";
import room from "@/assets/room.webp.asset.json";
import dining from "@/assets/dining.webp.asset.json";
import wedding from "@/assets/wedding.webp.asset.json";
import lakeside from "@/assets/lakeside.webp.asset.json";

const features = [
  { label: "Rooms & Cottages", to: "/rooms", img: room.url },
  { label: "Restaurant & Dining", to: "/dining", img: dining.url },
  { label: "Weddings & Events", to: "/events", img: wedding.url },
  { label: "Scenic Views", to: "/gallery", img: lakeside.url },
] as const;

export default function Home() {
  usePageMeta({
    title: "Peacock's Crest Resort, Satara — A Gateway to Peace",
    description: "Welcome to Peacock's Crest Resort. A peaceful luxury getaway near Kanher Dam, Satara.",
    ogTitle: "Peacock's Crest Resort, Satara",
    ogDescription: "A peaceful luxury getaway near Kanher Dam, Satara.",
    ogImage: gateway.url,
  });
  const vRef = useRef<HTMLVideoElement>(null);
  useEffect(() => { if (vRef.current) vRef.current.playbackRate = 0.5; }, []);
  return (
    <PageShell>
      {/* Hero */}
      <section className="relative -mt-20 h-screen min-h[640px] overflow-hidden">
        <video
          ref={vRef}
          src={heroVideo.url}
          autoPlay
          muted
          loop
          playsInline
          poster={gateway.url}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/30 via-primary/20 to-primary/80" />
        <div className="relative h-full container-luxe flex flex-col items-center justify-center text-center text-primary-foreground">
          <div className="eyebrow text-gold animate-rise">A Gateway to Peace · Satara</div>
          <h1 className="mt-6 font-display text-5xl md:text-7xl lg:text-8xl leading-[1.02] max-w-5xl animate-rise" style={{ animationDelay: "0.1s" }}>
            Welcome to <em className="not-italic text-gold-soft">Peacock's Crest</em><br />Resort, Satara
          </h1>
          <p className="mt-8 max-w-2xl text-base md:text-lg text-primary-foreground/85 leading-relaxed animate-rise" style={{ animationDelay: "0.25s" }}>
            Experience a peaceful getaway near Kanher Dam with comfortable stays,
            delightful dining, beautiful celebrations and scenic natural surroundings.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-rise" style={{ animationDelay: "0.4s" }}>
            <a href="tel:+919673185571" className="px-9 py-4 bg-gold text-primary text-xs tracking-[0.3em] uppercase hover:bg-gold-soft transition-colors">
              Book Your Stay
            </a>
            <Link to="/contact" className="px-9 py-4 border border-primary-foreground/60 text-primary-foreground text-xs tracking-[0.3em] uppercase hover:bg-primary-foreground hover:text-primary transition-colors">
              Enquire
            </Link>
          </div>
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.4em] uppercase text-primary-foreground/60">
            Scroll
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-28">
        <div className="container-luxe grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5">
            <div className="eyebrow"><span className="gold-line mr-3" />Est. Satara</div>
            <h2 className="mt-6 font-display text-4xl md:text-5xl leading-tight">
              Where stillness becomes the rarest luxury.
            </h2>
          </div>
          <div className="md:col-span-7 md:pl-10 md:border-l border-border">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Tucked beside the calm waters of Kanher Dam, Peacock's Crest is an intimate retreat where
              quiet mornings, lush lawns and warm Maharashtrian hospitality come together. Stay a night,
              celebrate a milestone, or simply dine under an open sky.
            </p>
            <Link to="/about" className="mt-8 inline-block text-xs tracking-[0.3em] uppercase text-gold border-b border-gold/40 pb-1 hover:text-foreground">
              Our Story →
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="pb-32">
        <div className="container-luxe">
          <div className="text-center mb-16">
            <div className="eyebrow">The Experience</div>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">A retreat with many chapters</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => (
              <Link key={f.to} to={f.to} className="group relative aspect-[3/4] overflow-hidden">
                <img src={f.img} alt={f.label} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-primary-foreground">
                  <div className="font-display text-2xl">{f.label}</div>
                  <div className="mt-2 text-[10px] tracking-[0.3em] uppercase text-gold opacity-0 group-hover:opacity-100 transition-opacity">Discover →</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="relative py-32 overflow-hidden">
        <img src={lakeside.url} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary/75" />
        <div className="relative container-luxe text-center text-primary-foreground">
          <div className="eyebrow text-gold">Reserve</div>
          <h2 className="mt-5 font-display text-4xl md:text-6xl max-w-3xl mx-auto leading-tight">
            Your gateway to peace awaits.
          </h2>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+919673185571" className="px-9 py-4 bg-gold text-primary text-xs tracking-[0.3em] uppercase hover:bg-gold-soft transition-colors">
              Call +91 96 7318 5571
            </a>
            <a href="https://wa.me/919673185571" className="px-9 py-4 border border-primary-foreground/60 text-xs tracking-[0.3em] uppercase hover:bg-primary-foreground hover:text-primary transition-colors">
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
