import { type ReactNode } from "react";

interface SectionFrameProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export default function SectionFrame({ children, className = "", id }: SectionFrameProps) {
  return (
    <section id={id} className={`relative py-16 sm:py-24 px-4 sm:px-6 ${className}`}>
      <div className="absolute inset-0 guilloche-bg opacity-30 pointer-events-none" />
      <div className="max-w-6xl mx-auto relative">
        <div className="absolute inset-0 certificate-border pointer-events-none rounded-md opacity-60" />
        <div className="relative p-6 sm:p-10 lg:p-14">
          {children}
        </div>
      </div>
    </section>
  );
}

export function SectionTitle({ children, subtitle }: { children: ReactNode; subtitle?: string }) {
  return (
    <div className="text-center mb-10 sm:mb-14">
      <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-primary tracking-wide uppercase">
        {children}
      </h2>
      {subtitle && (
        <p className="mt-2 text-muted-foreground font-body-serif text-sm sm:text-base italic">
          {subtitle}
        </p>
      )}
      <div className="section-divider mt-4 sm:mt-6 mx-auto max-w-xs" />
    </div>
  );
}
