// ========================================
// src/screens/CategoryScreen.js (Updated with Mock Data)
// ========================================

import React, { useState } from 'react';
import { 
  View, 
  Text, 
  ScrollView, 
  TouchableOpacity, 
  Image, 
  StyleSheet, 
  FlatList 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

import SearchBar from '../components/SearchBar';
import OfferBanner from '../components/OfferBanner';
import ProductCard from '../components/ProductCard';
import { colors } from '../constants/colors';
import { 
  categoryScreenData, 
  categoryImages, 
  categoryProductsData, 
  categoryProductImages 
} from '../data/mockData';

const CategoryScreen = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');
  const [activeFilter, setActiveFilter] = useState('New');

  // Filter options
  const filters = ['New', 'All', 'Popular', 'Indoor'];

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

  // Category navigation handler
  const handleCategoryPress = (category) => {
    console.log('Category pressed:', category.name);
    // Navigate to specific plant screen
    if (navigation && category.screenName) {
      navigation.navigate(category.screenName);
    }
  };

  const CategoryCard = ({ category }) => (
    <TouchableOpacity 
      style={styles.categoryItem}
      onPress={() => handleCategoryPress(category)}
    >
      <LinearGradient
        colors={['#008000', '#001A00']}
        style={styles.categoryImageContainer}
      >
        <Image 
          source={categoryImages[category.imagePath]} 
          style={styles.categoryImage} 
        />
      </LinearGradient>
      <Text style={styles.categoryName}>{category.name}</Text>
    </TouchableOpacity>
  );

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
        <OfferBanner />
        
        {/* Category Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Category</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See all</Text>
            </TouchableOpacity>
          </View>
          
          <FlatList
            data={categoryScreenData}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <CategoryCard category={item} />}
            contentContainerStyle={styles.categoriesList}
          />
        </View>

        {/* Special Sale Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Special Sale</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See all</Text>
            </TouchableOpacity>
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
            {categoryProductsData.map((product) => (
              <ProductCard 
                key={product.id} 
                product={{
                  ...product,
                  image: categoryProductImages[product.imagePath]
                }}
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
  seeAllText: {
    fontSize: 14,
    color: '#666',
  },
  categoriesList: {
    paddingRight: 20,
  },
  categoryItem: {
    alignItems: 'center',
    marginRight: 30,
  },
  categoryImageContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  categoryImage: {
    width: 40,
    height: 40,
  },
  categoryName: {
    fontSize: 12,
    color: '#333',
    textAlign: 'center',
    fontWeight: '500',
  },
  filtersContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  filterButton: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#E6F9E3',
    marginRight: 10,
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

export default CategoryScreen;