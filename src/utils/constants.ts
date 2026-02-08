import type { NavLink, Category, WhyChooseFeature } from '../types';

export const NAV_LINKS: NavLink[] = [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: 'About Us', href: '/about' },
    { label: 'Quality', href: '/quality' },
    { label: 'Contact', href: '/contact' },
];

export const PRODUCT_CATEGORIES: Category[] = [
    {
        id: '1',
        icon: 'flask',
        title: 'Active APIs',
        description: 'High-quality active pharmaceutical ingredients sourced from certified manufacturers worldwide.',
        link: '/products/apis',
    },
    {
        id: '2',
        icon: 'beaker',
        title: 'Industrial Chemicals',
        description: 'Premium industrial grade chemicals for various pharmaceutical manufacturing processes.',
        link: '/products/chemicals',
    },
    {
        id: '3',
        icon: 'pill',
        title: 'Vitamins',
        description: 'Essential vitamins and nutritional supplements for pharmaceutical formulations.',
        link: '/products/vitamins',
    },
    {
        id: '4',
        icon: 'shield',
        title: 'Excipients',
        description: 'Pharmaceutical excipients and additives meeting international quality standards.',
        link: '/products/excipients',
    },
];

export const WHY_CHOOSE_FEATURES: WhyChooseFeature[] = [
    {
        icon: 'award',
        title: 'Quality Assurance',
        description: 'Rigorous quality control processes ensuring pharmaceutical grade materials meet international standards.',
    },
    {
        icon: 'truck',
        title: 'Reliable Supply Chain',
        description: 'Established global network ensuring consistent availability and timely delivery worldwide.',
    },
    {
        icon: 'dollar',
        title: 'Competitive Pricing',
        description: 'Best market prices without compromising on quality, backed by transparent pricing policies.',
    },
    {
        icon: 'clock',
        title: 'Timely Delivery',
        description: '24/7 customer support with dedicated logistics team ensuring on-time deliveries.',
    },
];

export const ABOUT_FEATURES = [
    { icon: 'check', text: 'Global Sourcing Network' },
    { icon: 'check', text: 'ISO 9001:2015, GMP Certified Premises' },
    { icon: 'check', text: 'Dedicated Regulatory Support' },
];

export const COMPANY_INFO = {
    name: 'Saptam Pharmachem',
    phone: '+1234567890',
    email: 'info@saptampharma.com',
    address: 'Industrial Area, Pharmaceutical Zone',
};
