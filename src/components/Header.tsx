
import React from 'react';

const Header = () => {
  return (
    <header className="bg-white border-b-4 border-sweepstakes-gold">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-center space-x-4">
          <img 
            src="/lovable-uploads/fba9fbfa-6083-4479-b827-636ee05c548e.png" 
            alt="PCH Official Sweepstakes" 
            className="h-12 w-auto"
          />
          <div className="text-center">
            <h1 className="text-sweepstakes-navy text-xl md:text-2xl font-bold leading-tight">
              Publishers Clearing House
            </h1>
            <p className="text-sweepstakes-gold text-sm md:text-base font-medium mt-1">
              Official Sweepstakes Entry Platform
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
