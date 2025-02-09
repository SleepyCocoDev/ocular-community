import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <div className="container mx-auto pt-24 px-4">
        <div className="space-y-8 pb-8">
          {/* Who We Are Section */}
          <Card className="bg-zinc-900 border-zinc-800">
            <CardHeader>
              <CardTitle className="text-primary">Who We Are</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-100">
              <p className="leading-relaxed">
                Ocular is a versatile, Roads-based guild in Albion Online. Above all, we are a family and a community that extends beyond the game itself. Our primary goal is simple: to have fun. This philosophy defines our guild ethos—we play Albion to unwind, escape real life, and enjoy memorable moments with our gaming family.
              </p>
              <p className="leading-relaxed italic">
                If you're not having fun, then why are you playing? We measure our success by the amount of fun per hour.
              </p>
              <p className="leading-relaxed">
                We have achieved rank 109 of season 25 placing us above Sprint with Me, Cyan, Down to fight and AESTHETIIC, making us the number 1 roads focused guild in the game. We have 253 active members in Ocular and also have 69 active members in Ocular University which we just started. (last updated 1/27/2024)
              </p>
            </CardContent>
          </Card>

          {/* Ocular University Section */}
          <Card className="bg-zinc-900 border-zinc-800">
            <CardHeader>
              <CardTitle className="text-primary">Introducing OCULAR University</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-gray-100">
              <p className="leading-relaxed">
                We're growing! To accommodate our ever-expanding roster, we're excited to announce the addition of our sister guild, OCULAR University.
              </p>
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">Who is it for?</h3>
                <p className="leading-relaxed">
                  OCULAR University is designed for new players. While it's a separate guild, you'll still be fully integrated into the OCULAR community and Discord server.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">What's the difference?</h3>
                <p className="leading-relaxed">
                  Members of OCULAR University will be able to still join content but we will also focus more on guiding you and helping you learn the game.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Why Join Now Section */}
          <Card className="bg-zinc-900 border-zinc-800">
            <CardHeader>
              <CardTitle className="text-primary">Why Join Now?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-gray-100">
              <div>
                <p className="leading-relaxed mb-4">
                  With the Roads of Avalon update, there's never been a better time to join Ocular!
                  The update enhances exploration, combat, and resource gathering in the Roads. 
                  By joining us, you'll be perfectly positioned to thrive in this revamped environment.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">Post-Update Perks in Our Zone</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-2">Chests</h4>
                    <ul className="list-disc pl-5">
                      <li>5 solo T6 chests</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Large Nodes</h4>
                    <ul className="list-disc pl-5">
                      <li>T5-7 Old Ore Mobs</li>
                      <li>T5-7 Old Hide Mobs</li>
                      <li>T6 Basilisk</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Small Nodes</h4>
                    <ul className="list-disc pl-5">
                      <li>T5 Old Trees</li>
                      <li>T6-7 Old Stone</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
