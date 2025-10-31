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
      name: "CryptoKing",
      avatar: "/src/assets/Blockchain.png",
      score: 9800,
    },
    { id: 2, name: "NFTQueen", avatar: "/avatars/2.png", score: 9350 },
    { id: 3, name: "MetaWhale", avatar: "/avatars/3.png", score: 9100 },
    { id: 4, name: "RareGem", avatar: "/avatars/4.png", score: 8800 },
    { id: 5, name: "BlockGuru", avatar: "/avatars/5.png", score: 8650 },
    { id: 6, name: "PixelLord", avatar: "/avatars/6.png", score: 8500 },
    { id: 7, name: "DeFiDiva", avatar: "/avatars/7.png", score: 8320 },
    { id: 8, name: "StackedSoul", avatar: "/avatars/8.png", score: 8100 },
    { id: 9, name: "MintMaster", avatar: "/avatars/9.png", score: 7900 },
    { id: 10, name: "ChainChad", avatar: "/avatars/10.png", score: 7700 },
  ],
  collectors: [
    {
      id: 1,
      name: "ArtFiend",
      avatar: "/src/assets/Blockchain.png",
      score: 9400,
    },
    { id: 2, name: "NFTNinja", avatar: "/avatars/2.png", score: 9050 },
    { id: 3, name: "TokenMuse", avatar: "/avatars/3.png", score: 8880 },
    { id: 4, name: "MetaMaven", avatar: "/avatars/4.png", score: 8700 },
    { id: 5, name: "RareRuler", avatar: "/avatars/5.png", score: 8500 },
    { id: 6, name: "BlockBaron", avatar: "/avatars/6.png", score: 8380 },
    { id: 7, name: "SoulSeeker", avatar: "/avatars/7.png", score: 8200 },
    { id: 8, name: "DegenDuke", avatar: "/avatars/8.png", score: 7990 },
    { id: 9, name: "MintMuse", avatar: "/avatars/9.png", score: 7840 },
    { id: 10, name: "PixelPal", avatar: "/avatars/10.png", score: 7700 },
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
