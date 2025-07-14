import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Play, Clock } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Monarch Snake",
    status: "LIVE",
    description: "Classic snake game with Monad blockchain integration. Test your skills in this beta version.",
    link: "https://monad-neon-snake-04.vercel.app",
    isLive: true,
    gradient: "from-success to-success-glow"
  },
  {
    id: 2,
    title: "Realm Runner",
    status: "COMING SOON",
    description: "Endless runner through mystical Monad realms with NFT collectibles.",
    isLive: false,
    gradient: "from-gaming-purple to-gaming-pink"
  },
  {
    id: 3,
    title: "Chain Legends",
    status: "COMING SOON", 
    description: "Turn-based strategy game where every move is recorded on-chain.",
    isLive: false,
    gradient: "from-gaming-pink to-gaming-orange"
  },
  {
    id: 4,
    title: "Monad Miner",
    status: "COMING SOON",
    description: "Resource management game with real blockchain mining mechanics.",
    isLive: false,
    gradient: "from-gaming-orange to-gaming-purple"
  },
  {
    id: 5,
    title: "Pixel Warriors",
    status: "COMING SOON",
    description: "Retro-style battle arena with modern blockchain features.",
    isLive: false,
    gradient: "from-accent to-primary"
  },
  {
    id: 6,
    title: "Crypto Quest",
    status: "COMING SOON",
    description: "RPG adventure where your achievements become tradable assets.",
    isLive: false,
    gradient: "from-primary to-gaming-glow"
  }
];

export const ProjectGrid = () => {
  return (
    <section id="explore" className="py-20 px-4">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Gaming Projects
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover innovative blockchain gaming experiences built on the Monad ecosystem
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`glass-card rounded-xl p-6 hover-glow transition-all duration-300 ${
                !project.isLive ? 'opacity-75 blur-[1px] hover:blur-none hover:opacity-100' : ''
              }`}
            >
              {/* Project Header */}
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-foreground">
                  {project.title}
                </h3>
                <Badge 
                  variant={project.isLive ? "default" : "secondary"}
                  className={`${
                    project.isLive 
                      ? 'bg-success text-success-foreground glow-success' 
                      : 'bg-warning text-warning-foreground'
                  }`}
                >
                  {project.isLive && <Play className="w-3 h-3 mr-1" />}
                  {!project.isLive && <Clock className="w-3 h-3 mr-1" />}
                  {project.status}
                </Badge>
              </div>

              {/* Gradient Visual */}
              <div className={`h-32 rounded-lg mb-4 bg-gradient-to-br ${project.gradient} opacity-80`}>
                <div className="w-full h-full rounded-lg bg-gradient-to-t from-background/40 to-transparent flex items-center justify-center">
                  <div className="text-6xl opacity-20">
                    {project.isLive ? '🎮' : '⏳'}
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                {project.description}
              </p>

              {/* Action Button */}
              {project.isLive ? (
                <Button 
                  className="w-full bg-success hover:bg-success/90 text-success-foreground glow-success"
                  onClick={() => window.open(project.link, '_blank')}
                >
                  <Play className="w-4 h-4 mr-2" />
                  Play Now
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              ) : (
                <Button 
                  variant="outline" 
                  className="w-full border-muted text-muted-foreground cursor-not-allowed"
                  disabled
                >
                  <Clock className="w-4 h-4 mr-2" />
                  Coming Soon
                </Button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};