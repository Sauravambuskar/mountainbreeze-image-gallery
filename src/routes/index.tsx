import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, useCallback } from "react";
import {
  ChevronLeft, ChevronRight, Waves, TreePine, CookingPot, Wifi,
  Flame, Car, Phone, Mail, MapPin, Camera, Menu, X, Star,
  Utensils, Users, Home, Mountain, Navigation, Calendar, PartyPopper
} from "lucide-react";
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
const WHATSAPP_MESSAGE = encodeURIComponent("Hi Mountain Breeze Farm! I'm interested in booking your 3BHK farmhouse. Could you share availability and pricing?");
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;
const CALL_NUMBER = "tel:+919594994422";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { property: "og:image", content: hero1 },
      { name: "twitter:image", content: hero1 },
      { name: "description", content: "Mountain Breeze Farm — 3BHK Private Farmhouse near Mumbai & Thane with Swimming Pool, Mountain View, Bonfire & BBQ. Best farm stay near Shahapur, Maharashtra." },
      { name: "keywords", content: "farm stay near Mumbai, farm stay with swimming pool, 3BHK farmhouse near Mumbai, farmhouse near Thane, farmhouse near Shahapur, private farmhouse near Mumbai, weekend getaway near Mumbai, mountain view farmhouse, luxury farm stay Maharashtra" },
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
  { icon: Waves,       t: "Private Swimming Pool",   d: "Take a dip in your exclusive pool surrounded by nature — no crowds, no sharing." },
  { icon: Mountain,    t: "Mountain View",           d: "Wake up to breathtaking Sahyadri mountain views every single morning." },
  { icon: Home,        t: "3BHK Private Farmhouse",  d: "Entire property exclusively yours — 3 bedrooms, living room, full kitchen." },
  { icon: Flame,       t: "Bonfire & BBQ",           d: "Cosy bonfire nights and BBQ evenings under a sky full of stars." },
  { icon: TreePine,    t: "Nature Experience",       d: "Surrounded by lush greenery, fresh mountain air, and peaceful trails." },
  { icon: Users,       t: "Family & Group Friendly", d: "Perfect for families, friend groups, corporate outings and celebrations." },
  { icon: CookingPot,  t: "Full Kitchen",            d: "Fully equipped kitchen — cook your own meals or arrange a chef." },
  { icon: Wifi,        t: "Fast Wi-Fi",              d: "High-speed internet so you stay connected even in nature." },
  { icon: Car,         t: "Free Parking",            d: "Ample parking space right at the farmhouse entrance." },
];

const thingsToDo = [
  { icon: Waves,       t: "Swimming Pool",    d: "Splash around in the private pool with scenic mountain backdrop." },
  { icon: Flame,       t: "Bonfire Nights",   d: "Gather around the fire for stories, music, and stargazing." },
  { icon: Utensils,    t: "BBQ Nights",       d: "Grill your favourites in the open-air BBQ area." },
  { icon: Mountain,    t: "Nature Walks",     d: "Explore the forested trails and breathe in the pure mountain air." },
  { icon: Camera,      t: "Photography",      d: "Golden hour, drone shots, misty mountains — a photographer's dream." },
  { icon: Star,        t: "Stargazing",       d: "Far from city lights — the night sky here is absolutely stunning." },
  { icon: TreePine,    t: "Sunrise View",     d: "Wake up early and watch the sun rise over the Sahyadri peaks." },
  { icon: Users,       t: "Family & Games",   d: "Indoor and outdoor games for all age groups." },
];

const events = [
  { icon: PartyPopper, t: "Birthday Parties",          d: "Celebrate with a private farmhouse, pool, and bonfire — unforgettable." },
  { icon: Users,       t: "Family Gatherings",         d: "Book the entire property for your family reunion." },
  { icon: Star,        t: "Friends Getaways",          d: "The perfect squad escape from the city grind." },
  { icon: Home,        t: "Corporate Outings",         d: "Team building, off-sites, and company retreats in nature." },
  { icon: Calendar,    t: "Anniversary Celebrations",  d: "A romantic farmhouse stay with mountain views." },
  { icon: Camera,      t: "Pre-Wedding Shoots",        d: "Stunning natural backdrops for your pre-wedding photography." },
  { icon: PartyPopper, t: "Bachelor / Bachelorette",   d: "Epic send-off party with pool, bonfire, BBQ, and games." },
];

const distances = [
  { from: "Mumbai",                    dist: "~85 km",  time: "~2 hrs",     via: "Samruddhi Mahamarg / NH 160" },
  { from: "Thane",                     dist: "~65 km",  time: "~1.5 hrs",   via: "NH 160 via Shahapur" },
  { from: "Nashik",                    dist: "~110 km", time: "~2.5 hrs",   via: "NH 160" },
  { from: "Asangaon Railway Station",  dist: "~18 km",  time: "~30 mins",   via: "State Highway" },
  { from: "Samruddhi Mahamarg",        dist: "~12 km",  time: "~20 mins",   via: "Shahapur Exit" },
];

const testimonials = [
  { q: "Woke up to misty mountains and birds chirping. The pool was cold and refreshing. Perfect escape from Mumbai chaos.", n: "— Rahul & Family, Mumbai", r: 5 },
  { q: "Bonfire, BBQ, pool and stunning mountain views — Mountain Breeze Farm has everything. Already booked again!", n: "— The Sharma Group, Thane", r: 5 },
  { q: "Best farmhouse stay near Mumbai. Entire property to ourselves, super clean, and the caretaker was extremely helpful.", n: "— Priya S., Mumbai", r: 5 },
];

const faqs = [
  { q: "What is included in the booking?", a: "You get the entire 3BHK farmhouse exclusively — all 3 bedrooms, living room, full kitchen, private swimming pool, garden, bonfire area, and BBQ. No sharing with other guests." },
  { q: "How far is Mountain Breeze Farm from Mumbai?", a: "About 85 km (~2 hours) from Mumbai via the Samruddhi Mahamarg / NH 160. It's a very comfortable scenic drive." },
  { q: "Is the entire property booked exclusively?", a: "Yes — when you book, the entire farmhouse and all amenities are exclusively yours. No other guests on the property." },
  { q: "Can we do BBQ and bonfire?", a: "Absolutely. We have a dedicated BBQ area and bonfire pit. Just let us know in advance so we can arrange everything." },
  { q: "Do you host events like birthdays and corporate outings?", a: "Yes — we regularly host birthday parties, family gatherings, corporate team outings, pre-wedding shoots, and more. Ask us about event packages." },
  { q: "Is early check-in or late check-out available?", a: "Subject to availability. Please reach out after booking and we'll do our best to accommodate your request." },
  { q: "What is the cancellation policy?", a: "Full refund up to 7 days before check-in. 50% refund up to 3 days. No refund within 3 days. See full booking terms for details." },
  { q: "How do we reach from Asangaon Railway Station?", a: "Mountain Breeze Farm is about 18 km (~30 mins) from Asangaon Railway Station. We can help arrange a local cab pickup." },
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
  const [scrolled, setScrolled] = useState(false);
  const next = useCallback(() => setSlide((s) => (s + 1) % heroImages.length), []);
  const prev = useCallback(() => setSlide((s) => (s - 1 + heroImages.length) % heroImages.length), []);

  useEffect(() => {
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [next]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* NAV */}
      <header className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${scrolled ? "bg-background/95 backdrop-blur-lg border-b border-border shadow-lg" : ""}`}>
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 sm:py-5">
          <a href="#" aria-label="Mountain Breeze Farm home" className="flex items-center gap-2">
            {scrolled ? (
              <img 
                src={logo} 
                alt="Mountain Breeze Farm" 
                width={180} 
                height={44} 
                className="h-8 w-auto drop-shadow-md sm:h-11 transition-all duration-300"
              />
            ) : (
              <div className="flex flex-col leading-tight">
                <span className="font-display font-bold text-white text-base sm:text-lg drop-shadow-md tracking-tight">
                  Mountain Breeze
                </span>
                <span className="font-display font-semibold text-white/90 text-[10px] sm:text-xs tracking-wider drop-shadow-md">
                  FARM
                </span>
              </div>
            )}
          </a>
          <ul className={`hidden items-center gap-6 text-sm font-medium lg:flex transition-colors ${scrolled ? "text-foreground/90" : "text-white/90"}`}>
            <li><a href="#about" className={`transition ${scrolled ? "hover:text-primary" : "hover:text-white"}`}>About</a></li>
            <li><a href="#gallery" className={`transition ${scrolled ? "hover:text-primary" : "hover:text-white"}`}>Gallery</a></li>
            <li><a href="#things-to-do" className={`transition ${scrolled ? "hover:text-primary" : "hover:text-white"}`}>Things To Do</a></li>
            <li><a href="#events" className={`transition ${scrolled ? "hover:text-primary" : "hover:text-white"}`}>Events</a></li>
            <li><a href="#location" className={`transition ${scrolled ? "hover:text-primary" : "hover:text-white"}`}>Location</a></li>
            <li><a href="#reviews" className={`transition ${scrolled ? "hover:text-primary" : "hover:text-white"}`}>Reviews</a></li>
            <li><a href="#contact" className={`transition ${scrolled ? "hover:text-primary" : "hover:text-white"}`}>Contact</a></li>
          </ul>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hidden rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition hover:brightness-110 sm:inline-flex items-center gap-2">
            <WhatsAppIcon className="h-4 w-4" /> WhatsApp Us
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className={`grid h-10 w-10 place-items-center rounded-full backdrop-blur lg:hidden transition-colors ${scrolled ? "bg-secondary text-foreground" : "bg-black/30 text-white"}`}
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
              <div className="flex flex-col leading-tight">
                <span className="font-display font-bold text-white text-base drop-shadow-md tracking-tight">
                  Mountain Breeze
                </span>
                <span className="font-display font-semibold text-white/90 text-[10px] tracking-wider drop-shadow-md">
                  FARM
                </span>
              </div>
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
              <li><a href="#things-to-do" onClick={() => setMobileMenuOpen(false)} className="hover:text-white transition">Things To Do</a></li>
              <li><a href="#events" onClick={() => setMobileMenuOpen(false)} className="hover:text-white transition">Events</a></li>
              <li><a href="#location" onClick={() => setMobileMenuOpen(false)} className="hover:text-white transition">Location</a></li>
              <li><a href="#reviews" onClick={() => setMobileMenuOpen(false)} className="hover:text-white transition">Reviews</a></li>
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
          <h1 className="font-display text-2xl font-semibold leading-[1.1] sm:text-4xl md:text-6xl">
            3BHK Farmhouse Near Mumbai &amp; Thane<br className="hidden sm:block" /> | Mountain Breeze Farm
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-sm text-white/80 sm:mt-4 sm:text-base">
            Private 3BHK farmhouse with swimming pool, mountain views, bonfire and BBQ near Mumbai and Thane.
          </p>
          <div className="mt-6 flex flex-row items-center justify-center gap-3 sm:mt-8">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/40 transition hover:brightness-110">
              <WhatsAppIcon className="h-4 w-4" /> Book Now
            </a>
            <a href={CALL_NUMBER} className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20">
              <Phone className="h-4 w-4" /> Call Now
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
        <h2 className="font-display text-3xl font-semibold sm:text-4xl md:text-5xl">Your Private Farmhouse Escape Near Mumbai</h2>
        <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground sm:mt-8 sm:space-y-5 sm:text-lg">
          <p>
            Mountain Breeze Farm is a 3BHK private farmhouse nestled in the Sahyadri foothills near Shahapur, Maharashtra — just 2 hours from Mumbai and Thane. We offer the entire property exclusively to you and your group.
          </p>
          <p>
            Wake up to stunning mountain views, take a dip in your private pool, light up the bonfire at night, and reconnect with nature away from the city rush. Whether it's a family trip, friends getaway, corporate outing, or a special celebration — Mountain Breeze Farm is your perfect escape.
          </p>
          <p>
            Book the entire 3BHK farmhouse for your group — no strangers, no shared spaces. Just you, your people, and the mountains.
          </p>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:grid-cols-4">
          {[
            { n: "3BHK",         l: "Private Farmhouse" },
            { n: "Private",      l: "Swimming Pool" },
            { n: "360°",         l: "Mountain View" },
            { n: "Entire",       l: "Property Yours" },
          ].map((s) => (
            <div key={s.l} className="rounded-2xl border border-border bg-card p-4 text-center">
              <p className="font-display text-2xl font-semibold text-primary sm:text-3xl">{s.n}</p>
              <p className="mt-1 text-xs text-muted-foreground sm:text-sm">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* VIDEO SECTION */}
      <section className="bg-secondary/30 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-5xl">
            <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-2xl" style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
              <iframe 
                src="https://player.vimeo.com/video/1216344740?badge=0&autopause=0&player_id=0&app_id=58479&controls=0&title=0&byline=0&portrait=0" 
                frameBorder="0" 
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} 
                title="Mountain Breeze Farm - Villa Tour"
                loading="lazy"
              />
            </div>
            <p className="mt-4 text-center text-sm text-muted-foreground">Take a virtual tour of Mountain Breeze Farm</p>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-secondary/60 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-primary">Why Choose Mountain Breeze Farm</p>
          <h2 className="font-display text-3xl font-semibold sm:text-4xl md:text-5xl">Everything You Need for the Perfect Getaway</h2>
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
          <h2 className="font-display text-3xl font-semibold sm:text-4xl md:text-5xl">A Glimpse of Mountain Breeze Farm</h2>
          <p className="mt-3 text-sm text-muted-foreground sm:text-base">Exteriors, pool, bedrooms, garden, bonfire, BBQ and stunning mountain views.</p>
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

      {/* FARMHOUSE */}
      <section id="farmhouse" className="bg-secondary/60 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-primary">Our Property</p>
          <h2 className="font-display text-3xl font-semibold sm:text-4xl md:text-5xl">Mountain Breeze Farm</h2>
          <p className="mt-3 max-w-2xl text-sm text-muted-foreground sm:text-base">
            3BHK private farmhouse with swimming pool, mountain views, bonfire, BBQ — entirely yours near Shahapur.
          </p>
          <div className="mt-8 grid gap-6 sm:mt-12 md:grid-cols-2 md:gap-8">
            <VillaSlider />
            <div className="flex flex-col justify-center">
              <h3 className="font-display text-2xl font-semibold sm:text-3xl">3BHK Private Farmhouse</h3>
              <p className="mt-2 text-[10px] uppercase tracking-widest text-muted-foreground sm:text-xs">Entire Property · Private Pool · Mountain View · Shahapur</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:mt-4">
                The entire farmhouse is exclusively yours — all 3 bedrooms, living room, full kitchen, and all outdoor amenities. Perfect for families, friends, and group bookings.
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:mt-3">
                Just 2 hours from Mumbai — wake up to mountain peaks, enjoy a morning swim, evening bonfire, and BBQ dinner under the stars.
              </p>
              <div className="mt-6 flex flex-wrap gap-2 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1.5 rounded-md bg-secondary px-3 py-1.5"><Waves className="h-3.5 w-3.5" /> Swimming Pool</span>
                <span className="inline-flex items-center gap-1.5 rounded-md bg-secondary px-3 py-1.5"><Flame className="h-3.5 w-3.5" /> Bonfire</span>
                <span className="inline-flex items-center gap-1.5 rounded-md bg-secondary px-3 py-1.5"><Utensils className="h-3.5 w-3.5" /> BBQ Area</span>
                <span className="inline-flex items-center gap-1.5 rounded-md bg-secondary px-3 py-1.5"><Mountain className="h-3.5 w-3.5" /> Mountain View</span>
                <span className="inline-flex items-center gap-1.5 rounded-md bg-secondary px-3 py-1.5"><Home className="h-3.5 w-3.5" /> 3BHK</span>
                <span className="inline-flex items-center gap-1.5 rounded-md bg-secondary px-3 py-1.5"><Users className="h-3.5 w-3.5" /> Entire Property</span>
              </div>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-primary py-3 text-sm font-semibold text-primary-foreground transition hover:brightness-110">
                  <WhatsAppIcon className="h-4 w-4" /> Book on WhatsApp
                </a>
                <a href={CALL_NUMBER} className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-primary py-3 text-sm font-semibold text-primary transition hover:bg-primary/10">
                  <Phone className="h-4 w-4" /> Call to Book
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THINGS TO DO */}
      <section id="things-to-do" className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-primary">Activities</p>
          <h2 className="font-display text-3xl font-semibold sm:text-4xl md:text-5xl">Things To Do</h2>
          <p className="mt-3 max-w-2xl text-sm text-muted-foreground sm:text-base">From poolside relaxation to bonfire nights — there's always something to enjoy at Mountain Breeze Farm.</p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {thingsToDo.map((f) => (
              <div key={f.t} className="rounded-2xl border border-border bg-card p-5 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold">{f.t}</h3>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EVENTS */}
      <section id="events" className="bg-secondary/60 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-primary">Celebrate Here</p>
          <h2 className="font-display text-3xl font-semibold sm:text-4xl md:text-5xl">Perfect for Every Occasion</h2>
          <p className="mt-3 max-w-2xl text-sm text-muted-foreground sm:text-base">From birthdays to corporate outings — Mountain Breeze Farm is the perfect venue for your special event.</p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {events.map((e) => (
              <div key={e.t} className="rounded-2xl border border-border bg-card p-5 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <e.icon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold">{e.t}</h3>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{e.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground shadow-lg transition hover:brightness-110">
              <WhatsAppIcon className="h-4 w-4" /> Enquire About Events
            </a>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="bg-[oklch(0.22_0.03_150)] py-16 text-white sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-accent">Google Reviews</p>
          <div className="flex flex-wrap items-end gap-4">
            <h2 className="font-display text-3xl font-semibold sm:text-4xl md:text-5xl">What Our Guests Say</h2>
            <div className="flex items-center gap-2 pb-1">
              <div className="flex text-yellow-400">{"★★★★★"}</div>
              <span className="text-sm font-semibold text-white/90">5.0</span>
              <span className="text-xs text-white/50">on Google</span>
            </div>
          </div>
          <div className="mt-8 grid gap-4 sm:mt-12 sm:gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <div className="flex items-center gap-2">
                  <div className="flex text-yellow-400 text-sm">{"★".repeat(t.r)}</div>
                  <span className="text-xs text-white/50">Google Review</span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-white/85">"{t.q}"</p>
                <p className="mt-3 text-xs font-medium uppercase tracking-wider text-white/60">{t.n}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <a href="https://g.page/r/mountainbreezefarm/review" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20">
              <Star className="h-4 w-4 text-yellow-400" /> Leave a Google Review
            </a>
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section id="location" className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-primary">Getting Here</p>
        <h2 className="font-display text-3xl font-semibold sm:text-4xl md:text-5xl">Location & Directions</h2>
        <p className="mt-3 max-w-2xl text-sm text-muted-foreground sm:mt-4 sm:text-base">
          Conveniently located near Mumbai, Thane & Nashik — an easy scenic drive through the Sahyadris.
        </p>
        <div className="mt-6 rounded-2xl border border-border bg-card p-4 sm:mt-8 sm:p-6">
          <p className="flex items-start gap-2 text-sm font-medium">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            Mountain Breeze Farm House, near Z.P School, Dehene, Shahapur, Maharashtra 421601
          </p>
        </div>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {distances.map((d) => (
            <div key={d.from} className="rounded-xl border border-border bg-card p-4">
              <div className="flex items-center gap-2">
                <Navigation className="h-4 w-4 text-primary" />
                <span className="font-semibold text-sm">{d.from}</span>
              </div>
              <p className="mt-2 text-2xl font-display font-semibold text-primary">{d.dist}</p>
              <p className="text-xs text-muted-foreground">{d.time} · {d.via}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href="https://maps.google.com/?q=Mountain+Breeze+Farm+Dehene+Shahapur+Maharashtra" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground">
            <MapPin className="h-4 w-4" /> Open in Google Maps
          </a>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-primary px-6 py-3 text-sm font-semibold text-primary transition hover:bg-primary/10">
            <WhatsAppIcon className="h-4 w-4" /> Get Directions on WhatsApp
          </a>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-secondary/60 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-primary">Get in Touch</p>
          <h2 className="font-display text-3xl font-semibold sm:text-4xl md:text-5xl">Contact &amp; Booking</h2>
          <div className="mt-8 grid gap-6 sm:mt-10 sm:gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
              <h3 className="font-display text-xl font-semibold sm:text-2xl">Book Mountain Breeze Farm</h3>
              <p className="mt-2 text-sm text-muted-foreground">Reach out for pricing, availability or a custom event. We respond within a few hours.</p>
              <ul className="mt-6 space-y-3 text-sm">
                <li className="flex items-center gap-3"><Phone className="h-4 w-4 text-primary" /><a href={CALL_NUMBER} className="font-medium hover:text-primary">+91 95949 94422</a></li>
                <li className="flex items-center gap-3"><WhatsAppIcon className="h-4 w-4 text-[#25D366]" /><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="font-medium hover:text-primary">WhatsApp Us</a></li>
                <li className="flex items-center gap-3"><Mail className="h-4 w-4 text-primary" /><span className="font-medium">hello@mountainbreeze.farm</span></li>
                <li className="flex items-center gap-3"><Camera className="h-4 w-4 text-primary" /><span className="font-medium">@mountainbreeze.farm</span></li>
                <li className="flex items-center gap-3"><MapPin className="h-4 w-4 text-primary" /><span className="font-medium">Dehene, Shahapur, Maharashtra 421601</span></li>
              </ul>
            </div>
            <div className="rounded-2xl bg-[oklch(0.22_0.03_150)] p-6 text-white sm:p-8">
              <h3 className="font-display text-xl font-semibold sm:text-2xl">Quick Booking</h3>
              <p className="mt-2 text-sm text-white/75">Message us directly on WhatsApp for instant availability check and best rates.</p>
              <div className="mt-6 flex flex-col gap-3">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 rounded-lg bg-[#25D366] py-3 text-sm font-semibold text-white transition hover:brightness-110">
                  <WhatsAppIcon className="h-4 w-4" /> WhatsApp for Best Rate
                </a>
                <a href={CALL_NUMBER} className="flex items-center justify-center gap-2 rounded-lg bg-primary py-3 text-sm font-semibold text-primary-foreground transition hover:brightness-110">
                  <Phone className="h-4 w-4" /> Call +91 95949 94422
                </a>
              </div>
              <div className="mt-6 flex gap-4 text-xs text-white/60">
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
          <img src={logo} alt="Mountain Breeze Farm" width={160} height={40} loading="lazy" className="h-7 w-auto opacity-80 sm:h-8" />
          <p>© 2026 Mountain Breeze Farm. All rights reserved.</p>
          <p>3BHK Farmhouse near Mumbai · Shahapur, Maharashtra</p>
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
