import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Events = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <div className="container mx-auto pt-24 px-4">
        <div className="space-y-8 pb-8">
          <Card className="bg-zinc-900 border-zinc-800">
            <CardHeader>
              <CardTitle className="text-primary">Weekly Guild Content</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-100">
              <p className="mb-4">We offer varied and engaging activities every week, including:</p>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Group PvP: Small-scale, ZvZ, and Roads CTAs, Castles and Outposts</li>
                  <li>Bombing Runs: Faction, ZvZ, Roads, and Open World</li>
                  <li>Ganking: Caerleon, YZ Faction, Red Zone, Black Zone, and Roads</li>
                  <li>Dungeons: Avalonian, Group, and Hardcore Expeditions</li>
                  <li>Faction Warfare: Thetford, Bridgewatch, and Lymhurst</li>
                  <li>World Bosses: Yellow- and Black-Zone bosses</li>
                </ul>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Hellgates: 2v2, 5v5, and 10v10</li>
                  <li>Crystals: Arenas and Lethal Crystal League</li>
                  <li>Gathering: Raid Portal Titans, .4 Nodes, and Roads resources</li>
                  <li>Core Running: Using our patented ChaosRunner method</li>
                  <li>Tracking: Organized tracking groups throughout the day</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Events;
