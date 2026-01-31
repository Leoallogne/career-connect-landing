import { Award, Users, Globe } from "lucide-react";

const TrustBadge = ({ icon: Icon, text }: { icon: React.ElementType; text: string }) => (
  <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
    <Icon className="h-4 w-4 text-gold" />
    <span className="text-sm font-medium text-white/90">{text}</span>
  </div>
);

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] bg-gradient-hero overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-gold blur-3xl" />
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-gold blur-3xl" />
      </div>

      <div className="container relative z-10 flex min-h-[90vh] flex-col items-center justify-center px-4 py-16 text-center">
        {/* Main heading */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5">
          <Award className="h-4 w-4 text-gold" />
          <span className="text-sm font-medium text-gold">British Council Certified</span>
        </div>

        <h1 className="mb-6 max-w-4xl text-3xl font-bold leading-tight tracking-tight text-white opacity-0 animate-fade-in sm:text-4xl md:text-5xl lg:text-6xl">
          Career Coaching &{" "}
          <span className="text-gold">Study Abroad</span>{" "}
          Consultation
        </h1>

        <p className="mb-8 max-w-2xl text-lg text-white/80 opacity-0 animate-fade-in [animation-delay:200ms] sm:text-xl">
          Trusted by <span className="font-semibold text-gold">3000+ students</span> to guide their career and international education journey
        </p>

        {/* Trust badges */}
        <div className="mb-10 flex flex-wrap items-center justify-center gap-3 opacity-0 animate-fade-in [animation-delay:400ms]">
          <TrustBadge icon={Award} text="British Council Certified" />
          <TrustBadge icon={Users} text="3000+ Students Counselled" />
          <TrustBadge icon={Globe} text="Visa & Career Expert" />
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col gap-4 opacity-0 animate-fade-in [animation-delay:600ms] sm:flex-row">
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gold px-8 py-4 text-base font-semibold text-navy transition-all duration-300 hover:bg-gold-light hover:shadow-gold"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Book via WhatsApp
          </a>
          <a
            href="https://calendly.com/thecareercoach"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/30 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/50 hover:bg-white/10"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Book via Calendar
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="flex flex-col items-center gap-2 text-white/50">
            <span className="text-xs font-medium uppercase tracking-widest">Scroll</span>
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
