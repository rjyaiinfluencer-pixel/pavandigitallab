import { UserProfile } from '../types';

export const APP_CONFIG = {
  brandName: 'Pavan Digital Lab',
  tagline: 'Creative Ideas. Powerful Digital Experiences.',
  welcomeKicker: 'WELCOME TO PAVAN DIGITAL LAB',
  heroHeadline: 'Transforming Ideas Into Digital Experiences.',
  heroSupportingText:
    'From promotional videos and stunning websites to invitation designs and digital marketing, we bring your ideas to life.',
  whatsappNumber: '+91 9573313317',
  whatsappRawNumber: '919573313317',
  instagramHandle: '@pavandigitallab',
  instagramUrl: 'https://instagram.com/pavandigitallab',
  email: 'pavandigitallab@gmail.com',
  location: 'Andhra Pradesh, India',
};

/**
 * Generates direct WhatsApp URL with prefilled text
 * Requirement: "Hi Pavan Digital Lab, I am interested in your [SERVICE NAME]. Please share the details."
 */
export function getWhatsAppServiceUrl(serviceName: string, additionalDetails?: string): string {
  const baseMessage = `Hi Pavan Digital Lab, I am interested in your ${serviceName}. Please share the details.`;
  const fullMessage = additionalDetails ? `${baseMessage}\n\nNotes: ${additionalDetails}` : baseMessage;
  return `https://wa.me/${APP_CONFIG.whatsappRawNumber}?text=${encodeURIComponent(fullMessage)}`;
}

export function getGeneralWhatsAppUrl(message?: string): string {
  const text = message || `Hi Pavan Digital Lab, I would like to enquire about your creative & digital services.`;
  return `https://wa.me/${APP_CONFIG.whatsappRawNumber}?text=${encodeURIComponent(text)}`;
}

export const DEFAULT_PROFILE: UserProfile = {
  name: 'T Pavan Durga Vara Prasad',
  title: 'Digital Marketer | Content Creator | Social Media Manager | Website Creator',
  education: 'BBA in Digital Marketing — Currently Pursuing',
  bio: 'Passionate digital strategist and visual storyteller specializing in dynamic promotional videos, modern high-converting websites, creative custom invitation suites, and ROI-centric social media marketing. Bridging the gap between raw creative imagination and high-performance digital brand growth.',
  skills: [
    'Social Media Marketing',
    'Content Creation',
    'Campaign Planning',
    'Social Media Management',
    'Video & Reel Creation',
    'Performance Tracking',
    'SEO Fundamentals',
    'Website Creation',
  ],
  instagramUrl: 'https://instagram.com/pavandigitallab',
  whatsappNumber: '+91 9573313317',
  email: 'pavandigitallab@gmail.com',
  location: 'India',
  avatarUrl: '', // Default placeholder; user can upload/paste custom photo
};
