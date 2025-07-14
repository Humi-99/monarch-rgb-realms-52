import { Heart, Github, Twitter, Send } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="glass-card border-t border-glass-border/20 py-8 mt-20">
      <div className="container mx-auto px-4">
        {/* Copyright */}
        <div className="text-center mb-6">
          <p className="text-muted-foreground">
            © 2025 Monarch Projects. Built with{' '}
            <Heart className="inline w-4 h-4 text-primary mx-1" />
            by the Monad Gaming Community.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6">
          <a
            href="https://twitter.com/monadxyz"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors hover-lift"
          >
            <Twitter className="w-5 h-5" />
            <span className="hidden sm:inline">Twitter</span>
          </a>
          
          <a
            href="https://t.me/monadannounce"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors hover-lift"
          >
            <Send className="w-5 h-5" />
            <span className="hidden sm:inline">Telegram</span>
          </a>
          
          <a
            href="https://github.com/monadxyz"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors hover-lift"
          >
            <Github className="w-5 h-5" />
            <span className="hidden sm:inline">GitHub</span>
          </a>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-6 pt-6 border-t border-glass-border/10">
          <p className="text-sm text-muted-foreground/70">
            Powered by Monad • Built for the Future of Gaming
          </p>
        </div>
      </div>
    </footer>
  );
};