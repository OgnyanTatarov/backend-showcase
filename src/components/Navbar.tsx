const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto max-w-5xl px-6 h-14 flex items-center justify-between">
        <span className="font-mono text-sm font-bold text-primary">
          {"~/portfolio"}
        </span>
        <div className="flex items-center gap-6">
          {navItems.map((item, i) => (
            <a
              key={item.label}
              href={item.href}
              className="font-mono text-xs text-muted-foreground hover:text-primary transition-colors hidden sm:block"
            >
              <span className="text-primary mr-1">0{i + 1}.</span>
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
