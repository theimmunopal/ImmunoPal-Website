import { motion } from 'motion/react';
import {
  ArrowRight,
  Star,
  ShieldCheck,
  Check,
  Sparkles,
  Sun,
  Heart,
  TrendingUp,
  ShoppingBag,
  ExternalLink,
  ChevronDown,
} from 'lucide-react';
import { IMAGES, INGREDIENTS, REVIEWS, FAQS } from '../data';
import { useState } from 'react';

interface HomeViewProps {
  onNavigate: (pageId: string) => void;
}

export default function HomeView({ onNavigate }: HomeViewProps) {
  const [openFaq, setOpenFaq] = useState<string | null>('faq-1');

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <div id="home-view-container" className="pt-24 overflow-x-hidden">
      {/* 1. Hero Section */}
      <section id="home-hero" className="relative py-16 md:py-28 hero-gradient">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Hero Left Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#3AA76D]/10 text-[#3AA76D] mb-6"
            >
              <Sparkles className="w-4 h-4 text-emerald" />
              <span className="font-sans font-extrabold text-[11px] uppercase tracking-wide">
                Available on Amazon Prime
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-sans font-extrabold text-5xl sm:text-7xl lg:text-[80px] text-navy tracking-tighter leading-[0.9] mb-6"
            >
              Feel Your <span className="text-emerald">Best</span> <br /> Every Day.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-sans text-xl text-slate-500 max-w-lg leading-relaxed mb-8"
            >
              Premium, daily immune support gummies crafted for modern routines. Simplified wellness that works as hard as you do.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <a
                href="https://www.amazon.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 bg-[#3AA76D] text-white px-8 py-4 rounded-[20px] font-bold text-lg shadow-lg hover:shadow-emerald-200 transition-all duration-300 transform hover:-translate-y-1"
              >
                <ShoppingBag className="w-5 h-5" />
                <span>Shop on Amazon</span>
                <ExternalLink className="w-4 h-4 text-white/80" />
              </a>
              <button
                onClick={() => onNavigate('products')}
                className="flex items-center justify-center gap-2 border-2 border-slate-100 px-8 py-4 rounded-[20px] font-bold text-lg hover:bg-slate-50 transition-all duration-300 cursor-pointer"
              >
                <span>Learn More</span>
                <ArrowRight className="w-5 h-5 text-emerald" />
              </button>
            </motion.div>

            {/* Quick trust metrics */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap gap-6 items-center mt-12 pt-8 border-t border-navy/5 text-xs text-navy/60"
            >
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4.5 h-4.5 text-emerald" />
                <span>100% Gelatin-Free Pectin</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Star className="w-4.5 h-4.5 text-sky" />
                <span>4.9/5 Star Customer Rating</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-4.5 h-4.5 text-emerald" />
                <span>Sells Exclusively on Amazon</span>
              </div>
            </motion.div>
          </div>

          {/* Hero Right Visual Column */}
          <div className="lg:col-span-5 relative py-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative mx-auto max-w-[340px] sm:max-w-[400px] lg:max-w-none"
            >
              {/* Background gradient blur */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-sky/25 via-emerald/15 to-transparent rounded-full blur-3xl opacity-80 -z-10" />

              {/* Main premium bottle mockup */}
              <div className="rounded-[32px] p-2 bg-gradient-to-tr from-white to-surface shadow-2xl overflow-hidden border border-white/40 transform rotate-3 scale-110">
                <img
                  src={IMAGES.productMockup}
                  alt="ImmunoPal Daily Immune Support Gummies bottle mockup"
                  className="w-full h-auto rounded-[24px] object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Floating Badge 1 - Antioxidants */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute -right-4 top-1/4 glass p-4 rounded-2xl shadow-lg flex items-center gap-3 z-20"
              >
                <div className="w-9 h-9 rounded-xl bg-sky/20 flex items-center justify-center text-navy">
                  <Sun className="w-5 h-5 text-navy" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-xs text-navy leading-none">Antioxidant Guard</h4>
                  <p className="font-sans text-[10px] text-navy/60 mt-1">High-potency Vitamin C & Zinc</p>
                </div>
              </motion.div>

              {/* Floating Badge 2 - Prebiotics */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="absolute -left-6 bottom-1/4 glass p-4 rounded-2xl shadow-lg flex items-center gap-3 z-20"
              >
                <div className="w-9 h-9 rounded-xl bg-emerald/15 flex items-center justify-center text-emerald">
                  <Heart className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-xs text-navy leading-none">Prebiotic Powered</h4>
                  <p className="font-sans text-[10px] text-navy/60 mt-1">Larch Laricina Microbiome Care</p>
                </div>
              </motion.div>

              {/* Floating Star Rating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, rotate: -4 }}
                animate={{ opacity: 1, scale: 1, rotate: -2 }}
                transition={{ duration: 0.7, delay: 0.8 }}
                className="absolute -bottom-4 right-4 sm:right-10 glass p-5 rounded-[24px] shadow-soft flex items-center gap-4 z-20"
              >
                <div className="w-10 h-10 bg-emerald rounded-full flex items-center justify-center text-white font-bold text-lg">
                  ★
                </div>
                <div className="text-left">
                  <div className="font-bold text-sm text-navy">4.9/5 Rating</div>
                  <div className="text-xs text-slate-400">12k+ Happy Customers</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Bento Grid: Why Choose ImmunoPal */}
      <section id="why-choose" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="max-w-2xl mx-auto mb-16">
            <span className="font-sans text-[11px] uppercase tracking-wide text-emerald font-extrabold block mb-3">
              Crafted with Care
            </span>
            <h2 className="font-sans font-extrabold text-4xl sm:text-5xl text-navy tracking-tighter leading-tight">
              A Premium Standard in Everyday Supplements
            </h2>
            <p className="font-sans text-slate-500 text-base sm:text-lg mt-4">
              We designed ImmunoPal with absolute transparency, omitting heavy artificial syrups and binders in favor of optimized nutrition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Bento Card 1 */}
            <div className="bg-[#F7F9FC] p-8 rounded-[28px] shadow-soft border border-white hover:border-emerald-200 transition-colors group flex flex-col text-left justify-between min-h-[300px]">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shadow-sm">
                <Sparkles className="w-6 h-6 text-emerald" />
              </div>
              <div>
                <h3 className="font-sans font-extrabold text-xl text-navy mb-2">Optimized Formula</h3>
                <p className="font-sans text-sm text-slate-500 leading-relaxed">
                  We blend high-concentration black elderberry extract with biological Vitamin C and vital Zinc, creating a powerful antioxidant routine.
                </p>
              </div>
            </div>

            {/* Bento Card 2 */}
            <div className="bg-[#F7F9FC] p-8 rounded-[28px] shadow-soft border border-white hover:border-emerald-200 transition-colors group flex flex-col text-left justify-between min-h-[300px]">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shadow-sm">
                <Heart className="w-6 h-6 text-emerald" />
              </div>
              <div>
                <h3 className="font-sans font-extrabold text-xl text-navy mb-2">Gut-Defensive Base</h3>
                <p className="font-sans text-sm text-slate-500 leading-relaxed">
                  Featuring Larch Laricina prebiotic isolate, our gummies help nurture your natural gut microbiome. Truly supportive wellness starts inside.
                </p>
              </div>
            </div>

            {/* Bento Card 3 */}
            <div className="bg-[#F7F9FC] p-8 rounded-[28px] shadow-soft border border-white hover:border-emerald-200 transition-colors group flex flex-col text-left justify-between min-h-[300px]">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shadow-sm">
                <ShieldCheck className="w-6 h-6 text-emerald" />
              </div>
              <div>
                <h3 className="font-sans font-extrabold text-xl text-navy mb-2">Sourcing Transparency</h3>
                <p className="font-sans text-sm text-slate-500 leading-relaxed">
                  We never rely on artificial colors, gelatin, or high-fructose corn syrup. We process clean, plant-based pectin with extreme precision and care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Lifestyle Narrative Section */}
      <section id="lifestyle-narrative" className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Narrative Image (16:9 lifestyle hero generated) */}
          <div className="lg:col-span-6 relative">
            <div className="rounded-[32px] overflow-hidden shadow-xl border border-white">
              <img
                src={IMAGES.lifestyleHero}
                alt="A person enjoying a healthy, active morning"
                className="w-full h-auto object-cover hover:scale-102 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Overlapping badge */}
            <div className="absolute -bottom-6 -right-4 glass px-6 py-4 rounded-[24px] shadow-soft max-w-xs hidden sm:block">
              <p className="font-sans font-semibold text-xs text-navy leading-relaxed">
                "Incorporating ImmunoPal into my daily routine has made consistent wellness effortless."
              </p>
              <span className="text-[10px] text-emerald font-extrabold mt-2 block">— Amazon Customer</span>
            </div>
          </div>

          {/* Narrative Content */}
          <div className="lg:col-span-6 flex flex-col items-start text-left lg:pl-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#3AA76D]/10 text-[#3AA76D] mb-4">
              <Sparkles className="w-4 h-4 text-emerald" />
              <span className="font-sans font-extrabold text-[11px] uppercase tracking-wide">
                Simple Routines, Profound Balance
              </span>
            </div>
            <h2 className="font-sans font-extrabold text-4xl sm:text-5xl text-navy tracking-tighter leading-tight mb-6">
              Designed for Your Everyday Routine
            </h2>
            <p className="font-sans text-slate-500 text-base leading-relaxed mb-6">
              True strength isn't built overnight—it is nurtured through everyday habits. At ImmunoPal, we believe dietary supplements shouldn't feel medical or clinical. They should be a simple, delicious addition to your breakfast table.
            </p>
            <p className="font-sans text-slate-500 text-base leading-relaxed mb-8">
              That's why we crafted our gummies with a juicy, natural berry flavor. No artificial aftertaste, no heavy chewiness. Just pure, plant-enhanced defense that fits seamlessly into your wellness journey.
            </p>
            <button
              onClick={() => onNavigate('about')}
              className="flex items-center justify-center gap-2 bg-[#123A63] text-white px-8 py-4 rounded-[20px] font-bold text-lg hover:bg-opacity-95 transition-all duration-300 cursor-pointer"
            >
              <span>Our Story & Sourcing Philosophy</span>
              <ArrowRight className="w-5 h-5 text-sky" />
            </button>
          </div>
        </div>
      </section>

      {/* 4. Core Benefits Grid */}
      <section id="benefits" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#3AA76D]/10 text-[#3AA76D] mb-4">
              <Sparkles className="w-4 h-4 text-emerald" />
              <span className="font-sans font-extrabold text-[11px] uppercase tracking-wide">
                Clean Ingredients, Real Trust
              </span>
            </div>
            <h2 className="font-sans font-extrabold text-4xl sm:text-5xl text-navy tracking-tighter leading-tight">
              Pure Botanicals. Zero Binders.
            </h2>
            <p className="font-sans text-slate-500 text-base mt-4">
              We create products with care. We intentionally omitted the fillers commonly found in mass-market supplements.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'High-Strength Elderberry',
                desc: 'Concentrated Sambucus nigra L. black elderberry for elite cellular defense.',
                icon: Sparkles,
                bg: 'bg-navy/5',
                color: 'text-navy',
              },
              {
                title: 'Prebiotic Arabinogalactan',
                desc: 'Premium Larch fiber that nourishes the microbiome and gut harmony.',
                icon: Heart,
                bg: 'bg-emerald/5',
                color: 'text-emerald',
              },
              {
                title: 'No Added Artificials',
                desc: 'Pectin-based gummy matrix free of gelatin, corn syrup, or synthetic dyes.',
                icon: ShieldCheck,
                bg: 'bg-sky/10',
                color: 'text-navy',
              },
              {
                title: 'Antioxidant Double Action',
                desc: 'A robust clinical pairing of pure ascorbic acid Vitamin C and cellular Zinc.',
                icon: Sun,
                bg: 'bg-surface',
                color: 'text-emerald',
              },
            ].map((benefit, i) => (
              <div key={i} className="bg-[#F7F9FC] p-8 rounded-[28px] border border-white hover:border-emerald-200 shadow-soft hover:shadow-md transition-all duration-300 flex flex-col items-start group">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                  <benefit.icon className="w-6 h-6 text-emerald" />
                </div>
                <h3 className="font-sans font-extrabold text-lg text-navy mb-2">{benefit.title}</h3>
                <p className="font-sans text-sm text-slate-500 leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Customer Testimonials */}
      <section id="reviews" className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-4">
            <div className="text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#3AA76D]/10 text-[#3AA76D] mb-4">
                <Sparkles className="w-4 h-4 text-emerald" />
                <span className="font-sans font-extrabold text-[11px] uppercase tracking-wide">
                  Verified Customer Reviews
                </span>
              </div>
              <h2 className="font-sans font-extrabold text-4xl sm:text-5xl text-navy tracking-tighter leading-tight">
                Highly Rated on Amazon
              </h2>
            </div>
            <div className="flex items-center gap-1 bg-white px-4 py-2 rounded-xl border border-navy/5 shadow-sm">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="font-sans font-extrabold text-xs text-navy ml-1">4.9 out of 5</span>
              <span className="font-sans text-xs text-navy/50 ml-1">(142 verified reviews)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {REVIEWS.map((review) => (
              <div key={review.id} className="bg-white p-8 rounded-[28px] border border-white hover:border-emerald-200 shadow-soft hover:shadow-md transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1 text-amber-400 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <h4 className="font-sans font-extrabold text-base text-navy mb-2">"{review.title}"</h4>
                  <p className="font-sans text-sm text-slate-500 leading-relaxed mb-6">
                    {review.comment}
                  </p>
                </div>
                <div className="flex items-center justify-between border-t border-navy/5 pt-4 text-[11px]">
                  <div>
                    <span className="font-sans font-extrabold text-navy block">{review.author}</span>
                    <span className="font-sans text-navy/40 block mt-0.5">{review.date}</span>
                  </div>
                  {review.verified && (
                    <span className="inline-flex items-center gap-1 text-emerald font-semibold">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>Verified</span>
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Amazon purchase link banner */}
          <div className="mt-12 text-center">
            <p className="font-sans text-xs text-navy/50">
              Reviews compiled directly from our verified Amazon customers. Our products are shipped with care by Amazon.
            </p>
          </div>
        </div>
      </section>

      {/* 6. FAQ Preview */}
      <section id="faq-preview" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#3AA76D]/10 text-[#3AA76D] mb-4">
              <Sparkles className="w-4 h-4 text-emerald" />
              <span className="font-sans font-extrabold text-[11px] uppercase tracking-wide">
                Common Queries
              </span>
            </div>
            <h2 className="font-sans font-extrabold text-4xl sm:text-5xl text-navy tracking-tighter leading-tight">
              Frequently Asked Questions
            </h2>
            <p className="font-sans text-slate-500 text-base mt-2">
              Have questions about ImmunoPal Daily Gummies? We have compiled the answers to your top inquiries.
            </p>
          </div>

          <div className="text-left flex flex-col gap-4 mb-10">
            {FAQS.slice(0, 3).map((faq) => {
              const isOpen = openFaq === faq.id;
              return (
                <div
                  key={faq.id}
                  className="border border-navy/5 rounded-[20px] bg-[#F7F9FC] overflow-hidden transition-all duration-300 hover:border-emerald/25"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full flex items-center justify-between p-6 text-left cursor-pointer focus:outline-none"
                  >
                    <span className="font-sans font-extrabold text-navy text-sm sm:text-base pr-4">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-navy/40 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-emerald' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 animate-slide-down">
                      <p className="font-sans text-xs sm:text-sm text-slate-500 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <button
            onClick={() => onNavigate('products')}
            className="inline-flex items-center gap-1.5 font-sans font-bold text-sm text-emerald hover:text-emerald-dark transition-colors cursor-pointer"
          >
            <span>View all FAQs on the Products page</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* 7. Final Call-To-Action (CTA) */}
      <section id="final-cta" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative rounded-[32px] overflow-hidden bg-gradient-to-tr from-navy to-navy-dark text-white p-8 md:p-16 text-center shadow-xl">
            {/* Ambient visual overlay */}
            <div className="absolute -top-1/2 left-1/4 w-[400px] h-[400px] bg-sky/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-1/2 right-1/4 w-[400px] h-[400px] bg-emerald/15 rounded-full blur-3xl" />

            <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
              <span className="font-sans text-[11px] uppercase tracking-widest text-sky font-bold block mb-4">
                Amazon Exclusive Launch
              </span>
              <h2 className="font-sans font-extrabold text-4xl sm:text-6xl text-white tracking-tighter leading-none mb-6">
                Ready to Upgrade Your Wellness Routine?
              </h2>
              <p className="font-sans text-white/70 text-sm sm:text-base md:text-lg mb-10 leading-relaxed">
                Add ImmunoPal Daily Immune Support Gummies to your everyday schedule. Experience the elite combination of Elderberry, Prebiotics, and essential Vitamin C & Zinc today.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full sm:w-auto">
                <a
                  href="https://www.amazon.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#3AA76D] hover:bg-emerald-light text-white px-8 py-4 rounded-[20px] font-bold text-lg shadow-lg hover:shadow-emerald-200 hover:-translate-y-1 transition-all duration-300"
                >
                  <ShoppingBag className="w-5 h-5" />
                  <span>Shop Now on Amazon</span>
                  <ExternalLink className="w-3.5 h-3.5 text-white/80" />
                </a>
                <button
                  onClick={() => onNavigate('contact')}
                  className="w-full sm:w-auto flex items-center justify-center border-2 border-white/20 hover:border-white text-white bg-white/5 px-8 py-4 rounded-[20px] font-bold text-lg transition-colors cursor-pointer"
                >
                  <span>Have a question? Contact support</span>
                </button>
              </div>

              <div className="mt-8 flex flex-wrap gap-4 justify-center text-xs text-white/40">
                <span>✓ Sells on Amazon</span>
                <span>•</span>
                <span>✓ Eligible for Amazon Prime</span>
                <span>•</span>
                <span>✓ Pectin Formula (Gelatin-Free)</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
