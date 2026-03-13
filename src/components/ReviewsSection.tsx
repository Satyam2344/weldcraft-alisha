import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ratingValues = [5, 5, 4, 5, 5, 4];

const ReviewsSection = () => {
  const { t } = useLanguage();

  return (
    <section id="reviews" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <p className="font-heading text-sm uppercase tracking-[0.3em] text-primary mb-3">{t.reviews.label}</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase">{t.reviews.title}</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.reviewData.map((review, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="bg-card rounded-lg p-6 border border-border">
              <Quote className="w-8 h-8 text-primary/30 mb-4" />
              <p className="text-secondary-foreground text-sm leading-relaxed mb-6">"{review.text}"</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-heading font-semibold text-foreground">{review.name}</p>
                  <p className="text-xs text-muted-foreground">{review.role}</p>
                </div>
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className={`w-4 h-4 ${star <= ratingValues[i] ? "text-primary fill-primary" : "text-steel"}`} />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
