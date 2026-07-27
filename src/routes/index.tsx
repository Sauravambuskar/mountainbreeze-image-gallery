import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight, Waves, TreePine, CookingPot, Wifi, Flame, Car, Phone, Mail, MapPin, Camera, Menu, X } from "lucide-react";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/DSC05866.jpg";
import hero5 from "@/assets/DSC05894.jpg";
import hero6 from "@/assets/DSC05980.jpg";
import hero7 from "@/assets/DSC06006.jpg";
import g1 from "@/assets/gal-IMG_8482.jpg";
import g2 from "@/assets/gal-IMG_8497.jpg";
import g3 from "@/assets/gal-IMG_8507.jpg";
import g4 from "@/assets/gal-IMG_8508.jpg";
import g5 from "@/assets/gal-IMG_8530.jpg";
import g6 from "@/assets/gal-IMG_8597.jpg";
import g7 from "@/assets/gal-IMG_8418.jpg";
import g8 from "@/assets/gal-1ee86549-dd3f-4a25-ac19-0d9c09b5ae86.webp";
import logo from "@/assets/mountainbreeze-logo.png";

function WhatsAppIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

const heroImages = [hero1, hero2, hero3, hero4, hero5, hero6, hero7];

const WHATSAPP_NUMBER = "919594994422";
const WHATSAPP_MESSAGE = encodeURIComponent("Hi MountainBreeze! I'm interested in booking a private pool villa. Could you share availability and pricing?");
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { property: "og:image", content: hero1 },
      { name: "twitter:image", content: hero1 },
    ],
  }),
});

const villas = [
  { n: 14, img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop", desc: "A modern hillside retreat with panoramic valley views and a heated pool." },
  { n: 7, img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&h=600&fit=crop", desc: "A sun-drenched escape with a private garden and forest-facing pool." },
  { n: 9, img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop", desc: "Contemporary architecture meets old-growth pine in this signature villa." },
  { n: 11, img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop", desc: "Wraparound decks, an infinity pool and unobstructed mountain vistas." },
  { n: 12, img: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop", desc: "Perfect for families — five suites, a game room and a heated plunge pool." },
  { n: 15, img: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&h=600&fit=crop", desc: "Our flagship — a stone-clad villa with cedar sauna and private forest trail." },
];

const wheelaDetails = {
  title: "About MountainBreeze",
  tagline: "Where Adventure, Purpose, and Elegance Intertwine Seamlessly",
  description: "MountainBreeze is a Mumbai-based villa and outdoor experience company created for those who seek adventure without giving up comfort. We combine premium stays, scenic locations, and thoughtfully curated activities to offer escapes that reconnect people with nature.",
  mission: "Our goal is to create unforgettable experiences through guided treks, outdoor adventures, and relaxing villa stays designed for families, groups, and explorers alike. Every journey with MountainBreeze is planned with a focus on safety, hospitality, and meaningful moments in nature.",
  closing: "Whether you're looking for a peaceful getaway or an exciting outdoor escape, MountainBreeze brings you the perfect balance of relaxation, exploration, and lasting memories.",
};

const gallery = [
  { src: g7, alt: "MountainBreeze villa exterior" },
  { src: hero7, alt: "Villa with private pool" },
  { src: hero5, alt: "Pool surrounded by greenery" },
  { src: g1, alt: "Master bedroom with mood lighting" },
  { src: g4, alt: "Spacious marble living room" },
  { src: hero4, alt: "Cricket practice nets" },
  { src: g2, alt: "Green-accent bedroom suite" },
  { src: hero6, alt: "Misty mountain views" },
  { src: g6, alt: "Bonfire deck at night" },
  { src: g3, alt: "Warm-toned guest bedroom" },
  { src: g5, alt: "Nearby waterfall in monsoon" },
  { src: g8, alt: "Home-cooked local thali" },
];

const features = [
  { icon: Waves, t: "Private Pool", d: "Every villa has its own heated pool — no sharing, ever." },
  { icon: TreePine, t: "Forest Setting", d: "Nestled inside pine forest with mountain-air freshness." },
  { icon: CookingPot, t: "Full Kitchen", d: "Fully equipped kitchens with everything you need to cook in." },
  { icon: Wifi, t: "Fast Wi-Fi", d: "Reliable high-speed internet across every corner of the villa." },
  { icon: Flame, t: "Bonfire", d: "Private bonfire pit for chilly mountain evenings under the stars." },
  { icon: Car, t: "Free Parking", d: "Ample private parking, right at the doorstep of your villa." },
];

const testimonials = [
  { q: "The most peaceful weekend we've had in years. Woke up to mist rolling through the pines.", n: "— Aarav & Priya, Mumbai" },
  { q: "Impeccable service. The villa was spotless and the pool was the perfect temperature.", n: "— The Kapoor Family" },
  { q: "Everything was exactly as promised. We're already planning our next stay at MOUNTAINBREEZ.", n: "— Neha S." },
];

const faqs = [
  { q: "Does every villa have a private pool?", a: "Yes — every MOUNTAINBREEZ villa comes with its own private heated pool, not shared with any other guests." },
  { q: "How far is MOUNTAINBREEZ from the city?", a: "We're about a 2.5-hour scenic drive from the nearest metro, tucked into the hills at 3,200 ft elevation." },
  { q: "Can I bring my pet?", a: "Absolutely — we're pet-friendly. Just let us know at booking so we can prepare the villa." },
  { q: "Do you host events like birthdays?", a: "Yes, we regularly host birthdays, anniversaries and small celebrations. Ask us about our celebration add-ons." },
  { q: "Is early check-in available?", a: "Subject to availability. Reach out after booking and we'll do our best to accommodate." },
  { q: "What's your cancellation policy?", a: "Full refund up to 14 days before check-in. Partial refund up to 7 days. See booking terms for details." },
];

const villaImages = [g7, g1, g4, g2, g3];

function VillaSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((c) => (c + 1) % villaImages.length);
    }, 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative overflow-hidden rounded-2xl border border-border">
      <div className="relative h-72 md:h-[28rem]">
        {villaImages.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`MountainBreeze Villa ${i + 1}`}
            className="absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-in-out"
            style={{ opacity: current === i ? 1 : 0 }}
          />
        ))}
      </div>
      <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
        {villaImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to image ${i + 1}`}
            className={`h-1.5 rounded-full transition-all ${current === i ? "w-6 bg-white" : "w-3 bg-white/50"}`}
          />
        ))}
      </div>
    </div>
  );
}

function Index() {
  const [slide, setSlide] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const next = useCallback(() => setSlide((s) => (s + 1) % heroImages.length), []);
  const prev = useCallback(() => setSlide((s) => (s - 1 + heroImages.length) % heroImages.length), []);

  useEffect(() => {
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [next]);

  return (
    <div className="min-h-screen bg-background">
      {/* NAV */}
      <header className="absolute top-0 left-0 right-0 z-30">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 sm:py-5">
          <a href="#" aria-label="MountainBreeze home" className="flex items-center">
            <img
              src={logo}
              alt="MountainBreeze"
              width={180}
              height={44}
              fetchPriority="high"
              className="h-8 w-auto drop-shadow-md sm:h-11"
            />
          </a>
          <ul className="hidden items-center gap-6 text-sm font-medium text-white/90 lg:flex">
            <li><a href="#about" className="hover:text-white transition">About</a></li>
            <li><a href="#gallery" className="hover:text-white transition">Gallery</a></li>
            <li><a href="#villas" className="hover:text-white transition">Villas</a></li>
            <li><a href="#location" className="hover:text-white transition">Location</a></li>
            <li><a href="#faq" className="hover:text-white transition">FAQ</a></li>
            <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
          </ul>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hidden rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition hover:brightness-110 sm:inline-flex items-center gap-2">
            <WhatsAppIcon className="h-4 w-4" /> WhatsApp Us
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="grid h-10 w-10 place-items-center rounded-full bg-black/30 text-white backdrop-blur lg:hidden"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
        {/* Mobile Menu - Smooth Slide */}
        <div
          className={`fixed inset-0 top-0 z-40 transition-transform duration-300 ease-in-out lg:hidden ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="absolute inset-0 bg-black/95 backdrop-blur-md" />
          <div className="relative flex h-full flex-col">
            <div className="flex items-center justify-between px-4 py-4">
              <img src={logo} alt="MountainBreeze" className="h-8 w-auto" />
              <button
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
                className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <ul className="flex flex-1 flex-col items-center justify-center gap-6 text-lg font-medium text-white/90">
              <li><a href="#about" onClick={() => setMobileMenuOpen(false)} className="hover:text-white transition">About</a></li>
              <li><a href="#gallery" onClick={() => setMobileMenuOpen(false)} className="hover:text-white transition">Gallery</a></li>
              <li><a href="#villas" onClick={() => setMobileMenuOpen(false)} className="hover:text-white transition">Villas</a></li>
              <li><a href="#location" onClick={() => setMobileMenuOpen(false)} className="hover:text-white transition">Location</a></li>
              <li><a href="#faq" onClick={() => setMobileMenuOpen(false)} className="hover:text-white transition">FAQ</a></li>
              <li><a href="#contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-white transition">Contact</a></li>
              <li className="mt-4">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)} className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground">
                  <WhatsAppIcon className="h-4 w-4" /> WhatsApp Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden">
        {/* Slides */}
        <div className="absolute inset-0">
          {heroImages.map((src, i) => (
            <div
              key={i}
              className="absolute inset-0 transition-opacity duration-[1200ms] ease-in-out"
              style={{ opacity: slide === i ? 1 : 0 }}
              aria-hidden={slide !== i}
            >
              <img src={src} alt={`MountainBreeze view ${i + 1}`} className="h-full w-full object-cover" loading={i === 0 ? "eager" : "lazy"} />
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center text-white sm:px-6">
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-accent sm:mb-4 sm:text-xs">Shahapur · Maharashtra</p>
          <h1 className="font-display text-3xl font-semibold leading-[1.1] sm:text-5xl md:text-7xl">
            Private Pool Villas <br className="hidden sm:block" /> in the Hills
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm text-white/85 sm:mt-6 sm:text-lg">
            Curated villas. Endless forest views. One quiet valley all to yourselves.
          </p>
          <div className="mt-6 flex flex-row items-center justify-center gap-3 sm:mt-10">
            <a href="#villas" className="rounded-full bg-primary px-4 py-2.5 text-xs font-semibold text-primary-foreground shadow-lg shadow-primary/40 transition hover:brightness-110 sm:px-8 sm:py-3 sm:text-sm">
              Book a Villa
            </a>
            <a href="#contact" className="rounded-full border border-white/40 bg-white/10 px-4 py-2.5 text-xs font-semibold text-white backdrop-blur transition hover:bg-white/20 sm:px-8 sm:py-3 sm:text-sm">
              Check Availability
            </a>
          </div>
        </div>

        {/* Arrows */}
        <button
          onClick={prev}
          aria-label="Previous slide"
          className="absolute left-2 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/30 bg-black/30 p-1.5 text-white backdrop-blur transition hover:bg-black/50 sm:left-6 sm:p-3"
        >
          <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
        </button>
        <button
          onClick={next}
          aria-label="Next slide"
          className="absolute right-2 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/30 bg-black/30 p-1.5 text-white backdrop-blur transition hover:bg-black/50 sm:right-6 sm:p-3"
        >
          <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
          {heroImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setSlide(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${slide === i ? "w-8 bg-white" : "w-4 bg-white/50 hover:bg-white/80"}`}
            />
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-primary">About Us</p>
        <h2 className="font-display text-3xl font-semibold sm:text-4xl md:text-5xl">Where Adventure, Purpose &amp; Elegance Intertwine</h2>
        <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground sm:mt-8 sm:space-y-5 sm:text-lg">
          <p>
            MountainBreeze is a Mumbai-based villa and outdoor experience company created for those who seek adventure without giving up comfort. We combine premium stays, scenic locations, and thoughtfully curated activities to offer escapes that reconnect people with nature.
          </p>
          <p>
            Our goal is to create unforgettable experiences through guided treks, outdoor adventures, and relaxing villa stays designed for families, groups, and explorers alike. Every journey with MountainBreeze is planned with a focus on safety, hospitality, and meaningful moments in nature.
          </p>
          <p>
            Whether you're looking for a peaceful getaway or an exciting outdoor escape, MountainBreeze brings you the perfect balance of relaxation, exploration, and lasting memories.
          </p>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-secondary/60 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-primary">Why MountainBreeze</p>
          <h2 className="font-display text-3xl font-semibold sm:text-4xl md:text-5xl">Everything You Need, Nothing You Don't</h2>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div key={f.t} className="rounded-2xl border border-border bg-card p-5 sm:p-7 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary sm:h-12 sm:w-12">
                  <f.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <h3 className="font-display text-lg font-semibold sm:text-xl">{f.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-16 sm:py-24 overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-primary">Photo Gallery</p>
          <h2 className="font-display text-3xl font-semibold sm:text-4xl md:text-5xl">A Glimpse Inside</h2>
          <p className="mt-3 text-sm text-muted-foreground sm:text-base">Wander through the interiors, poolside, and forested surroundings.</p>
        </div>
        <div className="relative mt-8 sm:mt-10">
          <div className="flex w-max animate-marquee gap-2.5 hover:[animation-play-state:paused]">
            {[...gallery, ...gallery].map((g, i) => (
              <div
                key={i}
                className="relative h-56 w-[75vw] shrink-0 overflow-hidden rounded-xl sm:h-[22rem] sm:w-[20rem] md:h-[26rem] md:w-[24rem]"
              >
                <img
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VILLAS */}
      <section id="villas" className="bg-secondary/60 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-primary">Our Villa</p>
          <h2 className="font-display text-3xl font-semibold sm:text-4xl md:text-5xl">Your Private Escape</h2>
          <p className="mt-3 max-w-2xl text-sm text-muted-foreground sm:text-base">
            A premium villa stay combining comfort, scenic beauty, and curated outdoor experiences — designed for families, groups, and explorers.
          </p>
          <div className="mt-8 grid gap-6 sm:mt-12 md:grid-cols-2 md:gap-8">
            <VillaSlider />
            <div className="flex flex-col justify-center">
              <h3 className="font-display text-2xl font-semibold sm:text-3xl">MountainBreeze Villa</h3>
              <p className="mt-2 text-[10px] uppercase tracking-widest text-muted-foreground sm:text-xs">Private Pool · Scenic Location · Curated Experiences</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:mt-4">
                Seek adventure without giving up comfort. Our villa combines a premium stay with scenic surroundings and thoughtfully curated activities that reconnect you with nature.
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:mt-3">
                From guided treks and outdoor adventures to relaxing poolside moments — every stay is planned with a focus on safety, hospitality, and meaningful moments.
              </p>
              <div className="mt-6 flex flex-wrap gap-2 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1.5 rounded-md bg-secondary px-3 py-1.5"><Waves className="h-3.5 w-3.5" /> Private Pool</span>
                <span className="inline-flex items-center gap-1.5 rounded-md bg-secondary px-3 py-1.5"><Flame className="h-3.5 w-3.5" /> Bonfire</span>
                <span className="inline-flex items-center gap-1.5 rounded-md bg-secondary px-3 py-1.5"><TreePine className="h-3.5 w-3.5" /> Guided Treks</span>
                <span className="inline-flex items-center gap-1.5 rounded-md bg-secondary px-3 py-1.5"><MapPin className="h-3.5 w-3.5" /> Scenic Location</span>
              </div>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-primary py-3 text-sm font-semibold text-primary-foreground transition hover:brightness-110 sm:w-auto sm:px-8">
                <WhatsAppIcon className="h-4 w-4" /> Enquire on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-[oklch(0.22_0.03_150)] py-16 text-white sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-accent">Guest Stories</p>
          <h2 className="font-display text-3xl font-semibold sm:text-4xl md:text-5xl">What Our Guests Say</h2>
          <div className="mt-8 grid gap-4 sm:mt-12 sm:gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur">
                <div className="text-accent">★★★★★</div>
                <p className="mt-4 text-sm leading-relaxed text-white/85">"{t.q}"</p>
                <p className="mt-4 text-xs font-medium uppercase tracking-wider text-white/60">{t.n}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section id="location" className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-primary">Getting Here</p>
        <h2 className="font-display text-3xl font-semibold sm:text-4xl md:text-5xl">Location</h2>
        <p className="mt-3 max-w-2xl text-sm text-muted-foreground sm:mt-4 sm:text-base">
          Only a scenic drive from the city — a real mountain reset without the long-haul flight.
        </p>
        <div className="mt-6 rounded-2xl border border-border bg-card p-4 sm:mt-8 sm:p-6">
          <p className="flex items-start gap-2 text-sm font-medium"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> Mountain Breeze Farm House, near Z.P School, Dehene, Shahapur, Maharashtra 421601</p>
        </div>
        <a href="#" className="mt-5 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground sm:mt-6">Open in Google Maps</a>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-secondary/60 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-primary">Get in Touch</p>
          <h2 className="font-display text-3xl font-semibold sm:text-4xl md:text-5xl">Contact &amp; Booking</h2>
          <div className="mt-8 grid gap-6 sm:mt-10 sm:gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
              <h3 className="font-display text-xl font-semibold sm:text-2xl">Book Your Stay</h3>
              <p className="mt-2 text-sm text-muted-foreground">Reach out for pricing, availability or a custom experience. We respond within a few hours.</p>
              <ul className="mt-6 space-y-3 text-sm">
                <li className="flex items-center gap-3"><Phone className="h-4 w-4 text-primary" /> <span className="font-medium">+91 95949 94422</span></li>
                <li className="flex items-center gap-3"><Mail className="h-4 w-4 text-primary" /> <span className="font-medium">hello@mountainbreeze.farm</span></li>
                <li className="flex items-center gap-3"><Camera className="h-4 w-4 text-primary" /> <span className="font-medium">@mountainbreeze.farm</span></li>
                <li className="flex items-center gap-3"><MapPin className="h-4 w-4 text-primary" /> <span className="font-medium">Dehene, Shahapur, Maharashtra</span></li>
              </ul>
            </div>
            <div className="rounded-2xl bg-[oklch(0.22_0.03_150)] p-6 text-white sm:p-8">
              <h3 className="font-display text-xl font-semibold sm:text-2xl">Book Fast Track</h3>
              <p className="mt-2 text-sm text-white/75">Skip the wait — message our booking team directly on WhatsApp for instant confirmation.</p>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="mt-6 flex items-center justify-center gap-2 rounded-lg bg-primary py-3 text-sm font-semibold text-primary-foreground transition hover:brightness-110">
                <WhatsAppIcon className="h-4 w-4" /> WhatsApp for Best Rate
              </a>
              <div className="mt-4 flex gap-4 text-xs text-white/60">
                <span className="inline-flex items-center gap-1"><Camera className="h-3.5 w-3.5" /> Instagram</span>
                <span className="inline-flex items-center gap-1">▶ YouTube</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-primary">FAQ</p>
        <h2 className="font-display text-3xl font-semibold sm:text-4xl md:text-5xl">Common Questions</h2>
        <div className="mt-8 divide-y divide-border rounded-2xl border border-border bg-card sm:mt-10">
          {faqs.map((f, i) => (
            <details key={i} className="group px-4 py-4 sm:px-6 sm:py-5">
              <summary className="flex cursor-pointer items-center justify-between text-xs font-semibold leading-snug list-none sm:text-sm">
                {f.q}
                <span className="ml-4 text-primary transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-card py-8 sm:py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 text-xs text-muted-foreground sm:px-6 md:flex-row md:gap-4">
          <img src={logo} alt="MountainBreeze" width={160} height={40} loading="lazy" className="h-7 w-auto opacity-80 sm:h-8" />
          <p>© 2026 MountainBreeze. All rights reserved.</p>
          <p>Made with ⛰ in the hills.</p>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition-transform hover:scale-110 active:scale-95 sm:bottom-6 sm:right-6 sm:h-16 sm:w-16"
      >
        <WhatsAppIcon className="h-7 w-7 sm:h-8 sm:w-8" />
      </a>
    </div>
  );
}
