import { motion } from 'motion/react';
import { Shield, Sparkles, Heart, Check, HelpCircle } from 'lucide-react';

interface AboutViewProps {
  onNavigate: (pageId: string) => void;
}

export default function AboutView({ onNavigate }: AboutViewProps) {
  const brandPillars = [
    {
      title: 'Everyday Simplicity',
      description: 'Wellness shouldn\'t feel like a chore or a complex clinical routine. We design delicious, natural gummies that fit effortlessly next to your morning glass of water.',
      icon: Heart,
      color: 'text-emerald',
      bg: 'bg-emerald/5',
    },
    {
      title: 'Clean Transparency',
      description: 'We list every single ingredient on our label in plain language. No artificial syrups, no synthetic fillers, no mysterious binders—just pure nutritional integrity.',
      icon: Shield,
      color: 'text-navy',
      bg: 'bg-navy/5',
    },
    {
      title: 'Sourced with Care',
      description: 'We search for premium biological compounds. From our authentic Sambucus nigra L. black elderberries to our water-soluble prebiotic fiber, quality is our absolute blueprint.',
      icon: Sparkles,
      color: 'text-sky',
      bg: 'bg-sky/15',
    },
  ];

  return (
    <div id="about-view-container" className="pt-24 pb-20">
      {/* 1. Page Header Hero */}
      <section className="py-16 md:py-24 hero-gradient text-center">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#3AA76D]/10 text-[#3AA76D] mb-6"
          >
            <Sparkles className="w-4 h-4 text-emerald" />
            <span className="font-sans font-extrabold text-[11px] uppercase tracking-wide">
              Our Sourcing & Integrity Story
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-sans font-extrabold text-5xl sm:text-7xl lg:text-8xl text-navy tracking-tighter leading-[0.9] mb-6"
          >
            Nurturing Everyday Vitality, <br />
            <span className="text-emerald">One Gummy at a Time</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-sans text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto"
          >
            We founded ImmunoPal because we believed wellness supplements should look, taste, and feel premium—enhancing your everyday routines with natural harmony.
          </motion.p>
        </div>
      </section>

      {/* 2. Brand Story Block */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">
          {/* Story Text Left */}
          <div className="md:col-span-7 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#3AA76D]/10 text-[#3AA76D] mb-4">
              <Sparkles className="w-4 h-4 text-emerald" />
              <span className="font-sans font-extrabold text-[11px] uppercase tracking-wide">
                The Journey of ImmunoPal
              </span>
            </div>
            <h2 className="font-sans font-extrabold text-4xl sm:text-5xl text-navy tracking-tighter leading-tight mb-6">
              A Humble Approach to Premium Wellness
            </h2>
            <div className="font-sans text-slate-500 text-sm sm:text-base leading-relaxed flex flex-col gap-5">
              <p>
                ImmunoPal began in a simple sunlit kitchen. Like many busy families, we struggled to find dietary supplements that we actually trusted. The marketplace felt cluttered with two extremes: hyper-medicalized pills that felt intimidating, or cheap, sugar-packed gummies full of corn syrup and gelatin.
              </p>
              <p>
                We wanted a middle ground. An elegant, premium supplement designed for everyday routines. Something made with premium botanicals, clean mineral forms, and an advanced prebiotic base that treats your digestive health as the true gateway to wellness.
              </p>
              <p>
                Working alongside nutritionists and botanical experts, we spent over two years refining our formula. The result is the <strong>ImmunoPal Daily Immune Support Gummy</strong>—a delicious, organic berry flavored gummy formulated with pectin, Black Elderberry, Vitamin C, Zinc, and prebiotic Larch Laricina tree extract.
              </p>
            </div>
          </div>

          {/* Core Highlights Right */}
          <div className="md:col-span-5 bg-[#F7F9FC] rounded-[28px] p-8 border border-white shadow-soft flex flex-col gap-6 text-left group hover:border-emerald-200 transition-colors duration-300">
            <h3 className="font-sans font-extrabold text-xl text-navy border-b border-navy/10 pb-4">
              Our Core Promises
            </h3>
            <ul className="flex flex-col gap-4">
              {[
                'Crafted with premium plant extracts',
                'No high-fructose corn syrup',
                'Pectin-based, 100% Gelatin-Free',
                'Sourced and made with extreme care',
                'A simple addition to your wellness routine',
                'Distributed exclusively through Amazon'
              ].map((promise, index) => (
                <li key={index} className="flex items-start gap-3 text-xs text-navy/80">
                  <div className="w-5 h-5 rounded-full bg-emerald/10 flex items-center justify-center text-emerald shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </div>
                  <span className="font-sans font-semibold">{promise}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 3. Three Brand Pillars */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#3AA76D]/10 text-[#3AA76D] mb-4">
              <Sparkles className="w-4 h-4 text-emerald" />
              <span className="font-sans font-extrabold text-[11px] uppercase tracking-wide">
                How We Create
              </span>
            </div>
            <h2 className="font-sans font-extrabold text-4xl sm:text-5xl text-navy tracking-tighter leading-tight">
              Our Sourcing and Formulating Pillars
            </h2>
            <p className="font-sans text-slate-500 text-base mt-3">
              We stand by our formulations and believe our customer-first philosophy drives true quality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {brandPillars.map((pillar, i) => (
              <div key={i} className="bg-white p-8 rounded-[28px] border border-white hover:border-emerald-200 shadow-soft hover:shadow-md transition-all duration-300 flex flex-col text-left group">
                <div className="w-12 h-12 bg-[#F7F9FC] rounded-2xl flex items-center justify-center mb-8 group-hover:scale-105 transition-transform shadow-sm">
                  <pillar.icon className={`w-6 h-6 ${pillar.color}`} />
                </div>
                <h3 className="font-sans font-extrabold text-xl text-navy mb-3">{pillar.title}</h3>
                <p className="font-sans text-sm text-slate-500 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Customer Trust Philosophy */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-navy rounded-[32px] p-8 sm:p-12 text-white relative overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-sky/5 rounded-full blur-3xl" />
            <div className="relative z-10 flex flex-col items-center">
              <HelpCircle className="w-8 h-8 text-sky mb-4" />
              <h3 className="font-sans font-extrabold text-2xl sm:text-3xl mb-4">
                Have questions about our quality?
              </h3>
              <p className="font-sans text-white/70 text-xs sm:text-sm max-w-xl mb-8 leading-relaxed">
                We believe in complete transparency. If you want to learn more about our specific ingredient sources, raw materials processing, or how to order via Amazon Prime, feel free to contact us anytime. Our support representatives typically respond within 24 hours.
              </p>
              <button
                onClick={() => onNavigate('contact')}
                className="bg-white hover:bg-sky text-navy hover:text-navy-dark px-8 py-4 rounded-[20px] font-bold text-lg shadow-md transition-all duration-300 cursor-pointer"
              >
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
