// ========================================
// Updated ReviewCard.js - Fixed styling to match requirements
// ========================================

import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../constants/colors';
import { avatarImages } from '../data/mockData';

const ReviewCard = ({ review }) => {
  // Get the avatar image source from the avatar image map
  const avatarSource = avatarImages[review.avatarPath];

  return (
    <View>
      <View style={styles.reviewCard}>
        <View style={styles.reviewContent}>
          <View style={styles.avatarContainer}>
            <Image source={avatarSource} style={styles.reviewAvatar} />
          </View>
          <View style={styles.reviewTextContainer}>
            <View style={styles.reviewHeader}>
              <Text style={styles.reviewName}>{review.name}</Text>
              <View style={styles.reviewStars}>
                {[...Array(review.rating)].map((_, i) => (
                  <Ionicons key={i} name="star" size={14} color="#4CAF50" />
                ))}
              </View>
            </View>
            <Text style={styles.reviewComment}>{review.comment}</Text>
            <View style={styles.reviewFooter}>
              <Text style={styles.reviewDate}>{review.date}</Text>
              <TouchableOpacity>
                <Text style={styles.showAllText}>Show all</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.dividerLine} />
    </View>
  );
};

const styles = StyleSheet.create({
  reviewCard: {
    backgroundColor: '#E6F9E3',
    marginHorizontal: 20,
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
  },
  reviewContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarContainer: {
    marginRight: 12,
  },
  reviewAvatar: {
    width: 90,
    height: 90,
    borderRadius: 50,
    resizeMode: 'cover',
  },
  reviewTextContainer: {
    flex: 1,
  },
  reviewHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  reviewName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    flex: 1,
  },
  reviewStars: {
    flexDirection: 'row',
  },
  reviewComment: {
    fontSize: 13,
    color: '#555',
    lineHeight: 18,
    marginBottom: 10,
  },
  reviewFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  reviewDate: {
    fontSize: 12,
    color: '#666',
  },
  showAllText: {
    fontSize: 12,
    color: colors.primary,
  },
  dividerLine: {
    height: 2,
    backgroundColor: colors.primary,
    marginHorizontal: 40,
    marginBottom: 10,
  },
});

export default ReviewCard;