
import React from 'react';

const Header = () => {
  return (
    <header className="bg-white border-b-4 border-sweepstakes-gold shadow-lg">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-center space-x-6">
          <div className="flex-shrink-0 p-3 bg-gradient-to-br from-sweepstakes-gold via-sweepstakes-gold to-sweepstakes-gold-dark rounded-full shadow-xl border-2 border-white">
            <img 
              src="/lovable-uploads/fba9fbfa-6083-4479-b827-636ee05c548e.png" 
              alt="PCH Official Sweepstakes" 
              className="h-16 w-auto filter drop-shadow-md"
            />
          </div>
          <div className="text-center border-l-2 border-sweepstakes-gold pl-6">
            <h1 className="text-sweepstakes-navy text-2xl md:text-3xl font-bold leading-tight mb-2 relative">
              Publishers Clearing House
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-0.5 bg-gradient-to-r from-transparent via-sweepstakes-gold to-transparent"></div>
            </h1>
            <p className="text-white text-base md:text-lg font-semibold mt-3 px-6 py-2 bg-gradient-to-r from-sweepstakes-navy to-sweepstakes-navy-light rounded-full shadow-md border border-sweepstakes-gold/30">
              Official Sweepstakes Entry Platform
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
