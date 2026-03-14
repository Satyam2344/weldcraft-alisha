import { useState } from "react";
import { Menu, X, Phone, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage, Language } from "@/contexts/LanguageContext";
import ThemeToggle from "@/components/ThemeToggle";

const PHONE_NUMBER = "+917683053347";

const langLabels: Record<Language, string> = { en: "English", hi: "हिन्दी", hinglish: "Hinglish" };

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { label: t.nav.home, href: "#home" },
    { label: t.nav.services, href: "#services" },
    { label: t.nav.reviews, href: "#reviews" },
    { label: t.nav.booking, href: "#booking" },
    { label: t.nav.contact, href: "#contact" },
  ];

  const cycleLang = () => {
    const langs: Language[] = ["en", "hi", "hinglish"];
    const next = langs[(langs.indexOf(language) + 1) % 3];
    setLanguage(next);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#home" className="font-heading text-2xl font-bold tracking-wider">
          <span className="text-gradient-spark">WELD</span>
          <span className="text-foreground">CRAFT</span>
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="font-heading text-sm uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">
              {link.label}
            </a>
          ))}
          <button onClick={cycleLang} className="flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-border text-sm font-heading uppercase tracking-wider text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors">
            <Globe className="w-4 h-4" />
            {langLabels[language]}
          </button>
          <ThemeToggle />
          <a href={`tel:${PHONE_NUMBER}`}>
            <Button size="sm" className="bg-primary text-primary-foreground font-heading uppercase tracking-wider hover:bg-primary/90 glow-primary">
              <Phone className="w-4 h-4 mr-2" />
              {t.nav.callNow}
            </Button>
          </a>
        </div>

        <div className="flex lg:hidden items-center gap-3">
          <button onClick={cycleLang} className="flex items-center gap-1 px-2 py-1 rounded border border-border text-xs font-heading text-muted-foreground">
            <Globe className="w-3.5 h-3.5" />
            {langLabels[language]}
          </button>
          <ThemeToggle />
          <button className="text-foreground" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-card border-b border-border px-4 pb-4">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="block py-3 font-heading text-sm uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">
              {link.label}
            </a>
          ))}
          <a href={`tel:${PHONE_NUMBER}`}>
            <Button size="sm" className="w-full mt-2 bg-primary text-primary-foreground font-heading uppercase tracking-wider">
              <Phone className="w-4 h-4 mr-2" />
              {t.nav.callNow}
            </Button>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
