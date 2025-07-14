import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { ProjectGrid } from '@/components/ProjectGrid';
import { Footer } from '@/components/Footer';
import { FloatingParticles } from '@/components/FloatingParticles';

const Index = () => {
  return (
    <div className="min-h-screen bg-gaming-gradient relative overflow-hidden">
      {/* Animated background with particles */}
      <FloatingParticles />
      
      {/* Main content */}
      <div className="relative z-10">
        <Header />
        <HeroSection />
        <ProjectGrid />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
