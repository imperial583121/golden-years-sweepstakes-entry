
import React, { useState, useRef, useEffect } from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MapPin } from "lucide-react";

interface AddressData {
  streetAddress: string;
  city: string;
  state: string;
  postcode: string;
}

interface AddressAutocompleteProps {
  formData: AddressData;
  onAddressChange: (field: keyof AddressData, value: string) => void;
}

interface GeoapifyFeature {
  properties: {
    formatted: string;
    address_line1?: string;
    housenumber?: string;
    street?: string;
    city?: string;
    state?: string;
    state_code?: string;
    postcode?: string;
  };
}

const AddressAutocomplete: React.FC<AddressAutocompleteProps> = ({ formData, onAddressChange }) => {
  const [suggestions, setSuggestions] = useState<GeoapifyFeature[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  let debounceTimeout: NodeJS.Timeout;

  const fetchSuggestions = async (query: string) => {
    if (query.length < 3) {
      setSuggestions([]);
      setShowSuggestions(false);
      return;
    }

    setIsLoading(true);
    
    const requestOptions = {
      method: 'GET',
    };

    try {
      const response = await fetch(
        `https://api.geoapify.com/v1/geocode/autocomplete?text=${encodeURIComponent(query)}&filter=countrycode:us&limit=5&apiKey=5f9d8b29a78c4956ba14e5f028ac5d20`,
        requestOptions
      );
      const result = await response.json();
      
      console.log('Geoapify API response:', result);
      
      if (result.features && result.features.length > 0) {
        setSuggestions(result.features);
        setShowSuggestions(true);
      } else {
        setSuggestions([]);
        setShowSuggestions(false);
      }
    } catch (error) {
      console.error('Geoapify API error:', error);
      setSuggestions([]);
      setShowSuggestions(false);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    onAddressChange('streetAddress', value);

    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(() => {
      fetchSuggestions(value);
    }, 300);
  };

  const handleSuggestionClick = (suggestion: GeoapifyFeature) => {
    const props = suggestion.properties;
    
    console.log('Selected suggestion properties:', props);
    console.log('Before mapping - Current form data:', formData);
    
    // Build address from housenumber and street if available, otherwise use address_line1
    let addressLine1 = '';
    if (props.housenumber && props.street) {
      addressLine1 = `${props.housenumber} ${props.street}`;
    } else if (props.address_line1) {
      addressLine1 = props.address_line1;
    } else if (props.street) {
      addressLine1 = props.street;
    }
    
    // Get the values we're about to set
    const newCity = props.city || '';
    const newState = props.state || props.state_code || '';
    const newPostcode = props.postcode || '';
    
    console.log('Values being set:', {
      streetAddress: addressLine1,
      city: newCity,
      state: newState,
      postcode: newPostcode
    });
    
    // Map Geoapify response to form fields
    onAddressChange('streetAddress', addressLine1);
    onAddressChange('city', newCity);
    onAddressChange('state', newState);
    onAddressChange('postcode', newPostcode);
    
    setShowSuggestions(false);
    setSuggestions([]);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node) && 
          inputRef.current && !inputRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="space-y-4 md:space-y-6">
      <div className="relative w-full">
        <Label htmlFor="streetAddress" className="text-base md:text-lg font-bold text-sweepstakes-navy mb-2 flex items-center gap-2">
          <MapPin className="w-4 h-4 md:w-5 md:h-5 text-sweepstakes-gold flex-shrink-0" />
          <span className="break-words">Street Address *</span>
        </Label>
        <div className="relative">
          <Input
            ref={inputRef}
            id="streetAddress"
            name="streetAddress"
            type="text"
            value={formData.streetAddress}
            onChange={handleInputChange}
            placeholder="Start typing your address..."
            autoComplete="street-address"
            className="text-base md:text-lg p-3 md:p-4 border-2 border-blue-300 focus:border-blue-500 rounded-xl transition-all duration-300 hover:border-blue-400 bg-white shadow-sm focus:shadow-md"
            required
          />
        </div>
        
        {showSuggestions && suggestions.length > 0 && (
          <div
            ref={dropdownRef}
            className="absolute top-full left-0 right-0 bg-white border-2 border-blue-300 rounded-xl shadow-xl z-50 max-h-60 overflow-y-auto mt-1"
          >
            {suggestions.map((suggestion, index) => (
              <div
                key={index}
                className="p-3 hover:bg-blue-50 cursor-pointer border-b border-blue-100 last:border-b-0 transition-colors"
                onClick={() => handleSuggestionClick(suggestion)}
              >
                <div className="text-sm font-medium text-sweepstakes-navy">
                  {suggestion.properties.formatted}
                </div>
              </div>
            ))}
          </div>
        )}
        
        {isLoading && (
          <div className="absolute top-full left-0 right-0 bg-white border-2 border-blue-300 rounded-xl shadow-xl z-50 p-3 mt-1">
            <div className="text-sm text-sweepstakes-navy text-center">Loading suggestions...</div>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <div className="space-y-2">
          <Label htmlFor="city" className="text-base md:text-lg font-bold text-sweepstakes-navy flex items-center gap-2">
            <MapPin className="w-4 h-4 md:w-5 md:h-5 text-sweepstakes-gold flex-shrink-0" />
            <span className="break-words">City *</span>
          </Label>
          <div className="relative">
            <Input
              id="city"
              name="city"
              type="text"
              value={formData.city}
              onChange={(e) => onAddressChange('city', e.target.value)}
              placeholder="City"
              autoComplete="address-level2"
              className="text-base md:text-lg p-3 md:p-4 border-2 border-blue-300 focus:border-blue-500 rounded-xl transition-all duration-300 hover:border-blue-400 bg-white shadow-sm focus:shadow-md"
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="postcode" className="text-base md:text-lg font-bold text-sweepstakes-navy flex items-center gap-2">
            <MapPin className="w-4 h-4 md:w-5 md:h-5 text-sweepstakes-gold flex-shrink-0" />
            <span className="break-words">ZIP Code *</span>
          </Label>
          <div className="relative">
            <Input
              id="postcode"
              name="postcode"
              type="text"
              value={formData.postcode}
              onChange={(e) => onAddressChange('postcode', e.target.value)}
              placeholder="ZIP"
              autoComplete="postal-code"
              pattern="[0-9]{5}(-[0-9]{4})?"
              className="text-base md:text-lg p-3 md:p-4 border-2 border-blue-300 focus:border-blue-500 rounded-xl transition-all duration-300 hover:border-blue-400 bg-white shadow-sm focus:shadow-md"
              maxLength={5}
              required
            />
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="state" className="text-base md:text-lg font-bold text-sweepstakes-navy flex items-center gap-2">
          <MapPin className="w-4 h-4 md:w-5 md:h-5 text-sweepstakes-gold flex-shrink-0" />
          <span className="break-words">State *</span>
        </Label>
        <div className="relative">
          <Input
            id="state"
            name="state"
            type="text"
            value={formData.state}
            onChange={(e) => onAddressChange('state', e.target.value)}
            placeholder="State"
            autoComplete="address-level1"
            className="text-base md:text-lg p-3 md:p-4 border-2 border-blue-300 focus:border-blue-500 rounded-xl transition-all duration-300 hover:border-blue-400 bg-white shadow-sm focus:shadow-md"
            required
          />
        </div>
      </div>
    </div>
  );
};

export default AddressAutocomplete;
