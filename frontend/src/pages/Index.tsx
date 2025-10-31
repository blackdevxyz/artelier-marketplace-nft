import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import GenesisCollection from "@/components/GenesisCollection";
import Waitlist from "@/components/Waitlist";
import Footer from "@/components/Footer";
import Leaderboard from "@/components/Leaderboard";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <GenesisCollection />
      <Leaderboard />
      <Waitlist />
      <Footer />
    </div>
  );
};

export default Index;
