import { Link } from 'react-router-dom';
import { ArrowRight, Palette, Code2, Layers, Megaphone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: Palette,
    title: 'Web Design',
    description: 'Beautiful, responsive websites that captivate and convert visitors.',
  },
  {
    icon: Code2,
    title: 'Development',
    description: 'Clean, efficient code that brings designs to life seamlessly.',
  },
  {
    icon: Layers,
    title: 'UI/UX Design',
    description: 'User-centered interfaces that delight and engage audiences.',
  },
  {
    icon: Megaphone,
    title: 'Branding',
    description: 'Cohesive brand identities that tell your unique story.',
  },
];

export function ServicesSnapshot() {
  return (
    <section className="section-padding bg-heading text-primary-foreground">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Services
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold mt-3">
            What I Can Do For You
          </h2>
          <p className="mt-4 text-primary-foreground/70">
            From concept to launch, I provide end-to-end solutions that help your
            business thrive in the digital landscape.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group p-6 rounded-2xl bg-primary-foreground/5 hover:bg-primary-foreground/10 border border-primary-foreground/10 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mb-5">
                <service.icon size={24} className="text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl text-white font-semibold">
                {service.title}
              </h3>
              <p className="text-primary-foreground/60 text-sm mt-2 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button
            asChild
            variant="hero"
            size="lg"
            className="bg-primary-foreground text-heading hover:bg-primary-foreground/90"
          >
            <Link to="/services" className="group">
              Explore All Services
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
