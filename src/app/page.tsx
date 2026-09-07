import Image from "next/image";
import Link from "next/link";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";

function Photo({
  src,
  alt,
  sizes,
  preload = false,
  className = "",
}: {
  src: string;
  alt: string;
  sizes: string;
  preload?: boolean;
  className?: string;
}) {
  return (
    <figure className={`photo ${className}`}>
      <div className="photo-space">
        <Image src={src} alt={alt} fill sizes={sizes} preload={preload} className="photo-image" />
      </div>
    </figure>
  );
}

export default function Home() {
  return (
    <div className="publication">
      <a className="skip-link" href="#main">Skip to content</a>
      <SiteHeader currentPage="home" />

      <main id="main">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-heading">
            <h1 id="hero-title">Elliot <span className="hero-surname">Preston<span className="title-period">.</span></span></h1>
          </div>
          <Photo className="hero-photo" src="/E_hero.jpg" alt="Elliot Preston beneath warm marquee lights at night." sizes="(max-width: 440px) calc(100vw - 44px), (max-width: 1600px) 90vw, 1440px" preload />
        </section>

        <section className="editorial-section work-section" aria-labelledby="work-title">
          <div className="section-heading">
            <h2 id="work-title">Work</h2>
            <Photo className="music-photo work-photo" src="/nature.jpg" alt="Sunlight filtering through evergreen branches over a lake surrounded by forested mountains." sizes="(max-width: 440px) calc(88vw - 39px), (max-width: 700px) 79.2vw, (max-width: 1600px) 46vw, 736px" />
          </div>
          <div className="section-copy">
            <h3 className="section-lead work-heading">
              <span>Technical Leader ·</span>{" "}
              <span>Software Quality ·</span>{" "}
              <span>Mobile Applications</span>
            </h3>
            <p className="body-copy">My career progressed from customer-facing work to QA engineering and, most recently, technical leadership.</p>
            <p className="body-copy">Most recently, I led the technical direction of a team supporting 4,000+ white-label mobile apps across iOS and Android. I helped set priorities, guide releases, solve difficult production issues, modernize the platform, and keep work moving across engineering, product, and customer-facing teams.</p>
            <Link className="section-link primary-link" href="/work">Explore my work <span aria-hidden="true">↗</span></Link>
          </div>
        </section>

        <section className="editorial-section music-section" aria-labelledby="music-title">
          <div className="section-heading">
            <h2 id="music-title">Music</h2>
            <Photo className="music-photo" src="/music.jpg" alt="Elliot Preston playing electric guitar beside a microphone under colorful stage lights." sizes="(max-width: 440px) calc(88vw - 39px), (max-width: 700px) 79.2vw, (max-width: 1600px) 46vw, 736px" />
          </div>
          <div className="section-copy">
            <h3 className="section-lead work-heading music-heading"><span>Musician ·</span>{" "}<span>Sound Engineer</span></h3>
            <p className="body-copy">Music has always been a huge part of my life. I play guitar and drums, and perform in two bands - Peyote Ugly and Blade Palace. I&apos;m often writing, recording, mixing, or working on a new idea.</p>
            <Link className="section-link primary-link" href="/music">Explore my music <span aria-hidden="true">↗</span></Link>
          </div>
        </section>

      </main>

      <SiteFooter />
    </div>
  );
}
