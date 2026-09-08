import type { Metadata } from "next";
import Image from "next/image";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import styles from "./music.module.css";

export const metadata: Metadata = {
  title: "Music — Elliot Preston",
  description: "Music, bands, recording, mixing, and production from Elliot Preston.",
};

function MusicPhoto({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`${styles.photo} ${className}`}>
      <Image src={src} alt={alt} fill sizes="(max-width: 440px) calc(100vw - 44px), (max-width: 900px) 90vw, (max-width: 1600px) 42vw, 672px" className="photo-image" />
    </div>
  );
}

function BandLinks({ listen, watch }: { listen: string; watch: string }) {
  return (
    <div className={styles.links}>
      <a className="section-link primary-link" href={listen} target="_blank" rel="noopener noreferrer">Listen <span aria-hidden="true">↗</span></a>
      <a className="section-link primary-link" href={watch} target="_blank" rel="noopener noreferrer">Watch <span aria-hidden="true">↗</span></a>
    </div>
  );
}

export default function Music() {
  return (
    <div className="publication music-page">
      <a className="skip-link" href="#main">Skip to content</a>
      <SiteHeader currentPage="music" />
      <main id="main">
        <section className={`hero ${styles.hero}`} aria-labelledby="hero-title">
          <div className="hero-heading">
            <h1 id="hero-title">Music</h1>
          </div>
          <figure className="photo hero-photo">
            <div className="photo-space">
              <Image src="/music_peyoteugly.JPG" alt="Elliot Preston playing guitar with Peyote Ugly under pink stage lights." fill sizes="(max-width: 440px) calc(100vw - 44px), (max-width: 1600px) 90vw, 1440px" preload className="photo-image" />
            </div>
          </figure>
        </section>

        <section className={styles.section} aria-labelledby="peyote-title">
          <MusicPhoto src="/peyote-ugly-music-2.jpg" alt="Peyote Ugly performing live with guitar, bass, drums, and keyboards under red stage lights." className={styles.peyotePhoto} />
          <div className={styles.copy}>
            <h2 id="peyote-title">Peyote Ugly</h2>
            <p className="body-copy">I’ve been playing guitar and singing in Peyote Ugly since the band formed in 2015. We’ve spent the last decade writing, recording, and releasing music, while touring and playing shows around the Pacific Northwest, including supporting bands like Temples, Frankie and the Witch Fingers, and The Shivas.</p>
            <BandLinks listen="https://peyoteuglyseattle.bandcamp.com/album/beyond-the-great-divide" watch="https://www.youtube.com/watch?v=NDN7T_CuH9Q" />
          </div>
        </section>

        <section className={`${styles.section} ${styles.reverse}`} aria-labelledby="blade-title">
          <MusicPhoto src="/music_bladepalace.JPG" alt="Elliot Preston singing at the drums with Blade Palace under blue stage lights." className={styles.bladePhoto} />
          <div className={styles.copy}>
            <h2 id="blade-title">Blade Palace</h2>
            <p className="body-copy">I play drums and sing in Blade Palace, a Seattle post-punk band. It’s a project I started with my best friend, who I’ve been making music with since high school. When we both ended up in Seattle, we picked up where we left off and started Blade Palace.</p>
            <BandLinks listen="https://bladepalace.bandcamp.com/" watch="https://www.youtube.com/@bladepalace" />
          </div>
        </section>

        <section className={styles.section} aria-labelledby="recording-title">
          <MusicPhoto src="/music_recording.JPG" alt="Elliot Preston adjusting effects pedals with a guitar across his lap." className={styles.recordingPhoto} />
          <div className={styles.copy}>
            <h2 id="recording-title">Recording &amp; Mixing</h2>
            <p className="body-copy">I’ve always been drawn to music production. I love spending time recording, mixing, and programming drums.</p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
