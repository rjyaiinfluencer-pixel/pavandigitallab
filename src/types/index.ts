export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  category: string;
  iconName: string;
  tagline: string;
  deliverables: string[];
  benefits: string[];
  process: { step: string; title: string; description: string }[];
  accentColor: string;
  badgeText: string;
  sampleMockType: 'video' | 'website' | 'wedding' | 'birthday' | 'business_card' | 'song' | 'google_maps' | 'brand_collab' | 'influencer' | 'ugc' | 'social_media' | 'digital_ads';
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Promotional Videos' | 'Websites' | 'Wedding Invitations' | 'Birthday Invitations' | 'Business Cards' | 'Personal Songs' | 'Digital Marketing';
  description: string;
  fullDetails?: string;
  clientName?: string;
  completionDate?: string;
  liveUrl?: string;
  instagramUrl?: string;
  videoUrl?: string;
  thumbnailTheme: {
    gradient: string;
    icon: string;
    accent: string;
  };
  tags: string[];
  isCustom?: boolean;
}

export interface UserProfile {
  name: string;
  title: string;
  education: string;
  bio: string;
  skills: string[];
  instagramUrl: string;
  whatsappNumber: string;
  email: string;
  location: string;
  avatarUrl: string;
}

export type ProjectFilterCategory =
  | 'All'
  | 'Promotional Videos'
  | 'Websites'
  | 'Wedding Invitations'
  | 'Birthday Invitations'
  | 'Business Cards'
  | 'Personal Songs'
  | 'Digital Marketing';
