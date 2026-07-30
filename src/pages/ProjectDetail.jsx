import { useParams, Link, Navigate } from "react-router-dom";
import Reveal from "../components/Reveal.jsx";
import Contact from "../components/Contact/Contact.jsx";
import { projects, getProjectBySlug } from "../data/projects.js";
import "./ProjectDetail.css";

/**
 * Project Detail / Case Study
 * Follows a fixed narrative order (overview → background → problems →
 * direction → visual system → screens → responsive → role/tools → result)
 * so a reviewer can answer: why this decision, what problem it solved, what
 * the designer actually owned, and what changed as a result.
 */
export default function ProjectDetail() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) return <Navigate to="/" replace />;

  const idx = projects.findIndex((p) => p.slug === slug);
  const next = projects[(idx + 1) % projects.length];

  return (
    <main className="case" style={{ "--project-accent": project.accent }}>
      {/* 1. Hero image */}
      <section className="case__hero" data-nav-theme="dark">
        {project.images?.hero ? (
          <img
            className="case__hero-image case__hero-image--real"
            src={project.heroImage}
            alt={`${project.title} 대표 이미지`}
          />
        ) : (
          <div
            className="img-placeholder case__hero-image"
            style={{ "--ph-a": project.accent, "--ph-b": "#171717" }}
          >
            <span>{project.title} — 대표 이미지 교체 영역 ({project.heroImage})</span>
          </div>
        )}
        <div className="case__hero-info container">
          <span className="case__number">PROJECT {project.number}</span>
          <h1 className="case__title">{project.title}</h1>
          <p className="case__category">{project.category}</p>
          <div className="case__hero-meta">
            <span>{project.role}</span>
            <span>{project.year}</span>
          </div>
        </div>
      </section>

      <div className="container case__body" data-nav-theme="light">
        {/* 2. Overview */}
        <Reveal as="section" className="case__section" aria-labelledby="overview-title">
          <h2 id="overview-title" className="case__section-title">
            <span className="case__section-num">01</span> Overview
          </h2>
          <div className="case__overview-grid">
            <p className="case__overview-desc">{project.overview.description}</p>
            <dl className="case__overview-facts">
              <div>
                <dt>Client</dt>
                <dd>{project.overview.client}</dd>
              </div>
              <div>
                <dt>Scope</dt>
                <dd>{project.overview.scope}</dd>
              </div>
              <div>
                <dt>Duration</dt>
                <dd>{project.overview.duration}</dd>
              </div>
            </dl>
          </div>
        </Reveal>

        {/* 3. Background & goals */}
        <Reveal as="section" className="case__section" aria-labelledby="bg-title">
          <h2 id="bg-title" className="case__section-title">
            <span className="case__section-num">02</span> Background &amp; Goals
          </h2>
          <ul className="case__statement-list">
            {project.background.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </Reveal>

        {/* 4. Problems */}
        <Reveal as="section" className="case__section" aria-labelledby="problem-title">
          <h2 id="problem-title" className="case__section-title">
            <span className="case__section-num">03</span> Existing Problems
          </h2>
          <ul className="case__statement-list case__statement-list--flagged">
            {project.problems.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </Reveal>

        {/* 5. Design direction */}
        <Reveal as="section" className="case__section" aria-labelledby="direction-title">
          <h2 id="direction-title" className="case__section-title">
            <span className="case__section-num">04</span> Design Direction
          </h2>
          <ul className="case__statement-list">
            {project.direction.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </Reveal>

        {/* 6. Color & typography */}
        <Reveal as="section" className="case__section" aria-labelledby="palette-title">
          <h2 id="palette-title" className="case__section-title">
            <span className="case__section-num">05</span> Color &amp; Typography
          </h2>
          <div className="case__palette">
            {project.colorTypography.colors.map((c) => (
              <span key={c} className="case__swatch" style={{ background: c }}>
                {c}
              </span>
            ))}
          </div>
          <ul className="case__typefaces">
            {project.colorTypography.typefaces.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </Reveal>

        {/* 7. Key UI screens */}
        <Reveal as="section" className="case__section" aria-labelledby="screens-title">
          <h2 id="screens-title" className="case__section-title">
            <span className="case__section-num">06</span> Key UI Screens
          </h2>
          <div className="case__screens">
            {project.screens.map((src, i) =>
              project.images?.screens?.[i] ? (
                <img
                  key={src}
                  className="case__screen case__screen--real"
                  src={src}
                  alt={`${project.title} 화면 ${i + 1}`}
                  loading="lazy"
                />
              ) : (
                <div
                  key={src}
                  className="img-placeholder case__screen"
                  style={{ "--ph-a": project.accent, "--ph-b": "#24100B" }}
                >
                  <span>
                    Screen 0{i + 1} 교체 영역 ({src})
                  </span>
                </div>
              )
            )}
          </div>
        </Reveal>

        {/* 8. Responsive screens */}
        <Reveal as="section" className="case__section" aria-labelledby="responsive-title">
          <h2 id="responsive-title" className="case__section-title">
            <span className="case__section-num">07</span> Responsive Screens
          </h2>
          <div className="case__responsive">
            {project.responsive.map((src, i) =>
              project.images?.responsive?.[i] ? (
                <img
                  key={src}
                  className="case__responsive-item case__responsive-item--real"
                  src={src}
                  alt={`${project.title} ${i === 0 ? "태블릿" : "모바일"} 화면`}
                  loading="lazy"
                />
              ) : (
                <div
                  key={src}
                  className="img-placeholder case__responsive-item"
                  style={{ "--ph-a": "#171717", "--ph-b": project.accent }}
                >
                  <span>
                    {i === 0 ? "Tablet" : "Mobile"} 교체 영역 ({src})
                  </span>
                </div>
              )
            )}
          </div>
        </Reveal>

        {/* 9. Role & tools */}
        <Reveal as="section" className="case__section" aria-labelledby="role-title">
          <h2 id="role-title" className="case__section-title">
            <span className="case__section-num">08</span> Role &amp; Tools
          </h2>
          <p className="case__role">{project.role}</p>
          <ul className="case__tools">
            {project.toolsUsed.map((tool) => (
              <li key={tool}>{tool}</li>
            ))}
          </ul>
        </Reveal>

        {/* 10. Result / learnings */}
        <Reveal as="section" className="case__section case__result" aria-labelledby="result-title">
          <h2 id="result-title" className="case__section-title">
            <span className="case__section-num">09</span> Result &amp; Learnings
          </h2>
          <p className="case__result-text">{project.result}</p>
        </Reveal>

        <div className="case__nav">
          <Link to="/#works" className="case__back">
            ← Back to Selected Works
          </Link>
          <Link to={`/work/${next.slug}`} className="case__next">
            Next Project: {next.title} →
          </Link>
        </div>
      </div>

      <Contact />
    </main>
  );
}
