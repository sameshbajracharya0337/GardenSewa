// ========================================
// src/screens/HomeScreen.js
// ========================================

import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import OfferBanner from '../components/OfferBanner';
import ServicesSection from '../components/ServicesSection';
import PlantsSection from '../components/PlantsSection';
import ReviewsSection from '../components/ReviewsSection';
import CarouselIndicator from '../components/CarouselIndicator';
import { servicesData, plantsData, reviewsData } from '../data/mockData';

const HomeScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [currentServicesIndex, setCurrentServicesIndex] = useState(0);
  const [currentPlantsIndex, setCurrentPlantsIndex] = useState(0);
  const [currentReviewsIndex, setCurrentReviewsIndex] = useState(0);

  const handleServicesScroll = (index) => {
    setCurrentServicesIndex(index);
    // Add logic to scroll to specific service if needed
  };

  const handlePlantsScroll = (index) => {
    setCurrentPlantsIndex(index);
  };

  const handleReviewsScroll = (index) => {
    setCurrentReviewsIndex(index);
    // Add logic to scroll to specific review if needed
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <SearchBar searchText={searchText} setSearchText={setSearchText} />
      <OfferBanner />
      
      {/* Services Section with Indicator */}
      <ServicesSection 
        services={servicesData} 
        onIndexChange={setCurrentServicesIndex}
      />
      <CarouselIndicator
        totalItems={servicesData.length}
        currentIndex={currentServicesIndex}
        onPress={handleServicesScroll}
      />
      
      {/* Plants Section with Indicator */}
      <PlantsSection 
        plants={plantsData} 
        onIndexChange={setCurrentPlantsIndex}
        currentIndex={currentPlantsIndex}
      />
      <CarouselIndicator
        totalItems={plantsData.length}
        currentIndex={currentPlantsIndex}
        onPress={handlePlantsScroll}
      />
      
      {/* Reviews Section with Indicator */}
      <ReviewsSection 
        reviews={reviewsData} 
        onIndexChange={setCurrentReviewsIndex}
      />
    </ScrollView>
  );
};

export default HomeScreen;