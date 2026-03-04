import { ChevronDown, Shield, Heart, Users } from "lucide-react";
import { Button } from "../layout/Button";

export default function HeroSection({ imageUrl }) {
  return (
    <section
      className="relative w-full flex flex-col justify-between text-center overflow-hidden"
      style={{
        minHeight: "100vh",
      }}
    >
      {/* Background image */}
      <img
        src={imageUrl}
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />

      {/* Spacer for header */}
      <div className="pt-28" />

      {/* Main content - centered */}
      <div className="relative z-10 flex-grow flex flex-col items-center justify-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tagline badge */}
        <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/25 rounded-full px-5 py-2 mb-8">
          <Heart size={16} className="text-brand-orange" fill="currentColor" />
          <span className="text-sm font-medium text-white tracking-wide">Nurturing every child&apos;s potential</span>
        </div>

        <h1 
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white drop-shadow-lg"
        >
          Suvatsalya Child Growth<br className="hidden sm:block" /> and Development Centre
        </h1>
        <p 
          className="text-lg md:text-xl max-w-3xl mx-auto mb-10 font-normal text-white/85 leading-relaxed"
          style={{
            textShadow: '1px 1px 6px rgba(0, 0, 0, 0.4)',
          }}
        >
          Evidence-based assessments and therapies for children with developmental, learning, and behavioural needs
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <Button
            to="/therapies"
            text="Our Programme"
            variant="secondary"
            className="px-10 py-4 shadow-lg"
          />
          <Button
            to="/contact"
            text="Book a Consultation"
            variant="outline"
            className="px-10 py-4 shadow-lg !border-white !text-white hover:!bg-white hover:!text-brand-blue"
          />
        </div>
      </div>

      {/* Bottom trust bar */}
      <div className="relative z-10 w-full mt-auto">
        <div className="bg-black/30 backdrop-blur-sm border-t border-white/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
            <div className="grid grid-cols-3 gap-4 md:gap-8">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-white">
                <Shield size={20} className="text-brand-yellow flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-center">Evidence-Based Care</span>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-white">
                <Users size={20} className="text-brand-yellow flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-center">Expert Multidisciplinary Team</span>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-white">
                <Heart size={20} className="text-brand-yellow flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-center">Personalized Therapy Plans</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute -bottom-0 left-1/2 -translate-x-1/2 -translate-y-full pb-2">
          <ChevronDown className="mx-auto animate-bounce text-white/70" size={32} strokeWidth={2} />
        </div>
      </div>
    </section>
  );
}
