
import { GraduationCap, Users, CalendarDays, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(14,165,233,0.1)_0%,_rgba(0,0,0,0.5)_100%)]" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center space-y-6 animate-fade-up">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Welcome to the Ocular Family
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Join one of Albion Online's most prestigious guilds and experience
              the perfect balance of competitive gameplay and community support.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90"
                asChild
              >
                <Link to="/about">
                  Learn More <ArrowRight className="ml-2" size={16} />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10"
                onClick={() => window.open("https://discord.gg/ocular", "_blank")}
              >
                Join Discord
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg bg-white/5 backdrop-blur-lg border border-white/10 transition-all duration-300 hover:transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <GraduationCap className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Ocular University</h3>
              <p className="text-gray-400">
                Access our comprehensive training program designed to transform
                beginners into skilled players.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-white/5 backdrop-blur-lg border border-white/10 transition-all duration-300 hover:transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="text-secondary" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Strong Community</h3>
              <p className="text-gray-400">
                Join a supportive community of players who help each other grow
                and succeed.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-white/5 backdrop-blur-lg border border-white/10 transition-all duration-300 hover:transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <CalendarDays className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Daily Events</h3>
              <p className="text-gray-400">
                Participate in daily PvP battles, dungeons, and world boss hunts
                with experienced players.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
