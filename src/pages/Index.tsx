import { Helmet } from 'react-helmet-async';
import { Layout } from '@/components/layout/Layout';
import { HeroSection } from '@/components/home/HeroSection';
import { IntroSection } from '@/components/home/IntroSection';
import { FeaturedProjects } from '@/components/home/FeaturedProjects';
import { ServicesSnapshot } from '@/components/home/ServicesSnapshot';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { CTASection } from '@/components/home/CTASection';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Rapheal Akujieze | Digital Designer</title>
        <meta
          name="description"
          content="I'm Rapheal Akujieze, a digital designer and  creating beautiful, intuitive digital experiences. View my portfolio and let's work together."
        />
        <link rel="icon" href="/favicon-blank.ico?v=12345" type="image/x-icon" />
      </Helmet>
      <Layout>
        <HeroSection />
        <IntroSection />
        <FeaturedProjects />
        <ServicesSnapshot />
        <TestimonialsSection />
        <CTASection />
      </Layout>
    </>
  );
};

export default Index;
