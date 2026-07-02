import { Ingredient, Product, JournalPost, Review, FAQItem } from './types';

// Let's import our custom generated images
// Note: We use relative paths in imports, which Vite resolves.
// @ts-ignore
import productMockup from './assets/images/immunopal_product_mockup_1783028435073.jpg';
// @ts-ignore
import lifestyleHero from './assets/images/immunopal_lifestyle_hero_1783028448560.jpg';
// @ts-ignore
import ingredientsFlatlay from './assets/images/immunopal_ingredients_flatlay_1783028459656.jpg';

export const IMAGES = {
  productMockup,
  lifestyleHero,
  ingredientsFlatlay,
};

export const INGREDIENTS: Ingredient[] = [
  {
    id: 'elderberry',
    name: 'Elderberry',
    scientificName: 'Sambucus nigra L.',
    benefit: 'Powerful Daily Defense',
    description: 'Traditionally celebrated for generations, these dark purple berries are packed with beneficial phytonutrients and antioxidants to support your natural vitality.',
    iconName: 'Sparkles',
    fullDetails: [
      'Sourced from selected Sambucus nigra L. black elderberry plants.',
      'Naturally rich in flavonoids, specifically anthocyanins, which give them their signature deep purple color.',
      'Supports your daily wellness routine and helps keep your natural body systems feeling strong.',
      'Gentle on the stomach and delightful to the taste buds.'
    ]
  },
  {
    id: 'vitamin-c',
    name: 'Vitamin C',
    benefit: 'Essential Everyday Support',
    description: 'A vital, water-soluble antioxidant that the body cannot produce on its own. Crafted to support healthy cell function and maintain seasonal strength.',
    iconName: 'Sun',
    fullDetails: [
      'A core foundational nutrient designed for everyday routines.',
      'Acts as a strong antioxidant, shielding your cells against daily environment factors.',
      'Plays an important role in skin wellness and collagen renewal.',
      'We use an optimized form of Vitamin C for premium digestibility.'
    ]
  },
  {
    id: 'zinc',
    name: 'Zinc',
    benefit: 'Foundational Mineral',
    description: 'An essential trace element involved in hundreds of natural enzyme processes. It acts as a reliable foundation to keep your cellular defense on track.',
    iconName: 'Shield',
    fullDetails: [
      'Crucial mineral catalyst that supports cellular replication and function.',
      'Works in harmony with Vitamin C to provide double-action daily support.',
      'Provides daily balance and helps keep your immune wellness steady year-round.',
      'Carefully dosed to provide nutritional completeness without overwhelm.'
    ]
  },
  {
    id: 'larch-laricina',
    name: 'Larch Laricina Isolate',
    scientificName: 'Larix laricina Isolate Prebiotic',
    benefit: 'Prebiotic Gut Harmony',
    description: 'A premium, water-soluble prebiotic fiber. By supporting your gut microbiome where most of your body\'s defense resides, it unlocks true holistic wellness.',
    iconName: 'Heart',
    fullDetails: [
      'An innovative prebiotic fiber extracted with care from the Larch tree.',
      'Enriches beneficial bacteria in the gut digestive system.',
      'Helps support metabolic health and steady nutrient absorption.',
      'Acts as the vital foundation of our formula—because a happy gut means a happy life.'
    ]
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'daily-immune-gummies',
    name: 'ImmunoPal Daily Immune Support Gummies',
    tagline: 'Feel Your Best Every Day',
    description: 'A simple, delicious addition to your wellness routine. Made with care and crafted with premium Elderberry, Vitamin C, Zinc, and Larch Laricina prebiotic fiber, these gummies are designed for everyday routines to help support your daily wellness.',
    price: '$24.99',
    rating: 4.9,
    reviewsCount: 142,
    amazonUrl: 'https://www.amazon.com', // Selling exclusively on Amazon
    ingredients: ['elderberry', 'vitamin-c', 'zinc', 'larch-laricina'],
    benefits: [
      'Supports your daily wellness and vitality',
      'Provides a rich source of antioxidants and essential minerals',
      'Delightful, natural berry flavor with no artificial sweeteners',
      'Prebiotic fiber base for gut-defense harmony',
      'Perfect for the whole family (ages 4+)'
    ],
    directions: 'Take two (2) gummies daily, or as recommended by a healthcare professional. Chew thoroughly before swallowing. Can be taken with or without food.',
    images: {
      mockup: productMockup,
      flatlay: ingredientsFlatlay
    }
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    author: 'Sarah M.',
    rating: 5,
    title: 'An absolute game-changer!',
    comment: 'These gummies are amazing! They taste incredible and fit perfectly into my morning routine. I love that they include Larch prebiotic fiber—my stomach feels great and I feel balanced every day.',
    date: 'June 18, 2026',
    verified: true
  },
  {
    id: 'rev-2',
    author: 'David L.',
    rating: 5,
    title: 'Cleanest ingredients I’ve found',
    comment: 'I spent hours looking for a supplement that didn’t contain artificial syrup or artificial colors. ImmunoPal uses high-quality ingredients like Larch prebiotics and organic elderberry. This is high-end wellness at its finest!',
    date: 'May 29, 2026',
    verified: true
  },
  {
    id: 'rev-3',
    author: 'Elena R.',
    rating: 5,
    title: 'Perfect for the whole family',
    comment: 'My kids actually look forward to taking these! They have a delicious, natural, juicy berry flavor. It’s a simple addition to our wellness routine that gives me complete peace of mind.',
    date: 'June 10, 2026',
    verified: true
  },
  {
    id: 'rev-4',
    author: 'James T.',
    rating: 5,
    title: 'Top-tier quality and design',
    comment: 'Everything from the bottle to the actual taste feels premium. I ordered mine through Amazon, and it arrived super fast. Strongly support this brand’s dedication to quality and transparency.',
    date: 'April 14, 2026',
    verified: true
  }
];

export const JOURNAL_POSTS: JournalPost[] = [
  {
    id: 'post-1',
    title: 'The Golden Hour: Creating an Intentional Morning Wellness Routine',
    excerpt: 'How you spend the first hour of your day sets the tone for your mind and body. Discover simple, small habits that yield profound everyday wellness.',
    content: `How you start your morning guides the course of your entire day. In our fast-paced world, it is easy to wake up, grab our phones, and immediately react to the demands of others. By creating an intentional "Golden Hour"—a small window of time dedicated purely to preparing your mind and body—you can invite stability and calm that lasts all day.

### 1. Rise with Light
Before checking any screens, open your blinds or step outside for a few minutes. Natural sunlight in the morning resets your circadian rhythm, signaling to your brain that it is time to wake up. This promotes natural daytime alertness and supports restful sleep when evening rolls around.

### 2. Hydrate & Nourish
Your body goes through hours of dehydration while you sleep. Before your first cup of coffee, drink a large glass of pure water. Follow this up with a simple addition to your wellness routine, like two ImmunoPal Daily Immune Support Gummies, providing your cells with essential antioxidants and foundational minerals first thing in the morning.

### 3. Move Mindfully
You do not need a strenuous workout to wake up your body. Spend five to ten minutes doing gentle stretches, a short walk, or simple deep breathing exercises. This improves circulation and oxygen flow, which naturally clears morning brain fog.

### 4. Set One Clear Intention
Instead of writing a massive, overwhelming to-do list, ask yourself: *"What is one way I want to show up for myself today?"* Whether it is staying patient during meetings or taking a true midday lunch break, keeping one simple intention at the front of your mind grounds your day in purpose.`,
    category: 'Healthy Habits',
    readTime: '4 min read',
    date: 'June 22, 2026',
    author: 'Maya Lin, Wellness Director'
  },
  {
    id: 'post-2',
    title: 'Gut Feeling: The Surprising Connection Between Gut Health and Everyday Defense',
    excerpt: 'Did you know that up to 70% of your body\'s defense cells reside in your gut? Learn why prebiotic fibers are the missing piece in most wellness routines.',
    content: `When we think about our daily health routines, we often think about external factors or targeted nutrients. However, one of the most powerful centers of wellness resides completely inside us: our gut microbiome. 

Modern wellness research continues to reveal that up to 70% of your body's immune system cells are located directly along the digestive tract. This means that caring for your digestive health isn't just about digestion—it's the foundation of holistic body defense.

### The Role of the Microbiome
Your gut is home to trillions of microorganisms, both helpful and unhelpful. In a healthy state, these bacteria exist in a delicate balance. Helpful bacteria act as an active layer of support, helping break down nutrients, synthesize key vitamins, and directly educate your body's defense cells on how to interact with the environment.

### Prebiotics vs. Probiotics: What's the Difference?
We often hear a lot about *probiotics* (the live, helpful bacteria themselves), but *prebiotics* are just as important, if not more. Prebiotics are specialized plant fibers that act as the gourmet food source for your gut's resident friendly bacteria. Without adequate prebiotic nourishment, beneficial bacteria cannot thrive.

### Introducing Larch Laricina Isolate
At ImmunoPal, we believe in crafting supplements with care and foresight. That's why our Daily Immune Support Gummies feature **Larch Laricina Isolate**, a premium, water-soluble prebiotic fiber extracted from the Larch tree. 

Unlike heavy, synthetic fibers that can sometimes cause digestive discomfort, Larch Laricina is gentle, highly bioavailable, and designed for everyday routines. It feeds your beneficial gut bacteria, helping create a harmonious gut environment that supports your daily wellness from the inside out.`,
    category: 'Nutrition Basics',
    readTime: '5 min read',
    date: 'May 12, 2026',
    author: 'Dr. Marcus Vance, Chief Scientific Advisor'
  },
  {
    id: 'post-3',
    title: 'Seasonal Transitions: Keeping Your Family Balanced Year-Round',
    excerpt: 'As seasons change, our body\'s needs shift too. Explore actionable tips to help your family transition smoothly from summer heat to crisp autumn air.',
    content: `Every change of season brings a unique energy—and a fresh set of environmental changes. Transitioning from the bright warmth of summer to the crisp breeze of autumn is a beautiful time, but it can also put our everyday wellness routines to the test. 

To help your family glide through seasonal transitions with ease and comfort, here are a few simple, actionable wellness habits to adopt in your household.

### 1. Shift the Sleep Schedule
With changing daylight hours, our bodies naturally want to adjust. Encourage your family to wind down 15 to 30 minutes earlier as the evenings grow longer. Quality sleep is one of the single most powerful ways to support natural wellness.

### 2. Focus on Seasonal Whole Foods
Nature provides exactly what we need at the right times. Incorporate autumn staples into your meals: squashes, apples, root vegetables, and dark leafy greens. These foods are packed with seasonal vitamins and fiber that complement your body's natural needs during colder weather.

### 3. Double-Down on Foundational Nutrients
When outdoor activities shift indoors, our bodies face more close-contact environments. Ensure everyone in the house has a simple addition to their wellness routine. A daily serving of Vitamin C, Zinc, and high-potency Elderberry is an easy way to keep seasonal defenses active.

### 4. Embrace Crisp Fresh Air
Even as the air cools, do not hide indoors! Bundle up and take a brisk 15-minute family walk after dinner. The cool air stimulates deep breathing, and the light physical activity supports digestion and high-quality sleep.`,
    category: 'Family Wellness Tips',
    readTime: '4 min read',
    date: 'April 08, 2026',
    author: 'Sarah Jenkins, Certified Health Coach'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How do ImmunoPal Daily Immune Support Gummies work?',
    answer: 'Our gummies combine four powerhouse ingredients—Elderberry, Vitamin C, Zinc, and Larch Laricina Prebiotic fiber—to support your daily wellness. Together, they deliver essential antioxidants, foundational minerals, and vital prebiotic nourishment that supports gut harmony where most of your body\'s defense resides.',
    category: 'Product Questions'
  },
  {
    id: 'faq-2',
    question: 'Why does ImmunoPal sell exclusively on Amazon?',
    answer: 'By partnering exclusively with Amazon, we leverage their world-class logistics network to deliver ImmunoPal directly to your door at peak freshness. This allows us to keep our prices accessible, offer fast Prime shipping, and focus 100% of our energy on sourcing premium ingredients.',
    category: 'Shipping & Purchase'
  },
  {
    id: 'faq-3',
    question: 'Are these gummies suitable for children?',
    answer: 'Yes! Our gummies are made with care and are designed for everyday routines for the entire family. For children ages 4 and up, we recommend one (1) gummy daily, chewed thoroughly. For adults, we recommend two (2) gummies daily.',
    category: 'Usage & Safety'
  },
  {
    id: 'faq-4',
    question: 'Is Larch Laricina safe for sensitive stomachs?',
    answer: 'Absolutely. Larch Laricina is a premium, water-soluble prebiotic arabinogalactan fiber. It is highly refined and is known to be much gentler on sensitive stomachs than other common fibers (like inulin or FOS), supporting your gut microbiome without causing gas or bloating.',
    category: 'Ingredients'
  },
  {
    id: 'faq-5',
    question: 'Are there any artificial colors, gelatin, or corn syrup?',
    answer: 'No. We believe in premium, clean quality. ImmunoPal gummies are pectin-based (100% gelatin-free), naturally colored with vegetable juice, and flavored with organic natural berry extracts. We never use high-fructose corn syrup or synthetic preservatives.',
    category: 'Ingredients'
  }
];
