export const cafeImages = [
  "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1800&q=85"
];

export const clinicImages = [
  "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=900&q=80"
];

export const gymImages = [
  "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80"
];

export const spaImages = [
  "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=900&q=80"
];

export const bookstoreImages = [
  "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=900&q=80"
];

export const heroProps = {
  businessName: "Urban Leaf Cafe",
  eyebrow: "Cafe",
  headline: "Urban Leaf Cafe",
  subheadline: "Small-batch coffee, plated brunch, and an easygoing neighborhood room made for unhurried mornings.",
  primaryCta: "Reserve a table",
  secondaryCta: "Explore the menu",
  phone: "+91 99999 99999",
  proof: "Built for stronger local trust, faster calls, and clearer service discovery.",
  nav: [
    { label: "Menu", href: "#services" },
    { label: "Story", href: "#story" },
    { label: "Visit", href: "#contact" }
  ]
};

export const statsProps = {
  items: [
    { value: "4.8", label: "Guest rating" },
    { value: "08:00", label: "Daily opening" },
    { value: "3", label: "Signature sections" }
  ]
};

export const trustBarProps = {
  items: [
    { value: "4.8 rating", label: "From local visitors" },
    { value: "Same-day calls", label: "Clear contact path" },
    { value: "Verified hours", label: "Reduced confusion" },
    { value: "Real photos", label: "Stronger first impression" },
    { value: "Mobile ready", label: "Built for local search" }
  ]
};

export const infoStripProps = {
  phone: "+91 99999 99999",
  address: "Ahmedabad, Gujarat",
  hours: "Open daily, 8 AM - 10 PM"
};

export const storyProps = {
  eyebrow: "About",
  title: "A polished cafe presence built around taste, trust, and easy booking",
  body: "Urban Leaf Cafe pairs a calm interior with a concise digital experience: clear menu highlights, visible calling actions, location details, and trust signals that help nearby customers decide quickly.",
  businessName: "Urban Leaf Cafe",
  images: cafeImages.slice(0, 2)
};

export const signatureMenuProps = {
  eyebrow: "Signature picks",
  title: "The kind of menu preview that makes a visit feel easy",
  businessName: "Urban Leaf Cafe",
  image: cafeImages[2],
  items: [
    {
      name: "House Pour-Over",
      description: "Single-origin coffee brewed to order with tasting notes and a clean finish.",
      price: "Best seller"
    },
    {
      name: "Truffle Mushroom Toast",
      description: "Toasted sourdough, herb mushrooms, whipped cheese, and fresh greens.",
      price: "Chef pick"
    },
    {
      name: "Cold Brew Tonic",
      description: "A bright afternoon drink with slow-steeped coffee and citrus tonic.",
      price: "Seasonal"
    },
    {
      name: "Weekend Brunch Plate",
      description: "A hearty plate for two with eggs, bakes, fruit, and cafe sides.",
      price: "Shareable"
    }
  ]
};

export const servicesProps = {
  eyebrow: "Services",
  title: "What customers can book or request",
  images: cafeImages,
  items: [
    {
      title: "Signature Coffee Bar",
      description: "Espresso, pour-over, cold brew, and seasonal drinks presented with clear menu sections.",
      imageUrl: cafeImages[0]
    },
    {
      title: "All-Day Brunch",
      description: "Breakfast plates, fresh bakes, and light meals arranged for quick browsing and conversion.",
      imageUrl: cafeImages[1]
    },
    {
      title: "Meetups & Work Tables",
      description: "A quieter cafe experience for catchups, solo work, and small group reservations.",
      imageUrl: cafeImages[2]
    }
  ]
};

export const galleryProps = {
  businessName: "Urban Leaf Cafe",
  images: cafeImages
};

export const testimonialsProps = {
  eyebrow: "Trust",
  items: [
    { quote: "The preview makes the cafe feel premium without losing the warmth of the actual place.", name: "Local customer" },
    { quote: "Everything important is easy to find: menu, location, phone, and why it is worth visiting.", name: "Neighborhood regular" }
  ]
};

export const faqProps = {
  eyebrow: "Questions",
  title: "Helpful answers before customers call",
  items: [
    { question: "Can customers reserve before visiting?", answer: "Yes, the primary call-to-action can connect directly to phone, WhatsApp, or a booking form." },
    { question: "Can the real menu and photos be used?", answer: "Yes. The final preview should prioritize business-owned images, Google photos, and website/social media assets." }
  ]
};

export const contactProps = {
  eyebrow: "Contact",
  title: "Plan a visit or reserve a table",
  body: "The contact section keeps the next step obvious on both mobile and desktop.",
  cta: "Call Urban Leaf Cafe",
  phone: "+91 99999 99999"
};

export const ctaBandProps = {
  eyebrow: "Ready to convert",
  title: "Turn profile visitors into calls, bookings, and visits",
  body: "Use this section between content blocks when the next step should stay obvious.",
  cta: "Start with a call",
  phone: "+91 99999 99999"
};

export const bookingCtaProps = {
  eyebrow: "Appointments",
  title: "Give customers three clear ways to take action",
  body: "Works for clinics, gyms, salons, spas, consultants, and any business that depends on scheduled visits.",
  bookingLabel: "Book appointment",
  callLabel: "Call front desk",
  whatsappLabel: "Message on WhatsApp",
  phone: "+91 99999 99999",
  whatsapp: "#contact"
};

export const leadFormProps = {
  eyebrow: "Lead form",
  title: "Capture intent without making visitors search",
  body: "A simple inquiry form can be configured for bookings, quotes, callbacks, catalog requests, or consultations.",
  cta: "Request callback",
  fields: [
    { label: "Name", name: "name", placeholder: "Your name" },
    { label: "Phone", name: "phone", type: "tel", placeholder: "+91" },
    { label: "What do you need?", name: "message", type: "textarea", placeholder: "Tell us what you are looking for" }
  ]
};

export const offerProps = {
  eyebrow: "Intro offer",
  title: "First visit consultation with priority booking",
  body: "Useful for salons, spas, gyms, clinics, classes, and service providers that want a time-bound reason to contact now.",
  badge: "New customers",
  expires: "This month only",
  cta: "Claim this offer",
  phone: "+91 99999 99999"
};

export const locationsProps = {
  eyebrow: "Branches",
  title: "Multiple locations under one brand",
  items: [
    { name: "Navrangpura", address: "Near CG Road, Ahmedabad", phone: "+91 99999 99999", hours: "8 AM - 9 PM", mapUrl: "#contact" },
    { name: "Satellite", address: "Prahlad Nagar Road, Ahmedabad", phone: "+91 88888 88888", hours: "9 AM - 8 PM", mapUrl: "#contact" },
    { name: "Bopal", address: "Bopal Main Road, Ahmedabad", phone: "+91 77777 77777", hours: "8 AM - 8 PM", mapUrl: "#contact" }
  ]
};

export const pricingProps = {
  eyebrow: "Pricing",
  title: "Simple plans visitors can compare quickly",
  plans: [
    {
      name: "Starter",
      price: "₹999",
      interval: "per month",
      description: "A low-friction entry plan for new customers.",
      features: ["Basic access", "Phone support", "Flexible renewal"],
      cta: "Choose starter"
    },
    {
      name: "Plus",
      price: "₹2,499",
      interval: "per month",
      badge: "Popular",
      description: "Best for visitors who need regular service.",
      features: ["Priority slots", "Extended access", "Progress check-ins"],
      cta: "Choose plus"
    },
    {
      name: "Premium",
      price: "₹4,999",
      interval: "per month",
      description: "A higher-touch option for customers who want more guidance.",
      features: ["Dedicated specialist", "Custom plan", "Monthly review"],
      cta: "Choose premium"
    }
  ]
};

export const packagesProps = {
  eyebrow: "Packages",
  title: "Bundle services into clear purchase decisions",
  items: [
    { name: "Relax Reset", description: "Massage, steam, and recovery add-on for spa-style businesses.", price: "₹2,999", badge: "Spa" },
    { name: "Fitness Kickstart", description: "Assessment, 4 classes, and starter coaching for gyms.", price: "₹3,499", badge: "Gym" },
    { name: "Clinic Care Pack", description: "Consultation, follow-up, and basic screening for clinics.", price: "₹1,499", badge: "Clinic" }
  ]
};

export const catalogProps = {
  eyebrow: "Catalog",
  title: "Products, books, treatments, or service items",
  images: bookstoreImages,
  items: [
    { name: "Design Anthology", category: "Book", description: "A featured title with author notes and quick availability details.", price: "₹899", image: bookstoreImages[1] },
    { name: "Wellness Gift Box", category: "Retail", description: "A curated product bundle with enough detail to prompt a visit.", price: "₹1,299", image: spaImages[0] },
    { name: "Starter Kit", category: "Fitness", description: "A simple product card pattern for physical or digital products.", price: "₹599", image: gymImages[1] }
  ]
};

export const teamProps = {
  eyebrow: "Team",
  title: "People build trust before the first visit",
  members: [
    { name: "Dr. Meera Shah", role: "Clinic director", bio: "Focused on clear first consultations and practical care plans.", image: clinicImages[0] },
    { name: "Aarav Patel", role: "Lead trainer", bio: "Strength and mobility coach for beginner-friendly transformations.", image: gymImages[0] },
    { name: "Riya Desai", role: "Senior therapist", bio: "Specialist in recovery-led spa and wellness sessions.", image: spaImages[1] }
  ]
};

export const scheduleProps = {
  eyebrow: "Schedule",
  title: "Classes, appointments, events, or operating rhythm",
  items: [
    { day: "Mon", time: "7:00 AM", title: "Strength Basics", detail: "Beginner gym class" },
    { day: "Wed", time: "6:30 PM", title: "Author Reading", detail: "Bookstore community event" },
    { day: "Fri", time: "4:00 PM", title: "Skin Consultation", detail: "Clinic appointment block" }
  ]
};

export const beforeAfterProps = {
  eyebrow: "Results",
  title: "Show visible outcomes where proof matters",
  items: [
    {
      title: "Six-week strength reset",
      description: "Useful for gyms, salons, clinics, home services, and any business where outcomes sell.",
      beforeImage: gymImages[0],
      afterImage: gymImages[2]
    },
    {
      title: "Restorative spa treatment",
      description: "Before/after can also be used for atmosphere, process stages, or project delivery.",
      beforeImage: spaImages[1],
      afterImage: spaImages[2]
    }
  ]
};

export const processProps = {
  eyebrow: "Process",
  title: "Explain the path from interest to visit",
  steps: [
    { title: "Choose a service", description: "Customers understand what fits their need without calling first." },
    { title: "Book or call", description: "The primary CTA connects them to the fastest next step." },
    { title: "Visit prepared", description: "Hours, location, documents, and expectations are clear." },
    { title: "Follow up", description: "Packages, memberships, or repeat visits are easy to promote." }
  ]
};

export const facilitiesProps = {
  eyebrow: "Facilities",
  title: "Show the environment before customers arrive",
  images: gymImages,
  items: [
    { title: "Training floor", description: "Equipment, space, and atmosphere for gym or studio websites.", image: gymImages[0] },
    { title: "Treatment room", description: "Clean, calm rooms for clinic, spa, and wellness previews.", image: clinicImages[1] },
    { title: "Reading corners", description: "Physical experience highlights for bookstore and retail clients.", image: bookstoreImages[0] }
  ]
};

export const eventsProps = {
  eyebrow: "Events",
  title: "Promote dated reasons to visit",
  items: [
    { date: "Jun 18", title: "Community reading night", description: "Great for bookstores, cafes, studios, and community-led spaces.", cta: "Reserve seat" },
    { date: "Jun 22", title: "Mobility workshop", description: "Useful for gyms, wellness centers, clinics, and trainers.", cta: "Join workshop" },
    { date: "Jun 29", title: "Skincare open house", description: "Works for clinics, salons, spas, and aesthetic businesses.", cta: "Book slot" }
  ]
};

export const staffPicksProps = {
  eyebrow: "Staff picks",
  title: "Curated recommendations for retail-style sites",
  items: [
    { name: "Weekend Fiction Stack", tag: "Bookstore", description: "A curated title row for books, gifts, or seasonal products.", image: bookstoreImages[2] },
    { name: "Recovery Day Kit", tag: "Spa", description: "A simple recommendation card for bundles and add-ons.", image: spaImages[0] },
    { name: "Beginner Strength Plan", tag: "Gym", description: "Can also highlight digital products or starter programs.", image: gymImages[2] }
  ]
};

export const membershipProps = {
  eyebrow: "Membership",
  title: "Recurring plans for gyms, spas, clubs, and learning centers",
  body: "Membership sections should be short and comparison-friendly, with direct CTAs nearby.",
  items: [
    { name: "Monthly", price: "₹2,499", description: "Flexible plan for new customers." },
    { name: "Quarterly", price: "₹6,999", description: "Better value for committed members." }
  ]
};

export const insurancePaymentsProps = {
  eyebrow: "Insurance and payments",
  title: "Reduce friction before a clinic visit",
  body: "For clinics and professional services, payment clarity can remove a major blocker before the first call.",
  insurance: ["Cashless partners", "Reimbursement support", "Corporate health plans"],
  payments: ["UPI", "Credit and debit cards", "Monthly billing"]
};

export const footerProps = {
  businessName: "Urban Leaf Cafe",
  description: "A configurable footer for contact, location, social, and legal links.",
  phone: "+91 99999 99999",
  email: "hello@example.com",
  address: "Ahmedabad, Gujarat",
  links: [
    { label: "Services", href: "#services" },
    { label: "Locations", href: "#locations" },
    { label: "Contact", href: "#contact" }
  ]
};

export const stickyMobileActionProps = {
  phone: "+91 99999 99999",
  callLabel: "Call",
  mapLabel: "Directions",
  bookingLabel: "Book"
};

export const sectionList = [
  { id: "hero", type: "hero", props: heroProps },
  { id: "stats", type: "stats", props: statsProps },
  { id: "trust", type: "trust-bar", props: trustBarProps },
  { id: "info", type: "info-strip", props: infoStripProps },
  { id: "story", type: "story", props: storyProps },
  { id: "signature", type: "signature-menu", props: signatureMenuProps },
  { id: "services", type: "services", props: servicesProps },
  { id: "offer", type: "offer", props: offerProps },
  { id: "pricing", type: "pricing", props: pricingProps },
  { id: "packages", type: "packages", props: packagesProps },
  { id: "catalog", type: "catalog", props: catalogProps },
  { id: "team", type: "team", props: teamProps },
  { id: "booking", type: "booking-cta", props: bookingCtaProps },
  { id: "lead-form", type: "lead-form", props: leadFormProps },
  { id: "schedule", type: "schedule", props: scheduleProps },
  { id: "before-after", type: "before-after", props: beforeAfterProps },
  { id: "process", type: "process", props: processProps },
  { id: "facilities", type: "facilities", props: facilitiesProps },
  { id: "events", type: "events", props: eventsProps },
  { id: "staff-picks", type: "staff-picks", props: staffPicksProps },
  { id: "membership", type: "membership", props: membershipProps },
  { id: "payments", type: "insurance-payments", props: insurancePaymentsProps },
  { id: "locations", type: "locations", props: locationsProps },
  { id: "cta", type: "cta-band", props: ctaBandProps },
  { id: "gallery", type: "gallery", props: galleryProps },
  { id: "testimonials", type: "testimonials", props: testimonialsProps },
  { id: "faq", type: "faq", props: faqProps },
  { id: "contact", type: "contact", props: contactProps },
  { id: "footer", type: "footer", props: footerProps },
  { id: "mobile-actions", type: "sticky-mobile-action", props: stickyMobileActionProps }
];
