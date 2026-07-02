import { useState } from 'react';
import { motion } from 'motion/react';
import {
  Star,
  ShoppingBag,
  ExternalLink,
  ShieldCheck,
  Check,
  Award,
  BookOpen,
  HelpCircle,
  ChevronDown,
  Sparkles,
} from 'lucide-react';
import { PRODUCTS, REVIEWS, FAQS, INGREDIENTS } from '../data';

interface ProductsViewProps {
  onNavigate: (pageId: string) => void;
}

export default function ProductsView({ onNavigate }: ProductsViewProps) {
  const product = PRODUCTS[0]; // Featured ImmunoPal Gummies
  const [activeTab, setActiveTab] = useState<'benefits' | 'directions' | 'reviews'>('benefits');
  const [openFaq, setOpenFaq] = useState<string | null>('faq-1');

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <div id="products-view-container" className="pt-24 pb-20">
      {/* 1. Main Product Showcase Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Product Media - Left Column (lg:col-span-6) */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            {/* Main Product Mockup Card */}
            <div className="rounded-[32px] overflow-hidden bg-surface p-4 border border-navy/5 shadow-md relative">
              <img
                src={product.images.mockup}
                alt={product.name}
                className="w-full h-auto rounded-[24px] object-cover hover:scale-101 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <span className="absolute top-8 left-8 bg-navy text-white text-[10px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-sm">
                Amazon Exclusive
              </span>
            </div>

            {/* Ingrdients Flatlay Secondary Thumbnail */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden bg-surface p-3 border border-navy/5 flex flex-col gap-2">
                <img
                  src={product.images.flatlay}
                  alt="ImmunoPal natural botanical flatlay"
                  className="w-full h-36 object-cover rounded-xl"
                  referrerPolicy="no-referrer"
                />
                <span className="font-sans font-bold text-[10px] text-navy/70 text-center block">
                  Natural Plant Sourcing
                </span>
              </div>
              <div className="border border-navy/10 rounded-2xl p-5 flex flex-col justify-center text-left bg-surface/40">
                <div className="flex items-center gap-2 mb-2">
                  <Award className="w-5 h-5 text-emerald" />
                  <span className="font-sans font-bold text-xs text-navy uppercase tracking-wider">Quality Guarantee</span>
                </div>
                <p className="font-sans text-[11px] text-navy/60 leading-relaxed">
                  Third-party verified for heavy metals, purity, and formulation precision. Gelatin-free and gluten-free.
                </p>
              </div>
            </div>
          </div>

          {/* Product Purchasing Info - Right Column (lg:col-span-6) */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <div className="flex items-center gap-1.5 mb-2.5">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#3AA76D]/10 text-[#3AA76D]">
                <Sparkles className="w-3.5 h-3.5 text-emerald" />
                <span className="font-sans font-extrabold text-[10px] uppercase tracking-wide">
                  Active Dietary Supplement
                </span>
              </div>
              <div className="flex items-center gap-1 text-amber-400 pl-2">
                <Star className="w-4 h-4 fill-current" />
                <span className="font-sans font-extrabold text-xs text-navy">{product.rating}</span>
                <span className="font-sans text-xs text-navy/40">({product.reviewsCount} reviews)</span>
              </div>
            </div>

            <h1 className="font-sans font-extrabold text-4xl sm:text-5xl lg:text-6xl text-navy tracking-tighter leading-none mb-4">
              {product.name}
            </h1>

            <p className="font-sans font-extrabold text-emerald text-2xl sm:text-3xl mb-6">
              {product.price}
              <span className="text-xs text-navy/50 font-normal ml-2">Sells exclusively on Amazon</span>
            </p>

            <p className="font-sans text-slate-500 text-sm sm:text-base leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Interactive Tabs (Benefits / Directions / Reviews) */}
            <div className="w-full border-b border-navy/10 mb-6 flex gap-6">
              {[
                { id: 'benefits', label: 'Key Benefits' },
                { id: 'directions', label: 'How to Use' },
                { id: 'reviews', label: 'Customer Reviews' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`pb-3 font-sans font-extrabold text-base transition-all relative cursor-pointer focus:outline-none ${
                    activeTab === tab.id ? 'text-navy' : 'text-navy/40 hover:text-navy/70'
                  }`}
                >
                  {tab.label}
                  {activeTab === tab.id && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald rounded-full" />
                  )}
                </button>
              ))}
            </div>

            {/* Tab Contents */}
            <div className="w-full min-h-[160px] mb-8">
              {activeTab === 'benefits' && (
                <ul className="flex flex-col gap-3">
                  {product.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-navy/80">
                      <div className="w-5 h-5 rounded-full bg-emerald/10 flex items-center justify-center text-emerald mt-0.5 shrink-0">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span className="font-sans font-semibold text-slate-500">{benefit}</span>
                    </li>
                  ))}
                </ul>
              )}

              {activeTab === 'directions' && (
                <div className="bg-[#F7F9FC] rounded-[24px] p-6 border border-white shadow-soft">
                  <div className="flex items-center gap-2 mb-3">
                    <BookOpen className="w-5 h-5 text-[#3AA76D]" />
                    <span className="font-sans font-extrabold text-xs uppercase tracking-wide text-navy">Directions for Everyday Routines</span>
                  </div>
                  <p className="font-sans text-sm text-slate-500 leading-relaxed">
                    {product.directions}
                  </p>
                  <p className="font-sans text-[10px] text-navy/40 mt-3 italic leading-normal">
                    Store in a cool, dry place away from direct sunlight. Ensure cap is closed tightly after opening. Keep out of reach of children.
                  </p>
                </div>
              )}

              {activeTab === 'reviews' && (
                <div className="flex flex-col gap-4">
                  {REVIEWS.slice(0, 2).map((rev) => (
                    <div key={rev.id} className="border-b border-navy/5 pb-4 last:border-0">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-sans font-extrabold text-xs text-navy">{rev.author}</span>
                        <div className="flex text-amber-400">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 fill-current" />
                          ))}
                        </div>
                      </div>
                      <p className="font-sans font-extrabold text-sm text-navy mb-1">"{rev.title}"</p>
                      <p className="font-sans text-xs text-slate-500 leading-relaxed">{rev.comment}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Direct Purchase Call to Action Card */}
            <div className="w-full bg-[#F7F9FC] rounded-[28px] p-6 border border-white shadow-soft flex flex-col gap-4">
              <a
                href={product.amazonUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-3 bg-[#3AA76D] hover:bg-emerald-light text-white font-sans font-extrabold text-lg py-4 rounded-[20px] shadow-lg hover:shadow-emerald-200 hover:-translate-y-0.5 transition-all duration-300"
              >
                <ShoppingBag className="w-5 h-5 text-white" />
                <span>Shop on Amazon Storefront</span>
                <ExternalLink className="w-4 h-4 text-white/80" />
              </a>

              <div className="flex items-center justify-center gap-6 text-[10px] sm:text-xs text-navy/60">
                <span className="flex items-center gap-1.5 font-bold">
                  <ShieldCheck className="w-4 h-4 text-emerald" />
                  <span>Amazon Prime Shipping</span>
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5 font-bold">
                  <Check className="w-4 h-4 text-emerald" />
                  <span>Hassle-Free Returns</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Interactive Ingredients Map Section */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#3AA76D]/10 text-[#3AA76D] mb-4">
              <Sparkles className="w-4 h-4 text-emerald" />
              <span className="font-sans font-extrabold text-[11px] uppercase tracking-wide">
                Ingredient Synergy
              </span>
            </div>
            <h2 className="font-sans font-extrabold text-4xl sm:text-5xl text-navy tracking-tighter leading-tight">
              Four Powerhouse Components
            </h2>
            <p className="font-sans text-slate-500 text-base mt-3">
              We selected simple, consumer-friendly botanical extracts and essential trace nutrients designed to support your daily wellness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {INGREDIENTS.map((ingredient) => (
              <div
                key={ingredient.id}
                className="bg-white p-8 rounded-[28px] border border-white flex flex-col items-center text-center justify-between shadow-soft hover:border-emerald-200 hover:shadow-md transition-all duration-300 group"
              >
                <div>
                  <span className="font-sans font-extrabold text-[10px] text-emerald bg-emerald/5 px-2.5 py-1 rounded-full uppercase tracking-wider block mb-4 self-center">
                    {ingredient.benefit}
                  </span>
                  <h3 className="font-sans font-extrabold text-lg text-navy mb-1">{ingredient.name}</h3>
                  {ingredient.scientificName && (
                    <p className="font-sans text-[10px] text-navy/40 italic mb-3">{ingredient.scientificName}</p>
                  )}
                  <p className="font-sans text-sm text-slate-500 leading-relaxed mb-6">
                    {ingredient.description}
                  </p>
                </div>
                <button
                  onClick={() => onNavigate('ingredients')}
                  className="text-xs font-extrabold text-navy hover:text-emerald transition-colors cursor-pointer"
                >
                  Learn sourcing &rarr;
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Dedicated Gummy FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#3AA76D]/10 text-[#3AA76D] mb-4">
              <HelpCircle className="w-4 h-4 text-emerald" />
              <span className="font-sans font-extrabold text-[11px] uppercase tracking-wide">
                Gummy FAQ
              </span>
            </div>
            <h2 className="font-sans font-extrabold text-4xl sm:text-5xl text-navy tracking-tighter leading-tight">
              Product FAQs & Support
            </h2>
            <p className="font-sans text-slate-500 text-base mt-2">
              Everything you need to know about starting your daily ImmunoPal routine.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {FAQS.map((faq) => {
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
                    <div>
                      <span className="text-[9px] font-bold text-emerald uppercase tracking-widest block mb-1">
                        {faq.category}
                      </span>
                      <span className="font-sans font-extrabold text-navy text-sm sm:text-base pr-4">
                        {faq.question}
                      </span>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-navy/40 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-emerald' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6">
                      <p className="font-sans text-xs sm:text-sm text-slate-500 leading-relaxed border-t border-navy/5 pt-4">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
