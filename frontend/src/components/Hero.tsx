import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";

const Hero = () => {
  return (
    <section className="relative pt-20 min-h-screen flex items-center">
      {/* Hero Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBanner}
          alt="Genesis NFT Collection Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 py-32">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Enter the
            <span className="block bg-clip-text text-transparent gradient-primary">
              Stacks Era
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Discover the stacks Artelier marketplace with genesis pfp collection
            dropping soon.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="gradient" size="lg" className="gap-2 text-lg">
              Join Waitlist
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="glass" size="lg" className="gap-2 text-lg">
              Explore Collection
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
