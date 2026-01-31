import { Calendar, Video, FileText } from "lucide-react";

interface StepProps {
  number: number;
  icon: React.ElementType;
  title: string;
  description: string;
  isLast?: boolean;
}

const Step = ({ number, icon: Icon, title, description, isLast }: StepProps) => (
  <div className="relative flex flex-col items-center text-center">
    {/* Connector line */}
    {!isLast && (
      <div className="absolute left-1/2 top-16 hidden h-full w-px bg-gradient-to-b from-gold to-transparent lg:block" />
    )}

    {/* Step number with icon */}
    <div className="relative mb-6">
      <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-gold shadow-gold">
        <Icon className="h-8 w-8 text-navy" />
      </div>
      <div className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-navy text-sm font-bold text-white">
        {number}
      </div>
    </div>

    <h3 className="mb-2 text-xl font-semibold text-navy">{title}</h3>
    <p className="max-w-xs text-sm text-muted-foreground">{description}</p>
  </div>
);

const steps = [
  {
    icon: Calendar,
    title: "Book Your Slot",
    description: "Choose a convenient time via WhatsApp or our calendar. Quick and hassle-free booking.",
  },
  {
    icon: Video,
    title: "1-on-1 Session",
    description: "Deep dive into your goals, challenges, and opportunities with personalized attention.",
  },
  {
    icon: FileText,
    title: "Receive Your Roadmap",
    description: "Get a clear, actionable plan with next steps, timelines, and resources to succeed.",
  },
];

const ProcessSection = () => {
  return (
    <section id="process" className="bg-cream-dark py-20">
      <div className="container px-4">
        {/* Section header */}
        <div className="mb-16 text-center">
          <span className="mb-3 inline-block rounded-full bg-gold/10 px-4 py-1.5 text-sm font-medium text-gold-dark">
            How It Works
          </span>
          <h2 className="mb-4 text-3xl font-bold text-navy sm:text-4xl">
            Simple 3-Step Process
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Getting started is easy. Book a session and take the first step toward your career goals.
          </p>
        </div>

        {/* Steps */}
        <div className="grid gap-12 lg:grid-cols-3 lg:gap-8">
          {steps.map((step, index) => (
            <Step
              key={step.title}
              number={index + 1}
              icon={step.icon}
              title={step.title}
              description={step.description}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
