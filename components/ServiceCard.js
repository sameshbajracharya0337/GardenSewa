// ========================================
// src/components/ServiceCard.js
// ========================================

import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../constants/colors';
import { serviceImages } from '../data/mockData';

const ServiceCard = ({ service }) => {
  // Get the image source from the service image map
  const imageSource = serviceImages[service.imagePath];
  
  return (
    <View style={styles.serviceCard}>
      <Image source={imageSource} style={styles.serviceImage} />
      <View style={styles.serviceContent}>
        <Text style={styles.serviceName}>{service.title}</Text>
        <View style={styles.priceRow}>
          <Text style={styles.servicePrice}>{service.price}</Text>
        </View>
        <View style={styles.serviceActions}>
          <TouchableOpacity style={styles.addToCartBtnSmall}>
            <Text style={styles.addToCartTextSmall}>Add to cart</Text>
          </TouchableOpacity>
          <View style={styles.separator} />
          <TouchableOpacity style={styles.favoriteBtnSmall}>
            <Ionicons name="heart-outline" size={16} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  serviceCard: {
    width: 160,
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 2,
    borderColor: colors.primary,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    overflow: 'hidden',
  },
  serviceImage: {
    width: '100%',
    height: 100,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    resizeMode: 'cover',
    backgroundColor: '#f8f9fa',
  },
  serviceContent: {
    padding: 12,
  },
  serviceName: {
    fontSize: 14,
    fontWeight: '700',
    color: '#1f2937',
    marginBottom: 6,
    lineHeight: 18,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  servicePrice: {
    fontSize: 14,
    fontWeight: '700',
    color: '#1f2937',
    marginRight: 6,
  },
  serviceActions: {
    flexDirection: 'row',
    alignItems: 'stretch',
    backgroundColor: colors.primary,
    marginHorizontal: -12,
    marginBottom: -12,
    height: 40,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    position: 'relative',
  },
  addToCartBtnSmall: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 12,
  },
  addToCartTextSmall: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
  favoriteBtnSmall: {
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  separator: {
    position: 'absolute',
    right: 40,
    top: 0,
    bottom: 0,
    width: 1,
    backgroundColor: '#fff',
  },
});

export default ServiceCard;