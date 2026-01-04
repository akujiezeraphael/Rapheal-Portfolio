import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useRef } from 'react';

// Videos
import bloomVideo from '@/assets/videos/FLUXA-APP(FINTECH).mp4';
import fintechVideo from '@/assets/videos/SOUNDORA-PROJECT.mp4';

// Images
import FeaturedProject1 from '@/assets/Featured-project1.png';
import FeaturedProject2 from '@/assets/Featured-project2.png';
import FeaturedProject3 from '@/assets/Featured-project3.png';
import FeaturedProject4 from '@/assets/Featured-project4.png';

const projects = [
  {
    id: 1,
    title: 'Fluxa',
    category: 'UI/UX Design',
    description: 'Intuitive financial management dashboard for startups',
    video: bloomVideo,
    link: 'https://www.figma.com/proto/93XMXkON70PpkGxYjor3dQ/FLUXA-APP-FINTECH-?node-id=8-140&starting-point-node-id=2%3A8',
  },
  {
    id: 2,
    title: 'Soundora',
    category: 'UI/UX Design',
    description: 'Music streaming with personalized mixes + Flow playlists',
    video: fintechVideo,
    link: 'https://www.figma.com/proto/FJOBAQEXALRpZ51ghoyNBV/SOUNDORA-PROJECT-PROTOTYPE?node-id=1-2',
  },
  {
    id: 3,
    title: 'Artistry Portfolio',
    category: 'Branding',
    description: 'Complete brand identity for a creative agency',
    image: FeaturedProject1,
    link: 'https://www.figma.com/design/2Hod5idmd7tuGsKxshm52w/Untitled?t=f43QYcwjrfJDdLuz-0',
  },
  {
    id: 4,
    title: 'Delifin App',
    category: 'Mobile Design',
    description: 'Secure and intuitive app for seamless payments, transfers, and account management.',
    image: FeaturedProject2,
    link: 'https://www.figma.com/design/zGc55JeyH4rvOfzziJHPQh/FINTECH-APP?t=f43QYcwjrfJDdLuz-0',
  },
];

export function FeaturedProjects() {
  const videoRefs = useRef([]);

  useEffect(() => {
    const videos = videoRefs.current.filter(Boolean);
    if (videos.length > 0) {
      const randomIndex = Math.floor(Math.random() * videos.length);
      videos[randomIndex].play().catch(() => {});
    }
  }, []);

  return (
    <section className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Portfolio
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-heading mt-3">
              Featured Projects
            </h2>
          </div>

          <Button asChild variant="outline">
            <a
              href="/portfolio"
              className="group flex items-center gap-2"
            >
              View All Projects
              <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <div key={project.id} className="group block">
              <article className="h-full bg-surface-elevated rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-2">
                
                {/* Media */}
                <div className="aspect-[4/3] relative overflow-hidden">
                  {project.video ? (
                    <video
                      ref={(el) => (videoRefs.current[index] = el)}
                      src={project.video}
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      onMouseEnter={(e) => e.currentTarget.play()}
                      onMouseLeave={(e) => {
                        e.currentTarget.pause();
                        e.currentTarget.currentTime = 0;
                      }}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  ) : (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  )}

                  {/* Hover Overlay with clickable button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/10">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md"
                    >
                      <ExternalLink size={20} className="text-black" />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <span className="text-xs font-medium text-primary uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h3 className="font-display text-xl font-semibold text-heading mt-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mt-2 line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
