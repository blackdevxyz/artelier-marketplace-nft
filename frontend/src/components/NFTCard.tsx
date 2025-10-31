import { Card } from "@/components/ui/card";

interface NFTCardProps {
  image: string;
  title: string;
  id: string;
}

const NFTCard = ({ image, title, id }: NFTCardProps) => {
  return (
    <Card className="group overflow-hidden gradient-card border-border hover:border-primary transition-smooth cursor-pointer">
      <div className="relative overflow-hidden aspect-square">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-smooth group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-smooth flex items-end p-6">
          <div>
            <h3 className="text-xl font-bold mb-1">{title}</h3>
            <p className="text-muted-foreground">#{id}</p>
          </div>
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-center">
          <span className="text-sm text-muted-foreground">
            Genesis Collection
          </span>
          <span className="text-sm font-bold text-primary">Mint soon</span>
        </div>
      </div>
    </Card>
  );
};

export default NFTCard;
