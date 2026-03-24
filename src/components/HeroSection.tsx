import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-30"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      
      <div className="relative z-10 container mx-auto px-6 text-center">
        <p className="font-mono text-primary text-sm tracking-widest mb-4">
          <span className="text-muted-foreground">$</span> whoami
        </p>
        <h1 className="font-mono text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground">
          Backend <span className="text-primary text-glow">Engineer</span>
        </h1>
        <p className="text-secondary-foreground text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
          I build scalable systems, APIs, and infrastructure that power great products. 
          Passionate about clean architecture, performance, and reliability.
        </p>
        <div className="font-mono text-sm text-muted-foreground flex items-center justify-center gap-2">
          <span className="text-primary">→</span>
          <span>scroll to explore</span>
          <span className="inline-block w-2 h-4 bg-primary animate-blink" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
