import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
}

interface ProjectGroup {
  title: string;
  projects: Project[];
}

const projectGroups: ProjectGroup[] = [
  {
    title: "Client Websites",
    projects: [
      {
        title: "Vista Forest",
        description: "Guest house website with bilingual content, gallery, relaxation and activities sections, plus an integrated inquiry form for availability and bookings.",
        tech: ["Business Website", "Multilingual (BG/EN)", "Inquiry Form", "Hospitality"],
        live: "https://vista-forest.com/",
      },
      {
        title: "WETDREAMS",
        description: "Jet ski rental and water events website featuring package pricing, location-based booking flows, and reservation inquiries for multiple destinations.",
        tech: ["Business Website", "Multilingual (BG/EN)", "Booking Form", "Service Packages"],
        live: "https://wetdream.org/",
      },
      {
        title: "We Love Junk",
        description: "Service-driven website for London waste removal with structured service pages, coverage and pricing information, and quote/booking conversion paths.",
        tech: ["Service Platform", "SEO Content", "Lead Generation", "UK Market"],
        live: "https://welovejunk.co.uk/",
      },
      {
        title: "dcgroup136",
        description: "Construction company website focused on residential and commercial services, company credibility sections, and clear contact-driven conversion design.",
        tech: ["Corporate Website", "Bulgarian Market", "Service Presentation", "Lead Capture"],
        live: "https://dcgroup136.com/",
      },
      {
        title: "Djambo 33",
        description: "Infrastructure construction brand website showcasing company positioning and regional business presence in Veliko Tarnovo.",
        tech: ["Corporate Website", "Brand Presence", "Construction Industry"],
        live: "https://djambo33.com/",
      },
    ],
  },
  {
    title: "Software Projects",
    projects: [
      {
        title: "Study Buddy - Intelligent Deadline Tracker",
        description: "Built a full-stack platform for managing academic deadlines and AI-powered revision recommendations, including JWT authentication and role-based access control.",
        tech: ["Vue.js", "Node.js", "FastAPI", "MySQL", "AWS"],
      },
      {
        title: "NotAlone Mobile Backend",
        description: "Designed and implemented most backend services for a cross-platform mobile application, including REST APIs, chat capabilities, and payments integration.",
        tech: ["Node.js", "REST APIs", "Flutter Integration", "Apple Pay"],
      },
      {
        title: "Microservices Platform Modernization",
        description: "Designed and implemented microservices architecture as backend team lead, reducing system latency by 30% across multiple applications.",
        tech: ["Node.js", "Microservices", "API Design", "Performance Optimization"],
      },
      {
        title: "IoT RFID Access Control System",
        description: "Implemented an RFID-based access control system with real-time logging, embedded scanning logic, and a Flask backend for event tracking.",
        tech: ["C", "Arduino", "Python", "Flask", "SQLite"],
      },
    ],
  },
];

const ProjectsSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="flex items-center gap-3 mb-12">
          <span className="font-mono text-primary text-sm">02.</span>
          <h2 className="font-mono text-2xl md:text-3xl font-bold text-foreground">Projects</h2>
          <div className="flex-1 h-px bg-border ml-4" />
        </div>

        <div className="space-y-12">
          {projectGroups.map((group) => (
            <div key={group.title}>
              <h3 className="font-mono text-primary text-sm mb-5 tracking-wider uppercase">
                {group.title}
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {group.projects.map((project) => (
                  <article
                    key={project.title}
                    className="bg-card border border-border rounded-lg p-6 card-hover group"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="font-mono text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h4>
                      <div className="flex gap-2">
                        {project.github && (
                          <a href={project.github} className="text-muted-foreground hover:text-primary transition-colors">
                            <Github size={18} />
                          </a>
                        )}
                        {project.live && (
                          <a href={project.live} className="text-muted-foreground hover:text-accent transition-colors">
                            <ExternalLink size={18} />
                          </a>
                        )}
                      </div>
                    </div>
                    <p className="text-secondary-foreground text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="font-mono text-xs px-2 py-1 rounded bg-secondary text-primary"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
