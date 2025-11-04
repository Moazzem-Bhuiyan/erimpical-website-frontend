import Animatetext from '@/component/AnimatedText/AnimatedText';
import { Twitter, Facebook, Instagram } from 'lucide-react';

export function ContactInfo() {
  return (
    <div className="!space-y-8">
      <div>
        <Animatetext x={-20} duration={1}>
          {' '}
          <h1 className="!mb-2 text-4xl font-bold !tracking-tight">Get In Touch</h1>
        </Animatetext>
        <Animatetext x={20} duration={1}>
          <p className="text-gray-600">
            We're here to help you with any questions or concerns you may have. Whether you need
            help with a project, have a question about our services, or want to learn more about our
            company, we're just a call away.
          </p>
        </Animatetext>
      </div>

      <div className="space-y-6">
        <div className="!mb-2">
          <h3 className="!mb-1 font-semibold">Email</h3>
          <p className="text-foreground">info@company.com</p>
          <p className="text-sm text-muted-foreground">We'll respond within 24 hours</p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <h3 className="!mb-1 font-semibold">Phone</h3>
            <p className="text-foreground">(555) 123-4567</p>
            <p className="text-sm text-muted-foreground">24/7 Emergency Line</p>
          </div>

          <div>
            <h3 className="!mb-1 font-semibold">Location</h3>
            <p className="text-foreground">123 Electric Avenue</p>
            <p className="text-sm text-muted-foreground">Springfield, ST 12345</p>
          </div>
        </div>
      </div>

      <div className="flex gap-4">
        <a
          href="#"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border hover:bg-accent"
          aria-label="Twitter"
        >
          <Twitter className="h-5 w-5" />
        </a>
        <a
          href="#"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border hover:bg-accent"
          aria-label="Facebook"
        >
          <Facebook className="h-5 w-5" />
        </a>
        <a
          href="#"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border hover:bg-accent"
          aria-label="Instagram"
        >
          <Instagram className="h-5 w-5" />
        </a>
      </div>
    </div>
  );
}
