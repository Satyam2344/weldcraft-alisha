import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";

const WHATSAPP_NUMBER = "917683053347";

const serviceOptions = [
  { key: "mig", rate: "₹500/hr" },
  { key: "tig", rate: "₹800/hr" },
  { key: "arc", rate: "₹400/hr" },
  { key: "spot", rate: "₹350/hr" },
  { key: "pipe", rate: "₹1,000/hr" },
  { key: "custom", rate: "₹600/hr" },
];

const BookingSection = () => {
  const { t } = useLanguage();
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", location: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendToWhatsApp = () => {
    if (!form.name || !form.phone || !form.service || !form.location) {
      toast.error(t.booking.fillError);
      return;
    }
    const text = `*New Booking Request — WELDCRAFT*%0A%0A*Name:* ${encodeURIComponent(form.name)}%0A*Phone:* ${encodeURIComponent(form.phone)}%0A*Email:* ${encodeURIComponent(form.email || "N/A")}%0A*Service:* ${encodeURIComponent(form.service)}%0A*Location:* ${encodeURIComponent(form.location)}%0A*Message:* ${encodeURIComponent(form.message || "N/A")}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
    toast.success(t.booking.redirecting);
  };

  return (
    <section id="booking" className="py-24 bg-card">
      <div className="container mx-auto px-4 max-w-2xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <p className="font-heading text-sm uppercase tracking-[0.3em] text-primary mb-3">{t.booking.label}</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase">{t.booking.title}</h2>
          <p className="text-muted-foreground mt-4">{t.booking.desc}</p>
          <div className="inline-flex items-center gap-2 mt-4 bg-primary/10 rounded-full px-4 py-2 border border-primary/20">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-heading uppercase tracking-wider">Delhi NCR Only</span>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="bg-secondary rounded-lg p-8 border border-border space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="text-xs font-heading uppercase tracking-wider text-muted-foreground mb-1.5 block">{t.booking.name} *</label>
              <Input name="name" value={form.name} onChange={handleChange} placeholder={t.booking.namePlaceholder} className="bg-muted border-border" />
            </div>
            <div>
              <label className="text-xs font-heading uppercase tracking-wider text-muted-foreground mb-1.5 block">{t.booking.phone} *</label>
              <Input name="phone" value={form.phone} onChange={handleChange} placeholder={t.booking.phonePlaceholder} className="bg-muted border-border" />
            </div>
          </div>
          <div>
            <label className="text-xs font-heading uppercase tracking-wider text-muted-foreground mb-1.5 block">{t.booking.email}</label>
            <Input name="email" type="email" value={form.email} onChange={handleChange} placeholder={t.booking.emailPlaceholder} className="bg-muted border-border" />
          </div>
          <div>
            <label className="text-xs font-heading uppercase tracking-wider text-muted-foreground mb-1.5 block">{t.booking.service} *</label>
            <select name="service" value={form.service} onChange={handleChange}
              className="w-full h-10 rounded-md border border-border bg-muted px-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring">
              <option value="">{t.booking.selectService}</option>
              {serviceOptions.map((s) => (
                <option key={s.key} value={t.serviceNames[s.key].title}>
                  {t.serviceNames[s.key].title} — {s.rate}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-xs font-heading uppercase tracking-wider text-muted-foreground mb-1.5 block">{t.booking.location} *</label>
            <select name="location" value={form.location} onChange={handleChange}
              className="w-full h-10 rounded-md border border-border bg-muted px-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring">
              <option value="">{t.booking.selectLocation}</option>
              {t.delhiNCR.map((loc) => (
                <option key={loc} value={loc}>{loc}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-xs font-heading uppercase tracking-wider text-muted-foreground mb-1.5 block">{t.booking.message}</label>
            <Textarea name="message" value={form.message} onChange={handleChange} placeholder={t.booking.messagePlaceholder} rows={4} className="bg-muted border-border" />
          </div>
          <Button onClick={sendToWhatsApp} size="lg"
            className="w-full bg-primary text-primary-foreground font-heading uppercase tracking-wider text-base hover:bg-primary/90 glow-primary">
            <MessageCircle className="w-5 h-5 mr-2" />
            {t.booking.sendWhatsApp}
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default BookingSection;
