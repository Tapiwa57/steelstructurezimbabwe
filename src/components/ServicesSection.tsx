import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Factory, Home, Building, GraduationCap, Wrench, Hammer } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Factory,
      title: "Commercial",
      description: "High-quality commercial steel structures for businesses and industrial facilities",
      color: "bg-blue-500"
    },
    {
      icon: Building,
      title: "Retail", 
      description: "Durable retail spaces and shopping centers built with precision steel frameworks",
      color: "bg-green-500"
    },
    {
      icon: Factory,
      title: "Industrial",
      description: "Heavy-duty industrial structures designed for manufacturing and processing facilities",
      color: "bg-purple-500"
    },
    {
      icon: GraduationCap,
      title: "Educational",
      description: "Safe and modern educational buildings including schools and training facilities",
      color: "bg-orange-500"
    },
    {
      icon: Home,
      title: "Residential",
      description: "Custom residential steel structures for homes and residential developments",
      color: "bg-pink-500"
    },
    {
      icon: Wrench,
      title: "Engineering",
      description: "Comprehensive engineering solutions and structural design services",
      color: "bg-teal-500"
    }
  ];

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container px-4 mx-auto">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <p className="text-accent font-semibold text-lg">OUR SERVICES</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            We're providing quality steel structure and service
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive steel construction solutions tailored to meet your specific needs 
            across various sectors and industries.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="construction-card group animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-8 text-center">
                  <div className="space-y-4">
                    <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto glow-primary group-hover:animate-construction-pulse">
                      <IconComponent className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-foreground">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                    {/*<Button variant="outline" className="mt-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      Read More
                    </Button>*/}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-primary rounded-2xl p-12 text-primary-foreground animate-fade-in">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold">Need a partner for your next construction project?</h3>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              Let's work together to bring your vision to life with our expertise in steel construction and engineering.
            </p>
            <a href="https://wa.me/263782899160">
              <Button className="btn-hero text-lg px-8 py-4">
              Get in Touch
            </Button>
            </a>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;