// ========================================
// src/components/ReviewsSection.js
// ========================================

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import ReviewCard from './ReviewCard';
import { colors } from '../constants/colors';

const ReviewsSection = ({ reviews }) => {
  return (
    <View style={styles.section}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Reviews</Text>
        <TouchableOpacity>
          <Text style={styles.seeAllText}>See all</Text>
        </TouchableOpacity>
      </View>
      {reviews.map((review) => (
        <ReviewCard key={review.id} review={review} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    marginBottom: 30,
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
});

export default ReviewsSection;