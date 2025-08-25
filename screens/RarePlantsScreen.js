// ========================================
// src/screens/RarePlantsScreen.js (Updated with Product Navigation)
// ========================================

import React, { useState } from 'react';
import { 
  View, 
  Text, 
  ScrollView, 
  TouchableOpacity, 
  StyleSheet 
} from 'react-native';
import SearchBar from '../components/SearchBar';
import ProductCard from '../components/ProductCard';
import { colors } from '../constants/colors';
import { rarePlantsData, rarePlantImages } from '../data/mockData';

const RarePlantsScreen = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');
  const [activeFilter, setActiveFilter] = useState('New');

  // Filter options
  const filters = ['New', 'All', 'Expensive', 'Exotic', 'Limited'];

  // Transform rare plants data to include actual image require() calls
  // Map IDs to be 30+ to match the plantDetailsData structure
  const rarePlants = rarePlantsData.map((plant, index) => ({
    ...plant,
    id: plant.id + 30, // Map to detail IDs (31, 32, 33, etc.)
    image: rarePlantImages[plant.imagePath]
  }));

  // Handler functions for ProductCard
  const handleProductPress = (product) => {
    console.log('Product pressed:', product.name);
    // Navigate to product details screen with product ID
    navigation.navigate('PlantDetail', { productId: product.id });
  };

  const handleFavoritePress = (product) => {
    console.log('Favorite pressed:', product.name);
    // Add to favorites logic
  };

  const handleAddToCart = (product) => {
    console.log('Add to cart:', product.name);
    // Add to cart logic
  };

  const FilterButton = ({ title, isActive, onPress }) => (
    <TouchableOpacity
      style={[
        styles.filterButton,
        isActive && styles.activeFilterButton
      ]}
      onPress={onPress}
    >
      <Text style={[
        styles.filterText,
        isActive && styles.activeFilterText
      ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <SearchBar searchText={searchText} setSearchText={setSearchText} />
        
        {/* Header Section */}
        <View style={styles.headerSection}>
          <View style={styles.titleContainer}>
            <Text style={styles.screenTitle}>Rare Plants</Text>
          </View>
          <Text style={styles.subtitle}>Exclusive and exotic plants for collectors</Text>
        </View>

        {/* Filter Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Browse Rare Plants</Text>
            <Text style={styles.plantCount}>({rarePlants.length} plants)</Text>
          </View>
          
          {/* Filter Buttons */}
          <View style={styles.filtersContainer}>
            {filters.map((filter) => (
              <FilterButton
                key={filter}
                title={filter}
                isActive={activeFilter === filter}
                onPress={() => setActiveFilter(filter)}
              />
            ))}
          </View>
          
          {/* Products Grid */}
          <View style={styles.productsGrid}>
            {rarePlants.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product}
                onPress={handleProductPress}
                onFavoritePress={handleFavoritePress}
                onAddToCart={handleAddToCart}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerSection: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  backButton: {
    marginRight: 10,
  },
  screenTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.primary,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 15,
  },
  noticeBox: {
    backgroundColor: '#FFF8E1',
    padding: 12,
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#FFB300',
  },
  noticeText: {
    fontSize: 14,
    color: '#E65100',
    fontWeight: '500',
  },
  section: {
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  plantCount: {
    fontSize: 14,
    color: '#666',
  },
  filtersContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    flexWrap: 'wrap',
  },
  filterButton: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#E6F9E3',
    marginRight: 10,
    marginBottom: 10,
  },
  activeFilterButton: {
    backgroundColor: colors.primary,
  },
  filterText: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  },
  activeFilterText: {
    color: '#fff',
  },
  productsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
});

export default RarePlantsScreen;