import { useEffect, useRef } from "react";

const IMAGES = [
  "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop",
  "https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop",
  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1600&h=900&q=80",
  "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop",
  "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1600&h=900&q=80",
  "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?auto=format&fit=crop&w=1600&h=900&q=80",
  "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=1600&h=900&q=80",
];

export default function Hero() {
  const slidesRef = useRef<HTMLDivElement>(null);

  // Ensure the slides stack indexes are correct
  useEffect(() => {
    const slides = slidesRef.current?.querySelectorAll("img");
    slides?.forEach((img, i) => (img.style.zIndex = String(100 - i)));
  }, []);

  return (
    <section className="relative min-h-[80vh] md:min-h-[90vh] flex items-center overflow-hidden">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 items-center gap-10">
        <div className="max-w-xl">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl leading-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Showcase Your Talent to the World
          </h1>
          <p className="mt-4 text-lg text-foreground/80">
            ConnectArtist is the premium platform for musicians, singers, and performers to create stunning profiles, share their work, and get booked.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="/get-started" className="inline-flex items-center rounded-full bg-gradient-to-r from-primary to-accent px-6 py-3 text-sm font-semibold text-primary-foreground shadow hover:opacity-95 transition-opacity">
              Get Started
            </a>
            <a href="/discover" className="inline-flex items-center rounded-full border border-border px-6 py-3 text-sm font-semibold hover:bg-muted/40 transition-colors">
              Explore Artists
            </a>
          </div>
        </div>
        <div className="relative hidden md:block">
          <div className="relative w-full h-[420px] rounded-xl overflow-hidden border border-border shadow-lg">
            <div ref={slidesRef} className="absolute inset-0">
              {IMAGES.map((src, i) => (
                <img
                  key={src}
                  src={src}
                  className={`absolute inset-0 w-full h-full object-cover opacity-0 animate-kenburns`}
                  style={{ animationDelay: `${i * 6}s` }}
                  alt="Hero slide"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(157,78,221,0.12),transparent_60%)]" />
    </section>
  );
}
