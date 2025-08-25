// ========================================
// src/components/PlantsSection.js
// ========================================

import React, { useRef, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import PlantCard from './PlantCard';
import { colors } from '../constants/colors';

const { width: screenWidth } = Dimensions.get('window');
const CARD_WIDTH = 160; // Adjust this based on your PlantCard width
const CARD_MARGIN = 15; // Space between cards

const PlantsSection = ({ plants, onIndexChange, currentIndex = 0 }) => {
  const scrollViewRef = useRef(null);

  // Sync with external index changes (from indicator taps)
  useEffect(() => {
    if (scrollViewRef.current && currentIndex >= 0) {
      const scrollToX = currentIndex * (CARD_WIDTH + CARD_MARGIN);
      scrollViewRef.current.scrollTo({
        x: scrollToX,
        animated: true,
      });
    }
  }, [currentIndex]);

  const handleScroll = (event) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(offsetX / (CARD_WIDTH + CARD_MARGIN));
    
    if (onIndexChange && index >= 0 && index < plants.length) {
      onIndexChange(index);
    }
  };

  return (
    <View style={styles.section}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>All Plants</Text>
        <TouchableOpacity>
          <Text style={styles.seeAllText}>See all</Text>
        </TouchableOpacity>
      </View>
      <ScrollView 
        ref={scrollViewRef}
        horizontal 
        showsHorizontalScrollIndicator={false} 
        style={styles.horizontalScroll}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        snapToInterval={CARD_WIDTH + CARD_MARGIN}
        decelerationRate="fast"
        snapToAlignment="start"
        contentContainerStyle={styles.scrollContent}
      >
        {plants.map((plant, index) => (
          <View key={plant.id} style={styles.cardContainer}>
            <PlantCard plant={plant} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    marginBottom: 10, // Reduced from 30 to bring indicator closer
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  seeAllText: {
    color: '#333',
    fontSize: 14,
  },
  horizontalScroll: {
    paddingLeft: 20,
  },
  scrollContent: {
    paddingRight: 20, // Add padding at the end
  },
  cardContainer: {
    marginRight: CARD_MARGIN,
  },
});

export default PlantsSection;