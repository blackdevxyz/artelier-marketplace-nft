"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

interface LeaderboardEntry {
  id: number;
  name: string;
  avatar: string;
  score: number;
}

const leaderboardData = {
  hodlers: [
    {
      id: 1,
      name: "Blackdev",
      avatar: "/assets/blockChain.jpg",
      score: 9800,
    },
    { id: 2, name: "Mesan.defi", avatar: "/assets/mesan.jpg", score: 9350 },
    { id: 3, name: "Mr.T", avatar: "/assets/mrt.jpg", score: 9100 },
    {
      id: 4,
      name: "Kennyrogers.btc",
      avatar: "/assets/ken.jpg",
      score: 8800,
    },
    { id: 5, name: "BlockGuru", avatar: "/assets/nft-9.jpg", score: 8650 },
    { id: 6, name: "PixelLord", avatar: "/assets/nft-10.jpg", score: 8500 },
    { id: 7, name: "DeFiDiva", avatar: "/assets/nft-11.jpg", score: 8320 },
    {
      id: 8,
      name: "StackedSoul",
      avatar: "/assets/nft-4.jpg",
      score: 8100,
    },
    { id: 9, name: "MintMaster", avatar: "/assets/nft-8.jpg", score: 7900 },
    { id: 10, name: "ChainChad", avatar: "/assets/nft-6.jpg", score: 7700 },
  ],
  collectors: [
    {
      id: 1,
      name: "ArtFiend",
      avatar: "/assets/nft-10.jpg",
      score: 9400,
    },
    { id: 2, name: "NFTNinja", avatar: "/assets/nft-1.jpg", score: 9050 },
    { id: 3, name: "TokenMuse", avatar: "/assets/nft-2.jpg", score: 8880 },
    { id: 4, name: "MetaMaven", avatar: "/assets/nft-3.jpg", score: 8700 },
    { id: 5, name: "RareRuler", avatar: "/assets/nft-4.jpg", score: 8500 },
    { id: 6, name: "BlockBaron", avatar: "/assets/nft-5.jpg", score: 8380 },
    { id: 7, name: "SoulSeeker", avatar: "/assets/nft-6.jpg", score: 8200 },
    { id: 8, name: "DegenDuke", avatar: "/assets/nft-7.jpg", score: 7990 },
    { id: 9, name: "MintMuse", avatar: "/assets/nft-8.jpg", score: 7840 },
    { id: 10, name: "PixelPal", avatar: "/assets/nft-9.jpg", score: 7700 },
  ],
};

export default function Leaderboard() {
  const [activeTab, setActiveTab] = useState<"hodlers" | "collectors">(
    "hodlers"
  );
  const data = leaderboardData[activeTab];

  return (
    <section className="w-full py-12">
      <div className="max-w-3xl mx-auto px-4">
        {/* Header */}
        <h2 className="text-3xl font-bold mb-6 text-center">
          🏆 Marketplace Leaderboard
        </h2>

        {/* Tabs */}
        <div className="flex justify-center gap-3 mb-8">
          <Button
            variant={activeTab === "hodlers" ? "gradient" : "glass"}
            onClick={() => setActiveTab("hodlers")}
          >
            Hodlers
          </Button>
          <Button
            variant={activeTab === "collectors" ? "gradient" : "glass"}
            onClick={() => setActiveTab("collectors")}
          >
            Collectors
          </Button>
        </div>

        {/* Leaderboard List */}
        <div className="space-y-3">
          {data.map((entry) => (
            <div
              key={entry.id}
              className="flex items-center justify-between p-4 rounded-xl gradient-card glow-secondary transition-smooth hover:scale-[1.02]"
            >
              <div className="flex items-center gap-4">
                <span className="text-lg font-semibold text-secondary">
                  {entry.id}
                </span>
                <div className="relative w-10 h-10 rounded-full overflow-hidden">
                  <img
                    src={entry.avatar}
                    alt={entry.name}
                    className="object-cover"
                  />
                </div>
                <span className="font-medium">{entry.name}</span>
              </div>
              <span className="font-semibold text-primary">
                {entry.score.toLocaleString()}
              </span>
            </div>
          ))}
        </div>

        {/* See More Button */}
        <div className="text-center mt-10">
          <Button variant="gradient" size="lg">
            See More
          </Button>
        </div>
      </div>
    </section>
  );
}
