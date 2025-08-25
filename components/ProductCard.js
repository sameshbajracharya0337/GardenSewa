// ========================================
// src/components/ProductCard.js
// ========================================

import React from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  Image, 
  StyleSheet 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../constants/colors';

const ProductCard = ({ product, onPress, onFavoritePress, onAddToCart }) => {
  return (
    <View style={styles.productCard}>
      <TouchableOpacity 
        style={styles.favoriteButton}
        onPress={() => onFavoritePress && onFavoritePress(product)}
      >
        <Ionicons name="heart-outline" size={20} color='#ffffff' />
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={styles.productImageContainer}
        onPress={() => onPress && onPress(product)}
      >
        <Image source={product.image} style={styles.productImage} />
      </TouchableOpacity>
      
      <View style={styles.productInfo}>
        <View style={styles.productInfoBackground}>
          <View style={styles.productRating}>
            <Text style={styles.soldText}>{product.sold}</Text>
            <View style={styles.separator} />
            <View style={styles.ratingContainer}>
              <Ionicons name="star" size={14} color="#008000" />
              <Text style={styles.ratingText}>{product.rating}</Text>
            </View>
          </View>
          
          <Text style={styles.productName}>{product.name}</Text>
          
          <View style={styles.productTags}>
            {product.tags.map((tag, index) => (
              <View key={index} style={styles.tag}>
                <Text style={styles.tagText}>{tag}</Text>
              </View>
            ))}
          </View>
          
          <View style={styles.productFooter}>
            <Text style={styles.productPrice}>NRP {product.price}</Text>
            <TouchableOpacity 
              style={styles.addToCartButton}
              onPress={() => onAddToCart && onAddToCart(product)}
            >
              <Image 
                source={require("../assets/basket.png")} 
                style={styles.basketIcon} 
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  productCard: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    borderWidth: 2,
    borderColor: colors.primary,
    position: 'relative',
  },
  favoriteButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
    borderWidth: 1,
    borderColor: colors.primary,
  },
  productImageContainer: {
    width: '100%',
  },
  productImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  productInfo: {
    flex: 1,
  },
  productInfoBackground: {
    backgroundColor: '#E6F9E3',
    padding: 12,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    marginHorizontal: -15,
    marginBottom: -15,
    marginTop: 5,
  },
  productRating: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 8,
  },
  soldText: {
    fontSize: 12,
    color: '#666',
  },
  separator: {
    width: 1,
    height: 12,
    backgroundColor: '#ddd',
    marginHorizontal: 6,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    fontSize: 12,
    color: '#666',
    marginLeft: 2,
  },
  productName: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  productTags: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  tag: {
    backgroundColor: colors.primary,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
    marginRight: 5,
  },
  tagText: {
    fontSize: 8,
    color: '#fff',
    fontWeight: '500',
  },
  productFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
  },
  productPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  addToCartButton: {
    width: 34,
    height: 34,
    borderRadius: 10,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  basketIcon: {
    width: 20,
    height: 20,
  },
});

export default ProductCard;