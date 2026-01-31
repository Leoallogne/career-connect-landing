import { Compass, GraduationCap, Plane, FileCheck, FileText } from "lucide-react";

interface ServiceCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  delay: number;
}

const ServiceCard = ({ icon: Icon, title, description, delay }: ServiceCardProps) => (
  <div 
    className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gold/5 transition-transform duration-500 group-hover:scale-150" />
    
    <div className="relative">
      <div className="mb-4 inline-flex rounded-xl bg-navy/5 p-3">
        <Icon className="h-6 w-6 text-navy" />
      </div>
      
      <h3 className="mb-2 text-lg font-semibold text-navy">{title}</h3>
      <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
    </div>
  </div>
);

const services = [
  {
    icon: Compass,
    title: "Career Guidance",
    description: "Personalized career planning based on your strengths, interests, and market opportunities.",
  },
  {
    icon: GraduationCap,
    title: "Study Abroad Consultation",
    description: "Expert guidance on choosing the right country, university, and program for your goals.",
  },
  {
    icon: Plane,
    title: "Student Visa Support",
    description: "Complete assistance with visa applications, documentation, and interview preparation.",
  },
  {
    icon: FileCheck,
    title: "Profile Evaluation",
    description: "Comprehensive assessment of your academic and professional profile for study abroad.",
  },
  {
    icon: FileText,
    title: "Document & SOP Guidance",
    description: "Professional help with Statement of Purpose, LORs, and all application documents.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="bg-cream py-20">
      <div className="container px-4">
        {/* Section header */}
        <div className="mb-14 text-center">
          <span className="mb-3 inline-block rounded-full bg-gold/10 px-4 py-1.5 text-sm font-medium text-gold-dark">
            Our Services
          </span>
          <h2 className="mb-4 text-3xl font-bold text-navy sm:text-4xl">
            Comprehensive Support for Your Journey
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            From career clarity to study abroad success — we provide end-to-end guidance for every step of your journey.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
