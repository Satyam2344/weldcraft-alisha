import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import heroImage from "@/assets/hero-welding.jpg";

const HERO_VIDEO = "https://videos.pexels.com/video-files/4941362/4941362-hd_1920_1080_25fps.mp4";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        {/* Fallback image while video loads */}
        <img src={heroImage} alt="Professional welder at work" className="absolute w-full h-full object-cover" />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover"
          poster={heroImage}
        >
          <source src={HERO_VIDEO} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-background/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="font-heading text-sm uppercase tracking-[0.3em] text-primary mb-4">
          {t.hero.subtitle}
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold uppercase leading-none mb-6">
          <span className="text-foreground">{t.hero.title1}</span><br />
          <span className="text-gradient-spark">{t.hero.title2}</span><br />
          <span className="text-foreground">{t.hero.title3}</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10">
          {t.hero.desc}
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#booking">
            <Button size="lg" className="bg-primary text-primary-foreground font-heading uppercase tracking-wider text-lg px-8 hover:bg-primary/90 glow-primary">{t.hero.bookBtn}</Button>
          </a>
          <a href="#services">
            <Button size="lg" variant="outline" className="border-primary/50 text-primary font-heading uppercase tracking-wider text-lg px-8 hover:bg-primary/10">{t.hero.viewBtn}</Button>
          </a>
        </motion.div>
      </div>

      <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <ArrowDown className="w-6 h-6 text-primary/60" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
