import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Layers, Zap, DollarSign, Gift, Music } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import SectionFrame, { SectionTitle } from "@/components/SectionFrame";
import { useSEO } from "@/hooks/use-seo";
import uvMusicLogo from "@assets/IMG_1419_1771122238958.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6 },
};

export default function Home() {
  useSEO({
    title: "Home",
    description: "Unrevealed Brand - A Subsidiary of UV Music Group. The Product Development Arm and Revenue Infrastructure Studio. Licensed to Build Revenue.",
  });

  return (
    <div className="min-h-screen">
      <HeroSection />
      <CreativeLicenseSection />
      <MissionSection />
      <RevenueInfrastructureSection />
      <SupportSection />
      <PricingSection />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(218,60%,12%)] via-[hsl(218,40%,18%)] to-[hsl(38,15%,65%)]" />

      <div className="absolute inset-0 opacity-[0.04]">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="hero-grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="white" strokeWidth="0.5" />
              <circle cx="40" cy="40" r="20" fill="none" stroke="white" strokeWidth="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
      </div>

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        <motion.div {...fadeUp}>
          <div className="mb-6 flex justify-center">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-white/20 p-1">
              <img
                src={uvMusicLogo}
                alt="UV Music Group"
                className="w-full h-full object-cover rounded-full"
                style={{ mixBlendMode: "luminosity" }}
              />
            </div>
          </div>
        </motion.div>

        <motion.div {...fadeUp} transition={{ delay: 0.1, duration: 0.6 }}>
          <div className="h-px w-48 mx-auto bg-gradient-to-r from-transparent via-white/30 to-transparent mb-6" />
        </motion.div>

        <motion.h1
          className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold text-white tracking-wider uppercase mb-4"
          {...fadeUp}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Unrevealed Brand
        </motion.h1>

        <motion.p
          className="text-white/50 text-xs sm:text-sm tracking-[0.2em] uppercase mb-6"
          {...fadeUp}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          A Subsidiary of UV Music Group
        </motion.p>

        <motion.p
          className="font-display text-xl sm:text-2xl lg:text-3xl text-white/90 italic mb-10"
          {...fadeUp}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Licensed to Build Revenue.
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-4"
          {...fadeUp}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <Link href="/apply">
            <Button variant="outline" className="border-white/30 text-white bg-white/5 backdrop-blur-sm tracking-wider uppercase text-xs" data-testid="button-hero-apply">
              Start a Project <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
          <Link href="/100-apps">
            <Button variant="outline" className="border-white/20 text-white/70 bg-transparent backdrop-blur-sm tracking-wider uppercase text-xs" data-testid="button-hero-portfolio">
              View Portfolio
            </Button>
          </Link>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-5 h-8 border border-white/20 rounded-full flex items-start justify-center p-1.5"
        >
          <div className="w-1 h-1.5 bg-white/40 rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}

function CreativeLicenseSection() {
  return (
    <SectionFrame id="creative-license">
      <SectionTitle subtitle="The Product Development Arm of UV Music Group">
        Creative License
      </SectionTitle>

      <motion.div {...fadeUp} className="max-w-2xl mx-auto">
        <Card className="relative overflow-visible bg-gradient-to-br from-[hsl(38,25%,92%)] to-[hsl(38,20%,88%)] dark:from-[hsl(220,18%,14%)] dark:to-[hsl(220,18%,11%)] p-0">
          <div className="bg-primary/90 px-4 sm:px-6 py-2 flex items-center justify-between rounded-t-md">
            <span className="text-primary-foreground text-[10px] sm:text-xs tracking-[0.15em] uppercase font-semibold">
              New York State USA
            </span>
            <Shield className="w-4 h-4 text-primary-foreground/70" />
          </div>

          <div className="p-4 sm:p-6 lg:p-8">
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-primary tracking-wider text-center uppercase">
              Creative License
            </h3>
            <p className="text-center text-muted-foreground text-xs sm:text-sm tracking-wider uppercase mt-1">
              Unrevealed Brand
            </p>
            <p className="text-center text-muted-foreground/60 text-[10px] tracking-wider mt-0.5">
              NOT FOR FEDERAL PURPOSES
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="space-y-3">
                <LicenseField label="Creative Director" value="Jeremiah, Najee Khaleel" />
                <LicenseField label="Organization" value="Unrevealed Brand" />
                <LicenseField label="" value="A Subsidiary of UV Music Group" small />
                <LicenseField label="ID Number" value="847 293 156" mono />
              </div>
              <div className="space-y-3">
                <LicenseField label="Class" value="R (Revenue)" />
                <LicenseField label="Issued" value="2014" />
                <LicenseField label="Expires" value="Scaling" />
                <div className="flex items-center gap-2 pt-1">
                  <DollarSign className="w-3.5 h-3.5 text-primary" />
                  <span className="text-xs text-foreground font-semibold tracking-wide">Revenue Donor</span>
                </div>
              </div>
            </div>
          </div>

          <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
          <div className="px-4 sm:px-6 py-2 flex justify-between text-[8px] sm:text-[9px] text-muted-foreground/40 tracking-[0.15em] uppercase">
            <span>Est. 2014</span>
            <span>Licensed to Build Revenue</span>
          </div>
        </Card>
      </motion.div>
    </SectionFrame>
  );
}

function LicenseField({ label, value, small, mono }: { label: string; value: string; small?: boolean; mono?: boolean }) {
  return (
    <div>
      {label && (
        <span className="text-[9px] sm:text-[10px] text-muted-foreground/60 tracking-[0.12em] uppercase block mb-0.5">
          {label}
        </span>
      )}
      <span className={`block ${small ? "text-[10px] sm:text-xs text-muted-foreground" : "text-xs sm:text-sm text-foreground font-semibold"} ${mono ? "font-mono tracking-wider" : "tracking-wide"}`}>
        {value}
      </span>
    </div>
  );
}

function MissionSection() {
  return (
    <SectionFrame id="mission">
      <SectionTitle subtitle="Strategic Mission & Purpose">
        Licensed to Build Revenue
      </SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <motion.div {...fadeUp}>
          <Card className="p-5 sm:p-6 h-full">
            <h4 className="font-display text-sm sm:text-base font-bold text-primary tracking-wider uppercase mb-4">
              Section 1 &mdash; Primary Directive
            </h4>
            <div className="h-px bg-primary/20 mb-4" />
            <p className="text-xs sm:text-sm text-muted-foreground mb-3">Unrevealed Brand exists to:</p>
            <ul className="space-y-2">
              {[
                "Build platforms that increase the bottom line of UV Music Group",
                "Create new monetization channels for music IP",
                'Develop infrastructure for "Music as a Gift"',
                "Launch scalable consumer applications",
                "Build commercial apps for external businesses",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-foreground">
                  <div className="w-4 h-4 mt-0.5 border border-primary/30 rounded-sm flex items-center justify-center flex-shrink-0">
                    <svg className="w-2.5 h-2.5 text-primary" viewBox="0 0 12 12" fill="currentColor">
                      <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        </motion.div>

        <motion.div {...fadeUp} transition={{ delay: 0.15, duration: 0.6 }}>
          <Card className="p-5 sm:p-6 h-full">
            <h4 className="font-display text-sm sm:text-base font-bold text-primary tracking-wider uppercase mb-4">
              Section 2 &mdash; Core Identity
            </h4>
            <div className="h-px bg-primary/20 mb-4" />
            <p className="text-xs sm:text-sm text-muted-foreground mb-3">
              Unrevealed Brand is not just creative. It is product infrastructure. We are:
            </p>
            <ul className="space-y-2">
              {[
                "The Product Development Arm of UV Music Group",
                "The Revenue Infrastructure Studio",
                "The Builder of the 100 Apps Project",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-foreground font-semibold">
                  <div className="w-4 h-4 mt-0.5 border border-primary/30 rounded-sm flex items-center justify-center flex-shrink-0 bg-primary/10">
                    <svg className="w-2.5 h-2.5 text-primary" viewBox="0 0 12 12" fill="currentColor">
                      <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        </motion.div>
      </div>
    </SectionFrame>
  );
}

function RevenueInfrastructureSection() {
  const categories = [
    {
      title: "Greet Me Platform",
      icon: <Music className="w-5 h-5" />,
      items: [
        "Monetize music through digital greeting cards",
        "15-60 second licensed music clips",
        "Direct artist-to-consumer emotional connection",
        "Revenue per transaction (not per stream)",
      ],
    },
    {
      title: "Music-as-a-Gift API",
      icon: <Gift className="w-5 h-5" />,
      items: [
        "B2B licensing infrastructure",
        "White-label greeting card solutions",
        "Embedded music gifting for external platforms",
        "Recurring API subscription revenue",
      ],
    },
    {
      title: "Emotional Data Systems",
      icon: <Layers className="w-5 h-5" />,
      items: [
        "Track which songs move people emotionally",
        "Greet Me Music Charts (Billboard-style)",
        "Emotional usage tracking",
        "Data licensing opportunities",
      ],
    },
  ];

  return (
    <SectionFrame id="revenue-infrastructure">
      <SectionTitle subtitle="How Unrevealed Brand Builds Ownership">
        UV Music Group Revenue Infrastructure
      </SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {categories.map((cat, idx) => (
          <motion.div key={idx} {...fadeUp} transition={{ delay: idx * 0.1, duration: 0.6 }}>
            <Card className="p-5 sm:p-6 h-full">
              <div className="flex items-center gap-2 mb-3">
                <div className="text-primary">{cat.icon}</div>
                <h4 className="font-display text-xs sm:text-sm font-bold text-primary tracking-wider uppercase">
                  {cat.title}
                </h4>
              </div>
              <div className="h-px bg-primary/15 mb-3" />
              <ul className="space-y-2">
                {cat.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-foreground/80">
                    <div className="w-3 h-3 mt-0.5 border border-primary/20 rounded-sm flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>
        ))}
      </div>
    </SectionFrame>
  );
}

function SupportSection() {
  const cards = [
    {
      title: "Donate to the 100 Apps Project",
      icon: <DollarSign className="w-6 h-6" />,
      description: [
        "Help fund independent innovation",
        "Support the building of revenue infrastructure",
        "Invest in the future of music technology",
      ],
      cta: "Donate Now",
      href: "/donate",
    },
    {
      title: "Gift a Business App",
      icon: <Gift className="w-6 h-6" />,
      description: [
        "Send a Dream App to Someone You Love",
        "Purchase build credits as a gift",
        "Create opportunity through technology",
      ],
      cta: "Gift an App",
      href: "/gift",
    },
    {
      title: "Fund Music-as-a-Gift",
      icon: <Music className="w-6 h-6" />,
      description: [
        "Enable the gift of personalized music experiences",
        "Sponsor music creation for special occasions",
        "Foster connections through melodic presents",
      ],
      cta: "Fund Music Now",
      href: "/fund",
    },
  ];

  return (
    <SectionFrame id="support">
      <SectionTitle subtitle="">
        Support Independent Product Infrastructure
      </SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {cards.map((card, idx) => (
          <motion.div key={idx} {...fadeUp} transition={{ delay: idx * 0.1, duration: 0.6 }}>
            <Card className="p-5 sm:p-6 h-full flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center text-primary mb-4">
                {card.icon}
              </div>
              <h4 className="font-display text-sm sm:text-base font-bold text-primary tracking-wider uppercase mb-3">
                {card.title}
              </h4>
              <ul className="space-y-1.5 mb-5 flex-1">
                {card.description.map((line, i) => (
                  <li key={i} className="text-xs text-muted-foreground">{line}</li>
                ))}
              </ul>
              <Link href={card.href}>
                <Button variant="default" className="tracking-wider uppercase text-[10px] sm:text-xs w-full" data-testid={`button-support-${idx}`}>
                  [{card.cta}]
                </Button>
              </Link>
            </Card>
          </motion.div>
        ))}
      </div>
    </SectionFrame>
  );
}

function PricingSection() {
  return (
    <SectionFrame id="pricing">
      <SectionTitle subtitle="Lean Studio + AI-Enhanced Workflow">
        Pricing & Turnaround
      </SectionTitle>

      <div className="max-w-3xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
          <motion.div {...fadeUp}>
            <Card className="p-5 sm:p-6">
              <h4 className="font-display text-sm font-bold text-primary tracking-wider uppercase mb-3">
                Standard Build
              </h4>
              <div className="h-px bg-primary/15 mb-4" />
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Deposit</span>
                  <span className="font-semibold text-foreground">$100</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Delivery Fee</span>
                  <span className="font-semibold text-foreground">$100</span>
                </div>
                <div className="h-px bg-primary/10 my-2" />
                <div className="flex justify-between">
                  <span className="text-foreground font-semibold">Total</span>
                  <span className="font-bold text-primary text-lg">$200</span>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2">
                <Zap className="w-4 h-4 text-primary/60" />
                <span className="text-xs text-muted-foreground">Turnaround: 5&ndash;24 hours</span>
              </div>
            </Card>
          </motion.div>

          <motion.div {...fadeUp} transition={{ delay: 0.15, duration: 0.6 }}>
            <Card className="p-5 sm:p-6 border-primary/30">
              <h4 className="font-display text-sm font-bold text-primary tracking-wider uppercase mb-3">
                Expedited Build
              </h4>
              <div className="h-px bg-primary/15 mb-4" />
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="w-4 h-4 text-primary" />
                  <span className="text-foreground font-semibold">6-Hour Priority Build</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Rush delivery for time-sensitive projects. Same quality, faster execution.
                </p>
              </div>
              <div className="mt-4">
                <Link href="/apply">
                  <Button variant="default" className="w-full tracking-wider uppercase text-xs" data-testid="button-pricing-expedited">
                    Request Expedited Build
                  </Button>
                </Link>
              </div>
            </Card>
          </motion.div>
        </div>

        <motion.div {...fadeUp}>
          <Card className="p-5 sm:p-6">
            <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
              <div className="flex-1">
                <h4 className="font-display text-sm font-bold text-primary tracking-wider uppercase mb-2">
                  Compare & Save
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div>
                    <span className="text-muted-foreground">Traditional Agencies:</span>
                    <span className="block font-semibold text-foreground">$50,000 &ndash; $500,000</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Unrevealed Brand:</span>
                    <span className="block font-semibold text-primary">Lean studio + AI-enhanced workflow</span>
                  </div>
                </div>
              </div>
              <Link href="/apply">
                <Button variant="outline" className="tracking-wider uppercase text-xs flex-shrink-0" data-testid="button-pricing-start">
                  Start a Project <ArrowRight className="w-3.5 h-3.5 ml-2" />
                </Button>
              </Link>
            </div>
          </Card>
        </motion.div>
      </div>
    </SectionFrame>
  );
}
