export interface Ingredient {
  id: string;
  name: string;
  scientificName?: string;
  benefit: string;
  description: string;
  iconName: string;
  fullDetails: string[];
}

export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  price: string;
  rating: number;
  reviewsCount: number;
  amazonUrl: string;
  ingredients: string[]; // Ingredient IDs
  benefits: string[];
  directions: string;
  images: {
    mockup: string;
    flatlay: string;
  };
}

export interface JournalPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: 'Healthy Habits' | 'Daily Wellness' | 'Family Wellness Tips' | 'Nutrition Basics' | 'Seasonal Wellness' | 'Everyday Healthy Living';
  readTime: string;
  date: string;
  author: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  title: string;
  comment: string;
  date: string;
  verified: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}
