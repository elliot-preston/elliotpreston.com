import Image from "next/image";
import Link from "next/link";

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
      <header className="site-header">
        <Link className="wordmark" href="/" aria-label="Elliot Preston home">Elliot Preston</Link>
        <nav aria-label="Main navigation">
          <Link href="/" aria-current="page">Home</Link>
          <Link href="/work">Work</Link>
          <Link href="/music">Music</Link>
          <a className="resume-link" href="#resume">Resume <span aria-hidden="true">↗</span></a>
        </nav>
      </header>

      <main id="main">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-heading">
            <h1 id="hero-title">Elliot Preston<span className="title-period">.</span></h1>
          </div>
          <Photo className="hero-photo" src="/E_hero.jpg" alt="Elliot Preston beneath warm marquee lights at night." sizes="(max-width: 440px) calc(100vw - 44px), (max-width: 1600px) 90vw, 1440px" preload />
        </section>

        <section className="editorial-section work-section" aria-labelledby="work-title">
          <div className="section-heading">
            <h2 id="work-title">Work</h2>
          </div>
          <div className="section-copy">
            <h3 className="section-lead work-heading">
              <span>Technical Leader ·</span>{" "}
              <span>Software Quality ·</span>{" "}
              <span>Mobile</span>
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
            <p className="body-copy">Music has always been a huge part of my life. I play in two bands, Peyote Ugly and Blade Palace. I play guitar and drums, and I’m often writing, recording, mixing, or working on a new idea.</p>
            <Link className="section-link" href="/music">Explore my music <span aria-hidden="true">↗</span></Link>
          </div>
        </section>

        <section className="closing" aria-label="Closing photograph">
          <Photo className="closing-photo" src="/nature.jpg" alt="Sunlight filtering through evergreen branches over a lake surrounded by forested mountains." sizes="(max-width: 440px) calc(94vw - 41px), (max-width: 700px) 84.6vw, (max-width: 1600px) 70.2vw, 1123px" />
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-intro">
          <p className="footer-name">Elliot Preston</p>
          <p className="eyebrow">Work & music</p>
        </div>
        <div className="footer-group">
          <h2>Contact</h2>
          <p>Email forthcoming</p>
        </div>
        <div className="footer-group">
          <h2>Professional</h2>
          <Link href="/work">Work <span aria-hidden="true">↗</span></Link>
          <p id="resume">Resume forthcoming</p>
          <p>Profile link forthcoming</p>
        </div>
        <div className="footer-group">
          <h2>Music</h2>
          <Link href="/music">Music <span aria-hidden="true">↗</span></Link>
          <p>Listening links forthcoming</p>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Elliot Preston</span>
          <a href="#main">Back to top <span aria-hidden="true">↑</span></a>
        </div>
      </footer>
    </div>
  );
}
