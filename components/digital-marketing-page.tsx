"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

/* ================= DATA ================= */

const services = [
  {
    title: "Influencer Marketing",
    desc: "We connect your brand with carefully selected creators who align with your audience and values. From strategy and outreach to content execution and performance tracking, we manage end-to-end influencer campaigns that build trust, expand reach, and drive real conversions at scale.",
    best: "D2C brands, product launches, lifestyle brands",
    details: [
      "Influencer discovery across Instagram, YouTube, LinkedIn",
      "End-to-end campaign management and execution",
      "Content planning and creative direction",
      "UGC (User Generated Content) production",
      "Performance tracking and ROI optimization",
    ],
  },
  {
    title: "AI Marketing",
    desc: "Our AI-driven marketing solutions help you automate campaigns, analyze user behavior, and optimize performance in real time. By combining data, machine learning, and creative strategy, we ensure your marketing is smarter, faster, and consistently delivering better ROI.",
    best: "E-commerce, SaaS, scaling businesses",
    details: [
      "AI-driven audience targeting and segmentation",
      "Campaign automation and optimization",
      "Predictive analytics for better decisions",
      "AI-generated creatives and ad copies",
      "Performance monitoring and scaling",
    ],
  },
  {
    title: "AI Model Generation",
    desc: "Create stunning, hyper-realistic product visuals using AI-generated models without the cost and complexity of traditional photoshoots. Perfect for scaling brands, this approach ensures consistency, speed, and complete creative flexibility.",
    best: "Fashion, beauty, e-commerce brands",
    details: [
      "Custom AI model creation (age, ethnicity, style)",
      "Product catalogue-ready images",
      "Bulk image generation for scaling",
      "Consistent branding across visuals",
      "Faster turnaround vs traditional shoots",
    ],
  },
  {
    title: "Motion Posters",
    desc: "We design cinematic motion posters that instantly capture attention and boost engagement across digital platforms. By combining animation, storytelling, and visual effects, we create content that stands out and drives interaction.",
    best: "Films, events, product launches",
    details: [
      "High-quality motion graphics and animation",
      "Social media optimized formats",
      "Teaser and promotional visuals",
      "Visual storytelling for campaigns",
      "Platform-specific adaptations",
    ],
  },
  {
    title: "Anime & Animation",
    desc: "Bring your brand to life with custom animation and anime-style storytelling that resonates with modern audiences. From concept to execution, we create engaging visual narratives that enhance brand recall and emotional connection.",
    best: "Gaming, youth-focused brands, startups",
    details: [
      "Character design and development",
      "2D/3D animation production",
      "Explainer and storytelling videos",
      "Branded animation campaigns",
      "Creative direction and scripting",
    ],
  },
  {
    title: "Spot Advertising",
    desc: "Short, high-impact advertisements crafted to capture attention within seconds and drive immediate action. These ads are optimized for performance across platforms, making them perfect for fast-moving campaigns and promotions.",
    best: "Product launches, offers, events",
    details: [
      "6–30 second ad creatives",
      "High-conversion social media ads",
      "A/B testing for optimization",
      "Platform-specific ad variations",
      "Performance tracking and iteration",
    ],
  },
  {
    title: "YouTube Ads (Non-Skip)",
    desc: "Ensure your brand message is seen with non-skippable YouTube ads designed for maximum visibility and recall. We combine strong storytelling with precise targeting to create impactful campaigns that leave a lasting impression.",
    best: "Brand awareness, premium products",
    details: [
      "Non-skippable ad formats",
      "Audience targeting and segmentation",
      "Creative storytelling approach",
      "Ad performance analytics",
      "Campaign optimization strategies",
    ],
  },
  {
    title: "Brand Awareness Campaigns",
    desc: "We design and execute multi-channel campaigns that build strong brand recognition and authority. By combining strategy, creativity, and data, we help your brand stand out and stay top-of-mind.",
    best: "Startups, rebranding, new markets",
    details: [
      "Brand positioning and messaging",
      "Cross-platform campaign execution",
      "Creative and content strategy",
      "Audience targeting and reach expansion",
      "Performance tracking and reporting",
    ],
  },
  {
    title: "SEO Content Writing",
    desc: "We create high-quality, SEO-optimized content that not only ranks on search engines but also engages users and drives conversions. Every piece is strategically crafted to bring long-term organic growth.",
    best: "Websites, blogs, e-commerce",
    details: [
      "SEO blog writing and articles",
      "Website and landing page copy",
      "Keyword research and optimization",
      "Product descriptions and content",
      "Content strategy planning",
    ],
  },
  {
    title: "Wikipedia Writing",
    desc: "Professional Wikipedia page creation backed by thorough research and strict compliance with platform guidelines. We ensure credibility, accuracy, and long-term sustainability of your page.",
    best: "Public figures, brands, organizations",
    details: [
      "In-depth research and sourcing",
      "Wikipedia-compliant content writing",
      "Page creation and publishing",
      "Content editing and updates",
      "Approval process guidance",
    ],
  },
  {
    title: "Facebook Marketplace Marketing",
    desc: "We optimize your product listings to maximize visibility, attract the right audience, and drive direct conversions. Ideal for businesses looking to generate consistent leads and sales locally.",
    best: "Local businesses, e-commerce brands",
    details: [
      "Optimized product listings",
      "SEO-driven descriptions",
      "Lead generation strategies",
      "Audience targeting",
      "Conversion optimization",
    ],
  },
  {
    title: "Artist Promotion",
    desc: "Promote your music across major platforms and reach the right audience with targeted campaigns. We help artists grow visibility, engagement, and fan base through strategic promotion.",
    best: "Independent artists, music labels",
    details: [
      "Playlist pitching and placements",
      "Social media promotions",
      "PR and outreach campaigns",
      "Audience targeting strategies",
      "Growth tracking and analytics",
    ],
  },
  {
    title: "Audio / Video Promotion",
    desc: "Boost the reach of your audio and video content across platforms with targeted strategies that increase engagement, views, and audience retention.",
    best: "Music creators, video creators",
    details: [
      "Streaming platform promotions",
      "YouTube marketing strategies",
      "Cross-platform distribution",
      "Audience targeting",
      "Performance analytics",
    ],
  },
  {
    title: "Music Revenue Generation",
    desc: "We help you monetize your music effectively across global streaming platforms, ensuring consistent revenue through optimized distribution and royalty management.",
    best: "Artists, music producers",
    details: [
      "Distribution to Spotify, Apple Music, etc.",
      "Royalty management and tracking",
      "Monetization strategies",
      "Content ID setup",
      "Revenue optimization",
    ],
  },
  {
    title: "Music Video Production",
    desc: "End-to-end production of high-quality music videos that enhance your brand and captivate your audience. From concept to final delivery, we handle everything.",
    best: "Artists, labels",
    details: [
      "Concept development and scripting",
      "Professional video shooting",
      "Editing and post-production",
      "Creative direction",
      "Distribution-ready output",
    ],
  },
  {
    title: "Product Photography",
    desc: "High-quality product visuals designed to showcase your products in the best light and increase conversions across e-commerce and marketing platforms.",
    best: "E-commerce, brands",
    details: [
      "Studio product shoots",
      "High-end retouching",
      "Catalogue-ready images",
      "Lighting and composition setup",
      "Multiple angle shots",
    ],
  },
  {
    title: "Beauty Product Shoots",
    desc: "Premium visual production focused on highlighting product details, textures, and aesthetics to create a luxurious brand perception.",
    best: "Beauty, skincare brands",
    details: [
      "Macro and detail shots",
      "Luxury styling and setup",
      "Creative compositions",
      "High-end visual storytelling",
      "Brand-focused aesthetics",
    ],
  },
  {
    title: "Model Product Shoots",
    desc: "Lifestyle shoots featuring models to create relatable and aspirational visuals that increase trust, engagement, and conversion rates.",
    best: "Fashion, apparel brands",
    details: [
      "Model casting and selection",
      "Styling and wardrobe planning",
      "Professional shoot execution",
      "Brand-aligned visuals",
      "Campaign-ready assets",
    ],
  },
  {
    title: "Brand Face Shoots",
    desc: "Develop a strong brand identity by associating a recognizable face with your business. This creates emotional connection and long-term recall.",
    best: "Personal brands, companies",
    details: [
      "Face selection and casting",
      "Brand alignment strategy",
      "Campaign visuals creation",
      "Consistency across marketing",
      "Identity development",
    ],
  },
  {
    title: "Regional Marketing",
    desc: "Localized marketing strategies tailored to different regions, languages, and cultures to maximize reach and relevance across diverse audiences.",
    best: "Pan-India brands, local businesses",
    details: [
      "Regional language adaptations",
      "Localized content creation",
      "Cultural targeting strategies",
      "Regional ad campaigns",
      "Market-specific optimization",
    ],
  },
];

/* ================= COMPONENT ================= */

export default function DigitalMarketingPage() {
  const [active, setActive] = useState<any>(null);

  return (
    <div className="bg-black text-white min-h-screen px-6 py-20">

      {/* ================= HERO ================= */}
      <div className="text-center mb-20">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Our Services
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Explore all the services we offer to scale your brand.
        </p>
      </div>

      {/* ================= GRID ================= */}
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            onClick={() => setActive(s)}
            className="p-5 border border-gray-800 rounded-xl bg-gray-900/50 cursor-pointer hover:border-yellow-400 transition"
          >
            <h3 className="font-semibold mb-2">{s.title}</h3>
            <p className="text-sm text-gray-400">{s.desc}</p>
          </motion.div>
        ))}
      </div>

    <AnimatePresence>
  {active && (
    <motion.div
      className="fixed inset-0 bg-black z-50 overflow-y-auto py-20  "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="max-w-5xl mx-auto px-6 py-10 border border-yellow-200 rounded-xl">

    <div className=" flex flex-row justify-end">
        {/* Close */}
        <button
          onClick={() => setActive(null)}
          className="mb-10 text-gray-400 hover:text-red-700 border-2 rounded-lg hover:bg-red-300  px-3 py-2"
        >
          ✕ Close
        </button>
    </div>


        {/* HERO */}
        <div className="mb-16">
          <h1 className="text-5xl font-bold mb-6">
            {active.title}
          </h1>

          <p className="text-xl text-gray-400 max-w-3xl leading-relaxed">
            {active.desc}
          </p>
        </div>

        {/* BEST FOR */}
        <div className="mb-16 p-6 border border-yellow-400/30 rounded-2xl bg-yellow-400/10">
          <h3 className="text-lg font-semibold text-yellow-300 mb-2">
            🎯 Best For
          </h3>
          <p className="text-yellow-200">
            {active.best}
          </p>
        </div>

        {/* INCLUDES */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8">
            What’s Included
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {active.details.map((d: string, i: number) => (
              <div
                key={i}
                className="p-6 border border-gray-800 rounded-xl bg-gray-900/50"
              >
                {d}
              </div>
            ))}
          </div>
        </div>

        {/* BENEFITS */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8">
            What You Get
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 border border-gray-800 rounded-xl">
              🚀 Faster Growth
            </div>
            <div className="p-6 border border-gray-800 rounded-xl">
              📈 More Leads
            </div>
            <div className="p-6 border border-gray-800 rounded-xl">
              💰 Higher ROI
            </div>
          </div>
        </div>

        {/* USE CASE */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-6">
            Use Cases
          </h2>

          <p className="text-gray-400 max-w-3xl">
            This service is ideal for brands looking to scale quickly,
            build strong visibility, and convert audiences into customers.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <h2 className="text-3xl font-bold mb-4">
            Let’s build this for your brand
          </h2>

          <p className="text-gray-400 mb-8">
            Get a custom strategy tailored to your business goals.
          </p>

          <button className="bg-yellow-400 text-black px-8 py-3 rounded-full font-medium hover:scale-105 transition">
            Get Free Consultation
          </button>
        </div>

      </div>
    </motion.div>
  )}
</AnimatePresence>
    </div>
  );
}