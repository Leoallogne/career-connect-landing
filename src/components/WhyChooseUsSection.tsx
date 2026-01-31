import { MapPin, Heart, ShieldCheck, Footprints } from "lucide-react";

interface ReasonCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const ReasonCard = ({ icon: Icon, title, description }: ReasonCardProps) => (
  <div className="flex gap-4">
    <div className="flex-shrink-0">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10">
        <Icon className="h-6 w-6 text-gold-dark" />
      </div>
    </div>
    <div>
      <h3 className="mb-1.5 font-semibold text-navy">{title}</h3>
      <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
    </div>
  </div>
);

const reasons = [
  {
    icon: MapPin,
    title: "Personalized Roadmap",
    description: "A customized action plan tailored to your unique goals, background, and timeline.",
  },
  {
    icon: Heart,
    title: "Honest Guidance",
    description: "We tell you what you need to hear, not just what you want to hear. Your success is our priority.",
  },
  {
    icon: ShieldCheck,
    title: "No Fake Promises",
    description: "Realistic expectations and transparent advice. We believe in building trust through honesty.",
  },
  {
    icon: Footprints,
    title: "Step-by-Step Support",
    description: "We walk with you through every step — from initial planning to final success.",
  },
];

const WhyChooseUsSection = () => {
  return (
    <section id="why-us" className="bg-white py-20">
      <div className="container px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left content */}
          <div>
            <span className="mb-3 inline-block rounded-full bg-navy/5 px-4 py-1.5 text-sm font-medium text-navy">
              Why Choose Us
            </span>
            <h2 className="mb-4 text-3xl font-bold text-navy sm:text-4xl">
              Your Success Is Our <span className="text-gold">Commitment</span>
            </h2>
            <p className="mb-8 text-muted-foreground">
              With years of experience and thousands of success stories, we understand what it takes to help you achieve your dreams.
            </p>

            <div className="space-y-6">
              {reasons.map((reason) => (
                <ReasonCard
                  key={reason.title}
                  icon={reason.icon}
                  title={reason.title}
                  description={reason.description}
                />
              ))}
            </div>
          </div>

          {/* Right content - Stats card */}
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-navy/5 to-gold/10" />
            <div className="relative overflow-hidden rounded-2xl bg-gradient-hero p-8 text-white sm:p-10">
              <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-gold/10 blur-2xl" />
              
              <div className="relative">
                <h3 className="mb-8 text-2xl font-bold">Trusted by Students Worldwide</h3>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="rounded-xl bg-white/10 p-4 backdrop-blur-sm">
                    <div className="text-3xl font-bold text-gold">3000+</div>
                    <div className="text-sm text-white/70">Students Counselled</div>
                  </div>
                  <div className="rounded-xl bg-white/10 p-4 backdrop-blur-sm">
                    <div className="text-3xl font-bold text-gold">15+</div>
                    <div className="text-sm text-white/70">Countries Covered</div>
                  </div>
                  <div className="rounded-xl bg-white/10 p-4 backdrop-blur-sm">
                    <div className="text-3xl font-bold text-gold">95%</div>
                    <div className="text-sm text-white/70">Success Rate</div>
                  </div>
                  <div className="rounded-xl bg-white/10 p-4 backdrop-blur-sm">
                    <div className="text-3xl font-bold text-gold">8+</div>
                    <div className="text-sm text-white/70">Years Experience</div>
                  </div>
                </div>

                <div className="mt-8 flex items-center gap-3 border-t border-white/10 pt-6">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="h-10 w-10 rounded-full border-2 border-navy bg-gold/20 flex items-center justify-center text-xs font-medium"
                      >
                        👤
                      </div>
                    ))}
                  </div>
                  <div className="text-sm">
                    <span className="font-medium">Join 3000+ students</span>
                    <br />
                    <span className="text-white/60">who trusted us with their future</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
