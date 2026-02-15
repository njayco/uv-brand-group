import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Card } from "@/components/ui/card";
import SectionFrame, { SectionTitle } from "@/components/SectionFrame";
import { useSEO } from "@/hooks/use-seo";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6 },
};

export default function CompanyStructure() {
  useSEO({
    title: "Company Structure",
    description: "UV Music Group infrastructure hierarchy - Unrevealed Brand as the Product Development Arm building revenue through the 100 Apps Project.",
  });

  return (
    <div className="min-h-screen py-8">
      <SectionFrame id="structure">
        <SectionTitle subtitle="Infrastructure Hierarchy">
          Company Structure
        </SectionTitle>

        <div className="max-w-lg mx-auto mb-14">
          <motion.div {...fadeUp} className="space-y-0">
            <HierarchyBox
              title="UV Music Group"
              subtitle="Parent Company"
              detail="Music Publishing \u2022 Artist Development \u2022 IP Ownership"
              variant="primary"
            />

            <div className="flex justify-center py-2">
              <ArrowDown className="w-5 h-5 text-primary/40" />
            </div>

            <HierarchyBox
              title="Unrevealed Brand"
              subtitle="Infrastructure Studio"
              detail="Product Development Arm"
              variant="accent"
            />

            <div className="flex justify-center py-2">
              <ArrowDown className="w-5 h-5 text-primary/40" />
            </div>

            <HierarchyBox
              title="The 100 Apps Project"
              subtitle="Portfolio Engine"
              detail="Internal Infrastructure + Commercial Builds"
              variant="default"
            />
          </motion.div>
        </div>

        <div className="uv-line-divider mb-12" />

        <motion.div {...fadeUp} className="max-w-3xl mx-auto">
          <Card className="p-5 sm:p-6 lg:p-8">
            <h3 className="font-display text-lg sm:text-xl font-bold text-primary tracking-wider uppercase mb-1">
              Strategic Purpose
            </h3>
            <div className="section-divider mb-5 max-w-[120px]" />

            <div className="space-y-4 text-sm text-foreground/80 leading-relaxed">
              <p>
                Unrevealed Brand exists to increase the long-term valuation and revenue capacity 
                of UV Music Group through owned digital infrastructure.
              </p>
              <p>
                Rather than relying solely on streaming revenue, UV Music Group invests in 
                building platforms, applications, and digital products that create new 
                monetization channels for music intellectual property.
              </p>
              <p>
                Through the 100 Apps Project, Unrevealed Brand builds both internal tools 
                that power UV Music Group&rsquo;s operations and commercial applications for 
                external businesses &mdash; generating revenue from every direction.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-primary/10">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                <StatBox label="Founded" value="2014" />
                <StatBox label="Headquarters" value="New York" />
                <StatBox label="Mission" value="Build Revenue" />
              </div>
            </div>
          </Card>
        </motion.div>
      </SectionFrame>
    </div>
  );
}

function HierarchyBox({
  title,
  subtitle,
  detail,
  variant,
}: {
  title: string;
  subtitle: string;
  detail: string;
  variant: "primary" | "accent" | "default";
}) {
  const borderClass = variant === "primary"
    ? "border-primary/40"
    : variant === "accent"
    ? "border-destructive/30"
    : "border-primary/25";

  return (
    <Card className={`p-4 sm:p-5 text-center ${borderClass}`}>
      <h4 className="font-display text-base sm:text-lg font-bold text-primary tracking-wider uppercase">
        {title}
      </h4>
      <p className="text-xs sm:text-sm text-foreground font-semibold mt-0.5">{subtitle}</p>
      <p className="text-[10px] sm:text-xs text-muted-foreground mt-0.5">{detail}</p>
    </Card>
  );
}

function StatBox({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <span className="text-[10px] text-muted-foreground/60 tracking-[0.12em] uppercase block mb-0.5">
        {label}
      </span>
      <span className="text-sm font-semibold text-foreground">{value}</span>
    </div>
  );
}
