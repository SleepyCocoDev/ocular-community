
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Programs = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="container mx-auto pt-24 pb-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Programs and Services for Ocular Members</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="bg-zinc-900 text-white border-zinc-800">
            <CardHeader>
              <CardTitle>Free Transport Service</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>• To any Royal City, Caerleon, Brecilien, the Black Zone Rests, all Guild Islands, and our Hideouts in the Roads of Avalon.</li>
                <li>• Fully insured: If your transport is ganked, you get your items/money back.</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-zinc-900 text-white border-zinc-800">
            <CardHeader>
              <CardTitle>Free Delivery Service</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>• Hand-delivered items to any of our Hideouts.</li>
                <li>• Fully insured: If the delivery is ganked, you get your items/money back.</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-zinc-900 text-white border-zinc-800">
            <CardHeader>
              <CardTitle>Free Consumables</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>• Pork Pies</li>
                <li>• T7 Gigantify Potions & Resistance Potions</li>
                <li>• T8 Beef Stews, Beef Sandwiches</li>
                <li>• T7 Pork Omelettes, Roast Pork</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-zinc-900 text-white border-zinc-800">
            <CardHeader>
              <CardTitle>Free Gear and Tools</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>• Gathering & Crafting Journals</li>
                <li>• T4-T6 Gathering Tools, Gathering Gear, and Tracking Toolkits (for new players)</li>
                <li>• 4.1 Gearsets in our HOs (e.g., Run/Rat sets, Incubus/Blazing sets)</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-zinc-900 text-white border-zinc-800">
            <CardHeader>
              <CardTitle>Crafting Perks</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>• Free crafting on our HO stations (no usage fees)</li>
                <li>• Perfect-spec crafters available for crafting requests (no charge)</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-zinc-900 text-white border-zinc-800">
            <CardHeader>
              <CardTitle>Other Services</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>• Buyback Program: Sell items and loot tabs back to the guild instantly</li>
                <li>• Associate Rates: Discounted crafting rates in Royal Cities and Brecilien</li>
                <li>• Silver Payouts: Claim payouts from loot splits anytime via our banking system</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-zinc-900 text-white border-zinc-800">
            <CardHeader>
              <CardTitle>Mentorship & Training</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>• 1-on-1 Mentorship for Healers, Tanks, Callers, Supports, and DPS players</li>
                <li>• Bombing School for Faction, ZvZ, and Open World scenarios</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-zinc-900 text-white border-zinc-800">
            <CardHeader>
              <CardTitle>Exclusive Access</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>• Sign-Up Sheets: ocular-gaming.net</li>
                <li>• Merch Store: merch.ocular-gaming.net</li>
                <li>• Annual Guild Fishing Trip (US)</li>
                <li>• Annual Guild Retreat (Las Vegas - Octocon)</li>
                <li>• 24/7 Comms: Never game alone!</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Programs;
