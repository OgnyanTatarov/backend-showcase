import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
}

const projects: Project[] = [
  {
    title: "Distributed Task Queue",
    description: "High-throughput distributed task processing system handling 10K+ jobs/sec with Redis-backed queues, retry logic, and dead-letter handling.",
    tech: ["Go", "Redis", "gRPC", "Docker"],
    github: "#",
  },
  {
    title: "REST API Gateway",
    description: "Centralized API gateway with rate limiting, JWT authentication, request validation, and automatic OpenAPI documentation generation.",
    tech: ["Node.js", "TypeScript", "PostgreSQL", "Nginx"],
    github: "#",
    live: "#",
  },
  {
    title: "Real-time Event Pipeline",
    description: "Event-driven data pipeline processing millions of events daily with exactly-once semantics and real-time analytics dashboards.",
    tech: ["Python", "Kafka", "ClickHouse", "Kubernetes"],
    github: "#",
  },
  {
    title: "Auth Microservice",
    description: "OAuth2/OIDC-compliant authentication service with MFA support, session management, and role-based access control.",
    tech: ["Rust", "PostgreSQL", "Redis", "JWT"],
    github: "#",
    live: "#",
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

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <article
              key={project.title}
              className="bg-card border border-border rounded-lg p-6 card-hover group"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-mono text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
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
    </section>
  );
};

export default ProjectsSection;
