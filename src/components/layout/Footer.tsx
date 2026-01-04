import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter, Instagram, Mail, ArrowUpRight, Facebook, X, TwitterIcon } from 'lucide-react';
import RalphLogo from '../../assets/Ralph-logo.png'

const footerLinks = {
  navigation: [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ],
  social: [
    { name: 'GitHub', icon: Facebook, url: 'https://www.facebook.com/share/1Be3iSqFcQ/?mibextid=wwXIfr' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/raphael-akujieze-0536841b5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' },
    { name: 'Twitter', icon: TwitterIcon, url: 'https://x.com/akujiezeraphael?s=21' },
    { name: 'Instagram', icon: Instagram, url: 'https://www.instagram.com/raphaelakujieze/' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-surface border-t border-border">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link
              to="/"
              className="font-display text-3xl font-semibold text-heading tracking-tight"
            >
             <div className="flex justify-start items-center m ">
        <img src={RalphLogo} alt="Logo" className="w-20 h-20" />
        <span className="text-2xl font-bold">ARC</span>
      </div>
            </Link>
            <p className="mt-4 text-muted-foreground max-w-md leading-relaxed">
              Creating beautiful, functional digital experiences that help businesses
              and individuals stand out in the digital world.
            </p>
            <div className="flex gap-4 mt-6">
              {footerLinks.social.map((item) => (
                <a
                  key={item.name}
                  href={item.url}
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  aria-label={item.name}
                >
                  <item.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold text-heading mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight
                      size={14}
                      className="opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold text-heading mb-4">
              Get in Touch
            </h4>
            <div className="space-y-3">
              <a
                href="mailto:akujiezerapheal@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
              >
                <Mail size={16} />
                akujiezerapheal@gmail.com
              </a>
              <p className="text-muted-foreground">
                Lagos,Nigeria
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Portfolio. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Crafted with passion and precision
          </p>
        </div>
      </div>
    </footer>
  );
}
