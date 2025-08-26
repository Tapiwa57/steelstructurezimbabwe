import { Building2, Shield, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-construction.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent"></div>
      </div>

      <div className="container relative z-10 px-4 mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="animate-fade-in">
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-accent font-semibold text-lg animate-slide-in">Professional Contractor</p>
                <h1 className="text-5xl lg:text-7xl font-bold text-primary-foreground leading-tight">
                  We Build <br />
                  <span className="bg-gradient-to-r from-accent to-accent-glow bg-clip-text text-transparent">
                    Together
                  </span>
                </h1>
                <h2 className="text-3xl lg:text-4xl font-semibold text-primary-foreground/90">
                  Steel and Brick
                </h2>
              </div>
              
              <p className="text-xl text-primary-foreground/80 max-w-lg leading-relaxed">
                Listen better. Plan better. Build better. We have successfully completed more than 
                <span className="text-accent font-semibold"> 100+ projects</span> across Zimbabwe.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button className="btn-hero text-lg px-8 py-4">
                  Discover More
                </Button>
                  <a href="https://wa.me/263782899160">
              <Button className="btn-hero">
              Get A Quote
            </Button>
            </a>
              </div>
            </div>
          </div>

          {/* Hero Features */}
          <div className="animate-scale-in">
            <div className="grid gap-6">
              <div className="construction-card p-6 bg-primary-foreground/10 backdrop-blur-sm border-primary-glow/20">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center glow-accent">
                    <Building2 className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="text-primary-foreground font-semibold text-lg">Built up Steel</h3>
                    <p className="text-primary-foreground/70">Providing durable steel structures for commercial use</p>
                  </div>
                </div>
              </div>

              <div className="construction-card p-6 bg-primary-foreground/10 backdrop-blur-sm border-primary-glow/20">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center glow-accent">
                    <Shield className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="text-primary-foreground font-semibold text-lg">Quality Material</h3>
                    <p className="text-primary-foreground/70">High-grade steel to ensure long-lasting strength</p>
                  </div>
                </div>
              </div>

              <div className="construction-card p-6 bg-primary-foreground/10 backdrop-blur-sm border-primary-glow/20">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center glow-accent">
                    <Users className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="text-primary-foreground font-semibold text-lg">Professional Work</h3>
                    <p className="text-primary-foreground/70">Expert solutions with precision, safety and reliability</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;