import { Link } from 'react-router-dom';
import { ArrowRight, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function CTASection() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="relative bg-gradient-to-br from-primary/10 via-surface to-secondary rounded-3xl p-8 sm:p-12 lg:p-16 overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

          <div className="relative text-center max-w-2xl mx-auto">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-heading">
              Let's Create Something
              <span className="text-gradient"> Amazing Together</span>
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Have a project in mind? I'd love to hear about it. Let's discuss
              how we can work together to bring your vision to life.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              
              {/* Start a Project Button */}
              <Button asChild variant="hero" size="xl">
                <Link to="/contact" className="group">
                  Start a Project
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform ml-2"
                  />
                </Link>
              </Button>

              {/* Download Resume Button */}
              <Button asChild variant="hero-outline" size="xl">
                <a href="/Ralph's-Resume.pdf" download>
                  <Download size={18} className="inline mr-2" />
                  Download Resume
                </a>
              </Button>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
