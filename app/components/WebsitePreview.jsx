import RenderSection from "./sections/SectionRegistry.jsx";
import TemplatePreview, { isTemplatePreviewContent } from "./templates/TemplatePreview.jsx";
import PreviewMotion from "./PreviewMotion.jsx";
import { designTokenStyle, resolveDesignConfig, resolveSections } from "@/lib/preview/config.js";

const CATEGORY_MEDIA = {
  cafe: {
    hero: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1800&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=900&q=80"
    ]
  },
  restaurant: {
    hero: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1800&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&w=900&q=80"
    ]
  },
  hotel: {
    hero: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1800&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=900&q=80"
    ]
  },
  salon: {
    hero: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1800&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=900&q=80"
    ]
  },
  gym: {
    hero: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=1800&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80"
    ]
  },
  clinic: {
    hero: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1800&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=900&q=80"
    ]
  },
  medical: {
    hero: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1800&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=900&q=80"
    ]
  },
  spa: {
    hero: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1800&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=900&q=80"
    ]
  },
  bookstore: {
    hero: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1800&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1526243741027-444d633d7365?auto=format&fit=crop&w=900&q=80"
    ]
  },
  book_store: {
    hero: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1800&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1526243741027-444d633d7365?auto=format&fit=crop&w=900&q=80"
    ]
  },
  retail: {
    hero: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1800&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1481437156560-3205f6a55735?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1502163140606-888448ae8cfe?auto=format&fit=crop&w=900&q=80"
    ]
  },
  default: {
    hero: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1800&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80"
    ]
  }
};

function cleanArray(value) {
  return Array.isArray(value) ? value.filter(Boolean) : [];
}

function firstLocation(generation) {
  return cleanArray(generation.lead_locations)[0] || {};
}

function categoryKey(lead) {
  return String(lead.primary_category || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "");
}

function imageUrl(value) {
  if (!value) return null;
  if (typeof value === "string") return value;
  return value.url || value.src || value.imageUrl || null;
}

function relatedImages({ content, generation, lead }) {
  const key = categoryKey(lead);
  const fallback = CATEGORY_MEDIA[key] || CATEGORY_MEDIA.default;
  const media = content.media || {};
  const assets = cleanArray(generation.assets);
  const heroAsset = assets.find((asset) => asset.type === "hero" || asset.role === "hero");
  const galleryAssets = assets.filter((asset) => ["gallery", "service", "interior", "product"].includes(asset.type || asset.role));
  const mediaGallery = cleanArray(media.gallery).map(imageUrl).filter(Boolean);
  const serviceImages = cleanArray(media.serviceImages).map(imageUrl).filter(Boolean);
  const assetGallery = galleryAssets.map(imageUrl).filter(Boolean);
  const gallery = [...mediaGallery, ...serviceImages, ...assetGallery, ...fallback.gallery].filter(Boolean);

  return {
    hero: imageUrl(media.heroImage) || imageUrl(heroAsset) || fallback.hero,
    gallery
  };
}

export default function WebsitePreview({ generation }) {
  const content = generation.content || {};

  if (isTemplatePreviewContent(content)) {
    return <TemplatePreview generation={generation} />;
  }

  const lead = generation.leads || {};
  const locations = cleanArray(generation.lead_locations);
  const location = locations[0] || firstLocation(generation);
  const images = relatedImages({ content, generation, lead });
  const design = resolveDesignConfig(content, generation);
  const sections = resolveSections({ content, lead, location, locations, images });

  return (
    <main
      className={`site-preview theme-${design.variant}`}
      style={designTokenStyle(design, images)}
    >
      {sections.map((section) => (
        <RenderSection section={section} key={section.id} />
      ))}
      <PreviewMotion />
    </main>
  );
}
