import { Github, Linkedin, Mail } from "lucide-react";

const links = [
  { icon: Github, label: "GitHub", href: "#", username: "github.com/yourusername" },
  { icon: Linkedin, label: "LinkedIn", href: "#", username: "linkedin.com/in/yourusername" },
  { icon: Mail, label: "Email", href: "mailto:you@example.com", username: "you@example.com" },
];

const ContactSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-5xl text-center">
        <div className="flex items-center justify-center gap-3 mb-12">
          <span className="font-mono text-primary text-sm">04.</span>
          <h2 className="font-mono text-2xl md:text-3xl font-bold text-foreground">Get In Touch</h2>
        </div>

        <p className="text-secondary-foreground max-w-lg mx-auto mb-10">
          Open to opportunities, collaborations, and interesting backend challenges. 
          Let's build something robust together.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="flex items-center gap-3 px-5 py-3 rounded-lg border border-border bg-card card-hover font-mono text-sm text-secondary-foreground hover:text-primary transition-colors"
            >
              <link.icon size={18} />
              <span>{link.username}</span>
            </a>
          ))}
        </div>

        <div className="mt-24 pt-8 border-t border-border">
          <p className="font-mono text-xs text-muted-foreground">
            <span className="text-primary">$</span> echo "Built with passion and clean code"
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
