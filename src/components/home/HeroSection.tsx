import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profilePhoto from '@/assets/profile-photo.jpg';

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden pt-20">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float animation-delay-200" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/5 to-transparent rounded-full" />
      </div>

      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full text-sm text-muted-foreground mb-6 animate-fade-up">
              <Sparkles size={14} className="text-primary" />
              <span>Available for freelance work</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold text-heading leading-[1.1] tracking-tight animate-fade-up animation-delay-100">
              Hi, I'm <span className="text-gradient">Raphael Akujieze</span>
              <br />
              <span className="text-muted-foreground">Digital UI/UX Designer</span>
            </h1>

            <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed animate-fade-up animation-delay-200">
              I craft beautiful, user-friendly digital experiences that not only delight users but also help brands achieve their goals. By combining strategic design thinking with intuitive interfaces, I create products that connect with audiences, solve real problems, and leave a lasting impression.
               Let’s collaborate to turn ideas into extraordinary digital experiences.
            </p>

            <div className="flex flex-wrap gap-4 mt-8 animate-fade-up animation-delay-300">
              <Button asChild variant="hero" size="xl">
                <Link to="/portfolio" className="group">
                  View My Work
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </Button>
              <Button asChild variant="hero-outline" size="xl">
                <Link to="/contact">Contact Me</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-border animate-fade-up animation-delay-400">
              <div>
                <p className="font-display text-3xl font-semibold text-heading">8+</p>
                <p className="text-sm text-muted-foreground mt-1">Years Experience</p>
              </div>
              <div>
                <p className="font-display text-3xl font-semibold text-heading">150+</p>
                <p className="text-sm text-muted-foreground mt-1">Projects Done</p>
              </div>
              <div>
                <p className="font-display text-3xl font-semibold text-heading">50+</p>
                <p className="text-sm text-muted-foreground mt-1">Happy Clients</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 flex justify-center animate-fade-up animation-delay-200">
            <div className="relative">
              <div className="w-72 h-72 sm:w-80 sm:h-80 md:w-[30rem] md:h-[30rem] lg:w-[37rem] lg:h-[37rem] rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
              <div className="w-60 h-60 sm:w-68 sm:h-68 md:w-[26rem] md:h-[26rem] lg:w-[32rem] lg:h-[37rem] rounded-full bg-gradient-to-br from-secondary to-surface overflow-hidden shadow-lg">
                  <img 
                    src={profilePhoto} 
                    alt="Alex Morgan - Digital Designer" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* Decorative floating elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary rounded-2xl shadow-glow animate-float" />
              <div className="absolute -bottom-2 -left-2 w-12 h-12 bg-secondary rounded-xl shadow-md animate-float animation-delay-300" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
