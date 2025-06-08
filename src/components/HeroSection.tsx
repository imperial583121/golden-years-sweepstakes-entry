
import React from 'react';
import { Star, Award, DollarSign } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-b from-sweepstakes-navy to-sweepstakes-navy-light text-white py-12 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 animate-pulse-gold">
          <Star className="w-8 h-8 text-sweepstakes-gold" />
        </div>
        <div className="absolute top-20 right-20 animate-pulse-gold">
          <Award className="w-6 h-6 text-sweepstakes-gold" />
        </div>
        <div className="absolute bottom-20 left-20 animate-pulse-gold">
          <DollarSign className="w-10 h-10 text-sweepstakes-gold" />
        </div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-sweepstakes-gold drop-shadow-lg">
            CONGRATULATIONS!
          </h1>
          <div className="bg-white text-sweepstakes-navy p-6 rounded-lg shadow-2xl mb-6 border-4 border-sweepstakes-gold">
            <h2 className="text-2xl md:text-4xl font-bold mb-2">
              $4.5 MILLION CASH
            </h2>
            <p className="text-xl md:text-2xl font-semibold text-sweepstakes-red">
              + $7,000/Week for Life
            </p>
          </div>
          
          <div className="bg-sweepstakes-gold text-sweepstakes-navy p-4 rounded-lg mb-6 font-bold text-lg md:text-xl">
            🇺🇸 OFFICIAL U.S. SWEEPSTAKES 🇺🇸
          </div>

          <div className="text-lg md:text-xl mb-6 space-y-2">
            <p className="text-sweepstakes-gold font-semibold">✓ No Purchase Required</p>
            <p className="text-sweepstakes-gold font-semibold">✓ 100% Free to Enter</p>
            <p className="text-sweepstakes-gold font-semibold">✓ Must be 18+ and Legal U.S. Resident</p>
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
