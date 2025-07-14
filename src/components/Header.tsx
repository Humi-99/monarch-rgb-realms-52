import { useState } from 'react';
import { Menu, X, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import monarchLogo from '@/assets/monarch-logo.png';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-glass-border/20">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo & Title */}
        <div className="flex items-center gap-3">
          <img 
            src={monarchLogo} 
            alt="Monarch Projects" 
            className="w-10 h-10 glow-primary"
          />
          <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Monarch Zone
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a 
            href="#explore" 
            className="text-foreground/80 hover:text-primary transition-colors"
          >
            Explore
          </a>
          <Button 
            variant="outline" 
            className="border-primary/50 text-primary hover:bg-primary/10 hover:border-primary"
          >
            Submit
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-foreground"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden glass-card border-t border-glass-border/20">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <a 
              href="#explore" 
              className="text-foreground/80 hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Explore
            </a>
            <Button 
              variant="outline" 
              className="border-primary/50 text-primary hover:bg-primary/10 hover:border-primary w-fit"
              onClick={() => setIsMenuOpen(false)}
            >
              Submit
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};