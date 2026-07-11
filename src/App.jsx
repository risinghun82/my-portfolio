import { useState, useEffect } from "react";
import "./App.css";

const works = [
  {
    id: 1,
    cat: "UI/UX Design",
    company: "이니그마",
    year: "2023",
    title: "지메시 — B2C 지능형 메시징 플랫폼",
    desc: "B2B 메시지 발송 툴을 B2C 통합 메시징 플랫폼으로 전환. UX 기획·설계·퍼블리싱 100% 단독 수행. 다채널 교차 발송 로직을 사용자가 실수 없이 사용할 수 있는 구조로 설계했습니다.",
    skills: ["UX 기획", "UI 디자인", "HTML/CSS", "Adobe XD"],
    results: ["B2B → B2C 전환 성공", "현재 실서비스 운영 중", "기여도 100%"],
    sections: [
      { label: "BEFORE — 팩트메시지 (기존 B2B)", type: "before", images: ["메인.png", "메시지작성.png", "고객등록.png"] },
      { label: "AFTER — 지메시 (B2C 전환)", type: "after", images: ["지메시메인랜딩페이지.png", "메시지작성_지메시.png", "설정.png", "고객센터.png"] },
      { label: "UX 기획 — 화면 정의서", type: "doc", images: ["지메시와이어프레임.png"] },
    ],
  },
  {
    id: 2,
    cat: "Exhibition Design",
    company: "이니그마",
    year: "2024",
    title: "국내외 전시회 디자인 — CES · 일본 · 킨텍스",
    desc: "CES(미국, 150개국 참가 규모), 일본 전시회, 킨텍스 등에서 백월 디자인, X배너, 3단 리플렛 등 오프라인 커뮤니케이션 디자인 전반을 담당. 온라인 UX 메시지와 일관성을 유지했습니다.",
    skills: ["전시 디자인", "Illustrator", "Photoshop", "인쇄물"],
    results: ["CES 2024 참가 (150개국 규모)", "일본 전시회 · 킨텍스", "기여도 100%"],
    grid: "2col",
    images: ["이니그마_x배너.jpg", "일잘러.png", "뒷면_최종.jpg"],
  },
  {
    id: 3,
    cat: "Branding",
    company: "오렌지베이스캠프",
    year: "2022",
    title: "빠삭한녀석들 — 브랜드 아이덴티티",
    desc: "사무실 간식 서비스 스타트업의 브랜드 아이덴티티 전반 담당. 로고 디자인부터 전단지, 배너, 서비스 운영까지 100% 단독 수행했습니다.",
    skills: ["로고 디자인", "브랜딩", "Illustrator", "인쇄물"],
    results: ["로고 · 전단지 · 배너 전반", "기여도 100%"],
    grid: "2col",
    images: ["전단지_앞면.jpg", "전단지_뒷면.jpg", "판매랭킹배너.jpg"],
  },
  {
    id: 4,
    cat: "UI Design",
    company: "한국기술지원",
    year: "2019",
    title: "OTT 서비스 & CORNPlayer UI 디자인",
    desc: "웹하드 기반 OTT 서비스 UI 설계 및 CORNPlayer 미디어 플레이어 UI 디자인. 대규모 서비스형 웹 환경에서의 UI/UX 설계 및 퍼블리싱 협업 경험을 쌓았습니다.",
    skills: ["UI 디자인", "Photoshop", "OTT", "플레이어 UI"],
    results: ["OTT 서비스 UI", "CORNPlayer 플레이어 UI", "기여도 100%"],
    images: ["ott디자인.jpg", "플레이어디자인01.jpg", "플레이어디자인02.jpg", "플레이어디자인03.jpg", "플레이리스트.png"],
  },
  {
    id: 5,
    cat: "Web Banner",
    company: "한국기술지원 / 오렌지베이스캠프",
    year: "2014 — 2023",
    title: "이벤트 & 프로모션 웹 배너",
    desc: "웹하드, 파일노리, 이지원 등 플랫폼의 이벤트·프로모션 배너 다수 제작. KBS, 월드컵, 영화, 애니 등 다양한 테마의 배너를 기획하고 디자인했습니다.",
    skills: ["웹 배너", "Photoshop", "이벤트 디자인"],
    results: ["다수 플랫폼 배너 제작", "기여도 100%"],
    grid: "4col",
    images: ["최신영화이벤트.jpg", "월드컵이벤트.jpg", "반값이벤트.jpg", "최신앱설치이벤트.jpg", "JTBC컨텐츠_명작드라마 이벤트.jpg", "EBS인기키즈자료.jpg"],
  },
];

const skillGroups = [
  { label: "기획 · 설계", items: ["UX 기획", "UI 디자인"] },
  { label: "디자인 툴", items: ["Adobe XD", "Photoshop", "Illustrator"] },
  { label: "퍼블리싱", items: ["HTML/CSS"] },
  { label: "전문 영역", items: ["브랜딩", "전시 디자인", "웹 배너", "OTT / 플레이어 UI"] },
];

const career = [
  { year: "2024", company: "이니그마", desc: "CES 등 국내외 전시 디자인 총괄" },
  { year: "2023", company: "이니그마", desc: "지메시 B2C 메시징 플랫폼 UX·UI 설계" },
  { year: "2022", company: "오렌지베이스캠프", desc: "빠삭한녀석들 브랜드 아이덴티티 구축" },
  { year: "2019", company: "한국기술지원", desc: "OTT 서비스 및 CORNPlayer UI 디자인" },
  { year: "2014 — 2023", company: "한국기술지원 · 오렌지베이스캠프", desc: "이벤트 · 프로모션 웹 배너 다수 제작" },
];

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    const fn = e => { if (e.key === "Escape") setLightbox(null); };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = lightbox ? "hidden" : "";
  }, [lightbox]);

  // scroll-reveal: fade/slide in elements as they enter the viewport
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  // highlight the nav item matching the section currently in view
  const [active, setActive] = useState("top");
  useEffect(() => {
    const ids = ["top", "about", "works", "contact"];
    const sections = ids.map(id => document.getElementById(id)).filter(Boolean);
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );
    sections.forEach(s => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  const go = id => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="wrap">

      {/* NAV */}
      <nav className={"nav" + (scrolled ? " nav-solid" : "")}>
        <button className="nav-logo" onClick={() => go("top")}>SDH</button>
        <ul className={"nav-menu" + (menuOpen ? " is-open" : "")}>
          <li><button className={active === "top" ? "is-active" : ""} onClick={() => go("top")}>Home</button></li>
          <li><button className={active === "about" ? "is-active" : ""} onClick={() => go("about")}>About</button></li>
          <li><button className={active === "works" ? "is-active" : ""} onClick={() => go("works")}>Work</button></li>
          <li><button className={active === "contact" ? "is-active" : ""} onClick={() => go("contact")}>Contact</button></li>
        </ul>
        <button className={"hamburger" + (menuOpen ? " is-open" : "")} onClick={() => setMenuOpen(!menuOpen)}>
          <span /><span /><span />
        </button>
      </nav>

      {/* HERO */}
      <section id="top" className="hero">
        <div className="hero-inner">
          <div className="hero-photo">
            <img
              src="/images/profile.jpg"
              alt="신동훈 프로필 사진"
              onError={e => { e.target.style.display = "none"; }}
            />
            <span className="hero-photo-fallback">SDH</span>
          </div>
          <h1 className="hero-name">신동훈<br /><em>Shin Donghun</em></h1>
          <p className="hero-role">UI/UX Designer &amp; Web Publisher</p>
          <p className="hero-desc">
            안녕하세요! 저는 기획부터 디자인, HTML/CSS 구현까지<br />
            <strong>100% 직접 수행</strong>하는 UI/UX 디자이너입니다.<br />
            13년간 커머스, 메시징, 미디어 등 다양한 서비스를 만들어왔습니다.
          </p>
          <div className="hero-stats">
            <div className="hero-stat"><strong>13+</strong><span>년 경력</span></div>
            <div className="hero-stat"><strong>100%</strong><span>기여도</span></div>
            <div className="hero-stat"><strong>CES</strong><span>국제전시</span></div>
          </div>
          <button className="hero-cta" onClick={() => go("works")}>
            작업물 보기 ↓
          </button>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="about">
        <div className="about-intro reveal">
          <span className="section-label">ABOUT</span>
          <h2 className="about-title">기획부터 구현까지,<br />직접 책임지는 디자이너입니다.</h2>
          <p className="about-desc">
            13년간 커머스, 메시징, 미디어 등 다양한 서비스의 UI/UX를 기획하고
            디자인부터 HTML/CSS 퍼블리싱까지 단독으로 수행해왔습니다.
            B2B 툴을 B2C 서비스로 전환하는 구조 설계부터 CES 등 국제 전시의
            오프라인 커뮤니케이션 디자인까지, 디지털과 오프라인을 넘나들며
            사용자 경험의 일관성을 만드는 데 집중합니다.
          </p>
        </div>

        <div className="about-grid">
          <div className="skills-block reveal">
            <span className="section-label">SKILLS</span>
            <div className="skills-groups">
              {skillGroups.map(g => (
                <div className="skill-group" key={g.label}>
                  <h3 className="skill-group-title">{g.label}</h3>
                  <div className="skill-group-items">
                    {g.items.map(item => <span key={item} className="skill-tag">{item}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="career-block reveal">
            <span className="section-label">CAREER</span>
            <ul className="career-list">
              {career.map((c, i) => (
                <li className="career-item" key={i}>
                  <span className="career-year">{c.year}</span>
                  <div className="career-info">
                    <strong className="career-company">{c.company}</strong>
                    <span className="career-desc">{c.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* WORKS */}
      <section id="works" className="works">
        {works.map((w, wi) => (
          <div className="work-item reveal" key={w.id}>
            <div className="work-info">
              <div className="work-meta">
                <span className="work-cat">{w.cat}</span>
                <span className="work-dot">·</span>
                <span className="work-company">{w.company}</span>
                <span className="work-dot">·</span>
                <span className="work-year">{w.year}</span>
              </div>
              <h2 className="work-title">{w.title}</h2>
              <p className="work-desc">{w.desc}</p>
              <div className="work-skills">
                {w.skills.map(s => <span key={s} className="skill-tag">{s}</span>)}
                {w.results.map(r => <span key={r} className="result-tag">✓ {r}</span>)}
              </div>
            </div>

            <div className={
              "work-images" +
              (w.grid === "2col" ? " work-images--grid2" : "") +
              (w.grid === "3col" ? " work-images--grid3" : "") +
              (w.grid === "4col" ? " work-images--grid4" : "")
            }>
              {w.sections ? (
                <div className="before-after-wrap">
                  <div className="before-after-grid">
                    {w.sections.filter(s => s.type === "after").map((sec, si) => (
                      <div key={si}>
                        <div className={"ba-col ba-col--" + sec.type}>
                          <div className={"ba-label ba-label--" + sec.type}>
                            {sec.type === "before" ? "BEFORE" : "AFTER"}
                            <span>{sec.label.replace("BEFORE — ", "").replace("AFTER — ", "")}</span>
                          </div>
                          <div className="ba-images ba-images--grid">
                            {sec.images.map((img, ii) => (
                              <div className="work-img-wrap" key={ii} onClick={() => setLightbox({ src: "/images/" + img, alt: img })}>
                                <img src={"/images/" + img} alt={img} loading="lazy" onError={e => { e.target.style.opacity = "0.1"; }} />
                                <div className="work-img-hover"><span>크게 보기 +</span></div>
                              </div>
                            ))}
                          </div>
                        </div>
                        {sec.type === "before" && <div className="ba-arrow">↓</div>}
                      </div>
                    ))}
                  </div>
                  {w.sections.filter(s => s.type === "doc").map((sec, si) => (
                    <div key={si} className="doc-section">
                      <div className="doc-label">
                        <span className="badge-doc">DOCUMENT</span>
                        {sec.label.replace("UX 기획 — ", "")}
                      </div>
                      <div className="doc-images">
                        {sec.images.map((img, ii) => (
                          <div className="work-img-wrap" key={ii} onClick={() => setLightbox({ src: "/images/" + img, alt: img })}>
                            <img src={"/images/" + img} alt={img} loading="lazy" onError={e => { e.target.style.opacity = "0.1"; }} />
                            <div className="work-img-hover"><span>크게 보기 +</span></div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                w.images.map((img, ii) => (
                  <div className="work-img-wrap" key={ii} onClick={() => setLightbox({ src: "/images/" + img, alt: img })}>
                    <img src={"/images/" + img} alt={w.title + " " + (ii + 1)} loading="lazy" onError={e => { e.target.style.opacity = "0.1"; }} />
                    <div className="work-img-hover"><span>크게 보기 +</span></div>
                  </div>
                ))
              )}
            </div>

            {wi < works.length - 1 && <div className="work-divider" />}
          </div>
        ))}
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact">
        <h2 className="contact-title reveal">
          함께 일할 디자이너를<br />찾고 계신가요?
        </h2>
        <p className="contact-desc">
          프로젝트에 대해 논의하고 싶으시거나<br />
          질문이 있으시다면 언제든지 연락해 주세요!
        </p>
        <a className="contact-email" href="mailto:risinghun@naver.com">
          risinghun@naver.com
        </a>
        <p className="contact-copy">Thank you for viewing my portfolio.</p>
      </section>

      <footer className="footer">
        Copyright © 2025 신동훈 All rights reserved.
      </footer>

      {/* LIGHTBOX */}
      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <button className="lightbox-close" onClick={() => setLightbox(null)}>✕</button>
          <img
            className="lightbox-img"
            src={lightbox.src}
            alt={lightbox.alt}
            onClick={e => e.stopPropagation()}
          />
        </div>
      )}

    </div>
  );
}
