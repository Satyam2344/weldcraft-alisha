import { motion } from "framer-motion";
import { Phone, MessageCircle, MapPin, Clock, Instagram, Facebook, Youtube } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const PHONE_NUMBER = "+917683053347";
const WHATSAPP_NUMBER = "917683053347";

const SOCIALS = [
  { icon: Instagram, href: "https://instagram.com/weldcraft", label: "Instagram", color: "#E4405F" },
  { icon: Facebook, href: "https://facebook.com/weldcraft", label: "Facebook", color: "#1877F2" },
  { icon: Youtube, href: "https://youtube.com/@weldcraft", label: "YouTube", color: "#FF0000" },
];

const ContactSection = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <p className="font-heading text-sm uppercase tracking-[0.3em] text-primary mb-3">{t.contact.label}</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase">{t.contact.title}</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <motion.a href={`tel:${PHONE_NUMBER}`} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="bg-card rounded-lg p-8 border border-border text-center hover:border-primary/50 transition-all group">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
              <Phone className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-heading text-lg font-semibold uppercase mb-2">{t.contact.callUs}</h3>
            <p className="text-muted-foreground text-sm">{t.contact.directCall}</p>
            <p className="text-primary font-heading font-semibold mt-2">{PHONE_NUMBER}</p>
          </motion.a>

          <motion.a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="bg-card rounded-lg p-8 border border-border text-center hover:border-primary/50 transition-all group">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
              <MessageCircle className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-heading text-lg font-semibold uppercase mb-2">{t.contact.whatsapp}</h3>
            <p className="text-muted-foreground text-sm">{t.contact.messageAnytime}</p>
            <p className="text-primary font-heading font-semibold mt-2">{t.contact.chatNow}</p>
          </motion.a>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="bg-card rounded-lg p-8 border border-border text-center">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-heading text-lg font-semibold uppercase mb-2">{t.contact.visitUs}</h3>
            <p className="text-muted-foreground text-sm">Industrial Area, Sector 5</p>
            <p className="text-muted-foreground text-sm">New Delhi, India</p>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-12 text-center space-y-6">
          <div className="inline-flex items-center gap-2 bg-card rounded-full px-6 py-3 border border-border">
            <Clock className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">{t.contact.hours}</span>
            <span className="text-border">|</span>
            <span className="text-sm text-muted-foreground">{t.contact.sunClosed}</span>
          </div>

          <div className="flex items-center justify-center gap-5">
            {SOCIALS.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:scale-110 transition-transform shadow-sm">
                <s.icon className="w-6 h-6" style={{ color: s.color }} />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
