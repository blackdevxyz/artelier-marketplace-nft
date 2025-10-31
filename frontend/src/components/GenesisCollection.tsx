import NFTCard from "./NFTCard";
import nft1 from "@/assets/nft-1.jpg";
import nft2 from "@/assets/nft-2.jpg";
import nft3 from "@/assets/nft-3.jpg";
import nft4 from "@/assets/nft-4.jpg";
import nft5 from "@/assets/nft-5.jpg";
import nft6 from "@/assets/nft-6.jpg";
import nft7 from "@/assets/nft-7.jpg";
import nft8 from "@/assets/nft-8.jpg";

const nfts = [
  { id: "001", title: "Blackdev", image: nft1 },
  { id: "002", title: "Pookie", image: nft2 },
  { id: "003", title: "Mesan", image: nft3 },
  { id: "004", title: "Holographic Samurai", image: nft4 },
  { id: "005", title: "Cosmic Portal", image: nft5 },
  { id: "006", title: "Digital Phoenix", image: nft6 },
  { id: "007", title: "Velocity Racer", image: nft7 },
  { id: "008", title: "Mystic Oracle", image: nft8 },
];

const GenesisCollection = () => {
  return (
    <section id="collection" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Genesis Collection
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stacks ecosystem exclusive pfps. Identify with the leading ecosystem
            with our genesis nft collection.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {nfts.map((nft) => (
            <NFTCard key={nft.id} {...nft} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GenesisCollection;
