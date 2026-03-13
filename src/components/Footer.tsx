import { Instagram, Facebook, Youtube } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const SOCIALS = [
  { icon: Instagram, href: "https://instagram.com/weldcraft", label: "Instagram", color: "#E4405F" },
  { icon: Facebook, href: "https://facebook.com/weldcraft", label: "Facebook", color: "#1877F2" },
  { icon: Youtube, href: "https://youtube.com/@weldcraft", label: "YouTube", color: "#FF0000" },
];

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="py-8 bg-card border-t border-border">
      <div className="container mx-auto px-4 text-center space-y-4">
        <p className="font-heading text-xl font-bold tracking-wider mb-2">
          <span className="text-gradient-spark">WELD</span>
          <span className="text-foreground">CRAFT</span>
        </p>
        <div className="flex items-center justify-center gap-4">
          {SOCIALS.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
              className="hover:scale-110 transition-transform">
              <s.icon className="w-5 h-5" style={{ color: s.color }} />
            </a>
          ))}
        </div>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} WELDCRAFT Welding Services. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
