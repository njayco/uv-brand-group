import { useLocation, Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionFrame, { SectionTitle } from "@/components/SectionFrame";

const pageInfo: Record<string, { title: string; subtitle: string; description: string }> = {
  "/donate": {
    title: "Donate to the 100 Apps Project",
    subtitle: "Support Independent Innovation",
    description: "Help fund the building of revenue infrastructure and invest in the future of music technology. Payment integration coming soon.",
  },
  "/gift": {
    title: "Gift a Business App",
    subtitle: "Create Opportunity Through Technology",
    description: "Send a Dream App to someone you love. Purchase build credits as a gift. Payment integration coming soon.",
  },
  "/fund": {
    title: "Fund Music-as-a-Gift",
    subtitle: "Foster Connections Through Music",
    description: "Enable the gift of personalized music experiences. Sponsor music creation for special occasions. Payment integration coming soon.",
  },
};

export default function Placeholder() {
  const [location] = useLocation();
  const info = pageInfo[location] || {
    title: "Coming Soon",
    subtitle: "",
    description: "This page is under construction.",
  };

  return (
    <div className="min-h-screen py-8">
      <SectionFrame>
        <SectionTitle subtitle={info.subtitle}>{info.title}</SectionTitle>

        <div className="max-w-lg mx-auto text-center space-y-6">
          <p className="text-sm text-muted-foreground">{info.description}</p>

          <div className="inline-block border border-primary/20 px-6 py-3 rounded-md">
            <p className="text-xs text-primary tracking-[0.2em] uppercase font-semibold">
              Payment Integration Coming Soon
            </p>
          </div>

          <div className="pt-4">
            <Link href="/contact">
              <Button variant="outline" className="tracking-wider uppercase text-xs" data-testid="button-placeholder-contact">
                <ArrowLeft className="w-3.5 h-3.5 mr-2" /> Contact Us Instead
              </Button>
            </Link>
          </div>
        </div>
      </SectionFrame>
    </div>
  );
}
