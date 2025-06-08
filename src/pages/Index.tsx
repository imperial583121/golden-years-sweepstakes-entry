
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import EntryForm from '@/components/EntryForm';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <EntryForm />
      <Footer />
    </div>
  );
};

export default Index;
