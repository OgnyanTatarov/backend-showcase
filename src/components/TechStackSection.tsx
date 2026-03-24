const categories = [
  {
    label: "Backend",
    items: ["Node.js", "Java", "Supabase", "REST APIs"],
  },
  {
    label: "Databases",
    items: ["PostgreSQL", "MySQL", "SQL"],
  },
  {
    label: "Cloud & Tools",
    items: ["AWS", "Git", "Postman", "Swagger"],
  },
  {
    label: "Languages",
    items: ["TypeScript", "JavaScript", "Dart", "PHP"],
  },
];

const TechStackSection = () => {
  return (
    <section className="py-24 px-6 bg-card/50">
      <div className="container mx-auto max-w-5xl">
        <div className="flex items-center gap-3 mb-12">
          <span className="font-mono text-primary text-sm">03.</span>
          <h2 className="font-mono text-2xl md:text-3xl font-bold text-foreground">Tech Stack</h2>
          <div className="flex-1 h-px bg-border ml-4" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat) => (
            <div key={cat.label}>
              <h3 className="font-mono text-sm text-primary mb-4 tracking-wider uppercase">
                {cat.label}
              </h3>
              <ul className="space-y-2">
                {cat.items.map((item) => (
                  <li key={item} className="text-secondary-foreground text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
