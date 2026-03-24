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
            I'm a backend software engineer who thrives on designing systems that scale. 
            My work focuses on building reliable APIs, data pipelines, and distributed architectures 
            that handle real-world complexity with grace.
          </p>
          <p className="text-secondary-foreground leading-relaxed">
            I care deeply about code quality, observability, and building systems that other 
            engineers love to work with. When I'm not writing code, I'm probably reading about 
            distributed systems or contributing to open source.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
