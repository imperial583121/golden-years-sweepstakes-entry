
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Lock, Eye, UserCheck } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const PrivacyPolicy = () => {
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
                <Shield className="w-8 h-8 text-sweepstakes-gold" />
                Privacy Policy
              </CardTitle>
            </CardHeader>
            
            <CardContent className="p-8 space-y-8">
              {/* Facebook Disclaimer */}
              <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
                <p className="text-blue-700 font-semibold text-center">
                  This promotion is in no way sponsored, endorsed, administered by, or associated with Facebook.
                </p>
              </div>

              {/* Information We Collect */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-sweepstakes-navy border-b-2 border-sweepstakes-gold pb-2 flex items-center gap-3">
                  <Eye className="w-6 h-6 text-sweepstakes-gold" />
                  Information We Collect
                </h2>
                
                <div>
                  <h3 className="text-xl font-semibold text-sweepstakes-navy mb-3">Personal Information</h3>
                  <p className="text-gray-700 mb-3">We collect the following personal information when you enter our sweepstakes:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Full name</li>
                    <li>Email address</li>
                    <li>Mailing address (street, city, state, ZIP code)</li>
                    <li>Phone number</li>
                    <li>Date of birth (for age verification)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-sweepstakes-navy mb-3">Automatically Collected Information</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>IP address and location data</li>
                    <li>Browser type and version</li>
                    <li>Device information</li>
                    <li>Pages visited and time spent on site</li>
                    <li>Referral source</li>
                  </ul>
                </div>
              </div>

              {/* How We Use Your Information */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-sweepstakes-navy border-b-2 border-sweepstakes-gold pb-2">How We Use Your Information</h2>
                
                <div>
                  <h3 className="text-xl font-semibold text-sweepstakes-navy mb-3">Primary Uses</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Sweepstakes administration and entry processing</li>
                    <li>Winner selection and notification</li>
                    <li>Prize fulfillment and shipping</li>
                    <li>Age and eligibility verification</li>
                    <li>Legal compliance and record keeping</li>
                    <li>Customer support and communication</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-sweepstakes-navy mb-3">Marketing Communications</h3>
                  <p className="text-gray-700 mb-3">With your explicit consent, we may send you promotional emails about:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Future sweepstakes and contests</li>
                    <li>Special offers from trusted partners</li>
                    <li>Updates about PUBLISHERSUS services</li>
                  </ul>
                  <p className="text-gray-700 mt-3 font-medium">You can opt out of marketing communications at any time by clicking the unsubscribe link in our emails.</p>
                </div>
              </div>

              {/* Information Sharing */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-sweepstakes-navy border-b-2 border-sweepstakes-gold pb-2">Information Sharing & Disclosure</h2>
                
                <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-red-800 mb-3">We DO NOT Sell Your Information</h3>
                  <p className="text-red-700">PUBLISHERSUS does not sell, rent, or lease your personal information to third parties for their marketing purposes.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-sweepstakes-navy mb-3">Limited Sharing</h3>
                  <p className="text-gray-700 mb-3">We may share your information only in these specific circumstances:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li><strong>Prize Fulfillment:</strong> With shipping companies and prize vendors to deliver your winnings</li>
                    <li><strong>Legal Compliance:</strong> When required by law, court order, or government regulation</li>
                    <li><strong>Service Providers:</strong> With trusted third-party services that help us operate our sweepstakes (email services, analytics, etc.)</li>
                    <li><strong>Business Transfer:</strong> In the event of a merger, acquisition, or sale of our business</li>
                    <li><strong>Consent:</strong> When you have given us explicit permission to share with specific partners</li>
                  </ul>
                </div>
              </div>

              {/* Data Security */}
              <div className="bg-emerald-50 border-2 border-emerald-200 rounded-xl p-6">
                <h2 className="text-2xl font-bold text-emerald-800 mb-4 flex items-center gap-3">
                  <Lock className="w-6 h-6" />
                  Data Security & Protection
                </h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-emerald-800 mb-2">Security Measures</h3>
                    <ul className="list-disc list-inside space-y-1 text-emerald-700">
                      <li>SSL encryption for all data transmission</li>
                      <li>Secure database storage with encryption at rest</li>
                      <li>Regular security audits and updates</li>
                      <li>Limited access to personal information (need-to-know basis)</li>
                      <li>Employee training on data protection</li>
                      <li>Secure payment processing (PCI DSS compliant)</li>
                    </ul>
                  </div>
                  
                  <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-4">
                    <p className="text-yellow-800 font-medium">
                      <strong>Important:</strong> While we implement industry-standard security measures, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security but are committed to protecting your information to the best of our ability.
                    </p>
                  </div>
                </div>
              </div>

              {/* Your Privacy Rights */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-sweepstakes-navy border-b-2 border-sweepstakes-gold pb-2 flex items-center gap-3">
                  <UserCheck className="w-6 h-6 text-sweepstakes-gold" />
                  Your Privacy Rights
                </h2>
                
                <div>
                  <h3 className="text-xl font-semibold text-sweepstakes-navy mb-3">You Have the Right To:</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li><strong>Access:</strong> Request a copy of the personal information we have about you</li>
                    <li><strong>Correct:</strong> Ask us to update or correct inaccurate information</li>
                    <li><strong>Delete:</strong> Request deletion of your personal information (subject to legal requirements)</li>
                    <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
                    <li><strong>Portability:</strong> Request your data in a machine-readable format</li>
                    <li><strong>Restrict:</strong> Limit how we process your information</li>
                  </ul>
                </div>

                <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-blue-800 mb-3">California Residents (CCPA)</h3>
                  <p className="text-blue-700">California residents have additional rights under the California Consumer Privacy Act, including the right to know what personal information is collected, sold, or disclosed.</p>
                </div>

                <div className="bg-gray-50 border-2 border-gray-200 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Exercise Your Rights</h3>
                  <p className="text-gray-700">To exercise any of these rights, contact us at <strong>privacy@sweeppublishers.com</strong> or use our contact information below. We will respond within 30 days.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
