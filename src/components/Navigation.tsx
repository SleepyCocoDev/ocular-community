import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Shield, GraduationCap, CalendarDays, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/", icon: Shield },
    { name: "About", path: "/about", icon: Users },
    { name: "Programs", path: "/programs", icon: GraduationCap },
    { name: "Events", path: "/events", icon: CalendarDays },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2">
              <img
                src="/image-uploads/516d4f81-5ba1-4880-9de9-baed5429739f.png"
                alt="Ocular Logo"
                className="h-8 w-auto"
              />
              <span className="text-white font-bold text-xl">Ocular</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`flex items-center space-x-1 text-sm font-medium transition-colors ${
                    location.pathname === item.path
                      ? "text-primary"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  <Icon size={16} />
                  <span>{item.name}</span>
                </Link>
              );
            })}
            <Button
              variant="secondary"
              className="bg-secondary hover:bg-secondary/90"
              onClick={() => window.open("https://discord.gg/ocular", "_blank")}
            >
              Join Discord
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium ${
                    location.pathname === item.path
                      ? "text-primary bg-primary/10"
                      : "text-gray-300 hover:text-white hover:bg-white/5"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <Icon size={18} />
                  <span>{item.name}</span>
                </Link>
              );
            })}
            <Button
              variant="secondary"
              className="w-full bg-secondary hover:bg-secondary/90 mt-4"
              onClick={() => window.open("https://discord.gg/ocular", "_blank")}
            >
              Join Discord
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
