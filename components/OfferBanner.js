// ========================================
// src/components/OfferBanner.js
// ========================================

import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../constants/colors';

const OfferBanner = () => {
  return (
    <View style={styles.offerBanner}>
      <View style={styles.offerContent}>
        <Text style={styles.offerTitle}>Grab the{'\n'}Offer</Text>
        <TouchableOpacity style={styles.visitBtn}>
          <Image source={require("../assets/search.png")} style={{width:20,height:20}} />
          <Text style={styles.visitText}>Visit</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.offerImageContainer}>
        <Image
          source = {require('../assets/IndoorDecoration.png')} 
          style={styles.offerImage}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  offerBanner: {
    flexDirection: 'row',
    backgroundColor: '#E6F9E3',
    marginHorizontal: 20,
    borderRadius: 15,
    padding: 20,
    marginBottom: 30,
  },
  offerContent: {
    flex: 1,
    justifyContent: 'space-between',
  },
  offerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.primary,
    lineHeight: 32,
  },
  visitBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.primary,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    alignSelf: 'flex-start',
    marginTop: 15,
  },
  visitText: {
    color: '#fff',
    fontWeight: '600',
    marginLeft: 5,
  },
  offerImageContainer: {
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  offerImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
    alignSelf: 'flex-end', // ensures it sticks right
  },

});

export default OfferBanner;
