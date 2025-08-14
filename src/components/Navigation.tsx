import { Button } from "@/components/ui/button";
import { Shield, Menu, X } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <Shield className="h-8 w-8 text-accent" />
            <span className="text-xl font-bold text-foreground">VeritasChain</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-smooth">
              Features
            </a>
            <a href="#security" className="text-muted-foreground hover:text-foreground transition-smooth">
              Security
            </a>
            <a href="#process" className="text-muted-foreground hover:text-foreground transition-smooth">
              How it Works
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-smooth">
              Contact
            </a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost">Sign In</Button>
            <Button variant="hero">Get Started</Button>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-t border-border/20 py-4">
            <div className="flex flex-col gap-4">
              <a href="#features" className="text-muted-foreground hover:text-foreground transition-smooth">
                Features
              </a>
              <a href="#security" className="text-muted-foreground hover:text-foreground transition-smooth">
                Security
              </a>
              <a href="#process" className="text-muted-foreground hover:text-foreground transition-smooth">
                How it Works
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-foreground transition-smooth">
                Contact
              </a>
              <div className="flex flex-col gap-2 mt-4">
                <Button variant="ghost">Sign In</Button>
                <Button variant="hero">Get Started</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;