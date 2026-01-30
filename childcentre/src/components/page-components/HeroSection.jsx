import { ChevronDown } from "lucide-react";
import { Button } from "../layout/Button";
import { Link } from "react-router-dom"; 

export default function HeroSection({ imageUrl }) {
  return (
    <section
      className="relative w-full flex items-end justify-center text-center overflow-hidden"
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

      {/* Overlay for readability */}
      <div className="absolute inset-0" />

      {/* Centered content - positioned in lower half */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 pt-38">
        <h1 
          className="text-4xl md:text-5xl lg:text-6xl font-normal mb-8 leading-tight text-gray-900"
          style={{
            fontFamily: "'Playfair Display', 'EB Garamond', serif",
            letterSpacing: '0.02em'
          }}
        >
          THE CHILD DEVELOPMENT CENTRE
        </h1>
        <p 
          className="text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto mb-12 font-normal text-white uppercase"
          style={{
            textShadow: '2px 2px 8px rgba(0, 0, 0, 0.7)',
            letterSpacing: '0.15em',
            lineHeight: '1.6'
          }}
        >
          TREATMENTS FOR DYSLEXIA, DYSPRAXIA, ADHD<br />
          AND OTHER DEVELOPMENTAL DIFFICULTIES
        </p>
        
        {/* 2. WRAP BUTTON IN LINK */}
        <Link to="/therapies">
          <Button text="OUR PROGRAMME" className="px-12 py-4 text-sm font-semibold tracking-widest uppercase transition-colors shadow-lg"></Button>
        </Link>

        {/* Scroll down indicator */}
        <div className="mt-20">
          <ChevronDown className="mx-auto animate-bounce text-white" size={40} strokeWidth={2} />
        </div>
      </div>
    </section>
  );
}