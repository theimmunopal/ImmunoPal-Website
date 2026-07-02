import { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Sun, ShieldCheck, Heart, Leaf, HelpCircle, Check } from 'lucide-react';
import { INGREDIENTS, IMAGES } from '../data';

export default function IngredientsView() {
  const [selectedIngredient, setSelectedIngredient] = useState<string>('elderberry');

  const currentIngredient = INGREDIENTS.find((ing) => ing.id === selectedIngredient) || INGREDIENTS[0];

  // Helper to map icon names to actual Lucide component icons
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-5 h-5" />;
      case 'Sun':
        return <Sun className="w-5 h-5" />;
      case 'Shield':
        return <ShieldCheck className="w-5 h-5" />;
      case 'Heart':
        return <Heart className="w-5 h-5" />;
      default:
        return <Leaf className="w-5 h-5" />;
    }
  };

  return (
    <div id="ingredients-view-container" className="pt-24 pb-20">
      {/* 1. Introductory Hero */}
      <section className="py-16 md:py-24 hero-gradient text-center">
        <div className="max-w-3xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#3AA76D]/10 text-[#3AA76D] mb-6">
            <Sparkles className="w-4 h-4 text-emerald" />
            <span className="font-sans font-extrabold text-[11px] uppercase tracking-wide">
              Pure Botanical Sourcing
            </span>
          </div>
          <h1 className="font-sans font-extrabold text-5xl sm:text-7xl lg:text-8xl text-navy tracking-tighter leading-[0.9] mb-6">
            Four Clean Ingredients. <br />
            <span className="text-emerald">Zero Complicated Jargon.</span>
          </h1>
          <p className="font-sans text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
            We believe you should understand exactly what you are putting in your body. We source clean, natural ingredients and describe them in everyday, honest language.
          </p>
        </div>
      </section>

      {/* 2. Interactive Ingredients Map Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Selection Cards Column (lg:col-span-5) */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <h3 className="font-sans font-extrabold text-sm uppercase tracking-wider text-navy/40 mb-2 text-left">
                Select an Ingredient
              </h3>
              <div className="flex flex-col gap-3">
                {INGREDIENTS.map((ing) => {
                  const isSelected = selectedIngredient === ing.id;
                  return (
                    <button
                      key={ing.id}
                      onClick={() => setSelectedIngredient(ing.id)}
                      className={`w-full p-5 rounded-[20px] border text-left transition-all flex items-center justify-between cursor-pointer focus:outline-none ${
                        isSelected
                          ? 'border-emerald bg-[#F7F9FC] shadow-soft'
                          : 'border-navy/5 bg-white hover:bg-surface hover:border-navy/15'
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                            isSelected ? 'bg-emerald text-white shadow-md' : 'bg-white text-navy border border-navy/5'
                          }`}
                        >
                          {getIcon(ing.iconName)}
                        </div>
                        <div>
                          <h4 className="font-sans font-extrabold text-sm sm:text-base text-navy leading-none">
                            {ing.name}
                          </h4>
                          <span className="font-sans text-[10px] text-navy/50 block mt-1">
                            {ing.benefit}
                          </span>
                        </div>
                      </div>
                      <span className={`text-xs font-bold font-sans transition-colors ${
                        isSelected ? 'text-emerald' : 'text-navy/30'
                      }`}>
                        {isSelected ? 'Viewing' : 'Details →'}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Trust Badge Banner below list */}
              <div className="border border-white rounded-[28px] p-6 bg-[#F7F9FC] text-left mt-4 shadow-soft">
                <div className="flex items-center gap-2 mb-2">
                  <Leaf className="w-5 h-5 text-emerald" />
                  <span className="font-sans font-extrabold text-xs text-navy uppercase tracking-wide">Quality Checked</span>
                </div>
                <p className="font-sans text-xs text-slate-500 leading-relaxed">
                  Every batch of ingredients undergoes microscopic verification to guarantee authenticity, active botanical values, and zero synthetic residue.
                </p>
              </div>
            </div>

            {/* Right Detailed Profile Column (lg:col-span-7) */}
            <div className="lg:col-span-7 bg-[#F7F9FC] rounded-[28px] p-6 sm:p-8 border border-white text-left shadow-soft">
              <motion.div
                key={currentIngredient.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col h-full justify-between"
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-4 border-b border-navy/10 pb-5 mb-6">
                    <div>
                      <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-navy">
                        {currentIngredient.name}
                      </h2>
                      {currentIngredient.scientificName && (
                        <p className="font-sans text-xs text-navy/50 italic mt-1 font-mono">
                          Botanical: {currentIngredient.scientificName}
                        </p>
                      )}
                    </div>
                    <span className="font-sans font-extrabold text-xs text-emerald bg-[#3AA76D]/10 border border-emerald/15 px-3 py-1.5 rounded-full">
                      {currentIngredient.benefit}
                    </span>
                  </div>

                  <p className="font-sans text-sm sm:text-base text-slate-500 leading-relaxed mb-8">
                    {currentIngredient.description}
                  </p>

                  <h3 className="font-sans font-extrabold text-xs text-navy uppercase tracking-wider mb-4">
                    Why We Use It & How It Works
                  </h3>

                  <ul className="flex flex-col gap-3.5 mb-8">
                    {currentIngredient.fullDetails.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-500 leading-relaxed">
                        <div className="w-5 h-5 rounded-full bg-[#3AA76D]/10 flex items-center justify-center text-emerald shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span className="font-sans font-semibold">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Sourcing compliance footnote */}
                <div className="border-t border-navy/10 pt-5 text-[10px] text-navy/40 leading-relaxed flex items-start gap-2.5">
                  <HelpCircle className="w-4 h-4 text-navy/30 shrink-0 mt-0.5" />
                  <span>
                    Our {currentIngredient.name} is processed under premium standards to preserve botanical cellular integrity. Sourced with care, it supports everyday lifestyle wellness. These statements have not been evaluated by the FDA.
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Dynamic Ingredient Flatlay Collage Banner */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative rounded-[32px] overflow-hidden shadow-md max-h-[360px] md:max-h-[420px] flex items-center">
            <img
              src={IMAGES.ingredientsFlatlay}
              alt="ImmunoPal Natural Ingredients Flat-lay"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            {/* Dark gradient blur covering right or bottom part */}
            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-navy/90 via-navy/60 to-transparent flex flex-col justify-end md:justify-center items-start p-8 sm:p-12 text-left">
              <div className="max-w-md z-10 text-white">
                <span className="font-sans text-[10px] uppercase tracking-widest text-sky font-bold block mb-2">
                  Our Formulation Standard
                </span>
                <h3 className="font-sans font-extrabold text-xl sm:text-2xl mb-3 leading-tight">
                  Only the cleanest natural nutrients.
                </h3>
                <p className="font-sans text-xs text-white/70 leading-relaxed mb-1 font-semibold">
                  • 100% Vegan & Pectin-based
                </p>
                <p className="font-sans text-xs text-white/70 leading-relaxed mb-1 font-semibold">
                  • Gelatin-Free (Chews beautifully)
                </p>
                <p className="font-sans text-xs text-white/70 leading-relaxed mb-1 font-semibold">
                  • No Artificial Syrups or Binders
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
