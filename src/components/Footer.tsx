import { Shield, Twitter, Linkedin, Github, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Shield className="h-8 w-8 text-accent" />
              <span className="text-2xl font-bold">VeritasChain</span>
            </div>
            <p className="text-primary-foreground/70 mb-6 max-w-md">
              Secure, transparent, and efficient digital identity verification 
              powered by blockchain technology. Building trust in the digital age.
            </p>
            <div className="flex gap-4">
              <Button variant="glass" size="icon">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="glass" size="icon">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="glass" size="icon">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="glass" size="icon">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <ul className="space-y-3 text-primary-foreground/70">
              <li><a href="#" className="hover:text-accent transition-smooth">Features</a></li>
              <li><a href="#" className="hover:text-accent transition-smooth">Security</a></li>
              <li><a href="#" className="hover:text-accent transition-smooth">Pricing</a></li>
              <li><a href="#" className="hover:text-accent transition-smooth">API Documentation</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3 text-primary-foreground/70">
              <li><a href="#" className="hover:text-accent transition-smooth">About Us</a></li>
              <li><a href="#" className="hover:text-accent transition-smooth">Careers</a></li>
              <li><a href="#" className="hover:text-accent transition-smooth">Blog</a></li>
              <li><a href="#" className="hover:text-accent transition-smooth">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/70 text-sm">
            © 2024 VeritasChain. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-primary-foreground/70">
            <a href="#" className="hover:text-accent transition-smooth">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-smooth">Terms of Service</a>
            <a href="#" className="hover:text-accent transition-smooth">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;