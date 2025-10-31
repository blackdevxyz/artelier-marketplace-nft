import { Button } from "@/components/ui/button";
import { Wallet, Menu } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold bg-clip-text text-transparent gradient-primary">
              ARTELIER
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#collection"
              className="text-foreground hover:text-primary transition-smooth"
            >
              Collection
            </a>
            <a
              href="#about"
              className="text-foreground hover:text-primary transition-smooth"
            >
              About
            </a>
            <a
              href="#waitlist"
              className="text-foreground hover:text-primary transition-smooth"
            >
              Waitlist
            </a>
            <Button variant="gradient" size="lg" className="gap-2">
              <Wallet className="w-5 h-5" />
              Connect Wallet
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <a
                href="#collection"
                className="text-foreground hover:text-primary transition-smooth"
              >
                Collection
              </a>
              <a
                href="#about"
                className="text-foreground hover:text-primary transition-smooth"
              >
                About
              </a>
              <a
                href="#waitlist"
                className="text-foreground hover:text-primary transition-smooth"
              >
                Waitlist
              </a>
              <Button variant="gradient" size="lg" className="gap-2 w-full">
                <Wallet className="w-5 h-5" />
                Connect Wallet
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
