import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Layout } from '@/components/layout/Layout';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';
// Videos
import bloomVideo from '@/assets/videos/FLUXA-APP(FINTECH).mp4';
import fintechVideo from '@/assets/videos/SOUNDORA-PROJECT.mp4';

// Images
import FeaturedProject1 from '@/assets/Featured-project1.png';
import FeaturedProject2 from '@/assets/Featured-project2.png';
import FeaturedProject3 from '@/assets/Featured-project3.png';
import FeaturedProject4 from '@/assets/Featured-project4.png';


const categories = ['All', 'Web Design', 'UI/UX', 'Branding',];

const projects = [
  {
    id: 1,
    title: 'Bloom E-commerce',
    category: 'Web Design',
    description: 'A modern e-commerce platform for a sustainable fashion brand',
    tags: ['Shopify', 'Figma', 'Custom Theme'],
    gradient: 'from-primary/20 to-primary/5',
    link: 'https://www.figma.com/design/2Hod5idmd7tuGsKxshm52w/Untitled?t=f43QYcwjrfJDdLuz-0',
    mediaType: 'image',
    mediaSrc: FeaturedProject1,
  },
  {
    id: 2,
    title: 'Fintech Dashboard',
    category: 'UI/UX',
    description: 'Intuitive financial management dashboard for startups',
    tags: ['React', 'TypeScript', 'Tailwind'],
    gradient: 'from-accent/20 to-accent/5',
    link: 'https://www.figma.com/proto/93XMXkON70PpkGxYjor3dQ/FLUXA-APP-FINTECH-?node-id=8-140&starting-point-node-id=2%3A8',
    mediaType: 'video',
    mediaSrc: bloomVideo,
  },
  {
    id: 3,
    title: 'HealthTech App',
    category: 'UI/UX',
    description: 'Health monitoring app with intuitive user experience',
    tags: ['Mobile', 'iOS', 'Android'],
    gradient: 'from-primary/15 to-accent/10',
    link: 'https://www.figma.com/proto/FJOBAQEXALRpZ51ghoyNBV/SOUNDORA-PROJECT-PROTOTYPE?node-id=1-2',
    mediaType: 'video',
    mediaSrc:  fintechVideo,
  },
  {
    id: 4,
    title: 'Artistry Brand',
    category: 'Branding',
    description: 'Complete brand identity for a creative agency',
    tags: ['Logo', 'Guidelines', 'Collateral'],
    gradient: 'from-secondary to-muted',
    link: 'https://www.figma.com/design/zGc55JeyH4rvOfzziJHPQh/FINTECH-APP?t=f43QYcwjrfJDdLuz-0',
    mediaType: 'image',
    mediaSrc: FeaturedProject2,
  },
  {
    id: 5,
    title: 'SaaS Landing Page',
    category: 'Web Design',
    description: 'High-converting landing page for a B2B SaaS product',
    tags: ['React', 'Animations', 'SEO'],
    gradient: 'from-primary/25 to-secondary',
    link: 'https://www.figma.com/design/MgBAviylLKbZBQZ8AsoAJ3/Fruit-Juice-Website?t=f43QYcwjrfJDdLuz-0',
    mediaType: 'image',
    mediaSrc:FeaturedProject3,
  },
  {
    id: 6,
    title: 'SaaS Landing Page',
    category: 'Web Design',
    description: 'High-converting landing page for a B2B SaaS product',
    tags: ['React', 'Animations', 'SEO'],
    gradient: 'from-primary/25 to-secondary',
    link: 'https://www.figma.com/design/GPkbUDPiucnFGEki9M7yrA/Untitled?node-id=0-1&p=f&t=D51YjqULtLPnaaXO-0',
    mediaType: 'image',
    mediaSrc:FeaturedProject4,
  },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <>
      <Helmet>
        <title>Portfolio | Rapheal Akujieze - Digital Designer</title>
        <meta
          name="description"
          content="Explore my portfolio of web design, UI/UX, branding, and development projects."
        />
        {/* Favicon */}
      <link rel="icon" type="image/png" href="/Ralph-logo.png" />
      </Helmet>

      <Layout>
        {/* Hero */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-20">
          <div className="container-custom text-center max-w-3xl mx-auto">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Portfolio
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-heading mt-3">
              Selected Works
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              A curated collection of projects showcasing design and development.
            </p>

            {/* Filters */}
            <div className="flex flex-wrap justify-center gap-3 mt-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={cn(
                    'px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300',
                    activeCategory === category
                      ? 'bg-primary text-primary-foreground shadow-glow'
                      : 'bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80'
                  )}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Grid */}
        <section className="section-padding pt-0">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {filteredProjects.map((project) => (
                <article
                  key={project.id}
                  className="group bg-surface-elevated rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-2"
                >
                  {/* Media */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`aspect-[4/3] bg-gradient-to-br ${project.gradient} relative overflow-hidden block`}
                  >
                    {project.mediaType === 'image' ? (
                      <img
                        src={project.mediaSrc}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <video
                        src={project.mediaSrc}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        onMouseEnter={(e) => e.currentTarget.play()}
                        onMouseLeave={(e) => {
                          e.currentTarget.pause();
                          e.currentTarget.currentTime = 0;
                        }}
                      />
                    )}

                    {/* Hover icon */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-foreground/40">
                      <div className="w-12 h-12 rounded-full bg-surface-elevated flex items-center justify-center shadow-md">
                        <ExternalLink size={20} />
                      </div>
                    </div>
                  </a>

                  {/* Content */}
                  <div className="p-6">
                    <span className="text-xs font-medium text-primary uppercase tracking-wider">
                      {project.category}
                    </span>
                    <h3 className="font-display text-xl font-semibold text-heading mt-2 flex items-center gap-2 group-hover:text-primary transition-colors">
                      {project.title}
                      <ArrowUpRight
                        size={18}
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                    </h3>
                    <p className="text-muted-foreground text-sm mt-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-secondary rounded-full text-xs text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Portfolio;
