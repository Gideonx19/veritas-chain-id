import { Button } from "@/components/ui/button";
import { Shield, ArrowRight, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-blockchain.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-accent/10 backdrop-blur-sm border border-accent/20 rounded-full px-4 py-2 mb-6">
              <Shield className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium text-accent">Blockchain-Powered Security</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              Secure Digital Identity
              <span className="block text-accent">Verification</span>
            </h1>
            
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl">
              Experience the future of identity verification with our blockchain-based platform. 
              Secure, transparent, and tamper-proof digital identity solutions for the modern world.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button variant="hero" size="lg" className="group">
                Start Verification
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="glass" size="lg">
                Watch Demo
              </Button>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 text-sm text-primary-foreground/70">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-accent" />
                <span>Bank-level Security</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-accent" />
                <span>GDPR Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-accent" />
                <span>Instant Verification</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative animate-float">
              <img 
                src={heroImage} 
                alt="Blockchain Digital Identity Verification"
                className="w-full h-auto rounded-2xl shadow-card"
              />
              <div className="absolute -inset-1 bg-gradient-accent rounded-2xl opacity-30 blur-xl animate-pulse-glow" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full p-1">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mx-auto animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;