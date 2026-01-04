import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import {
  Palette,
  Code2,
  Layers,
  Megaphone,
  Wrench,
  ArrowRight,
  Check,
  MessageSquare,
  Lightbulb,
  Rocket,
} from 'lucide-react';

const services = [
  {
    icon: Palette,
    title: 'Web Design',
    description:
      'Beautiful, responsive websites that captivate visitors and drive conversions. From landing pages to full e-commerce experiences.',
    features: [
      'Responsive design for all devices',
      'Custom UI components',
      'Conversion-optimized layouts',
      'Brand-aligned aesthetics',
    ],
  },
  {
    icon: Layers,
    title: 'UI/UX Design',
    description:
      'User-centered interfaces that delight and engage. Research-driven design that solves real user problems.',
    features: [
      'User research & testing',
      'Wireframing & prototyping',
      'Design systems',
      'Usability audits',
    ],
  },
  {
    icon: Megaphone,
    title: 'Branding',
    description:
      'Cohesive brand identities that tell your unique story. From logo design to complete brand guidelines.',
    features: [
      'Logo design',
      'Brand guidelines',
      'Visual identity',
      'Brand strategy',
    ],
  },
  {
    icon: Wrench,
    title: 'Maintenance & Support',
    description:
      'Ongoing support to keep your website running smoothly. Updates, fixes, and continuous improvements.',
    features: [
      'Regular updates',
      'Security monitoring',
      'Performance tracking',
      'Priority support',
    ],
  },
];

const process = [
  {
    icon: MessageSquare,
    step: '01',
    title: 'Discovery',
    description: 'Understanding your goals, audience, and requirements through in-depth discussions.',
  },
  {
    icon: Lightbulb,
    step: '02',
    title: 'Strategy & Design',
    description: 'Creating wireframes, mockups, and a visual direction that aligns with your vision.',
  },
  {
    icon: Code2,
    step: '03',
    title: 'Development',
    description: 'Building your project with clean code and attention to every detail.',
  },
  {
    icon: Rocket,
    step: '04',
    title: 'Launch & Support',
    description: 'Deploying your project and providing ongoing support for continued success.',
  },
];

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Services | Rapheal Akujieze - Digital Designer</title>
        <meta
          name="description"
          content="Explore my services including web design, development, UI/UX design, branding, and maintenance. Let's work together to bring your vision to life."
        />
        {/* Favicon */}
      <link rel="icon" type="image/png" href="/Ralph-logo.png" />
      </Helmet>
      <Layout>
        {/* Hero Section */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-20">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-primary font-medium text-sm uppercase tracking-wider">
                Services
              </span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-heading mt-3">
                How I Can Help
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                From concept to launch, I provide end-to-end digital solutions
                that help your business thrive. Every service is tailored to your
                unique needs.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section-padding pt-0">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="bg-surface-elevated rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 group"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                    <service.icon
                      size={24}
                      className="text-primary group-hover:text-primary-foreground transition-colors"
                    />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-heading">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mt-3 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="mt-6 space-y-2">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-foreground"
                      >
                        <Check size={16} className="text-primary flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 pt-6 border-t border-border">
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="section-padding bg-surface">
          <div className="container-custom">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-primary font-medium text-sm uppercase tracking-wider">
                Process
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-heading mt-3">
                How We'll Work Together
              </h2>
              <p className="mt-4 text-muted-foreground">
                A streamlined process designed for efficiency and collaboration
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {process.map((step, index) => (
                <div key={step.title} className="relative">
                  {/* Connector line for desktop */}
                  {index !== process.length - 1 && (
                    <div className="hidden lg:block absolute top-12 left-1/2 w-full h-0.5 bg-border" />
                  )}
                  <div className="bg-surface-elevated rounded-2xl p-6 relative z-10">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-semibold text-sm mb-4">
                      {step.step}
                    </div>
                    <h3 className="font-display text-lg font-semibold text-heading">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mt-2">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="bg-heading rounded-3xl p-8 sm:p-12 lg:p-16 text-center">
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-primary-foreground">
                Ready to Get Started?
              </h2>
              <p className="mt-4 text-primary-foreground/70 max-w-xl mx-auto">
                Let's discuss your project and see how we can work together to
                bring your vision to life.
              </p>
              <Button
                asChild
                size="xl"
                className="mt-8 bg-primary-foreground text-heading hover:bg-primary-foreground/90"
              >
                <Link to="/contact" className="group">
                  Start a Conversation
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Services;
