import {
  ArrowRight,
  ArrowUpRight,
  Calendar,
  CheckCircle,
  ChevronRight,
  HeartPulse,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";
import styles from "./TemplatePreview.module.css";

import dentalCta from "./assets/dental/cta.png";
import dentalHero from "./assets/dental/hero.png";
import dentalOrb from "./assets/dental/orb.png";
import dentalStory1 from "./assets/dental/story-1.png";
import dentalStory2 from "./assets/dental/story-2.png";
import physioHero from "./assets/physiotherapy/hero.png";
import physioService1 from "./assets/physiotherapy/service-1.png";
import physioService2 from "./assets/physiotherapy/service-2.png";
import physioTeam1 from "./assets/physiotherapy/team-1.png";
import physioTeam2 from "./assets/physiotherapy/team-2.png";
import plumbingHero from "./assets/plumbing/hero.png";
import plumbingProcess from "./assets/plumbing/process.png";
import plumbingService1 from "./assets/plumbing/service-1.png";
import plumbingService2 from "./assets/plumbing/service-2.png";
import plumbingService3 from "./assets/plumbing/service-3.png";
import roofingHero from "./assets/roofing/hero.png";
import roofingProject1 from "./assets/roofing/project-1.png";
import roofingProject2 from "./assets/roofing/project-2.png";
import roofingService1 from "./assets/roofing/service-1.png";
import roofingService2 from "./assets/roofing/service-2.png";

const TEMPLATE_VERSION = "template-v1";

const TEMPLATE_ASSETS = {
  "roofing-contractors": {
    hero: roofingHero,
    service1: roofingService1,
    service2: roofingService2,
    project1: roofingProject1,
    project2: roofingProject2
  },
  "dental-clinics": {
    hero: dentalHero,
    orb: dentalOrb,
    story1: dentalStory1,
    story2: dentalStory2,
    cta: dentalCta
  },
  "plumbing-companies": {
    hero: plumbingHero,
    service1: plumbingService1,
    service2: plumbingService2,
    service3: plumbingService3,
    process: plumbingProcess
  },
  "physiotherapy-clinics": {
    hero: physioHero,
    service1: physioService1,
    service2: physioService2,
    team1: physioTeam1,
    team2: physioTeam2
  }
};

function src(image) {
  return image?.src || image || "";
}

function items(value) {
  return Array.isArray(value) ? value.filter(Boolean) : [];
}

function phoneHref(phone) {
  return phone ? `tel:${phone}` : "#contact";
}

function mailHref(email) {
  return email ? `mailto:${email}` : "#contact";
}

function initials(name) {
  return String(name || "LB")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

function TemplateButton({ href, children, variant = "primary", icon: Icon = ArrowRight }) {
  return (
    <a className={`${styles.templateButton} ${styles[variant]}`} href={href || "#contact"}>
      <span>{children}</span>
      <Icon size={18} />
    </a>
  );
}

function ContactMini({ brand, dark = false }) {
  return (
    <div className={`${styles.contactMini} ${dark ? styles.contactMiniDark : ""}`}>
      {brand.phone ? (
        <a href={phoneHref(brand.phone)}>
          <Phone size={16} />
          <span>{brand.phone}</span>
        </a>
      ) : null}
      {brand.address ? (
        <span>
          <MapPin size={16} />
          <span>{brand.address}</span>
        </span>
      ) : null}
    </div>
  );
}

function RoofingTemplate({ brand, fields, assets }) {
  const services = items(fields.services).slice(0, 3);
  const projects = items(fields.proofItems).slice(0, 3);
  const steps = items(fields.processSteps).slice(0, 3);
  const trustItems = items(fields.trustItems).slice(0, 4);

  return (
    <main className={`${styles.templatePage} ${styles.templateRoofing}`} style={{ "--template-accent": brand.accentColor, "--template-primary": brand.primaryColor }}>
      <nav className={styles.roofingNav}>
        <strong>{brand.businessName}<span>.</span></strong>
        <div>
          <a href="#services">Services</a>
          <a href="#proof">Portfolio</a>
          <a href="#contact">Consultation</a>
        </div>
        <Menu className={styles.mobileMenuIcon} size={28} />
      </nav>

      <section className={styles.roofingHero}>
        <img alt={`${brand.businessName} roofing preview`} src={src(assets.hero)} />
        <div className={styles.roofingHeroOverlay} />
        <div className={styles.roofingHeroInner}>
          <p className={styles.roofingKicker}>{fields.heroEyebrow || brand.categoryLabel}</p>
          <h1>{fields.heroHeadline}</h1>
          <p>{fields.heroBody}</p>
          <TemplateButton href={phoneHref(brand.phone)} icon={ArrowUpRight}>{fields.primaryCta}</TemplateButton>
        </div>
      </section>

      <section className={styles.darkTrustBar}>
        {trustItems.map((item, index) => (
          <div key={`${item.title}-${index}`}>
            <ShieldCheck size={18} />
            <strong>{item.title}</strong>
            <span>{item.description}</span>
          </div>
        ))}
      </section>

      <section className={styles.roofingServices} id="services">
        {services.slice(0, 2).map((service, index) => (
          <article className={styles.roofingServiceBand} key={service.title}>
            <div className={styles.roofingServiceImage}>
              <img alt={service.title} src={src(index === 0 ? assets.service1 : assets.service2)} />
            </div>
            <div className={styles.roofingServiceCard}>
              <span>{service.eyebrow}</span>
              <h2>{service.title}</h2>
              <p>{service.description}</p>
              <a href="#contact">{service.cta}<ArrowUpRight size={16} /></a>
            </div>
          </article>
        ))}
      </section>

      <section className={styles.roofingProof} id="proof">
        <div className={styles.sectionHeaderRow}>
          <div>
            <p>{fields.featureEyebrow}</p>
            <h2>{fields.featureTitle}</h2>
          </div>
          <span>{fields.featureBody}</span>
        </div>
        <div className={styles.roofingProjectGrid}>
          {[assets.project1, assets.project2].map((image, index) => (
            <article key={`roofing-project-${index}`}>
              <img alt={`${brand.businessName} roofing project ${index + 1}`} src={src(image)} />
              <div>
                <span>{projects[index] || "Local project"}</span>
                <strong>{index === 0 ? "Inspection Ready" : "Repair Planning"}</strong>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.roofingContact} id="contact">
        <div>
          <h2>{fields.contactTitle}</h2>
          <p>{fields.contactBody}</p>
          <ContactMini brand={brand} dark />
        </div>
        <form className={styles.darkForm}>
          <input aria-label="Name" placeholder="Name" />
          <input aria-label="Phone" placeholder="Phone" />
          <select aria-label="Service">
            {items(fields.formServiceOptions).map((option) => <option key={option}>{option}</option>)}
          </select>
          <textarea aria-label="Project brief" placeholder="Project brief" rows={4} />
          <button type="submit">{fields.primaryCta}</button>
        </form>
      </section>

      <footer className={styles.darkFooter}>
        <strong>{brand.businessName}</strong>
        <p>{fields.footerSummary}</p>
      </footer>
    </main>
  );
}

function DentalTemplate({ brand, fields, assets }) {
  const services = items(fields.services).slice(0, 6);
  const trustItems = items(fields.trustItems).slice(0, 4);
  const featureItems = items(fields.featureItems).slice(0, 3);

  return (
    <main className={`${styles.templatePage} ${styles.templateDental}`} style={{ "--template-accent": brand.accentColor, "--template-primary": brand.primaryColor }}>
      <div className={styles.dentalNavWrap}>
        <header className={styles.dentalNav}>
          <strong>{initials(brand.businessName)}.</strong>
          <nav>
            <a href="#services">Services</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </nav>
          <a href={phoneHref(brand.phone)}>{fields.primaryCta}</a>
        </header>
      </div>

      <section className={styles.dentalHero}>
        <img alt={`${brand.businessName} dental care`} src={src(assets.hero)} />
        <div>
          <span>{fields.heroEyebrow}</span>
          <h1>{fields.heroHeadline}</h1>
          <p>{fields.heroBody}</p>
          <div className={styles.heroActions}>
            <TemplateButton href={phoneHref(brand.phone)}>{fields.primaryCta}</TemplateButton>
            <TemplateButton href="#services" variant="glass" icon={Sparkles}>{fields.secondaryCta}</TemplateButton>
          </div>
        </div>
      </section>

      <section className={styles.dentalTrust}>
        {trustItems.map((item, index) => (
          <div key={`${item.title}-${index}`}>
            <Star size={18} />
            <strong>{item.title}</strong>
            <span>{item.description}</span>
          </div>
        ))}
      </section>

      <section className={styles.dentalServices} id="services">
        <div>
          <h2>{fields.servicesTitle}</h2>
          <p>{fields.servicesIntro}</p>
          <div className={styles.dentalCardGrid}>
            {services.map((service, index) => (
              <article key={`${service.title}-${index}`}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ChevronRight size={18} />
              </article>
            ))}
          </div>
        </div>
        <aside className={styles.dentalOrb}>
          <img alt={`${brand.businessName} clinic visual`} src={src(assets.orb)} />
          <span>{fields.featureEyebrow}</span>
        </aside>
      </section>

      <section className={styles.dentalStories} id="experience">
        <p>{fields.proofTitle}</p>
        <div>
          {[assets.story1, assets.story2, assets.cta].map((image, index) => (
            <article key={`dental-story-${index}`}>
              <img alt={`${brand.businessName} dental story ${index + 1}`} src={src(image)} />
              <blockquote>{index === 0 ? fields.testimonialQuote : featureItems[index - 1] || fields.featureTitle}</blockquote>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.dentalCta} id="contact">
        <img alt={`${brand.businessName} clinic atmosphere`} src={src(assets.cta)} />
        <div>
          <span>{fields.featureEyebrow}</span>
          <h2>{fields.contactTitle}</h2>
          <p>{fields.contactBody}</p>
          <div className={styles.heroActions}>
            <TemplateButton href={phoneHref(brand.phone)}>{fields.primaryCta}</TemplateButton>
            <TemplateButton href="#contact" variant="glass" icon={Phone}>Call</TemplateButton>
          </div>
        </div>
      </section>

      <footer className={styles.glassFooter}>
        <strong>{brand.businessName}</strong>
        <p>{fields.footerSummary}</p>
      </footer>
    </main>
  );
}

function PlumbingTemplate({ brand, fields, assets }) {
  const services = items(fields.services).slice(0, 3);
  const steps = items(fields.processSteps).slice(0, 3);
  const trustItems = items(fields.trustItems).slice(0, 4);

  return (
    <main className={`${styles.templatePage} ${styles.templatePlumbing}`} style={{ "--template-accent": brand.accentColor, "--template-primary": brand.primaryColor }}>
      <nav className={styles.plumbingNav}>
        <strong>{brand.businessName}</strong>
        <div>
          <a href="#services">Services</a>
          <a href="#process">Process</a>
          <a href="#contact">Contact</a>
        </div>
        <a href={phoneHref(brand.phone)}>{fields.primaryCta}</a>
      </nav>

      <header className={styles.plumbingHero}>
        <img alt={`${brand.businessName} plumbing service`} src={src(assets.hero)} />
        <div>
          <span>{fields.heroEyebrow}</span>
          <h1>{fields.heroHeadline}</h1>
          <p>{fields.heroBody}</p>
          <div className={styles.heroActions}>
            <TemplateButton href={phoneHref(brand.phone)} icon={Phone}>{brand.phone || fields.primaryCta}</TemplateButton>
            <TemplateButton href="#services" variant="outline">{fields.secondaryCta}</TemplateButton>
          </div>
          <div className={styles.plumbingTrust}>
            {trustItems.map((item, index) => <span key={`${item.title}-${index}`}>{item.title}</span>)}
          </div>
        </div>
      </header>

      <section className={styles.plumbingServices} id="services">
        <div className={styles.sectionHeaderRow}>
          <div>
            <p>{fields.servicesEyebrow}</p>
            <h2>{fields.servicesTitle}</h2>
          </div>
          <span>{fields.servicesIntro}</span>
        </div>
        <div className={styles.plumbingGallery}>
          {[assets.service1, assets.service2, assets.service3].map((image, index) => {
            const service = services[index] || {};
            return (
              <article key={`${service.title}-${index}`}>
                <img alt={service.title || `${brand.businessName} service`} src={src(image)} />
                <div>
                  <span>{service.eyebrow}</span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className={styles.plumbingProcess} id="process">
        <div>
          <h2>{fields.processTitle}</h2>
          {steps.map((step, index) => (
            <article key={`${step.title}-${index}`}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </article>
          ))}
        </div>
        <figure>
          <img alt={`${brand.businessName} process`} src={src(assets.process)} />
          <figcaption>{fields.featureTitle}</figcaption>
        </figure>
      </section>

      <section className={styles.plumbingQuote}>
        <blockquote>{fields.testimonialQuote}</blockquote>
        <cite>{fields.testimonialName}</cite>
      </section>

      <footer className={styles.plumbingFooter} id="contact">
        <div>
          <strong>{brand.businessName}</strong>
          <p>{fields.footerSummary}</p>
        </div>
        <div>
          <h2>{fields.contactTitle}</h2>
          <p>{fields.contactBody}</p>
          <ContactMini brand={brand} dark />
        </div>
      </footer>
      <a className={styles.mobileStickyCall} href={phoneHref(brand.phone)}>
        <Phone size={18} />
        <span>{fields.primaryCta}</span>
      </a>
    </main>
  );
}

function PhysiotherapyTemplate({ brand, fields, assets }) {
  const services = items(fields.services).slice(0, 3);
  const trustItems = items(fields.trustItems).slice(0, 4);
  const steps = items(fields.processSteps).slice(0, 3);

  return (
    <main className={`${styles.templatePage} ${styles.templatePhysiotherapy}`} style={{ "--template-accent": brand.accentColor, "--template-primary": brand.primaryColor }}>
      <header className={styles.physioNav}>
        <strong>{brand.businessName}</strong>
        <nav>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <a href={phoneHref(brand.phone)}>{fields.primaryCta}</a>
      </header>

      <section className={styles.physioHero}>
        <img alt={`${brand.businessName} physiotherapy care`} src={src(assets.hero)} />
        <div>
          <span>{fields.heroEyebrow}</span>
          <h1>{fields.heroHeadline}</h1>
          <p>{fields.heroBody}</p>
          <div className={styles.heroActions}>
            <TemplateButton href={phoneHref(brand.phone)}>{fields.primaryCta}</TemplateButton>
            <TemplateButton href="#services" variant="outline">{fields.secondaryCta}</TemplateButton>
          </div>
        </div>
      </section>

      <section className={styles.physioTrust}>
        {trustItems.map((item, index) => (
          <div key={`${item.title}-${index}`}>
            <CheckCircle size={19} />
            <strong>{item.title}</strong>
            <span>{item.description}</span>
          </div>
        ))}
      </section>

      <section className={styles.physioServices} id="services">
        <div className={styles.sectionHeaderRow}>
          <div>
            <p>{fields.servicesEyebrow}</p>
            <h2>{fields.servicesTitle}</h2>
          </div>
          <span>{fields.servicesIntro}</span>
        </div>
        <div className={styles.physioBento}>
          {services.map((service, index) => {
            const image = index === 0 ? assets.service1 : index === 1 ? assets.service2 : null;
            return (
              <article className={index === 0 ? styles.physioLargeService : ""} key={`${service.title}-${index}`}>
                {image ? <img alt={service.title} src={src(image)} /> : <HeartPulse size={36} />}
                <div>
                  <span>{service.eyebrow}</span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className={styles.physioAbout} id="about">
        <div>
          <p>{fields.featureEyebrow}</p>
          <h2>{fields.featureTitle}</h2>
          <p>{fields.featureBody}</p>
        </div>
        <div className={styles.physioTeam}>
          {[assets.team1, assets.team2].map((image, index) => (
            <article key={`physio-team-${index}`}>
              <img alt={`${brand.businessName} care visual ${index + 1}`} src={src(image)} />
              <h3>{index === 0 ? "Assessment support" : "Recovery planning"}</h3>
              <p>{items(fields.featureItems)[index] || "Patient-focused care path"}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.physioContact} id="contact">
        <div>
          <h2>{fields.contactTitle}</h2>
          <p>{fields.contactBody}</p>
          <ContactMini brand={brand} />
        </div>
        <div className={styles.physioSteps}>
          {steps.map((step, index) => (
            <article key={`${step.title}-${index}`}>
              <span>{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <footer className={styles.physioFooter}>
        <strong>{brand.businessName}</strong>
        <p>{fields.footerSummary}</p>
        <a href={phoneHref(brand.phone)}><Calendar size={18} />{fields.primaryCta}</a>
      </footer>
    </main>
  );
}

const TEMPLATE_COMPONENTS = {
  "roofing-contractors": RoofingTemplate,
  "dental-clinics": DentalTemplate,
  "plumbing-companies": PlumbingTemplate,
  "physiotherapy-clinics": PhysiotherapyTemplate
};

export function isTemplatePreviewContent(content = {}) {
  return content.version === TEMPLATE_VERSION && Boolean(TEMPLATE_COMPONENTS[content.templateCategory]);
}

export default function TemplatePreview({ generation }) {
  const content = generation.content || {};
  const Component = TEMPLATE_COMPONENTS[content.templateCategory];
  if (!Component) return null;

  return (
    <Component
      assets={TEMPLATE_ASSETS[content.templateCategory] || {}}
      brand={content.brand || {}}
      fields={content.fields || {}}
    />
  );
}
