import { ButtonProps } from '@/types/types';

export const pricingTiers = [
  {
    title: 'Basic',
    description: 'AI chatbot, personalized recommendations',
    price: 'Free',
    buttonText: 'Get Started',
    buttonVariant: 'secondary',
    features: [
      'Access to AI chatbot for natural language conversations',
      'Basic task automation for simple workflows',
      'Limited message history storage',
    ],
    color: 'amber',
    className: 'lg:py-12 lg:my-6',
  },
  {
    title: 'Premium',
    description: 'Advanced AI capabilities for enhanced productivity',
    price: 99,
    buttonText: 'Upgrade to Premium',
    buttonVariant: 'secondary',
    features: [
      'All Basic features included',
      'Priority access to new AI features and updates',
      'Advanced automation tools for seamless task management',
      'Customizable chat templates for your specific workflows',
    ],
    color: 'violet',
    className: 'lg:py-18 lg:my-0',
  },
  {
    title: 'Enterprise',
    description: 'Custom AI chatbot, advanced analytics, dedicated account',
    price: null,
    buttonText: 'Contact Us',
    buttonVariant: 'primary',
    features: [
      'All Premium features included',
      'Dedicated account manager and priority customer support',
      'Enhanced security and compliance features for large teams',
      "Custom AI models tailored to your organization's needs",
      'API access for seamless integration with enterprise systems',
    ],
    color: 'teal',
    className: 'lg:py-12 lg:my-6',
  },
] satisfies {
  title: string;
  description: string;
  price: string | number | null;
  buttonText: string;
  buttonVariant?: ButtonProps['variant'];
  features: string[];
  color: string;
  className: string;
}[];
