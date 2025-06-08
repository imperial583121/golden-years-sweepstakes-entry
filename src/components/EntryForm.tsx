
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Lock } from 'lucide-react';

const EntryForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    streetAddress: '',
    city: '',
    state: '',
    postcode: '',
    birthYear: '',
    phoneNumber: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // TODO: Integrate with Supabase in Part 2
  };

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 80 }, (_, i) => currentYear - 18 - i);

  const states = [
    'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA',
    'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD',
    'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ',
    'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC',
    'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <Card className="max-w-2xl mx-auto shadow-2xl border-4 border-sweepstakes-gold">
          <CardHeader className="bg-sweepstakes-navy text-white text-center">
            <CardTitle className="text-2xl md:text-3xl font-bold">
              OFFICIAL ENTRY FORM
            </CardTitle>
            <p className="text-sweepstakes-gold font-semibold">
              Complete All Fields to Secure Your Entry
            </p>
          </CardHeader>
          
          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName" className="text-lg font-semibold text-sweepstakes-navy">
                    First Name *
                  </Label>
                  <Input
                    id="firstName"
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    className="mt-1 text-lg p-3 border-2 border-gray-300 focus:border-sweepstakes-gold"
                    placeholder="Enter your first name"
                  />
                </div>
                
                <div>
                  <Label htmlFor="lastName" className="text-lg font-semibold text-sweepstakes-navy">
                    Last Name *
                  </Label>
                  <Input
                    id="lastName"
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    className="mt-1 text-lg p-3 border-2 border-gray-300 focus:border-sweepstakes-gold"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="streetAddress" className="text-lg font-semibold text-sweepstakes-navy">
                  Street Address *
                </Label>
                <Input
                  id="streetAddress"
                  type="text"
                  required
                  value={formData.streetAddress}
                  onChange={(e) => handleInputChange('streetAddress', e.target.value)}
                  className="mt-1 text-lg p-3 border-2 border-gray-300 focus:border-sweepstakes-gold"
                  placeholder="Enter your street address"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="city" className="text-lg font-semibold text-sweepstakes-navy">
                    City *
                  </Label>
                  <Input
                    id="city"
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => handleInputChange('city', e.target.value)}
                    className="mt-1 text-lg p-3 border-2 border-gray-300 focus:border-sweepstakes-gold"
                    placeholder="City"
                  />
                </div>
                
                <div>
                  <Label htmlFor="state" className="text-lg font-semibold text-sweepstakes-navy">
                    State *
                  </Label>
                  <Select value={formData.state} onValueChange={(value) => handleInputChange('state', value)}>
                    <SelectTrigger className="mt-1 text-lg p-3 border-2 border-gray-300 focus:border-sweepstakes-gold">
                      <SelectValue placeholder="State" />
                    </SelectTrigger>
                    <SelectContent>
                      {states.map(state => (
                        <SelectItem key={state} value={state}>{state}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="postcode" className="text-lg font-semibold text-sweepstakes-navy">
                    ZIP Code *
                  </Label>
                  <Input
                    id="postcode"
                    type="text"
                    required
                    value={formData.postcode}
                    onChange={(e) => handleInputChange('postcode', e.target.value)}
                    className="mt-1 text-lg p-3 border-2 border-gray-300 focus:border-sweepstakes-gold"
                    placeholder="ZIP"
                    maxLength={5}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="birthYear" className="text-lg font-semibold text-sweepstakes-navy">
                    Birth Year *
                  </Label>
                  <Select value={formData.birthYear} onValueChange={(value) => handleInputChange('birthYear', value)}>
                    <SelectTrigger className="mt-1 text-lg p-3 border-2 border-gray-300 focus:border-sweepstakes-gold">
                      <SelectValue placeholder="Select year" />
                    </SelectTrigger>
                    <SelectContent>
                      {years.map(year => (
                        <SelectItem key={year} value={year.toString()}>{year}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="phoneNumber" className="text-lg font-semibold text-sweepstakes-navy">
                    Phone Number *
                  </Label>
                  <Input
                    id="phoneNumber"
                    type="tel"
                    required
                    value={formData.phoneNumber}
                    onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                    className="mt-1 text-lg p-3 border-2 border-gray-300 focus:border-sweepstakes-gold"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              <div className="bg-green-50 p-4 rounded-lg border-2 border-green-200">
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="w-5 h-5 text-green-600" />
                  <Lock className="w-5 h-5 text-green-600" />
                  <span className="font-semibold text-green-800">Your Information is Secure</span>
                </div>
                <p className="text-sm text-green-700">
                  We use advanced encryption to protect your personal information. 
                  Your data will never be sold or shared with unauthorized parties.
                </p>
              </div>

              <Button 
                type="submit"
                className="w-full bg-sweepstakes-gold hover:bg-sweepstakes-gold-dark text-sweepstakes-navy font-bold text-xl py-4 rounded-lg shadow-lg transform transition-transform hover:scale-105"
              >
                SUBMIT MY OFFICIAL ENTRY
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default EntryForm;
