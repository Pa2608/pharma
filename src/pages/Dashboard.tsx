import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import ProductCategories from '../components/sections/ProductCategories';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import CTASection from '../components/sections/CTASection';
import WhatsAppButton from '../components/common/WhatsAppButton';
import { PRODUCT_CATEGORIES, WHY_CHOOSE_FEATURES, ABOUT_FEATURES, COMPANY_INFO } from '../utils/constants';

const Dashboard: React.FC = () => {
    return (
        <div className="dashboard">
            <Header transparent />

            <main>
                <HeroSection
                    title="Reliable Pharmaceutical Raw Material Supplier"
                    subtitle="Saptam is a ISO 9001:2015, WHO-GMP & GMP Certified and Licensed pharmaceutical raw material supplier providing high-quality APIs, chemicals, vitamins, and excipients worldwide."
                    backgroundImage="https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=1920&q=80"
                    ctaButtons={[
                        { text: 'View Products', variant: 'primary', onClick: () => console.log('View Products') },
                        { text: 'Request Quote', variant: 'secondary', onClick: () => console.log('Request Quote') }
                    ]}
                />

                <AboutSection
                    image="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80"
                    title="About Saptam Pharmachem"
                    description="We are a leading supplier of pharmaceutical raw materials with over 15 years of experience. Our commitment to quality, reliability, and customer satisfaction has made us a trusted partner for pharmaceutical manufacturers worldwide."
                    features={ABOUT_FEATURES}
                />

                <ProductCategories categories={PRODUCT_CATEGORIES} />

                <WhyChooseUs features={WHY_CHOOSE_FEATURES} />

                <CTASection
                    title="Looking for a Reliable Pharmaceutical Supplier?"
                    subtitle="Let's build your success together with our quality raw materials and dedicated support"
                    buttonText="Get Started Today"
                    onButtonClick={() => console.log('Get Started')}
                />
            </main>

            <Footer />
            <WhatsAppButton phoneNumber={COMPANY_INFO.phone} />
        </div>
    );
};

export default Dashboard;
