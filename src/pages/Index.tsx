import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import BlogSection from '@/components/BlogSection';
import FAQAccordion from '@/components/FAQAccordion';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => (
  <div className="min-h-screen">
    <Navigation />
    <HeroSection />
    <ServicesSection />
    <TestimonialsCarousel />
    <BlogSection />
    <FAQAccordion />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
