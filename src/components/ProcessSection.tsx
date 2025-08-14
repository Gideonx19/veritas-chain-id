import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, Search, Shield, CheckCircle, ArrowRight } from "lucide-react";
import processImage from "@/assets/verification-process.jpg";

const steps = [
  {
    icon: Upload,
    title: "Upload Documents",
    description: "Securely upload your identity documents using our encrypted platform. We support passports, driver's licenses, and national IDs."
  },
  {
    icon: Search,
    title: "AI Verification",
    description: "Our advanced AI algorithms analyze your documents for authenticity, checking security features and validating against global databases."
  },
  {
    icon: Shield,
    title: "Blockchain Recording",
    description: "Verification results are immutably recorded on the blockchain, creating a tamper-proof digital identity certificate."
  },
  {
    icon: CheckCircle,
    title: "Instant Confirmation",
    description: "Receive your verified digital identity instantly. Use it across partner platforms for seamless authentication."
  }
];

const ProcessSection = () => {
  return (
    <section id="process" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/10 backdrop-blur-sm border border-accent/20 rounded-full px-4 py-2 mb-6">
            <Shield className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-accent">Simple Process</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            How VeritasChain
            <span className="block text-accent">Verification Works</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our streamlined verification process combines human oversight with AI automation 
            to deliver fast, accurate, and secure identity verification.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="relative order-2 lg:order-1">
            <img 
              src={processImage} 
              alt="Verification Process"
              className="w-full h-auto rounded-2xl shadow-card animate-float"
            />
            <div className="absolute -inset-1 bg-gradient-accent rounded-2xl opacity-20 blur-xl" />
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="space-y-8">
              {steps.map((step, index) => (
                <Card key={index} className="group hover:shadow-card transition-smooth border-border/20 hover:border-accent/30">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center group-hover:shadow-glow transition-smooth">
                          <step.icon className="h-6 w-6 text-primary-foreground" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-sm font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">
                            Step {index + 1}
                          </span>
                          <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-gradient-primary rounded-3xl p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              Ready to Get Verified?
            </h3>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Join the future of digital identity verification. Start your verification process 
              today and experience the security of blockchain technology.
            </p>
            <Button variant="accent" size="lg" className="group">
              Start Verification Now
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;