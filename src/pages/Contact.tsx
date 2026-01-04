import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Send,
  Facebook,
} from 'lucide-react';
import { z } from 'zod';

/* ============================
   FORM VALIDATION (ZOD)
============================ */
const contactSchema = z.object({
  name: z.string().trim().min(1, 'Name is required').max(100),
  email: z.string().trim().email('Enter a valid email').max(255),
  subject: z.string().trim().min(1, 'Subject is required').max(200),
  message: z.string().trim().min(10, 'Message must be at least 10 characters').max(2000),
});

type ContactFormData = z.infer<typeof contactSchema>;

/* ============================
   FORMSPREE ENDPOINT
============================ */
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xbdlgrnr';

/* ============================
   CONTACT INFO
============================ */
const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'akujiezeraphael@gmail.com',
    href: 'mailto:akujiezeraphael@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+2348133275771',
    href: 'tel:+2348133275771',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Lagos, Nigeria',
    href: null,
  },
];

const socialLinks = [
  { icon: Facebook, label: 'GitHub', href: 'https://www.facebook.com/share/1Be3iSqFcQ/?mibextid=wwXIfr' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/raphael-akujieze-0536841b5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' },
  { icon: Twitter, label: 'Twitter', href: 'https://x.com/akujiezeraphael?s=21' },
  { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/raphaelakujieze/' },
];

/* ============================
   COMPONENT
============================ */
const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] =
    useState<Partial<Record<keyof ContactFormData, string>>>({});

  /* ============================
     HANDLE INPUT CHANGE
  ============================ */
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  /* ============================
     HANDLE SUBMIT (FORMSPREE)
  ============================ */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    try {
      // Validate form
      const validatedData = contactSchema.parse(formData);

      // Send to Formspree
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          ...validatedData,
          _replyto: validatedData.email,
          _subject: `New message from ${validatedData.name}`,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result?.error || 'Submission failed');
      }

      toast({
        title: 'Message sent successfully 🎉',
        description: "Thanks for reaching out! I'll get back to you shortly.",
      });

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as keyof ContactFormData] = err.message;
          }
        });
        setErrors(fieldErrors);
      } else {
        toast({
          title: 'Submission failed',
          description: 'Something went wrong. Please try again later.',
          variant: 'destructive',
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact | Raphael Akujieze</title>
        <meta
          name="description"
          content="Get in touch for UI/UX design, product design, and digital projects."
        />
      </Helmet>

      <Layout>
        {/* HERO */}
        <section className="pt-32 pb-16">
          <div className="container-custom text-center max-w-3xl mx-auto">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Contact
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-semibold mt-3">
              Let’s Work Together
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Have a project in mind or just want to say hello?  
              Fill out the form below or reach out directly.
            </p>
          </div>
        </section>

        {/* CONTENT */}
        <section className="section-padding pt-0">
          <div className="container-custom grid lg:grid-cols-5 gap-14">
            {/* INFO */}
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="font-display text-2xl font-semibold mb-6">
                  Contact Information
                </h2>
                <div className="space-y-6">
                  {contactInfo.map((item) => (
                    <div key={item.label} className="flex gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <item.icon size={20} className="text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{item.label}</p>
                        {item.href ? (
                          <a href={item.href} className="font-medium hover:text-primary">
                            {item.value}
                          </a>
                        ) : (
                          <p className="font-medium">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* SOCIALS */}
              <div>
                <h3 className="font-display text-lg font-semibold mb-4">
                  Follow Me
                </h3>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="w-11 h-11 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition"
                    >
                      <social.icon size={18} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* FORM */}
            <div className="lg:col-span-3 bg-surface-elevated rounded-2xl p-8 shadow-sm">
              <h2 className="font-display text-2xl font-semibold mb-6">
                Send a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Honeypot (Spam protection) */}
                <input type="text" name="_gotcha" className="hidden" />

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-medium">Name</label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={errors.name ? 'border-destructive' : ''}
                    />
                    {errors.name && (
                      <p className="text-sm text-destructive">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label className="text-sm font-medium">Email</label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={errors.email ? 'border-destructive' : ''}
                    />
                    {errors.email && (
                      <p className="text-sm text-destructive">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium">Subject</label>
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={errors.subject ? 'border-destructive' : ''}
                  />
                  {errors.subject && (
                    <p className="text-sm text-destructive">{errors.subject}</p>
                  )}
                </div>

                <div>
                  <label className="text-sm font-medium">Message</label>
                  <Textarea
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className={errors.message ? 'border-destructive' : ''}
                  />
                  {errors.message && (
                    <p className="text-sm text-destructive">{errors.message}</p>
                  )}
                </div>

                <Button type="submit" variant="hero" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : <>Send Message <Send size={16} /></>}
                </Button>
              </form>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Contact;
