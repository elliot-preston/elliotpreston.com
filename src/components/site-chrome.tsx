import Link from "next/link";

export function SiteHeader({ currentPage, resumeHref = "#resume" }: { currentPage: "home" | "work" | "music"; resumeHref?: string }) {
  return (
      <header className="site-header">
        <Link className="wordmark" href="/" aria-label="Elliot Preston home">Elliot Preston</Link>
        <nav aria-label="Main navigation">
          <Link href="/" aria-current={currentPage === "home" ? "page" : undefined}>Home</Link>
          <Link href="/work" aria-current={currentPage === "work" ? "page" : undefined}>Work</Link>
          <Link href="/music" aria-current={currentPage === "music" ? "page" : undefined}>Music</Link>
          <a className="resume-link" href={resumeHref}>Resume <span aria-hidden="true">↗</span></a>
        </nav>
      </header>
  );
}

export function SiteFooter() {
  return (
      <footer className="site-footer">
        <div className="footer-intro">
          <p className="footer-name">Elliot Preston</p>
        </div>
        <div className="footer-group">
          <h2>Contact</h2>
          <a href="mailto:elliotpreston1@gmail.com">elliotpreston1@gmail.com</a>
        </div>
        <div className="footer-group">
          <h2>Professional</h2>
          <p><a id="resume" href="/Elliot_Preston_Resume.pdf">Resume</a></p>
          <p><a href="https://www.linkedin.com/in/elliot-preston-61014b12a/">LinkedIn</a></p>
          <p><a href="https://github.com/elliot-preston/">GitHub</a></p>
        </div>
        <div className="footer-group footer-explore">
          <h2>Explore</h2>
          <Link href="/">Home</Link>
          <Link href="/work">Work</Link>
          <Link href="/music">Music</Link>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Elliot Preston</span>
          <a href="#main">Back to top <span aria-hidden="true">↑</span></a>
        </div>
      </footer>
  );
}
