import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import logo from "@/assets/logo.jpg.asset.json";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/rooms", label: "Rooms" },
  { to: "/dining", label: "Dining" },
  { to: "/events", label: "Events" },
  { to: "/amenities", label: "Amenities" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/60">
      <div className="container-luxe flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo.url} alt="Peacock's Crest Resort" className="h-11 w-11 rounded-full object-cover ring-1 ring-gold/40" />
          <div className="leading-tight">
            <div className="font-display text-lg tracking-wide">Peacock's Crest</div>
            <div className="text-[10px] tracking-[0.32em] text-muted-foreground uppercase">Resort · Satara</div>
          </div>
        </Link>
        <nav className="hidden lg:flex items-center gap-8">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-xs tracking-[0.22em] uppercase text-foreground/80 hover:text-gold transition-colors"
              activeProps={{ className: "text-gold" }}
              activeOptions={{ exact: true }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <a
          href="tel:+919673185571"
          className="hidden lg:inline-flex items-center justify-center px-5 py-2.5 text-xs tracking-[0.22em] uppercase border border-gold text-foreground hover:bg-gold hover:text-primary transition-colors"
        >
          Book Now
        </a>
        <button
          aria-label="Menu"
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2"
        >
          <div className="space-y-1.5">
            <span className="block w-6 h-px bg-foreground" />
            <span className="block w-6 h-px bg-foreground" />
            <span className="block w-4 h-px bg-foreground ml-auto" />
          </div>
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="container-luxe py-6 flex flex-col gap-5">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="text-xs tracking-[0.22em] uppercase"
                activeProps={{ className: "text-gold" }}
              >
                {n.label}
              </Link>
            ))}
            <a href="tel:+919673185571" className="mt-2 inline-flex justify-center px-5 py-3 text-xs tracking-[0.22em] uppercase border border-gold text-foreground">
              Book Now · +91 96 7318 5571
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground mt-32">
      <div className="container-luxe py-20 grid md:grid-cols-3 gap-12">
        <div>
          <div className="font-display text-2xl">Peacock's Crest</div>
          <div className="text-[10px] tracking-[0.32em] text-gold uppercase mt-1">Resort · Satara</div>
          <p className="mt-6 text-sm text-primary-foreground/70 leading-relaxed max-w-xs">
            A serene escape near Kanher Dam, where nature, comfort and timeless hospitality meet.
          </p>
        </div>
        <div>
          <div className="eyebrow text-gold">Visit</div>
          <p className="mt-4 text-sm text-primary-foreground/80 leading-relaxed">
            Near Kanher Dam,<br />Satara–Mahabaleshwar Road,<br />Satara, Maharashtra
          </p>
        </div>
        <div>
          <div className="eyebrow text-gold">Reservations</div>
          <a href="tel:+919673185571" className="mt-4 block text-xl font-display">+91 96 7318 5571</a>
          <a href="https://wa.me/919673185571" className="mt-3 inline-block text-xs tracking-[0.22em] uppercase text-gold hover:underline">WhatsApp Us →</a>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="container-luxe py-6 text-[11px] tracking-[0.2em] uppercase text-primary-foreground/50 flex flex-col md:flex-row justify-between gap-3">
          <span>© {new Date().getFullYear()} Peacock's Crest Resort</span>
          <span>Crafted with care · Satara, India</span>
        </div>
      </div>
    </footer>
  );
}

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1 pt-20">{children}</main>
      <SiteFooter />
    </div>
  );
}

export function PageHero({ eyebrow, title, image }: { eyebrow: string; title: string; image: string }) {
  return (
    <section className="relative h-[60vh] min-h-[420px] overflow-hidden">
      <img src={image} alt="" className="absolute inset-0 w-full h-full object-cover animate-ken-burns" />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-primary/30 to-primary/70" />
      <div className="relative h-full container-luxe flex flex-col items-center justify-center text-center text-primary-foreground animate-rise">
        <div className="eyebrow text-gold">{eyebrow}</div>
        <h1 className="mt-5 font-display text-5xl md:text-7xl leading-[1.05]">{title}</h1>
        <div className="mt-6 gold-line" />
      </div>
    </section>
  );
}
