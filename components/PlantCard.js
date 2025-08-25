import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../constants/colors';
import { plantImages } from '../data/mockData';

const PlantCard = ({ plant }) => {
  // Get the image source from the image map
  const imageSource = plantImages[plant.imagePath];
  
  return (
    <View style={styles.plantCard}>
      <Image source={imageSource} style={styles.plantImage} />
      <View style={styles.plantContent}>
        <Text style={styles.plantName}>{plant.name}</Text>
        <View style={styles.priceRow}>
          <Text style={styles.plantPrice}>{plant.price}</Text>
        </View>
        <Text style={styles.plantCategory}>{plant.category}</Text>
        <View style={styles.plantActions}>
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
  plantCard: {
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
  plantImage: {
    width: '80%',
    height: '150',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  plantContent: {
    padding: 12,
  },
  plantName: {
    fontSize: 14,
    fontWeight: '700',
    color: '#1f2937',
    marginBottom: 6,
    lineHeight: 18,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  plantPrice: {
    fontSize: 14,
    fontWeight: '700',
    color: '#1f2937',
    marginRight: 6,
  },
  plantCategory: {
    fontSize: 12,
    color: '#6b7280',
    marginBottom: 12,
  },
  plantActions: {
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

export default PlantCard;