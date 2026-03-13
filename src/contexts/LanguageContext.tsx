import { createContext, useContext, useState, ReactNode } from "react";

export type Language = "en" | "hi" | "hinglish";

type Translations = {
  nav: { home: string; services: string; reviews: string; booking: string; contact: string; callNow: string };
  hero: { subtitle: string; title1: string; title2: string; title3: string; desc: string; bookBtn: string; viewBtn: string };
  services: { label: string; title: string; rate: string; price: string };
  reviews: { label: string; title: string };
  booking: {
    label: string; title: string; desc: string;
    name: string; phone: string; email: string; service: string; selectService: string;
    location: string; selectLocation: string; message: string;
    sendWhatsApp: string; namePlaceholder: string; phonePlaceholder: string;
    emailPlaceholder: string; messagePlaceholder: string;
    locationError: string; fillError: string; redirecting: string;
  };
  contact: { label: string; title: string; callUs: string; directCall: string; whatsapp: string; messageAnytime: string; chatNow: string; visitUs: string; hours: string; sunClosed: string };
  footer: { rights: string };
  serviceNames: Record<string, { title: string; description: string }>;
  reviewData: { name: string; role: string; text: string }[];
  delhiNCR: string[];
};

const translations: Record<Language, Translations> = {
  en: {
    nav: { home: "Home", services: "Services", reviews: "Reviews", booking: "Booking", contact: "Contact", callNow: "Call Now" },
    hero: { subtitle: "Premium Welding Services", title1: "Precision", title2: "Welding", title3: "Excellence", desc: "Expert welding solutions for industrial, commercial, and residential projects. Quality craftsmanship backed by years of experience.", bookBtn: "Book a Service", viewBtn: "View Services" },
    services: { label: "What We Offer", title: "Our Services", rate: "Rate", price: "Price" },
    reviews: { label: "Testimonials", title: "Customer Reviews" },
    booking: {
      label: "Get Started", title: "Book a Service", desc: "Fill the form below and we'll connect with you on WhatsApp instantly.",
      name: "Name", phone: "Phone", email: "Email", service: "Service", selectService: "Select a service",
      location: "Location (Delhi NCR Only)", selectLocation: "Select your area",
      message: "Message", sendWhatsApp: "Send via WhatsApp",
      namePlaceholder: "Your full name", phonePlaceholder: "+91 98765 43210",
      emailPlaceholder: "you@example.com", messagePlaceholder: "Describe your project or requirements...",
      locationError: "We currently serve only Delhi NCR areas. Please select your location.",
      fillError: "Please fill in name, phone, service, and location.",
      redirecting: "Redirecting to WhatsApp...",
    },
    contact: { label: "Reach Out", title: "Contact Us", callUs: "Call Us", directCall: "Direct phone call", whatsapp: "WhatsApp", messageAnytime: "Message us anytime", chatNow: "Chat Now", visitUs: "Visit Us", hours: "Mon – Sat: 8:00 AM – 7:00 PM", sunClosed: "Sun: Closed" },
    footer: { rights: "All rights reserved." },
    serviceNames: {
      mig: { title: "MIG Welding", description: "Metal Inert Gas welding for fast, clean joins on steel and aluminum." },
      tig: { title: "TIG Welding", description: "Tungsten Inert Gas welding for precision work on thin metals and alloys." },
      arc: { title: "Arc Welding", description: "Shielded Metal Arc Welding — versatile and cost-effective for heavy structures." },
      spot: { title: "Spot Welding", description: "Resistance spot welding for sheet metal joints and automotive repair." },
      pipe: { title: "Pipe Welding", description: "Specialized pipeline and structural pipe welding for industrial projects." },
      custom: { title: "Custom Fabrication", description: "Bespoke metal fabrication — gates, railings, frames, and custom designs." },
    },
    reviewData: [
      { name: "Rajesh Kumar", role: "Factory Owner", text: "WELDCRAFT did an outstanding job on our factory pipeline. The TIG welding was flawless and completed ahead of schedule. Highly recommended!" },
      { name: "Priya Sharma", role: "Homeowner", text: "Got custom iron gates and railings made. The craftsmanship is beautiful and the team was very professional. Fair pricing too!" },
      { name: "Amit Patel", role: "Construction Manager", text: "We've used WELDCRAFT for multiple commercial projects. Consistent quality and they always meet deadlines. Great arc welding work." },
      { name: "Sunita Verma", role: "Business Owner", text: "Excellent spot welding for our automotive parts. The precision and finish quality exceeded our expectations. Will use again!" },
      { name: "Vikram Singh", role: "Contractor", text: "Best MIG welding service in the area. Professional team, clean work, and very reasonable rates. They handle large orders with ease." },
      { name: "Deepa Nair", role: "Interior Designer", text: "Custom metal furniture fabrication was done beautifully. The team understood my design vision and delivered exactly what I wanted." },
    ],
    delhiNCR: ["New Delhi", "Noida", "Greater Noida", "Gurgaon (Gurugram)", "Faridabad", "Ghaziabad", "Dwarka", "Rohini", "Laxmi Nagar", "Saket", "Janakpuri", "Nehru Place"],
  },
  hi: {
    nav: { home: "होम", services: "सेवाएं", reviews: "समीक्षाएं", booking: "बुकिंग", contact: "संपर्क", callNow: "कॉल करें" },
    hero: { subtitle: "प्रीमियम वेल्डिंग सेवाएं", title1: "सटीक", title2: "वेल्डिंग", title3: "उत्कृष्टता", desc: "औद्योगिक, व्यावसायिक और आवासीय परियोजनाओं के लिए विशेषज्ञ वेल्डिंग समाधान। वर्षों के अनुभव से समर्थित गुणवत्ता शिल्प कौशल।", bookBtn: "सेवा बुक करें", viewBtn: "सेवाएं देखें" },
    services: { label: "हम क्या प्रदान करते हैं", title: "हमारी सेवाएं", rate: "दर", price: "मूल्य" },
    reviews: { label: "प्रशंसापत्र", title: "ग्राहक समीक्षाएं" },
    booking: {
      label: "शुरू करें", title: "सेवा बुक करें", desc: "नीचे फॉर्म भरें और हम आपसे व्हाट्सएप पर तुरंत जुड़ेंगे।",
      name: "नाम", phone: "फोन", email: "ईमेल", service: "सेवा", selectService: "सेवा चुनें",
      location: "स्थान (केवल दिल्ली NCR)", selectLocation: "अपना क्षेत्र चुनें",
      message: "संदेश", sendWhatsApp: "व्हाट्सएप पर भेजें",
      namePlaceholder: "आपका पूरा नाम", phonePlaceholder: "+91 98765 43210",
      emailPlaceholder: "you@example.com", messagePlaceholder: "अपनी परियोजना या आवश्यकताओं का वर्णन करें...",
      locationError: "हम वर्तमान में केवल दिल्ली NCR क्षेत्रों में सेवा प्रदान करते हैं।",
      fillError: "कृपया नाम, फोन, सेवा और स्थान भरें।",
      redirecting: "व्हाट्सएप पर रीडायरेक्ट हो रहा है...",
    },
    contact: { label: "संपर्क करें", title: "हमसे संपर्क करें", callUs: "कॉल करें", directCall: "सीधा फोन कॉल", whatsapp: "व्हाट्सएप", messageAnytime: "कभी भी संदेश भेजें", chatNow: "अभी चैट करें", visitUs: "हमसे मिलें", hours: "सोम – शनि: सुबह 8:00 – शाम 7:00", sunClosed: "रवि: बंद" },
    footer: { rights: "सर्वाधिकार सुरक्षित।" },
    serviceNames: {
      mig: { title: "MIG वेल्डिंग", description: "स्टील और एल्यूमीनियम पर तेज, स्वच्छ जोड़ के लिए मेटल इनर्ट गैस वेल्डिंग।" },
      tig: { title: "TIG वेल्डिंग", description: "पतली धातुओं और मिश्र धातुओं पर सटीक कार्य के लिए टंगस्टन इनर्ट गैस वेल्डिंग।" },
      arc: { title: "आर्क वेल्डिंग", description: "शील्डेड मेटल आर्क वेल्डिंग — भारी संरचनाओं के लिए बहुमुखी और किफायती।" },
      spot: { title: "स्पॉट वेल्डिंग", description: "शीट मेटल जोड़ और ऑटोमोटिव मरम्मत के लिए रेजिस्टेंस स्पॉट वेल्डिंग।" },
      pipe: { title: "पाइप वेल्डिंग", description: "औद्योगिक परियोजनाओं के लिए विशेष पाइपलाइन और संरचनात्मक पाइप वेल्डिंग।" },
      custom: { title: "कस्टम फैब्रिकेशन", description: "विशेष धातु निर्माण — गेट, रेलिंग, फ्रेम, और कस्टम डिजाइन।" },
    },
    reviewData: [
      { name: "राजेश कुमार", role: "फैक्ट्री मालिक", text: "WELDCRAFT ने हमारी फैक्ट्री पाइपलाइन पर शानदार काम किया। TIG वेल्डिंग बेदाग थी और समय से पहले पूरी हुई। बहुत सिफारिश!" },
      { name: "प्रिया शर्मा", role: "गृहस्वामी", text: "कस्टम लोहे के गेट और रेलिंग बनवाए। शिल्प कौशल सुंदर है और टीम बहुत पेशेवर थी। उचित मूल्य भी!" },
      { name: "अमित पटेल", role: "निर्माण प्रबंधक", text: "हमने कई वाणिज्यिक परियोजनाओं के लिए WELDCRAFT का उपयोग किया है। लगातार गुणवत्ता और वे हमेशा समय सीमा पूरी करते हैं।" },
      { name: "सुनीता वर्मा", role: "व्यापार मालिक", text: "हमारे ऑटोमोटिव पार्ट्स के लिए उत्कृष्ट स्पॉट वेल्डिंग। सटीकता और फिनिश गुणवत्ता हमारी उम्मीदों से अधिक थी!" },
      { name: "विक्रम सिंह", role: "ठेकेदार", text: "क्षेत्र में सबसे अच्छी MIG वेल्डिंग सेवा। पेशेवर टीम, स्वच्छ काम, और बहुत उचित दरें।" },
      { name: "दीपा नायर", role: "इंटीरियर डिजाइनर", text: "कस्टम मेटल फर्नीचर का फैब्रिकेशन बहुत सुंदर तरीके से किया गया। टीम ने मेरे डिजाइन विजन को समझा।" },
    ],
    delhiNCR: ["नई दिल्ली", "नोएडा", "ग्रेटर नोएडा", "गुरुग्राम", "फरीदाबाद", "गाजियाबाद", "द्वारका", "रोहिणी", "लक्ष्मी नगर", "साकेत", "जनकपुरी", "नेहरू प्लेस"],
  },
  hinglish: {
    nav: { home: "Home", services: "Services", reviews: "Reviews", booking: "Booking", contact: "Contact", callNow: "Call Karo" },
    hero: { subtitle: "Premium Welding Services", title1: "Precision", title2: "Welding", title3: "Excellence", desc: "Industrial, commercial aur residential projects ke liye expert welding solutions. Saalon ke experience ke saath quality craftsmanship.", bookBtn: "Service Book Karo", viewBtn: "Services Dekho" },
    services: { label: "Hum Kya Offer Karte Hain", title: "Humari Services", rate: "Rate", price: "Price" },
    reviews: { label: "Testimonials", title: "Customer Reviews" },
    booking: {
      label: "Shuru Karo", title: "Service Book Karo", desc: "Neeche form bharo aur hum aapko WhatsApp pe turant connect karenge.",
      name: "Naam", phone: "Phone", email: "Email", service: "Service", selectService: "Service chuno",
      location: "Location (Sirf Delhi NCR)", selectLocation: "Apna area chuno",
      message: "Message", sendWhatsApp: "WhatsApp pe Bhejo",
      namePlaceholder: "Aapka pura naam", phonePlaceholder: "+91 98765 43210",
      emailPlaceholder: "you@example.com", messagePlaceholder: "Apne project ya requirements batao...",
      locationError: "Hum abhi sirf Delhi NCR areas mein service dete hain.",
      fillError: "Please naam, phone, service aur location bharo.",
      redirecting: "WhatsApp pe redirect ho raha hai...",
    },
    contact: { label: "Sampark Karo", title: "Humse Contact Karo", callUs: "Call Karo", directCall: "Seedha phone call", whatsapp: "WhatsApp", messageAnytime: "Kabhi bhi message karo", chatNow: "Abhi Chat Karo", visitUs: "Humse Milo", hours: "Mon – Sat: Subah 8:00 – Shaam 7:00", sunClosed: "Sun: Band" },
    footer: { rights: "Sab rights reserved." },
    serviceNames: {
      mig: { title: "MIG Welding", description: "Steel aur aluminum pe fast, clean joins ke liye Metal Inert Gas welding." },
      tig: { title: "TIG Welding", description: "Patli metals aur alloys pe precision kaam ke liye Tungsten Inert Gas welding." },
      arc: { title: "Arc Welding", description: "Shielded Metal Arc Welding — bhari structures ke liye versatile aur cost-effective." },
      spot: { title: "Spot Welding", description: "Sheet metal joints aur automotive repair ke liye resistance spot welding." },
      pipe: { title: "Pipe Welding", description: "Industrial projects ke liye specialized pipeline aur structural pipe welding." },
      custom: { title: "Custom Fabrication", description: "Special metal fabrication — gates, railings, frames, aur custom designs." },
    },
    reviewData: [
      { name: "Rajesh Kumar", role: "Factory Owner", text: "WELDCRAFT ne humari factory pipeline pe zabardast kaam kiya. TIG welding bilkul perfect thi aur time se pehle complete ho gayi. Highly recommended!" },
      { name: "Priya Sharma", role: "Homeowner", text: "Custom iron gates aur railings banwaye. Craftsmanship beautiful hai aur team bahut professional thi. Fair pricing bhi!" },
      { name: "Amit Patel", role: "Construction Manager", text: "Humne kaafi commercial projects ke liye WELDCRAFT use kiya hai. Consistent quality aur wo hamesha deadlines meet karte hain." },
      { name: "Sunita Verma", role: "Business Owner", text: "Humare automotive parts ke liye excellent spot welding. Precision aur finish quality humari expectations se zyada thi!" },
      { name: "Vikram Singh", role: "Contractor", text: "Area mein sabse achi MIG welding service. Professional team, clean kaam, aur bahut reasonable rates." },
      { name: "Deepa Nair", role: "Interior Designer", text: "Custom metal furniture fabrication bahut sundar tarike se kiya gaya. Team ne mera design vision samjha aur exactly wahi deliver kiya." },
    ],
    delhiNCR: ["New Delhi", "Noida", "Greater Noida", "Gurgaon (Gurugram)", "Faridabad", "Ghaziabad", "Dwarka", "Rohini", "Laxmi Nagar", "Saket", "Janakpuri", "Nehru Place"],
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
  t: translations.en,
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
