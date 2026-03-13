import { motion } from "framer-motion";
import { Zap, Shield, Flame, Wrench, Factory, Ruler } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const serviceKeys = ["mig", "tig", "arc", "spot", "pipe", "custom"] as const;
const icons = [Zap, Shield, Flame, Wrench, Factory, Ruler];
const rates = ["₹500/hr", "₹800/hr", "₹400/hr", "₹350/hr", "₹1,000/hr", "₹600/hr"];
const prices = ["₹2,500", "₹4,000", "₹2,000", "₹1,500", "₹5,000", "₹3,000"];
const ratings = [4.9, 4.8, 4.7, 4.6, 4.9, 4.8];

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex items-center gap-1">
    {[1, 2, 3, 4, 5].map((star) => (
      <svg key={star} className={`w-4 h-4 ${star <= Math.round(rating) ? "text-primary" : "text-steel"}`} fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
    <span className="text-sm text-muted-foreground ml-1">{rating}</span>
  </div>
);

const ServicesSection = () => {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <p className="font-heading text-sm uppercase tracking-[0.3em] text-primary mb-3">{t.services.label}</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase">{t.services.title}</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceKeys.map((key, i) => {
            const Icon = icons[i];
            const service = t.serviceNames[key];
            return (
              <motion.div key={key} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="group relative bg-secondary rounded-lg p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:glow-primary">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-semibold uppercase">{service.title}</h3>
                    <StarRating rating={ratings[i]} />
                  </div>
                </div>
                <p className="text-muted-foreground text-sm mb-5 leading-relaxed">{service.description}</p>
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">{t.services.rate}</p>
                    <p className="font-heading text-lg font-semibold text-primary">{rates[i]}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">{t.services.price}</p>
                    <p className="font-heading text-lg font-semibold text-foreground">{prices[i]}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
