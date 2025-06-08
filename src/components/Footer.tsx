
import React from 'react';
import { Shield, FileText, Scale, Users } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-sweepstakes-navy text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="text-center">
            <FileText className="w-8 h-8 text-sweepstakes-gold mx-auto mb-2" />
            <h3 className="font-semibold mb-2">Terms & Conditions</h3>
            <button className="text-sweepstakes-gold hover:text-white transition-colors">
              View Terms
            </button>
          </div>
          
          <div className="text-center">
            <Shield className="w-8 h-8 text-sweepstakes-gold mx-auto mb-2" />
            <h3 className="font-semibold mb-2">Privacy Policy</h3>
            <button className="text-sweepstakes-gold hover:text-white transition-colors">
              View Policy
            </button>
          </div>
          
          <div className="text-center">
            <Scale className="w-8 h-8 text-sweepstakes-gold mx-auto mb-2" />
            <h3 className="font-semibold mb-2">Legal Disclaimers</h3>
            <button className="text-sweepstakes-gold hover:text-white transition-colors">
              View Disclaimers
            </button>
          </div>
          
          <div className="text-center">
            <Users className="w-8 h-8 text-sweepstakes-gold mx-auto mb-2" />
            <h3 className="font-semibold mb-2">Eligibility Requirements</h3>
            <button className="text-sweepstakes-gold hover:text-white transition-colors">
              View Requirements
            </button>
          </div>
        </div>
        
        <div className="border-t border-sweepstakes-gold pt-8">
          <div className="text-center space-y-4">
            <div className="bg-sweepstakes-gold text-sweepstakes-navy p-4 rounded-lg font-bold text-lg">
              NO PURCHASE NECESSARY. VOID WHERE PROHIBITED.
            </div>
            
            <p className="text-sm leading-relaxed max-w-4xl mx-auto">
              This sweepstakes is open to legal residents of the 50 United States and District of Columbia, 
              18 years of age or older. Employees of the sponsor and their immediate family members are not eligible. 
              Winner will be selected at random. Odds of winning depend on the number of eligible entries received. 
              For complete rules and regulations, please see our Terms & Conditions.
            </p>
            
            <div className="text-xs text-gray-300 space-y-1">
              <p>© 2024 Official Sweepstakes. All rights reserved.</p>
              <p>This promotion is in no way sponsored, endorsed, or administered by Facebook, Google, or any other social media platform.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
