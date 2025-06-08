
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Scale, AlertTriangle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const OfficialRules = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-sweepstakes-navy hover:text-sweepstakes-gold transition-colors font-semibold"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-xl border-0 rounded-2xl overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-sweepstakes-navy to-sweepstakes-navy-light text-white">
              <CardTitle className="text-3xl font-bold text-center flex items-center justify-center gap-3">
                <Scale className="w-8 h-8 text-sweepstakes-gold" />
                Official Rules & Terms
              </CardTitle>
            </CardHeader>
            
            <CardContent className="p-8 space-y-8">
              {/* Important Disclaimer */}
              <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle className="w-6 h-6 text-red-600" />
                  <h2 className="text-xl font-bold text-red-800">IMPORTANT DISCLAIMER</h2>
                </div>
                <p className="text-red-700 leading-relaxed">
                  This website and sweepstakes is NOT affiliated with, endorsed by, or connected to Publishers Clearing House (PCH), Publishers Clearing House LLC, or any official lottery organization. This is an independent promotional website operated by PUBLISHERSUS.
                </p>
                <div className="mt-4 space-y-2 text-red-700">
                  <p><strong>Facebook/Meta Disclaimer:</strong> This promotion is not sponsored, endorsed, or administered by Facebook, Meta, Instagram, or any social media platform.</p>
                  <p><strong>Google Disclaimer:</strong> This promotion is not sponsored, endorsed, or administered by Google, YouTube, or any Google services.</p>
                </div>
              </div>

              {/* Age Verification */}
              <div className="bg-sweepstakes-gold/10 border-2 border-sweepstakes-gold rounded-xl p-6">
                <h2 className="text-xl font-bold text-sweepstakes-navy mb-3">AGE VERIFICATION REQUIRED</h2>
                <p className="text-lg font-semibold text-red-600 mb-3">MUST BE 18 YEARS OR OLDER TO PARTICIPATE</p>
                <p className="text-sweepstakes-navy">
                  By submitting an entry, you certify that you are at least 18 years of age and a legal resident of the United States. Age verification may be required before prize award.
                </p>
                <p className="font-bold text-red-600 mt-3">VOID WHERE PROHIBITED BY LAW</p>
              </div>

              {/* Advertising Compliance */}
              <div className="bg-emerald-50 border-2 border-emerald-200 rounded-xl p-6">
                <h2 className="text-xl font-bold text-emerald-800 mb-3">ADVERTISING COMPLIANCE</h2>
                <p className="text-emerald-700 mb-3">This website complies with Google Ads policies and Facebook advertising standards.</p>
                <ul className="list-disc list-inside text-emerald-700 space-y-1">
                  <li>All promotional content is clearly identified</li>
                  <li>Sweepstakes rules are transparent and accessible</li>
                  <li>User data is collected and processed according to privacy laws</li>
                  <li>No misleading or deceptive practices are employed</li>
                  <li>All claims are substantiated and verifiable</li>
                </ul>
              </div>

              {/* Official Rules */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-sweepstakes-navy border-b-2 border-sweepstakes-gold pb-2">Official Sweepstakes Rules</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-sweepstakes-navy mb-3">1. Eligibility Requirements</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      <li>Must be 18 years of age or older at time of entry</li>
                      <li>Must be a legal resident of the United States</li>
                      <li>Must have a valid U.S. mailing address</li>
                      <li>Employees of PUBLISHERSUS and their immediate family members are not eligible</li>
                      <li>Void where prohibited by law</li>
                      <li>Subject to all federal, state, and local laws and regulations</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-sweepstakes-navy mb-3">2. Entry Method</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      <li><strong>NO PURCHASE NECESSARY TO ENTER OR WIN</strong></li>
                      <li>Complete the official entry form with accurate information</li>
                      <li>One entry per person per day</li>
                      <li>Multiple entries from the same person will be disqualified</li>
                      <li>Entry is free and does not require any payment or purchase</li>
                      <li>Automated or bulk entries are prohibited</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-sweepstakes-navy mb-3">3. Prize Information</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      <li>Grand Prize: $10,000 cash prize (one winner)</li>
                      <li>Secondary Prizes: Various merchandise and gift cards</li>
                      <li>No cash substitution or transfer of prizes allowed</li>
                      <li>All taxes on prizes are the responsibility of the winner</li>
                      <li>Winners may be required to complete tax forms</li>
                      <li>Odds of winning depend on the number of eligible entries received</li>
                      <li>Total approximate retail value of all prizes: $15,000</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-sweepstakes-navy mb-3">4. Winner Selection & Notification</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      <li>Winners selected by random drawing from eligible entries</li>
                      <li>Drawing will be conducted on the last day of each month</li>
                      <li>Winners will be notified by mail, phone, or email within 30 days</li>
                      <li>Winner must respond within 14 days of notification</li>
                      <li>Failure to respond may result in forfeiture of prize</li>
                      <li>Winners may be required to sign affidavit of eligibility and liability release</li>
                      <li>Winners may be required to provide proof of identity and eligibility</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-sweepstakes-navy mb-3">5. General Conditions & Legal</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      <li>PUBLISHERSUS reserves the right to verify eligibility and disqualify entries</li>
                      <li>By entering, participants agree to these official rules</li>
                      <li>PUBLISHERSUS is not responsible for lost, late, or misdirected entries</li>
                      <li>This promotion is not sponsored by Facebook, Meta, Google, or any social media platform</li>
                      <li>PUBLISHERSUS is an independent sweepstakes operator</li>
                      <li>Sweepstakes begins January 1, 2024 and ends December 31, 2024</li>
                      <li>Winners may be announced publicly and used for promotional purposes</li>
                      <li>All decisions by PUBLISHERSUS are final</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-sweepstakes-navy mb-3">6. Limitation of Liability</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      <li>PUBLISHERSUS is not liable for technical failures or human error</li>
                      <li>Not responsible for incorrect or inaccurate entry information</li>
                      <li>Not liable for any damage to participant's computer or mobile device</li>
                      <li>Prizes awarded "as is" with no warranty</li>
                      <li>Maximum liability limited to the value of the prize awarded</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Privacy & Data Protection */}
              <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
                <h2 className="text-xl font-bold text-blue-800 mb-4">Privacy Policy & Data Protection</h2>
                <div className="space-y-4 text-blue-700">
                  <div>
                    <h4 className="font-semibold mb-2">Information We Collect</h4>
                    <p>We collect only the information necessary to process your sweepstakes entry and comply with legal requirements. This includes your name, address, phone number, and birth year for age verification.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">How We Use Your Information</h4>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Sweepstakes administration and entry processing</li>
                      <li>Winner notification and prize fulfillment</li>
                      <li>Age and eligibility verification</li>
                      <li>Legal compliance and record keeping</li>
                      <li>Optional marketing communications (with consent)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Data Sharing</h4>
                    <p>We do not sell, rent, or share your personal information with third parties except as required for prize fulfillment, legal compliance, or with your explicit consent.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Data Security</h4>
                    <p>We implement appropriate security measures including encryption and secure databases to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Your Rights</h4>
                    <p>You have the right to access, correct, or delete your personal information. Contact us at support@publishersus.com for any privacy-related requests.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">GDPR & CCPA Compliance</h4>
                    <p><strong>California Consumer Privacy Act (CCPA):</strong> California residents have additional rights regarding their personal information, including the right to know, delete, and opt-out of sale.</p>
                    <p><strong>General Data Protection Regulation (GDPR):</strong> For users in the European Economic Area, we process data based on legitimate interest for sweepstakes administration.</p>
                    <p><strong>Data Retention:</strong> Personal information is retained only as long as necessary for sweepstakes administration and legal compliance requirements.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default OfficialRules;
