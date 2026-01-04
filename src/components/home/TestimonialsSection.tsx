import { Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote:
      "Working with Alex was an absolute pleasure. They understood our vision perfectly and delivered a website that exceeded our expectations.",
    author: 'Sarah Johnson',
    role: 'CEO, TechStart',
  },
  {
    id: 2,
    quote:
      "The attention to detail and creative approach brought our brand to life in ways we never imagined. Highly recommend!",
    author: 'Michael Chen',
    role: 'Founder, Artistry Co',
  },
  {
    id: 3,
    quote:
      "Professional, responsive, and incredibly talented. Alex transformed our outdated website into a modern masterpiece.",
    author: 'Emily Rodriguez',
    role: 'Marketing Director, Bloom',
  },
];

export function TestimonialsSection() {
  return (
    <section className="section-padding bg-surface">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-heading mt-3">
            What Clients Say
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-surface-elevated p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <Quote size={32} className="text-primary/30 mb-4" />
              <blockquote className="text-foreground leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              <div className="mt-6 pt-6 border-t border-border">
                <p className="font-display font-semibold text-heading">
                  {testimonial.author}
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
