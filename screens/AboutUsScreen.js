// ========================================
// src/screens/AboutUsScreen.js
// ========================================

import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { globalStyles } from '../styles/globalStyles';
import { colors } from '../constants/colors';

const AboutUsScreen = () => {
  const features = [
    { id: 1, title: 'Expert Gardeners', description: 'Professional and experienced gardeners', icon: 'people' },
    { id: 2, title: 'Quality Plants', description: 'Healthy and well-maintained plants', icon: 'leaf' },
    { id: 3, title: 'Fast Delivery', description: 'Quick and safe delivery to your doorstep', icon: 'rocket' },
    { id: 4, title: '24/7 Support', description: 'Round-the-clock customer support', icon: 'headset' },
  ];

  const FeatureCard = ({ feature }) => (
    <View style={styles.featureCard}>
      <View style={styles.featureIcon}>
        <Ionicons name={feature.icon} size={30} color={colors.primary} />
      </View>
      <Text style={styles.featureTitle}>{feature.title}</Text>
      <Text style={styles.featureDescription}>{feature.description}</Text>
    </View>
  );

  return (
    <ScrollView style={globalStyles.screenContainer} showsVerticalScrollIndicator={false}>
      <View style={styles.aboutHeader}>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=200&fit=crop' }}
          style={styles.aboutImage}
        />
        <View style={styles.aboutOverlay}>
          <Text style={styles.aboutTitle}>Garden Sewa</Text>
          <Text style={styles.aboutSubtitle}>Your Garden, Our Care</Text>
        </View>
      </View>

      <View style={styles.aboutContent}>
        <Text style={styles.aboutDescription}>
          Garden Sewa is Nepal's leading gardening service platform, connecting plant lovers with expert gardeners 
          and quality plants. We are committed to making gardening accessible and enjoyable for everyone.
        </Text>
        
        <Text style={styles.aboutDescription}>
          Our mission is to transform spaces into beautiful gardens while promoting sustainable and eco-friendly 
          gardening practices throughout Nepal.
        </Text>

        <Text style={globalStyles.sectionTitle}>Why Choose Us?</Text>
        
        <View style={styles.featuresGrid}>
          {features.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>500+</Text>
            <Text style={styles.statLabel}>Happy Customers</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>50+</Text>
            <Text style={styles.statLabel}>Expert Gardeners</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>1000+</Text>
            <Text style={styles.statLabel}>Plants Available</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  aboutHeader: {
    position: 'relative',
    height: 200,
    marginBottom: 20,
  },
  aboutImage: {
    width: '100%',
    height: '100%',
  },
  aboutOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.6)',
    padding: 20,
  },
  aboutTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  aboutSubtitle: {
    fontSize: 16,
    color: '#fff',
    opacity: 0.9,
  },
  aboutContent: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  aboutDescription: {
    fontSize: 16,
    lineHeight: 24,
    color: '#555',
    marginBottom: 20,
    textAlign: 'justify',
  },
  featuresGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  featureCard: {
    width: '48%',
    backgroundColor: '#f8f9fa',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    marginBottom: 15,
  },
  featureIcon: {
    width: 60,
    height: 60,
    backgroundColor: '#E8F5E8',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  featureTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
    marginBottom: 5,
  },
  featureDescription: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
    lineHeight: 16,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: colors.primary,
    borderRadius: 15,
    padding: 20,
    marginTop: 20,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  statLabel: {
    fontSize: 12,
    color: '#fff',
    opacity: 0.9,
    textAlign: 'center',
  },
});

export default AboutUsScreen;