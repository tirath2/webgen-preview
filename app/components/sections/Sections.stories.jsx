import RenderSection, {
  BeforeAfterSection,
  BookingCtaSection,
  CatalogSection,
  ContactSection,
  CtaBandSection,
  EventsSection,
  FaqSection,
  FacilitiesSection,
  GallerySection,
  HeroSection,
  InfoStripSection,
  InsurancePaymentsSection,
  LeadFormSection,
  LocationsSection,
  MembershipSection,
  OfferSection,
  PackagesSection,
  PricingSection,
  ProcessSection,
  ScheduleSection,
  ServicesSection,
  SignatureMenuSection,
  StatsSection,
  StorySection,
  StaffPicksSection,
  StickyMobileActionSection,
  TeamSection,
  TestimonialsSection,
  TrustBarSection
} from "./SectionRegistry.jsx";
import {
  beforeAfterProps,
  bookingCtaProps,
  catalogProps,
  contactProps,
  ctaBandProps,
  eventsProps,
  faqProps,
  facilitiesProps,
  galleryProps,
  heroProps,
  infoStripProps,
  insurancePaymentsProps,
  leadFormProps,
  locationsProps,
  membershipProps,
  offerProps,
  packagesProps,
  pricingProps,
  processProps,
  scheduleProps,
  sectionList,
  servicesProps,
  signatureMenuProps,
  statsProps,
  storyProps,
  staffPicksProps,
  stickyMobileActionProps,
  teamProps,
  testimonialsProps,
  trustBarProps
} from "./stories/sectionStoryData.js";

const meta = {
  title: "Preview Sections/All Sections",
  parameters: {
    layout: "fullscreen"
  }
};

export default meta;

export function Hero() {
  return <HeroSection props={heroProps} />;
}

export function Stats() {
  return <StatsSection props={statsProps} />;
}

export function TrustBar() {
  return <TrustBarSection props={trustBarProps} />;
}

export function InfoStrip() {
  return <InfoStripSection props={infoStripProps} />;
}

export function Story() {
  return <StorySection props={storyProps} />;
}

export function SignatureMenu() {
  return <SignatureMenuSection props={signatureMenuProps} />;
}

export function Services() {
  return <ServicesSection props={servicesProps} />;
}

export function Offer() {
  return <OfferSection props={offerProps} />;
}

export function Pricing() {
  return <PricingSection props={pricingProps} />;
}

export function Packages() {
  return <PackagesSection props={packagesProps} />;
}

export function Catalog() {
  return <CatalogSection props={catalogProps} />;
}

export function Team() {
  return <TeamSection props={teamProps} />;
}

export function BookingCTA() {
  return <BookingCtaSection props={bookingCtaProps} />;
}

export function LeadForm() {
  return <LeadFormSection props={leadFormProps} />;
}

export function Schedule() {
  return <ScheduleSection props={scheduleProps} />;
}

export function BeforeAfter() {
  return <BeforeAfterSection props={beforeAfterProps} />;
}

export function Process() {
  return <ProcessSection props={processProps} />;
}

export function Facilities() {
  return <FacilitiesSection props={facilitiesProps} />;
}

export function Events() {
  return <EventsSection props={eventsProps} />;
}

export function StaffPicks() {
  return <StaffPicksSection props={staffPicksProps} />;
}

export function Membership() {
  return <MembershipSection props={membershipProps} />;
}

export function InsurancePayments() {
  return <InsurancePaymentsSection props={insurancePaymentsProps} />;
}

export function Locations() {
  return <LocationsSection props={locationsProps} />;
}

export function CtaBand() {
  return <CtaBandSection props={ctaBandProps} />;
}

export function Gallery() {
  return <GallerySection props={galleryProps} />;
}

export function Testimonials() {
  return <TestimonialsSection props={testimonialsProps} />;
}

export function FAQ() {
  return <FaqSection props={faqProps} />;
}

export function Contact() {
  return <ContactSection props={contactProps} />;
}

export function StickyMobileAction() {
  return <StickyMobileActionSection props={stickyMobileActionProps} />;
}

export function FullPageComposition() {
  return (
    <>
      {sectionList.map((section) => (
        <RenderSection section={section} key={section.id} />
      ))}
    </>
  );
}
