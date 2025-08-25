// ========================================
// src/screens/PlantDetailScreen.js (Updated with Dynamic Data)
// ========================================

import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Modal,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { plantDetailsData, plantDetailImages } from '../data/mockData';
import { colors } from '../constants/colors';

const PlantDetailScreen = ({ navigation, productId }) => {
  const [menuVisible, setMenuVisible] = useState(false);
  
  // Get product data from productId, fallback to Himalayan Blue Poppy if no ID provided
  const product = plantDetailsData[productId] || plantDetailsData[2];
  const productImage = plantDetailImages[product.imagePath] || require('../assets/blue-poppy.png');

  const handleMenuPress = () => {
    setMenuVisible(true);
  };

  const handleMenuClose = () => {
    setMenuVisible(false);
  };

  const handleMenuItemPress = (item) => {
    console.log(`${item} pressed`);
    setMenuVisible(false);
  };

  const handleAddToCart = () => {
    console.log(`Adding ${product.name} to cart`);
    // Add to cart logic here
  };

  const handleBuyNow = () => {
    console.log(`Buying ${product.name} now`);
    // Buy now logic here
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Icon name="arrow-back" size={24} color="#008000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Plant Detail</Text>
        <View style={styles.headerRightIcons}>
          <TouchableOpacity style={styles.bellButton}>
            <Icon name="notifications" size={24} color="#4CAF50" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuButton} onPress={handleMenuPress}>
            <Icon name="menu" size={24} color="#4CAF50" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Menu Modal */}
      <Modal
        visible={menuVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={handleMenuClose}
      >
        <TouchableOpacity 
          style={styles.modalOverlay} 
          activeOpacity={1} 
          onPress={handleMenuClose}
        >
          <View style={styles.menuContainer}>
            <TouchableOpacity 
              style={styles.menuItem}
              onPress={() => handleMenuItemPress('Profile')}
            >
              <Icon name="person" size={20} color="#333" />
              <Text style={styles.menuItemText}>Profile</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={styles.menuItem}
              onPress={() => handleMenuItemPress('My Plants')}
            >
              <Icon name="local-florist" size={20} color="#333" />
              <Text style={styles.menuItemText}>My Plants</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={styles.menuItem}
              onPress={() => handleMenuItemPress('Settings')}
            >
              <Icon name="settings" size={20} color="#333" />
              <Text style={styles.menuItemText}>Settings</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={styles.menuItem}
              onPress={() => handleMenuItemPress('Help')}
            >
              <Icon name="help" size={20} color="#333" />
              <Text style={styles.menuItemText}>Help</Text>
            </TouchableOpacity>
            
            <View style={styles.menuDivider} />
            
            <TouchableOpacity 
              style={styles.menuItem}
              onPress={() => handleMenuItemPress('Logout')}
            >
              <Icon name="logout" size={20} color="#f44336" />
              <Text style={[styles.menuItemText, { color: '#f44336' }]}>Logout</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Plant Image */}
        <View style={styles.imageContainer}>
          <Image
            source={productImage}
            style={styles.plantImage}
            resizeMode="cover"
          />
        </View>

        {/* Icons below image */}
        <View style={styles.iconsContainer}>
          <TouchableOpacity style={styles.saveButton}>
            <Image source={require("../assets/flowertulipicon.png")} style={styles.icon}/>
            <Text style={styles.saveButtonText}>{product.category}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.favoriteButton}>
            <Icon name="favorite-border" size={24} color="#fff" />
          </TouchableOpacity>
        </View>

        {/* Plant Info */}
        <View style={styles.plantInfo}>
          <Text style={styles.plantName}>{product.name}</Text>
          
          <View style={styles.locationRow}>
            <Image source={require("../assets/locationicon.png")} style={styles.licon}/>
            <Text style={styles.locationText}>{product.location}</Text>
            <Image source={require("../assets/pricetag.png")} style={styles.licon}/>
            <Text style={styles.priceText}>{product.price}</Text>
          </View>

          {/* Rating and Sold Info */}
          <View style={styles.statsRow}>
            <View style={styles.ratingContainer}>
              <Icon name="star" size={16} color="#FFD700" />
              <Text style={styles.ratingText}>{product.rating}</Text>
            </View>
            <Text style={styles.soldText}>{product.sold}</Text>
          </View>

          {/* Tags */}
          <View style={styles.tagsContainer}>
            {product.tags.map((tag, index) => (
              <View key={index} style={styles.tag}>
                <Text style={styles.tagText}>{tag}</Text>
              </View>
            ))}
          </View>

          <Text style={styles.description}>
            {product.description}
          </Text>
        </View>

        {/* Action Buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.addToCartButton} onPress={handleAddToCart}>
            <Image source={require("../assets/cart.png")} style={styles.icon}/>
            <Text style={styles.addToCartText}>Add to Cart</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.buyNowButton} onPress={handleBuyNow}>
            <Image source={require("../assets/bag.png")} style={styles.icon}/>
            <Text style={styles.buyNowText}>Buy Now</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  backButton: {
    padding: 4,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.primary,
    flex: 1,
    textAlign: 'center',
    marginHorizontal: 16,
  },
  headerRightIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  bellButton: {
    padding: 4,
  },
  menuButton: {
    padding: 4,
  },
  icon: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },
  licon: {
    width: 20,
    height: 25,
    resizeMode: "contain",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
  menuContainer: {
    backgroundColor: '#fff',
    marginTop: 80,
    marginRight: 16,
    borderRadius: 8,
    paddingVertical: 8,
    minWidth: 180,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  menuItemText: {
    marginLeft: 12,
    fontSize: 16,
    color: '#333',
  },
  menuDivider: {
    height: 1,
    backgroundColor: '#f0f0f0',
    marginVertical: 4,
  },
  content: {
    flex: 1,
  },
  imageContainer: {
    margin: 16,
    borderRadius: 12,
    overflow: 'hidden',
  },
  plantImage: {
    width: '100%',
    height: 450,
    borderRadius: 12,
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  saveButton: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#4CAF50',
  },
  saveButtonText: {
    color: colors.primary,
    fontSize: 14,
    fontWeight: '500',
    marginLeft: 4,
  },
  favoriteButton: {
    backgroundColor: colors.primary,
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  plantInfo: {
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  plantName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    gap: 4,
  },
  locationText: {
    color: '#666',
    fontSize: 16,
    marginRight: 16,
  },
  priceText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  statsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    gap: 16,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  ratingText: {
    fontSize: 14,
    color: '#333',
    fontWeight: '500',
  },
  soldText: {
    fontSize: 14,
    color: '#666',
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 16,
    gap: 8,
  },
  tag: {
    backgroundColor: colors.primary,
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  tagText: {
    fontSize: 12,
    color: '#fff',
    fontWeight: '500',
  },
  description: {
    fontSize: 14,
    lineHeight: 22,
    color: '#666',
    textAlign: 'justify',
  },
  buttonContainer: {
    paddingHorizontal: 16,
    paddingBottom: 24,
    gap: 12,
  },
  addToCartButton: {
    backgroundColor: colors.primary,
    paddingVertical: 16,
    borderRadius: 25,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
  },
  addToCartText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  buyNowButton: {
    backgroundColor: colors.primary,
    paddingVertical: 16,
    borderRadius: 25,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
  },
  buyNowText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default PlantDetailScreen;