import { Hero } from "@/components/hero";
import { KebabSpotCard } from "@/components/kebab-spot-card";
import { Nav } from "@/components/nav";
import { RatingExplanation } from "@/components/rating-explanation";
import { KEBAB_SPOTS } from "@/lib/kebab-spots";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <RatingExplanation />
        <section
          aria-labelledby="guide-heading"
          className="mx-auto max-w-[1200px] px-4 py-12 sm:px-6 lg:px-8"
          id="guide"
        >
          <h2
            className="font-bold font-head text-2xl text-foreground leading-tight tracking-tight sm:text-3xl"
            id="guide-heading"
          >
            The guide
          </h2>
          <ul className="mt-8 flex list-none flex-col gap-6 p-0">
            {KEBAB_SPOTS.map((spot) => (
              <li key={spot.name}>
                <KebabSpotCard
                  slug={spot.name.toLowerCase().replace(/\s+/g, "-")}
                  spot={spot}
                />
              </li>
            ))}
          </ul>
        </section>
        <footer className="mx-auto max-w-[1200px] border-foreground border-t-2 px-4 py-10 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-3">
            <section aria-labelledby="blog-heading" id="blog">
              <h2
                className="font-bold font-head text-foreground text-lg"
                id="blog-heading"
              >
                Blog
              </h2>
              <p className="mt-2 text-foreground/80 text-sm">
                More guides and reviews coming soon.
              </p>
            </section>
            <section aria-labelledby="about-heading" id="about">
              <h2
                className="font-bold font-head text-foreground text-lg"
                id="about-heading"
              >
                About
              </h2>
              <p className="mt-2 text-foreground/80 text-sm">
                We rate kebab spots in Southampton.
              </p>
            </section>
            <section aria-labelledby="contact-heading" id="contact">
              <h2
                className="font-bold font-head text-foreground text-lg"
                id="contact-heading"
              >
                Contact
              </h2>
              <p className="mt-2 text-foreground/80 text-sm">Get in touch.</p>
            </section>
          </div>
        </footer>
      </main>
    </div>
  );
}
