import { Button } from '@/components/ui/button';
import { Gamepad2, Zap } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="container mx-auto text-center max-w-4xl">
        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-gaming-pink via-gaming-glow to-gaming-orange bg-clip-text text-transparent">
            Explore Our
          </span>
          <br />
          <span className="text-foreground">
            Experimental Realms
          </span>
        </h1>

        {/* Subtext */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Dive into Monad-powered gaming projects.{' '}
          <span className="text-success font-semibold glow-success">One LIVE</span>.{' '}
          <span className="text-warning font-semibold">Five incoming</span>.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground glow-primary hover-lift text-lg px-8 py-6"
          >
            <Gamepad2 className="mr-2 h-5 w-5" />
            Start Playing
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-accent text-accent hover:bg-accent/10 hover:border-accent text-lg px-8 py-6"
          >
            <Zap className="mr-2 h-5 w-5" />
            View Projects
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-16 max-w-md mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-success glow-success">1</div>
            <div className="text-sm text-muted-foreground">Live Game</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-warning">5</div>
            <div className="text-sm text-muted-foreground">In Development</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">∞</div>
            <div className="text-sm text-muted-foreground">Possibilities</div>
          </div>
        </div>
      </div>
    </section>
  );
};