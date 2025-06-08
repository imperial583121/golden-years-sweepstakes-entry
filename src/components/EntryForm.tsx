import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Phone, Calendar, User, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import AddressAutocomplete from './AddressAutocomplete';

const EntryForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    streetAddress: '',
    city: '',
    state: '',
    postcode: '',
    birthYear: '',
    phoneNumber: '+1 '
  });

  const [agreed, setAgreed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const formatPhoneNumber = (value: string) => {
    // Remove all non-digit characters except the +1 prefix
    const cleaned = value.replace(/[^\d]/g, '');
    
    // If the user cleared everything, return just +1 
    if (cleaned.length === 0) {
      return '+1 ';
    }
    
    // If it starts with 1, assume it's the country code
    const digits = cleaned.startsWith('1') ? cleaned.slice(1) : cleaned;
    
    // Format as (XXX) XXX-XXXX
    if (digits.length <= 3) {
      return `+1 (${digits}`;
    } else if (digits.length <= 6) {
      return `+1 (${digits.slice(0, 3)}) ${digits.slice(3)}`;
    } else {
      return `+1 (${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6, 10)}`;
    }
  };

  const handleInputChange = (field: string, value: string) => {
    if (field === 'phoneNumber') {
      setFormData(prev => ({
        ...prev,
        [field]: formatPhoneNumber(value)
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [field]: value
      }));
    }
  };

  const handleAddressChange = (field: 'streetAddress' | 'city' | 'state' | 'postcode', value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!agreed) {
      toast({
        title: "Agreement Required",
        description: "Please agree to the Terms & Conditions and Privacy Policy to continue.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Calculate date of birth from birth year
      const birthDate = formData.birthYear ? `${formData.birthYear}-01-01` : null;
      
      const { error } = await supabase
        .from('entries')
        .insert({
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: `${formData.firstName.toLowerCase()}.${formData.lastName.toLowerCase()}@example.com`,
          phone: formData.phoneNumber,
          address: formData.streetAddress,
          city: formData.city,
          state: formData.state,
          zip_code: formData.postcode,
          date_of_birth: birthDate,
          marketing_consent: false,
          terms_consent: agreed
        });

      if (error) {
        console.error('Supabase error:', error);
        toast({
          title: "Submission Failed",
          description: "There was an error submitting your entry. Please try again.",
          variant: "destructive"
        });
      } else {
        toast({
          title: "Entry Submitted Successfully!",
          description: "Thank you for entering the sweepstakes. Good luck!",
        });
        
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          streetAddress: '',
          city: '',
          state: '',
          postcode: '',
          birthYear: '',
          phoneNumber: '+1 '
        });
        setAgreed(false);
      }
    } catch (error) {
      console.error('Unexpected error:', error);
      toast({
        title: "Submission Failed",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
            
            <CardContent className="p-4 md:p-8 relative z-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* First Name and Last Name in same row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName" className="text-lg font-semibold text-sweepstakes-navy mb-2 block flex items-center gap-2">
                      <User className="w-5 h-5 text-sweepstakes-gold" />
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
                    <Label htmlFor="lastName" className="text-lg font-semibold text-sweepstakes-navy mb-2 block flex items-center gap-2">
                      <User className="w-5 h-5 text-sweepstakes-gold" />
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

                {/* Address Autocomplete Component */}
                <AddressAutocomplete 
                  formData={{
                    streetAddress: formData.streetAddress,
                    city: formData.city,
                    state: formData.state,
                    postcode: formData.postcode
                  }}
                  onAddressChange={handleAddressChange}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="birthYear" className="text-lg font-semibold text-sweepstakes-navy mb-2 block flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-sweepstakes-gold" />
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
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                {/* Privacy & Consent Section */}
                <div className="bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50 p-3 md:p-6 rounded-2xl border-2 border-blue-300 shadow-lg relative overflow-hidden">
                  {/* Decorative background pattern */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-200/20 via-transparent to-blue-200/20 rounded-2xl"></div>
                  
                  {/* Header */}
                  <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-5 pb-2 md:pb-3 border-b-2 border-blue-300 relative z-10">
                    <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-1.5 md:p-2 rounded-full shadow-md">
                      <Shield className="w-3 h-3 md:w-5 md:h-5 text-white" />
                    </div>
                    <h3 className="text-base md:text-xl font-bold text-blue-900 tracking-wide">Privacy & Consent</h3>
                  </div>
                  
                  {/* Required Agreement Checkbox */}
                  <div className="flex items-start gap-2 md:gap-4 relative z-10">
                    <div className="flex-shrink-0 mt-0.5 md:mt-1">
                      <Checkbox 
                        id="agreement"
                        checked={agreed}
                        onCheckedChange={(checked) => setAgreed(checked as boolean)}
                        className="h-4 w-4 md:h-5 md:w-5 border-2 border-blue-500 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600 rounded shadow-sm"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <Label htmlFor="agreement" className="text-blue-900 font-medium text-xs md:text-sm leading-relaxed cursor-pointer block break-words">
                        <span className="block mb-1">
                          I agree to the{' '}
                          <Link 
                            to="/official-rules" 
                            className="text-blue-700 hover:text-blue-900 font-bold underline decoration-2 underline-offset-2 transition-colors duration-200"
                            target="_blank"
                          >
                            Terms & Conditions
                          </Link>
                          {' '}and{' '}
                          <Link 
                            to="/privacy-policy" 
                            className="text-blue-700 hover:text-blue-900 font-bold underline decoration-2 underline-offset-2 transition-colors duration-200"
                            target="_blank"
                          >
                            Privacy Policy
                          </Link>
                          .
                        </span>
                        <span className="block">
                          I consent to the collection and use of my information for sweepstakes entry and winner notification purposes. I certify that I am 18 years or older and a legal U.S. resident. *
                        </span>
                      </Label>
                    </div>
                  </div>
                  
                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
                </div>

                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:from-yellow-500 hover:to-yellow-400 text-blue-900 font-bold text-xl py-6 rounded-2xl shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-3xl border-2 border-yellow-600 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }}
                >
                  {isSubmitting ? 'Submitting...' : 'Enter Sweepstakes Now'}
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
