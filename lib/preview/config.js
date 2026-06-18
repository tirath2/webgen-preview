const DEFAULT_TOKENS = {
  color: {
    ink: "#18211f",
    muted: "#60706b",
    background: "#f4f1ea",
    panel: "#ffffff",
    line: "#ded8cb",
    primary: "#14615c",
    deep: "#12201d",
    accent: "#c06f32",
    warm: "#e9ded0"
  },
  typography: {
    bodyFont: "Arial, Helvetica, sans-serif",
    displayFont: 'Georgia, "Times New Roman", serif'
  },
  radius: {
    card: "8px",
    button: "8px"
  },
  layout: {
    maxWidth: "1120px"
  }
};

function cleanArray(value) {
  return Array.isArray(value) ? value.filter(Boolean) : [];
}

function hasObject(value) {
  return Boolean(value && typeof value === "object" && !Array.isArray(value) && Object.keys(value).length);
}

function mergeDeep(base, override = {}) {
  const output = { ...base };

  for (const [key, value] of Object.entries(override || {})) {
    if (value && typeof value === "object" && !Array.isArray(value)) {
      output[key] = mergeDeep(base[key] || {}, value);
    } else if (value !== undefined && value !== null && value !== "") {
      output[key] = value;
    }
  }

  return output;
}

export function resolveDesignConfig(content = {}, generation = {}) {
  const design = content.design || generation.theme || {};
  const tokens = mergeDeep(DEFAULT_TOKENS, design.tokens || design);

  return {
    variant: design.variant || "premium-local-editorial",
    tokens
  };
}

export function designTokenStyle(design, images) {
  const tokens = design.tokens;

  return {
    "--hero-image": `url("${images.hero}")`,
    "--ink": tokens.color.ink,
    "--muted": tokens.color.muted,
    "--bg": tokens.color.background,
    "--panel": tokens.color.panel,
    "--line": tokens.color.line,
    "--green": tokens.color.primary,
    "--deep": tokens.color.deep,
    "--accent": tokens.color.accent,
    "--warm": tokens.color.warm,
    "--cream": tokens.color.background,
    "--body-font": tokens.typography.bodyFont,
    "--display-font": tokens.typography.displayFont,
    "--card-radius": tokens.radius.card,
    "--button-radius": tokens.radius.button,
    "--max-width": tokens.layout.maxWidth
  };
}

export function resolveSections({ content, lead, location, locations = [], images }) {
  const explicitSections = cleanArray(content.sections)
    .filter((section) => section.type)
    .map((section, index) => ({
      id: section.id || `${section.type}-${index}`,
      type: section.type,
      props: section.props || {}
    }));

  if (explicitSections.length) return explicitSections;

  const hero = content.hero || {};
  const about = content.about || {};
  const contact = content.contact || {};
  const services = cleanArray(content.services);
  const menuHighlights = cleanArray(content.menuHighlights);
  const stats = cleanArray(content.stats);
  const trustItems = cleanArray(content.trustItems || content.trust);
  const testimonials = cleanArray(content.testimonials);
  const faqs = cleanArray(content.faq);
  const pricingPlans = cleanArray(content.pricingPlans || content.pricing?.plans || content.pricing);
  const packageItems = cleanArray(content.packages || content.servicePackages);
  const catalogItems = cleanArray(content.catalog || content.products || content.inventory);
  const teamItems = cleanArray(content.team || content.members || content.staff);
  const scheduleItems = cleanArray(content.schedule || content.classes || content.appointmentBlocks);
  const resultItems = cleanArray(content.results || content.beforeAfter || content.beforeAfterItems);
  const processItems = cleanArray(content.process || content.steps);
  const facilityItems = cleanArray(content.facilities || content.amenities);
  const eventItems = cleanArray(content.events || content.workshops);
  const staffPickItems = cleanArray(content.staffPicks || content.recommendations);
  const membershipItems = cleanArray(content.memberships || content.membership?.items);
  const locationItems = cleanArray(content.locations).length
    ? cleanArray(content.locations)
    : cleanArray(locations).map((item, index) => ({
        name: item.name || item.branch_name || `Location ${index + 1}`,
        address: item.formatted_address || item.address,
        phone: item.phone_e164 || item.phone,
        hours: item.hours,
        mapUrl: item.google_maps_url || item.map_url
      }));
  const offer = content.offer || {};
  const booking = content.booking || content.bookingCta || {};
  const leadForm = content.leadForm || {};
  const ctaBand = content.ctaBand || content.cta || {};
  const insurancePayments = content.insurancePayments || {};
  const businessName = lead.display_name || hero.headline || "Local Business";
  const phone = contact.phone || lead.primary_phone;
  const address = contact.address || location.formatted_address;
  const serviceItems = services.length ? services : [{ title: "Main Service", description: "Clear, searchable service content appears here." }];
  const highlightItems = menuHighlights.length
    ? menuHighlights
    : serviceItems.slice(0, 3).map((service, index) => ({
        name: service.title,
        description: service.description,
        price: index === 0 ? "Popular" : "Featured"
      }));
  const statItems = stats.length
    ? stats
    : [
        { value: "4.8", label: "Local rating" },
        { value: "3 min", label: "Call-to-action path" },
        { value: "Mobile", label: "Ready layout" }
      ];
  const resolvedTrustItems = trustItems.length
    ? trustItems
    : [
        { value: lead.rating ? `${lead.rating} rating` : "Local trust", label: "Business profile proof" },
        { value: phone ? "Call ready" : "Contact ready", label: "Fast customer action" },
        { value: address ? "Mapped location" : "Location ready", label: "Clear visit path" },
        { value: "Mobile layout", label: "Useful on search traffic" },
        { value: "Real sections", label: "Built from client data" }
      ];

  return [
    {
      id: "hero",
      type: "hero",
      props: {
        businessName,
        eyebrow: lead.primary_category || "Local service",
        headline: hero.headline || businessName,
        subheadline: hero.subheadline || "A modern website preview generated from your business profile.",
        primaryCta: hero.primaryCta || contact.cta || "Call now",
        secondaryCta: hero.secondaryCta || "View services",
        phone,
        proof: hero.proof || "Built for stronger local trust, faster calls, and clearer service discovery.",
        nav: [
          { label: "Menu", href: "#services" },
          { label: "Story", href: "#story" },
          { label: "Visit", href: "#contact" }
        ]
      }
    },
    {
      id: "stats",
      type: "stats",
      props: { items: statItems.slice(0, 3) }
    },
    {
      id: "trust",
      type: "trust-bar",
      props: { items: resolvedTrustItems.slice(0, 5) }
    },
    {
      id: "info",
      type: "info-strip",
      props: {
        phone,
        address,
        hours: contact.hours || "Open hours available on request"
      }
    },
    {
      id: "story",
      type: "story",
      props: {
        eyebrow: "About",
        title: about.title || `About ${businessName}`,
        body: about.body || "This preview can be customized with business details, service descriptions, trust proof, and conversion-focused contact sections.",
        images: images.gallery.slice(0, 2),
        businessName
      }
    },
    {
      id: "signature",
      type: "signature-menu",
      props: {
        eyebrow: "Signature picks",
        title: content.menuTitle || "A quick reason to visit today",
        image: images.gallery[2] || images.hero,
        items: highlightItems.slice(0, 4),
        businessName
      }
    },
    {
      id: "services",
      type: "services",
      props: {
        eyebrow: "Services",
        title: content.servicesTitle || "What customers can book or request",
        items: serviceItems,
        images: images.gallery
      }
    },
    ...(hasObject(offer)
      ? [
          {
            id: "offer",
            type: "offer",
            props: {
              eyebrow: offer.eyebrow || "Offer",
              title: offer.title,
              body: offer.body || offer.description,
              badge: offer.badge,
              expires: offer.expires,
              cta: offer.cta,
              href: offer.href,
              phone
            }
          }
        ]
      : []),
    ...(pricingPlans.length
      ? [
          {
            id: "pricing",
            type: "pricing",
            props: {
              eyebrow: content.pricingEyebrow || "Pricing",
              title: content.pricingTitle || "Plans and pricing",
              plans: pricingPlans,
              href: "#contact"
            }
          }
        ]
      : []),
    ...(packageItems.length
      ? [
          {
            id: "packages",
            type: "packages",
            props: {
              eyebrow: content.packagesEyebrow || "Packages",
              title: content.packagesTitle || "Popular packages",
              items: packageItems
            }
          }
        ]
      : []),
    ...(catalogItems.length
      ? [
          {
            id: "catalog",
            type: "catalog",
            props: {
              eyebrow: content.catalogEyebrow || "Catalog",
              title: content.catalogTitle || "Featured catalog",
              items: catalogItems,
              images: images.gallery
            }
          }
        ]
      : []),
    ...(teamItems.length
      ? [
          {
            id: "team",
            type: "team",
            props: {
              eyebrow: content.teamEyebrow || "Team",
              title: content.teamTitle || "Meet the team",
              members: teamItems
            }
          }
        ]
      : []),
    ...(hasObject(booking)
      ? [
          {
            id: "booking",
            type: "booking-cta",
            props: {
              eyebrow: booking.eyebrow || "Book",
              title: booking.title || `Book with ${businessName}`,
              body: booking.body || "Give customers a direct path to schedule, call, or message.",
              bookingUrl: booking.url || booking.bookingUrl,
              bookingLabel: booking.bookingLabel,
              callLabel: booking.callLabel,
              whatsapp: booking.whatsapp,
              whatsappLabel: booking.whatsappLabel,
              phone
            }
          }
        ]
      : []),
    ...(hasObject(leadForm)
      ? [
          {
            id: "lead-form",
            type: "lead-form",
            props: {
              eyebrow: leadForm.eyebrow || "Request",
              title: leadForm.title || "Request a callback",
              body: leadForm.body || "Capture customer intent with a short form.",
              fields: cleanArray(leadForm.fields),
              cta: leadForm.cta,
              action: leadForm.action
            }
          }
        ]
      : []),
    ...(scheduleItems.length
      ? [
          {
            id: "schedule",
            type: "schedule",
            props: {
              eyebrow: content.scheduleEyebrow || "Schedule",
              title: content.scheduleTitle || "Upcoming schedule",
              items: scheduleItems
            }
          }
        ]
      : []),
    ...(resultItems.length
      ? [
          {
            id: "before-after",
            type: "before-after",
            props: {
              eyebrow: content.resultsEyebrow || "Results",
              title: content.resultsTitle || "Visible outcomes",
              items: resultItems
            }
          }
        ]
      : []),
    ...(processItems.length
      ? [
          {
            id: "process",
            type: "process",
            props: {
              eyebrow: content.processEyebrow || "Process",
              title: content.processTitle || "How it works",
              steps: processItems
            }
          }
        ]
      : []),
    ...(facilityItems.length
      ? [
          {
            id: "facilities",
            type: "facilities",
            props: {
              eyebrow: content.facilitiesEyebrow || "Facilities",
              title: content.facilitiesTitle || "Inside the space",
              items: facilityItems,
              images: images.gallery
            }
          }
        ]
      : []),
    ...(eventItems.length
      ? [
          {
            id: "events",
            type: "events",
            props: {
              eyebrow: content.eventsEyebrow || "Events",
              title: content.eventsTitle || "Upcoming events",
              items: eventItems
            }
          }
        ]
      : []),
    ...(staffPickItems.length
      ? [
          {
            id: "staff-picks",
            type: "staff-picks",
            props: {
              eyebrow: content.staffPicksEyebrow || "Staff picks",
              title: content.staffPicksTitle || "Recommended by the team",
              items: staffPickItems
            }
          }
        ]
      : []),
    ...(membershipItems.length
      ? [
          {
            id: "membership",
            type: "membership",
            props: {
              eyebrow: content.membership?.eyebrow || "Membership",
              title: content.membership?.title || "Membership options",
              body: content.membership?.body || "Recurring plans for customers who come back often.",
              items: membershipItems
            }
          }
        ]
      : []),
    ...(hasObject(insurancePayments)
      ? [
          {
            id: "insurance-payments",
            type: "insurance-payments",
            props: {
              eyebrow: insurancePayments.eyebrow || "Insurance and payments",
              title: insurancePayments.title || "Payment details",
              body: insurancePayments.body || "Help visitors understand accepted coverage and payment methods before they call.",
              insurance: cleanArray(insurancePayments.insurance),
              payments: cleanArray(insurancePayments.payments)
            }
          }
        ]
      : []),
    ...(locationItems.length > 1
      ? [
          {
            id: "locations",
            type: "locations",
            props: {
              eyebrow: "Locations",
              title: `${businessName} locations`,
              items: locationItems
            }
          }
        ]
      : []),
    ...(hasObject(ctaBand)
      ? [
          {
            id: "cta",
            type: "cta-band",
            props: {
              eyebrow: ctaBand.eyebrow,
              title: ctaBand.title,
              body: ctaBand.body,
              cta: ctaBand.cta,
              href: ctaBand.href,
              phone
            }
          }
        ]
      : []),
    {
      id: "gallery",
      type: "gallery",
      props: {
        businessName,
        images: images.gallery.slice(0, 4)
      }
    },
    ...(testimonials.length
      ? [
          {
            id: "trust",
            type: "testimonials",
            props: {
              eyebrow: "Trust",
              items: testimonials
            }
          }
        ]
      : []),
    ...(faqs.length
      ? [
          {
            id: "faq",
            type: "faq",
            props: {
              eyebrow: "Questions",
              title: content.faqTitle || "Helpful answers before customers call",
              items: faqs
            }
          }
        ]
      : []),
    {
      id: "contact",
      type: "contact",
      props: {
        eyebrow: "Contact",
        title: contact.title || `Get in touch with ${businessName}`,
        body: contact.body || "Call or visit to learn more.",
        cta: contact.cta || "Call now",
        phone
      }
    },
    {
      id: "footer",
      type: "footer",
      props: {
        businessName,
        description: content.footer?.description || `${businessName} website preview.`,
        phone,
        email: contact.email || content.footer?.email,
        address,
        links: content.footer?.links || [
          { label: "Services", href: "#services" },
          ...(locationItems.length > 1 ? [{ label: "Locations", href: "#locations" }] : []),
          { label: "Contact", href: "#contact" }
        ]
      }
    },
    {
      id: "sticky-actions",
      type: "sticky-mobile-action",
      props: {
        phone,
        bookingUrl: booking.url || booking.bookingUrl || "#contact",
        mapUrl: locationItems[0]?.mapUrl || "#locations"
      }
    }
  ];
}
