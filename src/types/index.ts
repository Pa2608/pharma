export interface Category {
  id: string;
  icon: string;
  title: string;
  description: string;
  link: string;
}

export interface Feature {
  icon: string;
  text: string;
}

export interface WhyChooseFeature {
  icon: string;
  title: string;
  description: string;
}

export interface CTAButton {
  text: string;
  variant: 'primary' | 'secondary' | 'outline';
  onClick: () => void;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}
