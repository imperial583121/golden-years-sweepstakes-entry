
import React from 'react';

const Header = () => {
  return (
    <header className="bg-sweepstakes-navy border-b-4 border-sweepstakes-gold">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-center">
          <img 
            src="/lovable-uploads/fba9fbfa-6083-4479-b827-636ee05c548e.png" 
            alt="PCH Official Sweepstakes" 
            className="h-16 w-auto"
          />
        </div>
        <div className="text-center mt-2">
          <p className="text-white text-sm font-semibold">OFFICIAL SWEEPSTAKES NOTIFICATION</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
