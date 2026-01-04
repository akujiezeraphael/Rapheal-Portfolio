import { Helmet } from 'react-helmet-async';
import { Layout } from '@/components/layout/Layout';
import { Award, BookOpen, Briefcase, Heart, MapPin, Coffee } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.jpg';
import {Code2} from 'lucide-react'

const skills = {
  design: ['UI/UX Design', 'Web Design', 'Brand Identity', 'Motion Design', 'Illustration'],
  development: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Next.js'],
  tools: ['Figma', 'Adobe Creative Suite', 'Framer', 'VS Code', 'Git'],
};

const experience = [
  {
    year: '2020 - Present',
    title: 'Senior Digital Designer',
    company: 'Creative Studio NYC',
    description: 'Leading design projects for Fortune 500 clients, mentoring junior designers.',
  },
  {
    year: '2018 - 2020',
    title: 'UI/UX Designer',
    company: 'TechStart Agency',
    description: 'Designed user interfaces for web and mobile applications.',
  },
  {
    year: '2016 - 2018',
    title: 'Junior Designer',
    company: 'Digital Dreams',
    description: 'Started my career creating brand identities and marketing materials.',
  },
];

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Me | Rapheal Akujieze - Digital Designer</title>
        <meta
          name="description"
          content="Learn more about Alex Morgan, a passionate digital designer with 8+ years of experience creating beautiful digital experiences."
        />
      </Helmet>
      <Layout>
        {/* Hero Section */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-20">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <span className="text-primary font-medium text-sm uppercase tracking-wider">
                  About Me
                </span>
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-heading mt-3 leading-tight">
                  Creating with
                  <span className="text-gradient"> purpose & passion</span>
                </h1>
                <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                  I'm Rapheal Akujieze, a digital designer and developer based in Lagos,Nigeria.
                   I've dedicated my
                  career to crafting digital experiences that not only look
                  stunning but also solve real problems.
                </p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  My journey in design started with a simple curiosity about how
                  things work and look. Today, that curiosity has evolved into a
                  deep passion for creating meaningful digital products that make
                  a difference in people's lives.
                </p>
              </div>
              <div className="relative">
                <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-primary/20 to-secondary overflow-hidden shadow-lg">
                  <img 
                    src={profilePhoto} 
                    alt="Alex Morgan - Digital Designer" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-surface-elevated p-4 rounded-xl shadow-md">
                  <div className="flex items-center gap-2">
                    <MapPin size={18} className="text-primary" />
                    <span className="text-sm font-medium">Lagos,Nigeria</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="section-padding bg-surface">
          <div className="container-custom">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-heading">
                What Drives Me
              </h2>
              <p className="mt-4 text-muted-foreground">
                My design philosophy is built on these core principles
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: Heart,
                  title: 'User-Centered',
                  description: 'Every design decision starts with understanding the user.',
                },
                {
                  icon: Award,
                  title: 'Quality First',
                  description: 'I never compromise on the quality of my work.',
                },
                {
                  icon: Coffee,
                  title: 'Continuous Learning',
                  description: 'Always exploring new techniques and technologies.',
                },
              ].map((value) => (
                <div
                  key={value.title}
                  className="bg-surface-elevated p-8 rounded-2xl shadow-sm text-center"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon size={24} className="text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-heading">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mt-2">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid lg:grid-cols-3 gap-8">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category} className="bg-surface rounded-2xl p-8">
                  <h3 className="font-display text-xl font-semibold text-heading capitalize mb-6">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className="px-4 py-2 bg-surface-elevated rounded-full text-sm text-foreground"
                      >
              
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Timeline */}
        <section className="section-padding bg-surface">
          <div className="container-custom">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-primary font-medium text-sm uppercase tracking-wider">
                Experience
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-heading mt-3">
                My Journey
              </h2>
            </div>
            <div className="max-w-3xl mx-auto">
              {experience.map((item, index) => (
                <div key={item.year} className="relative pl-8 pb-12 last:pb-0">
                  {/* Timeline line */}
                  {index !== experience.length - 1 && (
                    <div className="absolute left-[11px] top-6 bottom-0 w-0.5 bg-border" />
                  )}
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                    <Briefcase size={12} className="text-primary-foreground" />
                  </div>
                  <div className="bg-surface-elevated p-6 rounded-xl shadow-sm">
                    <span className="text-sm text-primary font-medium">{item.year}</span>
                    <h3 className="font-display text-lg font-semibold text-heading mt-1">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">{item.company}</p>
                    <p className="text-foreground text-sm mt-3">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Fun Facts */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-primary font-medium text-sm uppercase tracking-wider">
                Beyond Work
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-heading mt-3">
                A Little More About Me
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { emoji: '📚', text: 'Avid reader' },
                { emoji: '🎸', text: 'Guitar enthusiast' },
                { emoji: '☕', text: 'Coffee lover' },
                { emoji: '🌍', text: 'Travel addict' },
              ].map((fact) => (
                <div
                  key={fact.text}
                  className="bg-surface p-6 rounded-xl text-center hover:shadow-md transition-shadow"
                >
                  <span className="text-4xl">{fact.emoji}</span>
                  <p className="mt-3 font-medium text-foreground">{fact.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default About;
