type Artist = { id: string; name: string; genre: string; description: string; imageUrl: string };

const sample: Artist[] = [
  { id: "1", name: "Ava Martinez", genre: "Pop / R&B", description: "Award-winning vocalist with a soulful voice.", imageUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1600&q=80" },
  { id: "2", name: "DJ Nova", genre: "Electronic / Dance", description: "Renowned DJ known for energetic sets.", imageUrl: "https://images.unsplash.com/photo-1511735111819-9a3f7709049c?auto=format&fit=crop&w=1600&q=80" },
  { id: "3", name: "Midnight Echo", genre: "Rock / Alternative", description: "High-energy band blending classic and modern.", imageUrl: "https://images.unsplash.com/photo-1516280030429-27679b3dc9cf?auto=format&fit=crop&w=1600&q=80" },
];

export default function FeaturedArtists() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-background/95 to-background">
      <h2 className="section-title text-center font-serif text-3xl md:text-4xl font-bold">Featured Artists</h2>
      <div className="mt-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sample.map((a, i) => (
          <article
            key={a.id}
            className="opacity-0 translate-y-8 animate-fade-in-up rounded-xl border border-border bg-card/60 backdrop-blur overflow-hidden hover:border-accent transition-colors"
            style={{ animationDelay: `${i * 120}ms`, animationFillMode: "both" }}
          >
            <img src={a.imageUrl} alt={a.name} className="h-56 w-full object-cover" />
            <div className="p-5">
              <h3 className="text-xl font-semibold">{a.name}</h3>
              <span className="mt-1 inline-block text-sm text-primary">{a.genre}</span>
              <p className="mt-2 text-sm text-foreground/80">{a.description}</p>
              <a href={`/artist/${a.id}`} className="mt-4 inline-flex items-center rounded-full bg-gradient-to-r from-primary to-accent px-4 py-2 text-sm font-semibold text-primary-foreground shadow hover:opacity-95 transition-opacity">
                View Profile
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
