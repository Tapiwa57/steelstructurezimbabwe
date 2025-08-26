import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Building } from "lucide-react";
import plantImage from "@/assets/plant-construction.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-gradient-subtle">
      <div className="container px-4 mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* About Image */}
          <div className="animate-fade-in">
            <div className="relative">
              <img 
                src={plantImage} 
                alt="Steel construction work"
                className="rounded-2xl shadow-construction w-full"
              />
              <div className="absolute -bottom-8 -right-8 bg-gradient-accent p-6 rounded-2xl text-accent-foreground shadow-accent">
                <div className="text-center">
                  <Building className="h-8 w-8 mx-auto mb-2" />
                  <p className="font-semibold">Innovative Work</p>
                </div>
              </div>
            </div>
          </div>

          {/* About Content */}
          <div className="animate-scale-in space-y-8">
            <div className="space-y-4">
              <p className="text-accent font-semibold text-lg">ABOUT US</p>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Steel Structures Zimbabwe
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Steel Structures Zimbabwe is your trusted partner in high quality steel buildings. 
                We provide an innovative work and infrastructure to customer requirement and 
                desire to the agriculture structure, commercial, roofing structural, plastering 
                building residential, church and industrial and residential renovation and improvement.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From warehouses and workshops to market shades and custom projects we deliver 
                durability, affordability, and fast turn arounds across Zimbabwe.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Mission */}
              <Card className="construction-card">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <Target className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Mission Statement</h3>
                      <p className="text-muted-foreground">
                        To deliver exceptional steel construction solutions that exceed expectations 
                        while maintaining the highest standards of quality and safety.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Vision */}
              <Card className="construction-card">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center">
                      <Eye className="h-6 w-6 text-accent-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
                      <p className="text-muted-foreground">
                        To be Zimbabwe's leading steel construction company, known for innovation, 
                        reliability, and transforming communities through quality infrastructure.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Button className="btn-primary text-lg px-8 py-4">
              Discover More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;