import { Card, CardContent } from "@/components/ui/card";
import { Shield, Lock, Zap, Globe, Users, CheckCircle } from "lucide-react";
import securityIcon from "@/assets/security-icon.jpg";

const features = [
  {
    icon: Shield,
    title: "Blockchain Security",
    description: "Immutable records stored on distributed ledger technology ensure your identity data cannot be tampered with or falsified."
  },
  {
    icon: Lock,
    title: "End-to-End Encryption",
    description: "Military-grade encryption protects your personal information throughout the entire verification process."
  },
  {
    icon: Zap,
    title: "Instant Verification",
    description: "Complete identity verification in minutes, not days. Our automated system processes documents in real-time."
  },
  {
    icon: Globe,
    title: "Global Compliance",
    description: "Fully compliant with GDPR, KYC, and AML regulations across 150+ countries worldwide."
  },
  {
    icon: Users,
    title: "Multi-Party Trust",
    description: "Distributed verification system eliminates single points of failure and builds consensus-based trust."
  },
  {
    icon: CheckCircle,
    title: "Zero-Knowledge Proofs",
    description: "Verify identity without exposing sensitive personal data using advanced cryptographic techniques."
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/10 backdrop-blur-sm border border-accent/20 rounded-full px-4 py-2 mb-6">
            <Shield className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-accent">Advanced Features</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Next-Generation Identity
            <span className="block text-accent">Verification Technology</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our platform combines cutting-edge blockchain technology with advanced cryptography 
            to deliver the most secure and efficient identity verification solution available.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-card transition-smooth border-border/20 hover:border-accent/30">
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:shadow-glow transition-smooth">
                    <feature.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-primary rounded-3xl opacity-10" />
          <div className="relative bg-card rounded-3xl p-8 md:p-12 border border-border/20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl md:text-4xl font-bold text-foreground mb-6">
                  Trusted by Leading Organizations
                </h3>
                <p className="text-lg text-muted-foreground mb-8">
                  Join thousands of organizations worldwide who trust VeritasChain 
                  for their digital identity verification needs.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-accent mb-2">500K+</div>
                    <div className="text-sm text-muted-foreground">Verified Identities</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-accent mb-2">99.9%</div>
                    <div className="text-sm text-muted-foreground">Accuracy Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-accent mb-2">150+</div>
                    <div className="text-sm text-muted-foreground">Countries Supported</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-accent mb-2">24/7</div>
                    <div className="text-sm text-muted-foreground">Support Available</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img 
                  src={securityIcon} 
                  alt="Security and Trust"
                  className="w-full h-auto rounded-2xl animate-float"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;