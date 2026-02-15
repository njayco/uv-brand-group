import { Link } from "wouter";
import { SiInstagram, SiX, SiLinkedin, SiYoutube } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="relative mt-16 border-t border-primary/10">
      <div className="section-divider" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="text-center space-y-6">
          <h3 className="font-display text-xl sm:text-2xl font-bold text-primary tracking-wider uppercase">
            Unrevealed Brand
          </h3>
          <p className="text-muted-foreground text-xs sm:text-sm">
            A Subsidiary of UV Music Group
          </p>
          <p className="font-display text-lg sm:text-xl text-foreground italic">
            Licensed to Build Revenue.
          </p>

          <nav className="flex flex-wrap justify-center gap-4 text-xs sm:text-sm text-muted-foreground">
            <Link href="/" data-testid="link-footer-home">
              <span className="cursor-pointer hover:text-foreground transition-colors">Home</span>
            </Link>
            <span className="text-primary/20">|</span>
            <Link href="/100-apps" data-testid="link-footer-100-apps">
              <span className="cursor-pointer hover:text-foreground transition-colors">The 100 Apps Project</span>
            </Link>
            <span className="text-primary/20">|</span>
            <Link href="/apply" data-testid="link-footer-apply">
              <span className="cursor-pointer hover:text-foreground transition-colors">Apply for Project</span>
            </Link>
            <span className="text-primary/20">|</span>
            <Link href="/structure" data-testid="link-footer-structure">
              <span className="cursor-pointer hover:text-foreground transition-colors">Company Structure</span>
            </Link>
            <span className="text-primary/20">|</span>
            <Link href="/contact" data-testid="link-footer-contact">
              <span className="cursor-pointer hover:text-foreground transition-colors">Contact</span>
            </Link>
          </nav>

          <div className="flex justify-center gap-5 pt-2">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" data-testid="link-social-instagram" className="text-muted-foreground hover:text-foreground transition-colors">
              <SiInstagram className="w-5 h-5" />
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" data-testid="link-social-x" className="text-muted-foreground hover:text-foreground transition-colors">
              <SiX className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" data-testid="link-social-linkedin" className="text-muted-foreground hover:text-foreground transition-colors">
              <SiLinkedin className="w-5 h-5" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" data-testid="link-social-youtube" className="text-muted-foreground hover:text-foreground transition-colors">
              <SiYoutube className="w-5 h-5" />
            </a>
          </div>

          <div className="uv-line-divider max-w-xs mx-auto" />

          <div className="flex flex-wrap justify-center gap-3 text-[10px] sm:text-xs text-muted-foreground/60">
            <span>Privacy Policy</span>
            <span>|</span>
            <span>Terms of Service</span>
            <span>|</span>
            <span>Cookie Policy</span>
          </div>

          <div className="flex flex-wrap justify-center gap-3 text-[10px] sm:text-xs text-muted-foreground/60">
            <a href="mailto:uvbrand@gmail.com" className="hover:text-foreground transition-colors" data-testid="link-footer-email">uvbrand@gmail.com</a>
            <span>|</span>
            <a href="tel:917-723-9364" className="hover:text-foreground transition-colors" data-testid="link-footer-phone">917-723-9364</a>
          </div>

          <p className="text-[10px] sm:text-xs text-muted-foreground/50 tracking-wider">
            &copy; 2026 Unrevealed Brand. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
