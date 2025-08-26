import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "../../public/images/Logo.jpg"

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-primary/95 backdrop-blur-sm border-b border-primary-glow/20 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center">
              <img className="rounded-lg" src="/images/Logo.jpg" alt="Logo" />
            </div>
            <span className="text-primary-foreground font-bold text-xl">Steel Structures ZW</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-primary-foreground hover:text-accent transition-colors link-animated">
              Home
            </a>
            <a href="#about" className="text-primary-foreground hover:text-accent transition-colors link-animated">
              About
            </a>
            <a href="#services" className="text-primary-foreground hover:text-accent transition-colors link-animated">
              Services
            </a>
            <a href="#projects" className="text-primary-foreground hover:text-accent transition-colors link-animated">
              Projects
            </a>
            <a href="https://wa.me/263782899160">
              <Button className="btn-hero">
              Get A Quote
            </Button>
            </a>
            
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-primary-foreground hover:bg-primary-glow/20"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-primary/95 backdrop-blur-sm">
              <a href="#home" className="block px-3 py-2 text-primary-foreground hover:bg-primary-glow/20 rounded-md">
                Home
              </a>
              <a href="#about" className="block px-3 py-2 text-primary-foreground hover:bg-primary-glow/20 rounded-md">
                About
              </a>
              <a href="#services" className="block px-3 py-2 text-primary-foreground hover:bg-primary-glow/20 rounded-md">
                Services
              </a>
              <a href="#projects" className="block px-3 py-2 text-primary-foreground hover:bg-primary-glow/20 rounded-md">
                Projects
              </a>
              <div className="px-3 pt-2">
                <a href="https://wa.me/263782899160">
              <Button className="btn-hero">
              Get A Quote
            </Button>
            </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;