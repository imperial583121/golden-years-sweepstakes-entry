
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Lock, MapPin, Phone } from 'lucide-react';

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

  const states = [
    { value: 'Alabama', label: 'Alabama' },
    { value: 'Alaska', label: 'Alaska' },
    { value: 'Arizona', label: 'Arizona' },
    { value: 'Arkansas', label: 'Arkansas' },
    { value: 'California', label: 'California' },
    { value: 'Colorado', label: 'Colorado' },
    { value: 'Connecticut', label: 'Connecticut' },
    { value: 'Delaware', label: 'Delaware' },
    { value: 'Florida', label: 'Florida' },
    { value: 'Georgia', label: 'Georgia' },
    { value: 'Hawaii', label: 'Hawaii' },
    { value: 'Idaho', label: 'Idaho' },
    { value: 'Illinois', label: 'Illinois' },
    { value: 'Indiana', label: 'Indiana' },
    { value: 'Iowa', label: 'Iowa' },
    { value: 'Kansas', label: 'Kansas' },
    { value: 'Kentucky', label: 'Kentucky' },
    { value: 'Louisiana', label: 'Louisiana' },
    { value: 'Maine', label: 'Maine' },
    { value: 'Maryland', label: 'Maryland' },
    { value: 'Massachusetts', label: 'Massachusetts' },
    { value: 'Michigan', label: 'Michigan' },
    { value: 'Minnesota', label: 'Minnesota' },
    { value: 'Mississippi', label: 'Mississippi' },
    { value: 'Missouri', label: 'Missouri' },
    { value: 'Montana', label: 'Montana' },
    { value: 'Nebraska', label: 'Nebraska' },
    { value: 'Nevada', label: 'Nevada' },
    { value: 'New Hampshire', label: 'New Hampshire' },
    { value: 'New Jersey', label: 'New Jersey' },
    { value: 'New Mexico', label: 'New Mexico' },
    { value: 'New York', label: 'New York' },
    { value: 'North Carolina', label: 'North Carolina' },
    { value: 'North Dakota', label: 'North Dakota' },
    { value: 'Ohio', label: 'Ohio' },
    { value: 'Oklahoma', label: 'Oklahoma' },
    { value: 'Oregon', label: 'Oregon' },
    { value: 'Pennsylvania', label: 'Pennsylvania' },
    { value: 'Rhode Island', label: 'Rhode Island' },
    { value: 'South Carolina', label: 'South Carolina' },
    { value: 'South Dakota', label: 'South Dakota' },
    { value: 'Tennessee', label: 'Tennessee' },
    { value: 'Texas', label: 'Texas' },
    { value: 'Utah', label: 'Utah' },
    { value: 'Vermont', label: 'Vermont' },
    { value: 'Virginia', label: 'Virginia' },
    { value: 'Washington', label: 'Washington' },
    { value: 'West Virginia', label: 'West Virginia' },
    { value: 'Wisconsin', label: 'Wisconsin' },
    { value: 'Wyoming', label: 'Wyoming' }
  ];

  return (
    <section className="py-6 bg-gray-50 relative">
      {/* Classic connecting border */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-sweepstakes-gold to-transparent"></div>
      
      <div className="container mx-auto px-4 -mt-4">
        <div className="max-w-2xl mx-auto">
          {/* Elegant curved card with enhanced styling */}
          <Card className="shadow-2xl border-0 rounded-3xl overflow-hidden bg-gradient-to-br from-white via-gray-50 to-white relative">
            {/* Decorative gold accent border */}
            <div className="absolute inset-0 bg-gradient-to-r from-sweepstakes-gold/20 via-transparent to-sweepstakes-gold/20 rounded-3xl p-0.5">
              <div className="bg-white rounded-3xl h-full w-full"></div>
            </div>
            
            <CardHeader className="bg-gradient-to-r from-sweepstakes-navy via-sweepstakes-navy to-sweepstakes-navy-light text-white text-center relative z-10 rounded-t-3xl">
              <CardTitle className="text-2xl md:text-3xl font-bold" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
                OFFICIAL ENTRY FORM
              </CardTitle>
              <p className="text-sweepstakes-gold font-semibold text-lg">
                Complete All Fields to Secure Your Entry
              </p>
            </CardHeader>
            
            <CardContent className="p-8 relative z-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName" className="text-lg font-semibold text-sweepstakes-navy mb-2 block">
                      First Name *
                    </Label>
                    <Input
                      id="firstName"
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      className="text-lg p-4 border-2 border-gray-300 focus:border-sweepstakes-gold rounded-xl transition-all duration-300 hover:border-sweepstakes-gold/50"
                      placeholder="Enter your first name"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="lastName" className="text-lg font-semibold text-sweepstakes-navy mb-2 block">
                      Last Name *
                    </Label>
                    <Input
                      id="lastName"
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      className="text-lg p-4 border-2 border-gray-300 focus:border-sweepstakes-gold rounded-xl transition-all duration-300 hover:border-sweepstakes-gold/50"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="streetAddress" className="text-lg font-semibold text-sweepstakes-navy mb-2 block flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-sweepstakes-gold" />
                    Street Address *
                  </Label>
                  <Input
                    id="streetAddress"
                    type="text"
                    required
                    value={formData.streetAddress}
                    onChange={(e) => handleInputChange('streetAddress', e.target.value)}
                    className="text-lg p-4 border-2 border-gray-300 focus:border-sweepstakes-gold rounded-xl transition-all duration-300 hover:border-sweepstakes-gold/50"
                    placeholder="Enter your street address"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="city" className="text-lg font-semibold text-sweepstakes-navy mb-2 block flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-sweepstakes-gold" />
                      City *
                    </Label>
                    <Input
                      id="city"
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) => handleInputChange('city', e.target.value)}
                      className="text-lg p-4 border-2 border-gray-300 focus:border-sweepstakes-gold rounded-xl transition-all duration-300 hover:border-sweepstakes-gold/50"
                      placeholder="City"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="postcode" className="text-lg font-semibold text-sweepstakes-navy mb-2 block flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-sweepstakes-gold" />
                      ZIP Code *
                    </Label>
                    <Input
                      id="postcode"
                      type="text"
                      required
                      value={formData.postcode}
                      onChange={(e) => handleInputChange('postcode', e.target.value)}
                      className="text-lg p-4 border-2 border-gray-300 focus:border-sweepstakes-gold rounded-xl transition-all duration-300 hover:border-sweepstakes-gold/50"
                      placeholder="ZIP"
                      maxLength={5}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="state" className="text-lg font-semibold text-sweepstakes-navy mb-2 block flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-sweepstakes-gold" />
                    State *
                  </Label>
                  <Select value={formData.state} onValueChange={(value) => handleInputChange('state', value)}>
                    <SelectTrigger className="text-lg p-4 border-2 border-gray-300 focus:border-sweepstakes-gold rounded-xl transition-all duration-300 hover:border-sweepstakes-gold/50">
                      <SelectValue placeholder="Select State" />
                    </SelectTrigger>
                    <SelectContent>
                      {states.map(state => (
                        <SelectItem key={state.value} value={state.value}>{state.label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="birthYear" className="text-lg font-semibold text-sweepstakes-navy mb-2 block">
                      Birth Year *
                    </Label>
                    <Input
                      id="birthYear"
                      type="number"
                      required
                      min="1924"
                      max="2006"
                      value={formData.birthYear}
                      onChange={(e) => handleInputChange('birthYear', e.target.value)}
                      className="text-lg p-4 border-2 border-gray-300 focus:border-sweepstakes-gold rounded-xl transition-all duration-300 hover:border-sweepstakes-gold/50"
                      placeholder="Enter birth year (e.g., 1990)"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="phoneNumber" className="text-lg font-semibold text-sweepstakes-navy mb-2 block flex items-center gap-2">
                      <Phone className="w-5 h-5 text-sweepstakes-gold" />
                      Phone Number *
                    </Label>
                    <Input
                      id="phoneNumber"
                      type="tel"
                      required
                      value={formData.phoneNumber}
                      onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                      className="text-lg p-4 border-2 border-gray-300 focus:border-sweepstakes-gold rounded-xl transition-all duration-300 hover:border-sweepstakes-gold/50"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                <div className="bg-gradient-to-r from-emerald-50 to-green-50 p-6 rounded-2xl border-2 border-emerald-200 shadow-inner">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-emerald-500 p-2 rounded-full">
                      <Shield className="w-5 h-5 text-white" />
                    </div>
                    <div className="bg-emerald-500 p-2 rounded-full">
                      <Lock className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-bold text-emerald-800 text-lg">Your Information is Secure</span>
                  </div>
                  <p className="text-emerald-700 font-medium">
                    We use advanced encryption to protect your personal information. 
                    Your data will never be sold or shared with unauthorized parties.
                  </p>
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-sweepstakes-gold via-sweepstakes-gold to-sweepstakes-gold-dark hover:from-sweepstakes-gold-dark hover:to-sweepstakes-gold text-sweepstakes-navy font-bold text-xl py-6 rounded-2xl shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-3xl border-2 border-sweepstakes-gold-dark"
                  style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }}
                >
                  🎯 Enter Sweepstakes Now
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EntryForm;
