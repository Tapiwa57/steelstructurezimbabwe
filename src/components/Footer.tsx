import {MapPin, Phone, Mail } from "lucide-react";
import Logo from "../../public/images/Logo.jpg"

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container px-4 mx-auto py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center">
                <img className="rounded-lg" src="/images/Logo.jpg" alt="Logo" />
              </div>
              <div>
                <div className="font-bold text-lg">Steel Structures</div>
                <div className="text-sm text-primary-foreground/70">Zimbabwe</div>
              </div>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Your trusted partner in high quality steel buildings. We deliver durability, 
              affordability, and fast turn arounds across Zimbabwe.
            </p>
          </div>

          {/* Menu Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">MENU</h3>
            <div className="space-y-3">
              <a href="#home" className="block text-primary-foreground/80 hover:text-accent transition-colors link-animated">
                Home
              </a>
              <a href="#about" className="block text-primary-foreground/80 hover:text-accent transition-colors link-animated">
                About Us
              </a>
              <a href="#services" className="block text-primary-foreground/80 hover:text-accent transition-colors link-animated">
                Services
              </a>
              <a href="#projects" className="block text-primary-foreground/80 hover:text-accent transition-colors link-animated">
                Projects
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">OUR SERVICES</h3>
            <div className="space-y-3">
              <div className="text-primary-foreground/80">Commercial Buildings</div>
              <div className="text-primary-foreground/80">Industrial Structures</div>
              <div className="text-primary-foreground/80">Residential Projects</div>
              <div className="text-primary-foreground/80">Warehouse Construction</div>
              <div className="text-primary-foreground/80">Engineering Solutions</div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">ADDRESS: HARARE</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-accent mt-0.5" />
                <div className="text-primary-foreground/80">
                  3667 Mainway Meadows<br />
                  Waterfalls<br />
                  Harare, Zimbabwe
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent" />
                <div className="text-primary-foreground/80">+263 782 899 160</div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent" />
                <div className="text-primary-foreground/80">sales@steelstructureszim.co.zw</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-glow/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-primary-foreground/60 text-sm">
              © 2025 - Steel Structures Zimbabwe. All rights reserved.
            </div>
            <div className="text-primary-foreground/60 text-sm">
              Designed by Tapiwa Ndemera
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;