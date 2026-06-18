import { notFound } from "next/navigation";
import WebsitePreview from "@/app/components/WebsitePreview.jsx";
import { getWebsiteGenerationById } from "@/lib/supabase.js";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function generateMetadata({ params }) {
  const { id } = await params;

  if (id === "demo") {
    return {
      title: "Demo Website Preview"
    };
  }

  try {
    const generation = await getWebsiteGenerationById(id);
    const content = generation?.content || {};
    return {
      title: content?.brand?.businessName || content?.hero?.headline || generation?.leads?.display_name || "Website Preview",
      description: content?.fields?.heroBody || content?.hero?.subheadline || "Generated website preview"
    };
  } catch {
    return {
      title: "Website Preview"
    };
  }
}

function demoGeneration() {
  return {
    id: "demo",
    template_id: "premium-local-editorial",
    assets: [
      {
        type: "hero",
        url: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1800&q=85",
        source: "category_fallback"
      },
      {
        type: "gallery",
        url: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80",
        source: "category_fallback"
      },
      {
        type: "gallery",
        url: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=900&q=80",
        source: "category_fallback"
      }
    ],
    content: {
      design: {
        variant: "premium-cafe",
        tokens: {
          color: {
            ink: "#1d211c",
            muted: "#676f62",
            background: "#f4f0e7",
            panel: "#fffaf1",
            line: "#ded3c1",
            primary: "#14615c",
            deep: "#171c17",
            accent: "#c87935",
            warm: "#eadcca"
          },
          typography: {
            bodyFont: "Arial, Helvetica, sans-serif",
            displayFont: "Georgia, 'Times New Roman', serif"
          },
          radius: {
            card: "8px",
            button: "8px"
          },
          layout: {
            maxWidth: "1140px"
          }
        }
      },
      media: {
        heroImage: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1800&q=85",
        gallery: [
          "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80",
          "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=900&q=80",
          "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=900&q=80"
        ]
      },
      hero: {
        headline: "Urban Leaf Cafe",
        subheadline: "Small-batch coffee, plated brunch, and an easygoing neighborhood room made for unhurried mornings.",
        primaryCta: "Reserve a table",
        secondaryCta: "Explore the menu"
      },
      stats: [
        { value: "4.8", label: "Guest rating" },
        { value: "08:00", label: "Daily opening" },
        { value: "3", label: "Signature sections" }
      ],
      trustItems: [
        { value: "4.8 rating", label: "From neighborhood guests" },
        { value: "2 branches", label: "Easy local access" },
        { value: "Fresh daily", label: "Kitchen and coffee bar" },
        { value: "Event friendly", label: "Small groups welcome" },
        { value: "Mobile ready", label: "Fast calls and directions" }
      ],
      about: {
        title: "A polished cafe presence built around taste, trust, and easy booking",
        body: "Urban Leaf Cafe pairs a calm interior with a concise digital experience: clear menu highlights, visible calling actions, location details, and trust signals that help nearby customers decide quickly."
      },
      menuTitle: "The kind of menu preview that makes a visit feel easy",
      menuHighlights: [
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
      ],
      services: [
        {
          title: "Signature Coffee Bar",
          description: "Espresso, pour-over, cold brew, and seasonal drinks presented with clear menu sections.",
          imageUrl: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80"
        },
        {
          title: "All-Day Brunch",
          description: "Breakfast plates, fresh bakes, and light meals arranged for quick browsing and conversion.",
          imageUrl: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=900&q=80"
        },
        {
          title: "Meetups & Work Tables",
          description: "A quieter cafe experience for catchups, solo work, and small group reservations.",
          imageUrl: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=900&q=80"
        }
      ],
      offer: {
        eyebrow: "This week",
        title: "Reserve a brunch table and get a seasonal cold brew tasting",
        body: "A focused offer gives nearby customers a reason to call or book today instead of just browsing.",
        badge: "Weekend offer",
        expires: "Limited tables",
        cta: "Reserve now"
      },
      pricingPlans: [
        {
          name: "Daily Table",
          price: "₹0",
          interval: "reservation",
          description: "For casual visits, quick meetings, and weekend brunch.",
          features: ["Phone reservation", "Indoor seating", "Menu preview"],
          cta: "Reserve table"
        },
        {
          name: "Work Pass",
          price: "₹699",
          interval: "per day",
          badge: "Popular",
          description: "For guests who want a quieter day table with coffee included.",
          features: ["Reserved corner table", "Two beverages", "Power access"],
          cta: "Ask for pass"
        },
        {
          name: "Private Meetup",
          price: "₹3,999",
          interval: "small group",
          description: "For birthdays, book clubs, founders meets, and private brunches.",
          features: ["Dedicated seating", "Curated menu", "Advance booking"],
          cta: "Plan meetup"
        }
      ],
      packages: [
        { name: "Weekend Brunch for Two", description: "A simple bundle for customers who want one clear choice.", price: "₹1,499", badge: "Brunch" },
        { name: "Coffee Tasting Flight", description: "A discovery set for coffee lovers and first-time guests.", price: "₹699", badge: "Coffee" },
        { name: "Meetup Table Pack", description: "Reserved seating, shared plates, and beverage credits.", price: "₹3,999", badge: "Groups" }
      ],
      catalog: [
        {
          name: "House Blend Beans",
          category: "Retail",
          description: "Freshly roasted beans with tasting notes and brewing guidance.",
          price: "₹650",
          image: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=900&q=80"
        },
        {
          name: "Brunch Gift Card",
          category: "Gift",
          description: "A simple retail card pattern for giftable products and vouchers.",
          price: "₹1,000",
          image: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=900&q=80"
        },
        {
          name: "Cold Brew Pack",
          category: "Takeaway",
          description: "A featured item that can be reused for cafes, stores, and salons.",
          price: "₹499",
          image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=900&q=80"
        }
      ],
      team: [
        {
          name: "Nisha Rao",
          role: "Cafe lead",
          bio: "Runs the guest experience, group bookings, and weekend service.",
          image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=80"
        },
        {
          name: "Kabir Mehta",
          role: "Head barista",
          bio: "Leads coffee sourcing, brew recipes, and tasting sessions.",
          image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80"
        },
        {
          name: "Rhea Shah",
          role: "Kitchen manager",
          bio: "Builds the brunch menu around fresh, familiar flavors.",
          image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80"
        }
      ],
      booking: {
        title: "Reserve a table or ask about private meetups",
        body: "Booking CTAs work for any business that wants visitors to call, schedule, or message without hunting for contact details.",
        bookingLabel: "Reserve table",
        callLabel: "Call cafe"
      },
      leadForm: {
        title: "Request a group booking callback",
        body: "Lead forms can adapt to appointments, consultations, quotes, catalogs, or event inquiries.",
        cta: "Request callback",
        fields: [
          { label: "Name", name: "name", placeholder: "Your name" },
          { label: "Phone", name: "phone", type: "tel", placeholder: "+91" },
          { label: "Group details", name: "message", type: "textarea", placeholder: "Date, time, and group size" }
        ]
      },
      schedule: [
        { day: "Fri", time: "7:30 PM", title: "Live acoustic evening", detail: "Cafe event" },
        { day: "Sat", time: "10:30 AM", title: "Pour-over tasting", detail: "Coffee session" },
        { day: "Sun", time: "11:00 AM", title: "Book club brunch", detail: "Community table" }
      ],
      process: [
        { title: "Pick a visit type", description: "Customers can choose table, event, pass, or private booking." },
        { title: "Call or request", description: "The site keeps the action obvious on mobile and desktop." },
        { title: "Confirm details", description: "Hours, location, and booking expectations stay clear." },
        { title: "Visit prepared", description: "The preview reduces friction before customers arrive." }
      ],
      facilities: [
        {
          title: "Quiet work corners",
          description: "Show the actual space and use cases customers care about.",
          image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=80"
        },
        {
          title: "Coffee bar",
          description: "Visual proof helps visitors understand quality before calling.",
          image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80"
        },
        {
          title: "Group seating",
          description: "Useful for cafes, clinics, studios, gyms, salons, and retail spaces.",
          image: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=900&q=80"
        }
      ],
      events: [
        { date: "Jun 18", title: "Coffee tasting night", description: "A dated event gives locals a reason to return.", cta: "Reserve seat" },
        { date: "Jun 23", title: "Neighborhood founder meetup", description: "Small-business sites often need events, workshops, or classes.", cta: "Ask for details" }
      ],
      staffPicks: [
        {
          name: "House Pour-Over",
          tag: "Barista pick",
          description: "A curated recommendation pattern for products, services, or menu items.",
          image: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=900&q=80"
        },
        {
          name: "Truffle Mushroom Toast",
          tag: "Kitchen pick",
          description: "Highlights help broad catalogs feel more guided and personal.",
          image: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=900&q=80"
        },
        {
          name: "Cold Brew Tonic",
          tag: "Seasonal",
          description: "A simple way to surface current offers and high-margin items.",
          image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=900&q=80"
        }
      ],
      membership: {
        title: "Cafe passes and regular-guest plans",
        body: "Membership is optional, but useful for gyms, spas, coworking, classes, clubs, and cafes.",
        items: [
          { name: "Coffee Club", price: "₹1,499", description: "Monthly credits for regular guests." },
          { name: "Work Table", price: "₹4,999", description: "Reserved work seating and beverage credits." }
        ]
      },
      ctaBand: {
        title: "Make the next step obvious from every section",
        body: "A final CTA can change by client: call, book, WhatsApp, directions, catalog request, or appointment.",
        cta: "Call Urban Leaf Cafe"
      },
      testimonials: [
        { quote: "The preview makes the cafe feel premium without losing the warmth of the actual place.", name: "Local customer" },
        { quote: "Everything important is easy to find: menu, location, phone, and why it is worth visiting.", name: "Neighborhood regular" }
      ],
      faq: [
        { question: "Can customers reserve before visiting?", answer: "Yes, the primary call-to-action can connect directly to phone, WhatsApp, or a booking form." },
        { question: "Can the real menu and photos be used?", answer: "Yes. The final preview should prioritize business-owned images, Google photos, and website/social media assets." }
      ],
      contact: {
        phone: "+91 99999 99999",
        address: "Ahmedabad, Gujarat",
        hours: "Open daily, 8 AM - 10 PM",
        title: "Plan a visit or reserve a table",
        body: "The contact section keeps the next step obvious on both mobile and desktop.",
        cta: "Call Urban Leaf Cafe"
      },
      sectionExamples: [
        {
          type: "hero",
          props: {
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
          }
        },
        {
          type: "stats",
          props: {
            items: [
              { value: "4.8", label: "Guest rating" },
              { value: "08:00", label: "Daily opening" },
              { value: "3", label: "Signature sections" }
            ]
          }
        },
        {
          type: "info-strip",
          props: {
            phone: "+91 99999 99999",
            address: "Ahmedabad, Gujarat",
            hours: "Open daily, 8 AM - 10 PM"
          }
        },
        {
          type: "story",
          props: {
            eyebrow: "About",
            title: "A polished cafe presence built around taste, trust, and easy booking",
            body: "Urban Leaf Cafe pairs a calm interior with a concise digital experience: clear menu highlights, visible calling actions, location details, and trust signals that help nearby customers decide quickly.",
            businessName: "Urban Leaf Cafe",
            images: [
              "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80",
              "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=900&q=80"
            ]
          }
        },
        {
          type: "signature-menu",
          props: {
            eyebrow: "Signature picks",
            title: "The kind of menu preview that makes a visit feel easy",
            businessName: "Urban Leaf Cafe",
            image: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=900&q=80",
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
          }
        },
        {
          type: "services",
          props: {
            eyebrow: "Services",
            title: "What customers can book or request",
            images: [
              "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80",
              "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=900&q=80",
              "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=900&q=80"
            ],
            items: [
              {
                title: "Signature Coffee Bar",
                description: "Espresso, pour-over, cold brew, and seasonal drinks presented with clear menu sections.",
                imageUrl: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80"
              },
              {
                title: "All-Day Brunch",
                description: "Breakfast plates, fresh bakes, and light meals arranged for quick browsing and conversion.",
                imageUrl: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=900&q=80"
              },
              {
                title: "Meetups & Work Tables",
                description: "A quieter cafe experience for catchups, solo work, and small group reservations.",
                imageUrl: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=900&q=80"
              }
            ]
          }
        },
        {
          type: "gallery",
          props: {
            businessName: "Urban Leaf Cafe",
            images: [
              "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80",
              "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=900&q=80",
              "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=900&q=80",
              "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1800&q=85"
            ]
          }
        },
        {
          type: "testimonials",
          props: {
            eyebrow: "Trust",
            items: [
              { quote: "The preview makes the cafe feel premium without losing the warmth of the actual place.", name: "Local customer" },
              { quote: "Everything important is easy to find: menu, location, phone, and why it is worth visiting.", name: "Neighborhood regular" }
            ]
          }
        },
        {
          type: "faq",
          props: {
            eyebrow: "Questions",
            title: "Helpful answers before customers call",
            items: [
              { question: "Can customers reserve before visiting?", answer: "Yes, the primary call-to-action can connect directly to phone, WhatsApp, or a booking form." },
              { question: "Can the real menu and photos be used?", answer: "Yes. The final preview should prioritize business-owned images, Google photos, and website/social media assets." }
            ]
          }
        },
        {
          type: "contact",
          props: {
            eyebrow: "Contact",
            title: "Plan a visit or reserve a table",
            body: "The contact section keeps the next step obvious on both mobile and desktop.",
            cta: "Call Urban Leaf Cafe",
            phone: "+91 99999 99999"
          }
        }
      ]
    },
    leads: {
      display_name: "Urban Leaf Cafe",
      primary_category: "Cafe",
      primary_phone: "+91 99999 99999"
    },
    lead_locations: [
      {
        name: "Navrangpura",
        formatted_address: "Near CG Road, Ahmedabad",
        phone_e164: "+91 99999 99999",
        hours: "8 AM - 10 PM"
      },
      {
        name: "Satellite",
        formatted_address: "Prahlad Nagar Road, Ahmedabad",
        phone_e164: "+91 88888 88888",
        hours: "9 AM - 9 PM"
      }
    ]
  };
}

export default async function PreviewPage({ params }) {
  const { id } = await params;
  const generation = id === "demo" ? demoGeneration() : await getWebsiteGenerationById(id);

  if (!generation || generation.status === "archived") {
    notFound();
  }

  return <WebsitePreview generation={generation} />;
}
