const AboutSection = () => {
  return (
    <section className="py-24 px-6" id="about">
      <div className="container mx-auto max-w-5xl">
        <div className="flex items-center gap-3 mb-12">
          <span className="font-mono text-primary text-sm">01.</span>
          <h2 className="font-mono text-2xl md:text-3xl font-bold text-foreground">About</h2>
          <div className="flex-1 h-px bg-border ml-4" />
        </div>

        <div className="max-w-2xl">
          <p className="text-secondary-foreground leading-relaxed mb-4">
            I specialize in backend architecture, API design, and microservices with a
            strong focus on performance and security. I currently lead backend
            development for production systems at NotAlone Ltd.
          </p>
          <p className="text-secondary-foreground leading-relaxed mb-8">
            My background includes delivering cross-platform mobile backends, real-time
            features like chat and payments, and collaborating closely with frontend and
            QA teams in agile delivery cycles.
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="font-mono text-primary text-sm mb-2 tracking-wider uppercase">
                Experience
              </h3>
              <ul className="space-y-3 text-secondary-foreground">
                <li>
                  <span className="text-foreground font-medium">Backend Team Lead</span> - NotAlone Ltd. (Jun 2025 - Present)
                </li>
                <li>
                  <span className="text-foreground font-medium">Mid-Level Software Developer</span> - NotAlone Ltd. (Jun 2023 - Jun 2025)
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-mono text-primary text-sm mb-2 tracking-wider uppercase">
                Education
              </h3>
              <ul className="space-y-3 text-secondary-foreground">
                <li>MSc Cyber Security and Forensic Information Technology - University of Portsmouth (Sep 2025 - Sep 2026)</li>
                <li>BASc Cybersecurity and Forensics Computing - University of Portsmouth (Sep 2022 - May 2025)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
