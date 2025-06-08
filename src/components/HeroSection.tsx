
import React from 'react';
import { Shield, Users } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-b from-sweepstakes-navy to-sweepstakes-navy-light text-white py-8 relative overflow-hidden">
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight relative">
            <span className="bg-gradient-to-r from-sweepstakes-gold via-white to-sweepstakes-gold bg-clip-text text-transparent drop-shadow-2xl relative z-10" style={{ 
              textShadow: '0 0 20px rgba(255, 215, 0, 0.6), 0 0 40px rgba(255, 215, 0, 0.4), 0 0 60px rgba(255, 215, 0, 0.2)',
              filter: 'drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.8))'
            }}>
              Win $10,000 Weekly + $2 Million – Entry Free!
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-sweepstakes-gold/20 via-white/10 to-sweepstakes-gold/20 blur-xl -z-10 animate-pulse-gold"></div>
          </h1>
          
          <div className="text-base md:text-lg mb-6 space-y-1">
            <p className="text-white font-semibold">100% Free. No Purchase Required.</p>
            <p className="text-sweepstakes-gold font-semibold">For U.S. Residents 18+ Only.</p>
          </div>

          {/* PCH Logo with decorative logos on sides */}
          <div className="flex items-center justify-center gap-3 md:gap-6 mb-6">
            <img 
              src="/lovable-uploads/ffe19771-f5aa-4362-a489-485fa21166d9.png" 
              alt="PCH Logo" 
              className="w-10 h-10 md:w-14 md:h-14 animate-pulse-gold"
            />
            <img 
              src="/lovable-uploads/420bd8bb-9b0a-42fc-9d76-98dfbe44cf39.png" 
              alt="PCH Search" 
              className="w-10 h-10 md:w-14 md:h-14 animate-pulse-gold"
            />
            <img 
              src="/lovable-uploads/fba9fbfa-6083-4479-b827-636ee05c548e.png" 
              alt="PCH Official" 
              className="h-16 md:h-24 w-auto"
            />
            <img 
              src="/lovable-uploads/045b166c-795e-4e5c-9679-80a73550a187.png" 
              alt="PCH Lotto" 
              className="w-10 h-10 md:w-14 md:h-14 animate-pulse-gold"
            />
            <img 
              src="/lovable-uploads/da887793-e8aa-4249-a7df-2fdb876d3f93.png" 
              alt="Mega Millionaire" 
              className="w-10 h-10 md:w-14 md:h-14 animate-pulse-gold"
            />
          </div>

          <div className="inline-block bg-gradient-to-r from-sweepstakes-gold via-sweepstakes-gold to-sweepstakes-gold-dark text-sweepstakes-navy px-6 py-3 rounded-xl mb-6 font-bold text-base md:text-lg shadow-2xl border-2 border-white/20" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }}>
            Entry Form Below ↓
          </div>

          <p className="text-sm md:text-base font-medium text-white mb-4 px-2 leading-relaxed">
            Official Sweepstakes by PublishersUS. No purchase required. 100% free to enter. Must be 18+ and a legal U.S. resident.
          </p>

          {/* Legal requirement boxes - elegant design with classic symbols */}
          <div className="space-y-3 mb-4">
            {/* Only 2 boxes side by side */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-6">
              <div className="bg-gradient-to-r from-sweepstakes-gold/20 to-sweepstakes-gold/10 backdrop-blur-sm border border-sweepstakes-gold rounded-xl px-4 py-3 shadow-lg flex items-center gap-3 min-w-0 max-w-xs">
                <div className="bg-sweepstakes-gold rounded-full p-1.5 flex-shrink-0">
                  <Shield className="w-4 h-4 text-sweepstakes-navy" />
                </div>
                <p className="text-white font-bold text-sm whitespace-nowrap">NO PURCHASE NECESSARY</p>
              </div>
              <div className="bg-gradient-to-r from-sweepstakes-gold/20 to-sweepstakes-gold/10 backdrop-blur-sm border border-sweepstakes-gold rounded-xl px-4 py-3 shadow-lg flex items-center gap-3 min-w-0 max-w-xs">
                <div className="bg-sweepstakes-gold rounded-full p-1.5 flex-shrink-0">
                  <Users className="w-4 h-4 text-sweepstakes-navy" />
                </div>
                <p className="text-white font-bold text-sm whitespace-nowrap">U.S. RESIDENTS ONLY</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
