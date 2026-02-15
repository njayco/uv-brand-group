import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SectionFrame, { SectionTitle } from "@/components/SectionFrame";
import { useSEO } from "@/hooks/use-seo";
import type { AppTile } from "@shared/schema";

import greetMeImg from "@assets/34qUd0Sp_1771122238958.png";
import denokoTaxiImg from "@assets/4ACnycvj_1771122238958.png";
import frankiesImg from "@assets/menu_1771122238958.JPG";
import classifiedImg from "@assets/892cc630160341.560572248e1b9-2_1771122238958.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6 },
};

const internalApps: (AppTile & { image?: string })[] = [
  {
    number: 1,
    total: 100,
    name: "Greet Me",
    description: "Digital greeting cards with licensed music",
    revenueModel: "Transaction + Subscription",
    category: "internal",
    link: "https://greetme.me",
    image: greetMeImg,
  },
  {
    number: 2,
    total: 100,
    name: "Denoko Prom Queen",
    description: "Engagement marketplace + ranking engine",
    revenueModel: "Premium placements",
    category: "internal",
    link: "https://Denoko.com",
  },
  {
    number: 7,
    total: 100,
    name: "Denoko Phone Msgr",
    description: "Kindness-based messaging platform",
    revenueModel: "Premium features",
    category: "internal",
    link: "https://www.behance.net/gallery/3234381/3G-Phone-Messenger-by-3G-Interctive",
  },
  {
    number: 9,
    total: 100,
    name: "Music Charts Platform",
    description: "Greet Me Music Charts - emotional usage tracking",
    revenueModel: "Data licensing",
    category: "internal",
    comingSoon: true,
  },
  {
    number: 10,
    total: 100,
    name: "Internal Comms Suite",
    description: "Secure team messaging & announcements",
    revenueModel: "Enterprise license",
    category: "internal",
    comingSoon: true,
  },
];

const commercialApps: (AppTile & { image?: string })[] = [
  {
    number: 3,
    total: 100,
    name: "Frankie's Elite Transport",
    description: "Premium roadside assistance & towing platform",
    revenueModel: "Service fees + subscriptions",
    category: "commercial",
    image: frankiesImg,
  },
  {
    number: 4,
    total: 100,
    name: "Denoko Taxi Dispatch",
    description: "Hybrid dispatch system with real-time control",
    revenueModel: "SaaS licensing",
    category: "commercial",
    image: denokoTaxiImg,
  },
  {
    number: 5,
    total: 100,
    name: "Classified",
    description: "Digital newspaper classifieds aggregator",
    revenueModel: "Advertising + listings",
    category: "commercial",
    image: classifiedImg,
    comingSoon: true,
  },
  {
    number: 6,
    total: 100,
    name: "Company Websites & Branding",
    description: "Custom websites, logos, and merch design",
    revenueModel: "Project-based",
    category: "commercial",
  },
  {
    number: 8,
    total: 100,
    name: "Music-as-a-Gift API",
    description: "B2B embedded music gifting infrastructure",
    revenueModel: "API subscription",
    category: "commercial",
    comingSoon: true,
  },
];

export default function HundredApps() {
  useSEO({
    title: "The 100 Apps Project",
    description: "Infrastructure Portfolio Initiative - Building 100 revenue-generating applications for UV Music Group and external businesses.",
  });

  return (
    <div className="min-h-screen py-8">
      <SectionFrame id="100-apps-header">
        <SectionTitle subtitle="Infrastructure Portfolio Initiative">
          The 100 Apps Project
        </SectionTitle>

        <p className="text-center text-sm text-muted-foreground max-w-2xl mx-auto mb-10">
          Building a portfolio of 100 revenue-generating applications &mdash; split between internal 
          infrastructure for UV Music Group and commercial builds for outside businesses.
        </p>

        <div className="mb-12">
          <h3 className="font-display text-lg sm:text-xl font-bold text-primary tracking-wider uppercase text-center mb-2">
            Internal Infrastructure
          </h3>
          <p className="text-center text-xs text-muted-foreground mb-6 tracking-wide">(For UV Music Group)</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {internalApps.map((app, idx) => (
              <AppTileCard key={idx} app={app} delay={idx * 0.08} />
            ))}
          </div>
        </div>

        <div className="uv-line-divider mb-12" />

        <div>
          <h3 className="font-display text-lg sm:text-xl font-bold text-primary tracking-wider uppercase text-center mb-2">
            Commercial Builds
          </h3>
          <p className="text-center text-xs text-muted-foreground mb-6 tracking-wide">(For Outside Businesses)</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {commercialApps.map((app, idx) => (
              <AppTileCard key={idx} app={app} delay={idx * 0.08} />
            ))}
          </div>
        </div>
      </SectionFrame>
    </div>
  );
}

function AppTileCard({ app, delay }: { app: AppTile & { image?: string }; delay: number }) {
  return (
    <motion.div {...fadeUp} transition={{ delay, duration: 0.6 }}>
      <Card className="overflow-visible h-full flex flex-col">
        {app.image && (
          <div className="h-36 overflow-hidden rounded-t-md">
            <img
              src={app.image}
              alt={app.name}
              className="w-full h-full object-cover"
              data-testid={`img-app-${app.number}`}
            />
          </div>
        )}
        <div className="p-4 sm:p-5 flex-1 flex flex-col">
          <div className="flex items-start justify-between gap-2 mb-2">
            <div className="flex items-center gap-2">
              <span className="font-display text-xl sm:text-2xl font-bold text-primary leading-none">
                {app.number}
              </span>
              <span className="text-muted-foreground/40 text-xs">/</span>
              <span className="text-muted-foreground/40 text-xs">{app.total}</span>
            </div>
            {app.comingSoon && (
              <Badge variant="secondary" className="text-[9px] tracking-wider uppercase flex-shrink-0">
                Coming Soon
              </Badge>
            )}
          </div>

          <h4 className="font-display text-sm sm:text-base font-bold text-foreground tracking-wide uppercase mb-1.5">
            {app.name}
          </h4>
          <p className="text-xs text-muted-foreground mb-2 flex-1">{app.description}</p>

          <div className="h-px bg-primary/10 my-2" />
          <div className="flex items-center justify-between">
            <span className="text-[10px] text-muted-foreground/60 tracking-wider">
              Revenue: {app.revenueModel}
            </span>
            {app.link && (
              <a
                href={app.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary/60 hover:text-primary transition-colors"
                data-testid={`link-app-${app.number}`}
              >
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
