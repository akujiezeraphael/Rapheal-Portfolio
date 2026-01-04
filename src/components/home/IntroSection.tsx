import { Palette, Code, Lightbulb, Rocket } from 'lucide-react';

const skills = [
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Creating intuitive and beautiful user interfaces',
  },
  {
    icon: Code,
    title: 'Web Development',
    description: 'Building fast, responsive, and scalable websites',
  },
  {
    icon: Lightbulb,
    title: 'Brand Identity',
    description: 'Crafting memorable visual brand experiences',
  },
  {
    icon: Rocket,
    title: 'Digital Strategy',
    description: 'Developing effective digital growth strategies',
  },
];

export function IntroSection() {
  return (
    <section className="section-padding bg-surface">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div>
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              About Me
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-heading mt-3 leading-tight">
              Passionate about creating
              <span className="text-gradient"> impactful designs</span>
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              I create beautiful and intuitive digital experiences that help brands connect with their audience and achieve their goals.
               I’ve collaborated with startups, agencies, and diverse clients, blending aesthetics with functionality to ensure every project not only looks great but also works seamlessly.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              I believe in the power of thoughtful design to transform ideas into meaningful experiences.
               Every pixel is purposeful, and every interaction is crafted with care.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <div
                key={skill.title}
                className="group p-6 bg-surface-elevated rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <skill.icon size={24} className="text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-display text-lg font-semibold text-heading">
                  {skill.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-2">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
