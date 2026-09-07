import type { Metadata } from "next";
import Image from "next/image";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";

export const metadata: Metadata = {
  title: "Work — Elliot Preston",
  description: "Technical leadership, software quality, engineering, mobile application delivery, production investigation, and the resume and career history of Elliot Preston.",
};

const career = [
  ["2024–2026", "Technical Lead, Apps", "Led the technical direction of an engineering team supporting 4,000+ white-label mobile apps across iOS and Android."],
  ["2023–2024", "Senior QA Engineer", "Focused on release quality, risk assessment, production investigation, and mentoring other QA engineers while helping shape broader quality strategy."],
  ["2021–2023", "QA Engineer II", "Expanded test coverage, improved QA practices, and supported a growing mobile application ecosystem."],
  ["2020–2021", "QA Engineer", "Handled manual and exploratory testing, regression coverage, production validation, and defect triage."],
  ["2018–2020", "Customer Success Technical Specialist", "Solved complex customer issues, built deep product knowledge, and worked closely with engineering on technical problems."],
];

const selectedWork = [
  ["React Native modernization", "Led modernization across a large white-label mobile app ecosystem, including a React Native upgrade from 0.68 to 0.77, dependency updates, compatibility work, and release coordination."],
  ["Production investigations", "Investigated complex production issues involving crashes, push notifications, app signing, WebViews, OS changes, and third-party dependencies."],
  ["Release tooling & delivery", "Improved the workflows and tooling behind frequent mobile releases, reducing manual work and making releases more reliable."],
  ["Platform compliance", "Managed platform compliance work related to Apple and Google requirements, compatibility changes, and deadlines affecting thousands of mobile apps."],
];

export default function Work() {
  return (
    <div className="publication work-page">
      <a className="skip-link" href="#main">Skip to content</a>
      <SiteHeader currentPage="work" />
      <main id="main">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-heading">
            <h1 id="hero-title">Work</h1>
            <p className="section-lead work-hero-line">Technical leadership, software quality, and product delivery.</p>
          </div>
          <div className="photo hero-photo">
            <div className="photo-space">
              <Image src="/IMG_7207.JPG" alt="Sunset over a lake framed by dark mountain silhouettes." fill sizes="(max-width: 440px) calc(100vw - 44px), (max-width: 1600px) 90vw, 1440px" preload className="photo-image" />
            </div>
          </div>
        </section>

        <section className="editorial-section approach-section" aria-labelledby="approach-title">
          <div className="approach-text">
            <div className="section-heading">
              <h2 id="approach-title">My Approach</h2>
            </div>
            <div className="section-copy">
            <p className="body-copy">I like work that requires context, judgment, and digging into the details. I want to understand the problem well enough to ask the right questions, catch risks early, and provide a clear path forward.</p>
            </div>
          </div>
          <div className="photo approach-photo">
            <div className="photo-space">
              <Image src="/IMG_0317.jpg" alt="A towering tree surrounded by ferns and dense green forest." fill sizes="(max-width: 440px) calc(100vw - 44px), (max-width: 700px) 90vw, (max-width: 1600px) 31vw, 496px" className="photo-image" />
            </div>
          </div>
        </section>

        <section className="editorial-section career-section" aria-labelledby="career-title">
          <div className="section-heading"><h2 id="career-title">Career Progression</h2></div>
          <div className="section-copy">
            <p className="body-copy">I spent nearly 11 years at Pushpay, progressing across customer-facing roles, QA engineering, and technical leadership.</p>
            <ol className="career-timeline">
              {career.map(([years, title, description]) => (
                <li key={years}>
                  <p className="career-years">{years}</p>
                  <h3>{title}</h3>
                  <p className="body-copy">{description}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="editorial-section selected-work-section" aria-labelledby="selected-title">
          <div className="section-heading"><h2 id="selected-title">Selected Work</h2></div>
          <div className="section-copy">
            <p className="body-copy">A few examples of the work I’ve led and contributed to.</p>
            <ul className="selected-work-list">
              {selectedWork.map(([title, description], index) => (
                <li key={title}>
                  <div className={`work-marker work-marker-${index + 1}`} aria-hidden="true">
                    {index === 0 && (
                      <div className="work-devices">
                        <span className="work-device"><i /><i /><i /></span>
                        <span className="work-device"><i /><i /><i /></span>
                      </div>
                    )}
                    {index === 1 && (
                      <div className="work-trace">
                        <span /><span /><span className="work-trace-focus" /><span /><span />
                      </div>
                    )}
                    {index === 2 && (
                      <div className="work-pipeline">
                        <span><i /><i /></span><span><i /><i /></span><span><i /><i /></span>
                      </div>
                    )}
                    {index === 3 && (
                      <div className="work-requirements">
                        <span><i /><i /><i /></span><span><i /><i /><i /></span>
                      </div>
                    )}
                  </div>
                  <div>
                    <h3>{title}</h3>
                    <p className="body-copy">{description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="work-resume" className="editorial-section work-resume-section" aria-labelledby="resume-title">
          <div className="section-heading"><h2 id="resume-title">Resume</h2></div>
          <div className="section-copy">
            <a className="section-link resume-document-link" href="/Elliot_Preston_Resume.pdf">
              <span className="resume-document-icon" aria-hidden="true" />
              <span>View Resume</span>
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
