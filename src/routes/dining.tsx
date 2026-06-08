import { PageShell, PageHero } from "@/components/site-chrome";
import { usePageMeta } from "@/lib/page-meta";
import dining from "@/assets/dining.webp.asset.json";
import lunch from "@/assets/lunch.mp4.asset.json";
import heroPic from "@/assets/pic_145122.jpg.asset.json";

export default function Dining() {
  usePageMeta({
    title: "Restaurant & Dining — Peacock's Crest Resort",
    description: "Open-air fine dining at Peacock's Crest. Seasonal flavours under the stars.",
    ogTitle: "Dining · Peacock's Crest",
    ogDescription: "Open-air fine dining under the stars at Peacock's Crest.",
    ogImage: dining.url,
  });
  return (
    <PageShell>
      <PageHero eyebrow="Restaurant & Dining" title="Open air. Open flame. Open hearts." image={heroPic.url} />
      <section className="py-24">
        <div className="container-luxe grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <div className="eyebrow"><span className="gold-line mr-3" />The Table</div>
            <h2 className="mt-4 font-display text-4xl md:text-5xl leading-tight">
              An open-air ode to seasonal flavour.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Long tables dressed in linen, soft lanterns swaying between palms, and the
              aroma of slow-cooked classics drifting through the night air. Our kitchens
              celebrate Maharashtrian heritage alongside continental favourites — crafted
              with produce picked at its prime.
            </p>
            <div className="mt-10 grid sm:grid-cols-2 gap-6">
              {[
                { t: "Breakfast", d: "07:30 – 10:30" },
                { t: "Lunch", d: "12:30 – 15:00" },
                { t: "High Tea", d: "16:00 – 18:00" },
                { t: "Dinner", d: "19:30 – 22:30" },
              ].map((s) => (
                <div key={s.t} className="border-t border-border pt-4">
                  <div className="font-display text-2xl">{s.t}</div>
                  <div className="text-xs tracking-[0.28em] uppercase text-gold mt-1">{s.d}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-6">
            <video
              src={lunch.url}
              autoPlay
              muted
              loop
              playsInline
              poster={dining.url}
              className="w-full aspect-[4/5] object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-secondary py-24">
        <div className="container-luxe text-center">
          <div className="eyebrow">Signature Experiences</div>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">Crafted moments at the table</h2>
          <div className="mt-16 grid md:grid-cols-3 gap-10">
            {[
              { t: "Garden Brunch", d: "Slow Sundays of fresh juices, local breads and seasonal mains, served on the lawns." },
              { t: "Lakeside Dinner", d: "Private candle-lit settings by the water — for anniversaries, proposals and quiet celebrations." },
              { t: "Family Feasts", d: "Long-table thalis and grills for gatherings, hosted under starlight and palm shade." },
            ].map((x) => (
              <div key={x.t} className="text-left">
                <div className="font-display text-2xl">{x.t}</div>
                <div className="mt-3 gold-line" />
                <p className="mt-4 text-muted-foreground leading-relaxed">{x.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
