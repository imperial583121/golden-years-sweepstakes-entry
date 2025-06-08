
import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-b from-sweepstakes-navy to-sweepstakes-navy-light text-white py-12 relative overflow-hidden">
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-sweepstakes-gold drop-shadow-lg">
            Win $10,000 Weekly + $2 Million – Entry Free!
          </h1>
          
          <div className="text-lg md:text-xl mb-8 space-y-2">
            <p className="text-white font-semibold">100% Free. No Purchase Required.</p>
            <p className="text-sweepstakes-gold font-semibold">For U.S. Residents 18+ Only.</p>
          </div>

          {/* PCH Logo with decorative logos on sides */}
          <div className="flex items-center justify-center gap-4 md:gap-8 mb-8">
            <img 
              src="/lovable-uploads/ffe19771-f5aa-4362-a489-485fa21166d9.png" 
              alt="PCH Logo" 
              className="w-12 h-12 md:w-16 md:h-16 animate-pulse-gold"
            />
            <img 
              src="/lovable-uploads/420bd8bb-9b0a-42fc-9d76-98dfbe44cf39.png" 
              alt="PCH Search" 
              className="w-12 h-12 md:w-16 md:h-16 animate-pulse-gold"
            />
            <img 
              src="/lovable-uploads/fba9fbfa-6083-4479-b827-636ee05c548e.png" 
              alt="PCH Official" 
              className="h-20 md:h-28 w-auto"
            />
            <img 
              src="/lovable-uploads/045b166c-795e-4e5c-9679-80a73550a187.png" 
              alt="PCH Lotto" 
              className="w-12 h-12 md:w-16 md:h-16 animate-pulse-gold"
            />
            <img 
              src="/lovable-uploads/da887793-e8aa-4249-a7df-2fdb876d3f93.png" 
              alt="Mega Millionaire" 
              className="w-12 h-12 md:w-16 md:h-16 animate-pulse-gold"
            />
          </div>

          <div className="inline-block bg-sweepstakes-gold text-sweepstakes-navy px-6 py-3 rounded-lg mb-6 font-bold text-lg md:text-xl">
            Entry Form Below ↓
          </div>

          <p className="text-xl md:text-2xl font-bold text-white mb-4">
            ENTRY DEADLINE APPROACHING
          </p>
          <p className="text-lg text-sweepstakes-gold">
            Complete your entry below to claim your eligibility
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
