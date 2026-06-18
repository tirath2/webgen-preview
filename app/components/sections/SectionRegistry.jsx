import {
  BadgeCheck,
  Calendar,
  Check,
  Clock,
  CreditCard,
  Mail,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
  ShieldCheck,
  Star,
  Users
} from "lucide-react";

function imageUrl(value) {
  if (!value) return null;
  if (typeof value === "string") return value;
  return value.url || value.src || value.imageUrl || null;
}

function items(value) {
  return Array.isArray(value) ? value.filter(Boolean) : [];
}

function phoneHref(phone) {
  return phone ? `tel:${phone}` : "#contact";
}

const INTERNAL_COPY_PATTERNS = [
  /mobile performance is poor/i,
  /compress images/i,
  /unused scripts/i,
  /hosting\/cache/i,
  /prioritize above-fold/i,
  /\bquality score\b/i,
  /\bopportunity score\b/i,
  /\bsales opportunity\b/i,
  /\baudit\b/i,
  /\bweakness/i,
  /\bfailure/i,
  /\bmissing item/i,
  /\btechnical problem/i,
  /\blighthouse\b/i
];

function isPublicCopy(value) {
  const text = String(value || "").trim();
  if (!text) return false;
  if (/(\bq\s+\d+\b|\bo\s+\d+\b)/i.test(text)) return false;
  return !INTERNAL_COPY_PATTERNS.some((pattern) => pattern.test(text));
}

function publicCopy(value, fallback = "") {
  const text = String(value || "").trim();
  return isPublicCopy(text) ? text : fallback;
}

function publicTrustItems(value) {
  const blocked = [
    "website quality score",
    "sales opportunity score",
    "mobile first",
    "built for local search traffic",
    "audit ready",
    "preview ready",
    "run audit for deeper proof",
    "generated from lead data"
  ];

  return items(value).filter((item) => {
    const text = `${item.value || ""} ${item.title || ""} ${item.label || ""}`.toLowerCase();
    if (/(\bq\s+\d+\b|\bo\s+\d+\b)/i.test(text)) return false;
    return !blocked.some((phrase) => text.includes(phrase));
  });
}

function publicStatsItems(value) {
  const stats = items(value);
  const filtered = stats.filter((item) => {
    const text = `${item.value || ""} ${item.title || ""} ${item.label || ""}`.toLowerCase();
    if (/(\bq\s+\d+\b|\bo\s+\d+\b)/i.test(text)) return false;
    return !INTERNAL_COPY_PATTERNS.some((pattern) => pattern.test(text));
  });

  return filtered.length >= 2 ? filtered : [];
}

export function HeroSection({ props }) {
  const callHref = phoneHref(props.phone);
  const navItems = items(props.nav);

  return (
    <section className="preview-hero">
      <nav className="preview-nav">
        <strong>{props.businessName}</strong>
        <div className="nav-links">
          {navItems.map((item) => (
            <a href={item.href} key={item.href}>{item.label}</a>
          ))}
        </div>
        <a className="nav-call" href={callHref}>{props.phone ? "Call" : "Contact"}</a>
      </nav>
      <div className="hero-layout">
        <div className="hero-content">
          <p className="eyebrow">{props.eyebrow}</p>
          <h1>{props.headline}</h1>
          <p>{props.subheadline}</p>
          <div className="hero-actions">
            <a className="primary-link" href={callHref}>{props.primaryCta}</a>
            <a className="secondary-link" href="#services">{props.secondaryCta}</a>
          </div>
          {isPublicCopy(props.proof) ? (
            <div className="hero-proof">
              <Star size={17} />
              <span>{props.proof}</span>
            </div>
          ) : null}
        </div>

        <div className="hero-showcase" aria-hidden="true">
          <div className="hero-showcase-card">
            <span>{props.eyebrow || "Featured"}</span>
            <strong>{props.businessName || props.headline}</strong>
            <small>{props.primaryCta || "Get started"}</small>
          </div>
          <div className="hero-showcase-note">
            <span>{props.secondaryCta || "Explore"}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export function StatsSection({ props }) {
  const stats = publicStatsItems(props.items);
  if (!stats.length) return null;

  return (
    <section className="stats-strip">
      {stats.slice(0, 3).map((stat, index) => (
        <div key={`${stat.value}-${index}`}>
          <strong>{stat.value}</strong>
          <span>{stat.label}</span>
        </div>
      ))}
    </section>
  );
}

export function TrustBarSection({ props }) {
  const trustItems = publicTrustItems(props.items);

  return (
    <section className="trust-bar" aria-label={props.label || "Trust highlights"}>
      {trustItems.slice(0, 5).map((item, index) => (
        <div className="trust-item" key={`${item.title || item.value}-${index}`}>
          <BadgeCheck size={18} />
          <span>{item.value || item.title}</span>
          {item.label ? <small>{item.label}</small> : null}
        </div>
      ))}
    </section>
  );
}

export function InfoStripSection({ props }) {
  return (
    <section className="info-strip">
      <div>
        <Phone size={18} />
        <span>{props.phone || "Phone to be added"}</span>
      </div>
      <div>
        <MapPin size={18} />
        <span>{props.address || "Address to be added"}</span>
      </div>
      <div>
        <Clock size={18} />
        <span>{props.hours || "Open hours available on request"}</span>
      </div>
    </section>
  );
}

export function StorySection({ props }) {
  return (
    <section className="preview-section split about-section" id="story">
      <div className="story-heading">
        <p className="eyebrow">{props.eyebrow || "About"}</p>
        <h2>{props.title}</h2>
      </div>
      <div className="story-body">
        <p>{publicCopy(props.body, `${props.businessName || "This business"} can use this preview to make services, trust details, and contact options easier to find.`)}</p>
        <div className="image-pair">
          {items(props.images).slice(0, 2).map((src, index) => (
            <img src={imageUrl(src)} alt={`${props.businessName} preview image ${index + 1}`} key={`${imageUrl(src)}-${index}`} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function SignatureMenuSection({ props }) {
  return (
    <section className="signature-section">
      <div className="signature-image">
        <img src={imageUrl(props.image)} alt={`${props.businessName} featured atmosphere`} />
      </div>
      <div className="signature-content">
        <p className="eyebrow">{props.eyebrow || "Signature picks"}</p>
        <h2>{props.title}</h2>
        <div className="menu-list">
          {items(props.items).slice(0, 4).map((item, index) => (
            <div className="menu-row" key={`${item.name}-${index}`}>
              <div>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </div>
              <span>{item.price || item.label || "Featured"}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ServicesSection({ props }) {
  const images = items(props.images);
  const serviceItems = items(props.items);

  return (
    <section className="preview-section" id="services">
      <div className="section-heading">
        <div>
          <p className="eyebrow">{props.eyebrow || "Services"}</p>
          <h2>{props.title}</h2>
        </div>
      </div>
      <div className="service-grid">
        {serviceItems.map((service, index) => (
          <article className="service-card" key={`${service.title}-${index}`}>
            <div className="service-image-frame">
              <img src={imageUrl(service.image) || service.imageUrl || imageUrl(images[index % images.length])} alt={service.title} />
            </div>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function GallerySection({ props }) {
  return (
    <section className="gallery-band" aria-label={`${props.businessName} gallery`}>
      {items(props.images).slice(0, 4).map((src, index) => (
        <img src={imageUrl(src)} alt={`${props.businessName} gallery image ${index + 1}`} key={`${imageUrl(src)}-${index}`} />
      ))}
    </section>
  );
}

export function TestimonialsSection({ props }) {
  return (
    <section className="preview-section testimonials">
      <p className="eyebrow">{props.eyebrow || "Trust"}</p>
      <div className="quote-grid">
        {items(props.items).map((item, index) => (
          <blockquote key={`${item.name}-${index}`}>
            <p>{item.quote}</p>
            <cite>{item.name}</cite>
          </blockquote>
        ))}
      </div>
    </section>
  );
}

export function FaqSection({ props }) {
  return (
    <section className="preview-section">
      <p className="eyebrow">{props.eyebrow || "Questions"}</p>
      <h2>{props.title}</h2>
      <div className="faq-list">
        {items(props.items).map((item, index) => (
          <div className="faq-item" key={`${item.question}-${index}`}>
            <h3>{item.question}</h3>
            <p>{item.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function ContactSection({ props }) {
  return (
    <section className="contact-band" id="contact">
      <div>
        <p className="eyebrow">{props.eyebrow || "Contact"}</p>
        <h2>{props.title}</h2>
        <p>{props.body}</p>
      </div>
      <a className="primary-link" href={phoneHref(props.phone)}>{props.cta || "Call now"}</a>
    </section>
  );
}

export function CtaBandSection({ props }) {
  return (
    <section className="cta-band">
      <div>
        <p className="eyebrow">{props.eyebrow || "Next step"}</p>
        <h2>{props.title}</h2>
        <p>{props.body}</p>
      </div>
      <a className="primary-link" href={props.href || phoneHref(props.phone)}>{props.cta || "Get started"}</a>
    </section>
  );
}

export function BookingCtaSection({ props }) {
  return (
    <section className="preview-section booking-section">
      <div className="booking-copy">
        <p className="eyebrow">{props.eyebrow || "Book"}</p>
        <h2>{props.title}</h2>
        <p>{props.body}</p>
      </div>
      <div className="action-grid">
        <a href={props.bookingUrl || "#contact"}>
          <Calendar size={21} />
          <span>{props.bookingLabel || "Book online"}</span>
        </a>
        <a href={phoneHref(props.phone)}>
          <Phone size={21} />
          <span>{props.callLabel || "Call now"}</span>
        </a>
        {props.whatsapp ? (
          <a href={props.whatsapp}>
            <MessageCircle size={21} />
            <span>{props.whatsappLabel || "WhatsApp"}</span>
          </a>
        ) : null}
      </div>
    </section>
  );
}

export function LeadFormSection({ props }) {
  return (
    <section className="preview-section lead-form-section">
      <div>
        <p className="eyebrow">{props.eyebrow || "Request"}</p>
        <h2>{props.title}</h2>
        <p>{props.body}</p>
      </div>
      <form className="lead-form" action={props.action || "#contact"}>
        {items(props.fields).map((field, index) => (
          <label key={`${field.name || field.label}-${index}`}>
            <span>{field.label}</span>
            {field.type === "textarea" ? (
              <textarea name={field.name || field.label} placeholder={field.placeholder || ""} />
            ) : (
              <input name={field.name || field.label} placeholder={field.placeholder || ""} type={field.type || "text"} />
            )}
          </label>
        ))}
        <button type="submit">{props.cta || "Send request"}</button>
      </form>
    </section>
  );
}

export function OfferSection({ props }) {
  return (
    <section className="offer-section">
      <div className="offer-card">
        <p className="eyebrow">{props.eyebrow || "Offer"}</p>
        <h2>{props.title}</h2>
        <p>{props.body}</p>
        <div className="offer-meta">
          {props.badge ? <strong>{props.badge}</strong> : null}
          {props.expires ? <span>{props.expires}</span> : null}
        </div>
      </div>
      <a className="primary-link" href={props.href || phoneHref(props.phone)}>{props.cta || "Claim offer"}</a>
    </section>
  );
}

export function LocationsSection({ props }) {
  return (
    <section className="preview-section" id="locations">
      <div className="section-heading">
        <div>
          <p className="eyebrow">{props.eyebrow || "Locations"}</p>
          <h2>{props.title}</h2>
        </div>
      </div>
      <div className="location-grid">
        {items(props.items).map((location, index) => (
          <article className="compact-card location-card" key={`${location.name || location.address}-${index}`}>
            <MapPin size={22} />
            <h3>{location.name || `Location ${index + 1}`}</h3>
            <p>{location.address}</p>
            {location.hours ? <span>{location.hours}</span> : null}
            <div className="card-actions">
              {location.phone ? <a href={phoneHref(location.phone)}>Call</a> : null}
              {location.mapUrl ? <a href={location.mapUrl}>Directions</a> : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function PricingSection({ props }) {
  return (
    <section className="preview-section pricing-section">
      <p className="eyebrow">{props.eyebrow || "Pricing"}</p>
      <h2>{props.title}</h2>
      <div className="pricing-grid">
        {items(props.plans || props.items).map((plan, index) => (
          <article className={`pricing-card${plan.badge ? " featured" : ""}`} key={`${plan.name}-${index}`}>
            {plan.badge ? <span className="card-badge">{plan.badge}</span> : null}
            <h3>{plan.name}</h3>
            <strong>{plan.price}</strong>
            {plan.interval ? <small>{plan.interval}</small> : null}
            <p>{plan.description}</p>
            <ul>
              {items(plan.features).map((feature, featureIndex) => (
                <li key={`${feature}-${featureIndex}`}>
                  <Check size={17} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <a href={plan.href || props.href || "#contact"}>{plan.cta || props.cta || "Choose plan"}</a>
          </article>
        ))}
      </div>
    </section>
  );
}

export function PackagesSection({ props }) {
  return (
    <section className="preview-section package-section">
      <div className="section-heading">
        <div>
          <p className="eyebrow">{props.eyebrow || "Packages"}</p>
          <h2>{props.title}</h2>
        </div>
      </div>
      <div className="package-list">
        {items(props.items).map((pack, index) => (
          <article className="package-row" key={`${pack.name}-${index}`}>
            <div>
              <h3>{pack.name}</h3>
              <p>{pack.description}</p>
            </div>
            <div className="package-details">
              {pack.badge ? <span>{pack.badge}</span> : null}
              <strong>{pack.price}</strong>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function CatalogSection({ props }) {
  const fallbackImages = items(props.images);

  return (
    <section className="preview-section catalog-section">
      <p className="eyebrow">{props.eyebrow || "Catalog"}</p>
      <h2>{props.title}</h2>
      <div className="catalog-grid">
        {items(props.items).map((product, index) => (
          <article className="catalog-card" key={`${product.name}-${index}`}>
            <img src={imageUrl(product.image) || imageUrl(fallbackImages[index % fallbackImages.length])} alt={product.name} />
            <div>
              <span>{product.meta || product.category}</span>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              {product.price ? <strong>{product.price}</strong> : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function TeamSection({ props }) {
  return (
    <section className="preview-section team-section">
      <p className="eyebrow">{props.eyebrow || "Team"}</p>
      <h2>{props.title}</h2>
      <div className="team-grid">
        {items(props.members || props.items).map((member, index) => (
          <article className="team-card" key={`${member.name}-${index}`}>
            <img src={imageUrl(member.image)} alt={member.name} />
            <h3>{member.name}</h3>
            <span>{member.role}</span>
            <p>{member.bio}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function ScheduleSection({ props }) {
  return (
    <section className="preview-section schedule-section">
      <p className="eyebrow">{props.eyebrow || "Schedule"}</p>
      <h2>{props.title}</h2>
      <div className="schedule-list">
        {items(props.items).map((slot, index) => (
          <article className="schedule-row" key={`${slot.day}-${slot.title}-${index}`}>
            <strong>{slot.day}</strong>
            <span>{slot.time}</span>
            <div>
              <h3>{slot.title}</h3>
              <p>{slot.detail || slot.instructor || slot.location}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function BeforeAfterSection({ props }) {
  return (
    <section className="preview-section before-after-section">
      <p className="eyebrow">{props.eyebrow || "Results"}</p>
      <h2>{props.title}</h2>
      <div className="before-after-grid">
        {items(props.items).map((result, index) => (
          <article className="before-after-card" key={`${result.title}-${index}`}>
            <div className="before-after-images">
              <img src={imageUrl(result.beforeImage || result.before)} alt={`${result.title} before`} />
              <img src={imageUrl(result.afterImage || result.after)} alt={`${result.title} after`} />
            </div>
            <h3>{result.title}</h3>
            <p>{result.description || result.result}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function ProcessSection({ props }) {
  return (
    <section className="preview-section process-section">
      <p className="eyebrow">{props.eyebrow || "Process"}</p>
      <h2>{props.title}</h2>
      <div className="process-grid">
        {items(props.steps || props.items).map((step, index) => (
          <article className="process-step" key={`${step.title}-${index}`}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function FacilitiesSection({ props }) {
  const fallbackImages = items(props.images);

  return (
    <section className="preview-section facilities-section">
      <p className="eyebrow">{props.eyebrow || "Facilities"}</p>
      <h2>{props.title}</h2>
      <div className="facility-grid">
        {items(props.items).map((facility, index) => (
          <article className="facility-card" key={`${facility.title}-${index}`}>
            <img src={imageUrl(facility.image) || imageUrl(fallbackImages[index % fallbackImages.length])} alt={facility.title} />
            <h3>{facility.title}</h3>
            <p>{facility.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function EventsSection({ props }) {
  return (
    <section className="preview-section events-section">
      <p className="eyebrow">{props.eyebrow || "Events"}</p>
      <h2>{props.title}</h2>
      <div className="events-list">
        {items(props.items).map((event, index) => (
          <article className="event-row" key={`${event.title}-${index}`}>
            <time>{event.date}</time>
            <div>
              <h3>{event.title}</h3>
              <p>{event.description}</p>
            </div>
            {event.cta ? <a href={event.href || "#contact"}>{event.cta}</a> : null}
          </article>
        ))}
      </div>
    </section>
  );
}

export function StaffPicksSection({ props }) {
  return (
    <section className="preview-section staff-picks-section">
      <p className="eyebrow">{props.eyebrow || "Staff picks"}</p>
      <h2>{props.title}</h2>
      <div className="pick-grid">
        {items(props.items).map((pick, index) => (
          <article className="pick-card" key={`${pick.name}-${index}`}>
            <img src={imageUrl(pick.image)} alt={pick.name} />
            <div>
              <span>{pick.tag || pick.category}</span>
              <h3>{pick.name}</h3>
              <p>{pick.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function MembershipSection({ props }) {
  return (
    <section className="membership-section">
      <div>
        <p className="eyebrow">{props.eyebrow || "Membership"}</p>
        <h2>{props.title}</h2>
        <p>{props.body}</p>
      </div>
      <div className="membership-grid">
        {items(props.items).map((tier, index) => (
          <article className="membership-card" key={`${tier.name}-${index}`}>
            <Users size={22} />
            <h3>{tier.name}</h3>
            <strong>{tier.price}</strong>
            <p>{tier.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function InsurancePaymentsSection({ props }) {
  return (
    <section className="preview-section payments-section">
      <div>
        <p className="eyebrow">{props.eyebrow || "Payments"}</p>
        <h2>{props.title}</h2>
        <p>{props.body}</p>
      </div>
      <div className="payment-grid">
        <article className="compact-card">
          <ShieldCheck size={22} />
          <h3>{props.insuranceTitle || "Accepted coverage"}</h3>
          <ul>
            {items(props.insurance).map((value, index) => <li key={`${value}-${index}`}>{value}</li>)}
          </ul>
        </article>
        <article className="compact-card">
          <CreditCard size={22} />
          <h3>{props.paymentTitle || "Payment options"}</h3>
          <ul>
            {items(props.payments).map((value, index) => <li key={`${value}-${index}`}>{value}</li>)}
          </ul>
        </article>
      </div>
    </section>
  );
}

export function FooterSection({ props }) {
  return (
    <footer className="preview-footer">
      <div>
        <strong>{props.businessName}</strong>
        <p>{publicCopy(props.description, `${props.businessName || "This business"} website preview.`)}</p>
      </div>
      <div className="footer-links">
        {items(props.links).map((link, index) => (
          <a href={link.href || "#"} key={`${link.label}-${index}`}>{link.label}</a>
        ))}
      </div>
      <div className="footer-contact">
        {props.phone ? <a href={phoneHref(props.phone)}><Phone size={16} />{props.phone}</a> : null}
        {props.email ? <a href={`mailto:${props.email}`}><Mail size={16} />{props.email}</a> : null}
        {props.address ? <span><Navigation size={16} />{props.address}</span> : null}
      </div>
    </footer>
  );
}

export function StickyMobileActionSection({ props }) {
  return (
    <div className="sticky-mobile-action">
      <a href={phoneHref(props.phone)}><Phone size={18} />{props.callLabel || "Call"}</a>
      <a href={props.mapUrl || "#locations"}><MapPin size={18} />{props.mapLabel || "Directions"}</a>
      <a href={props.bookingUrl || "#contact"}><Calendar size={18} />{props.bookingLabel || "Book"}</a>
    </div>
  );
}

const SECTION_COMPONENTS = {
  hero: HeroSection,
  stats: StatsSection,
  "trust-bar": TrustBarSection,
  "info-strip": InfoStripSection,
  story: StorySection,
  "signature-menu": SignatureMenuSection,
  services: ServicesSection,
  gallery: GallerySection,
  testimonials: TestimonialsSection,
  faq: FaqSection,
  contact: ContactSection,
  "cta-band": CtaBandSection,
  "booking-cta": BookingCtaSection,
  "lead-form": LeadFormSection,
  offer: OfferSection,
  locations: LocationsSection,
  pricing: PricingSection,
  packages: PackagesSection,
  catalog: CatalogSection,
  team: TeamSection,
  schedule: ScheduleSection,
  "before-after": BeforeAfterSection,
  process: ProcessSection,
  facilities: FacilitiesSection,
  events: EventsSection,
  "staff-picks": StaffPicksSection,
  membership: MembershipSection,
  "insurance-payments": InsurancePaymentsSection,
  footer: FooterSection,
  "sticky-mobile-action": StickyMobileActionSection
};

export default function RenderSection({ section }) {
  const Component = SECTION_COMPONENTS[section.type];
  if (!Component) return null;

  return <Component props={section.props || {}} />;
}
