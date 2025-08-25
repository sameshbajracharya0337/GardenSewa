// ========================================
// src/components/SearchBar.js
// ========================================

import React from 'react';
import { View, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SearchBar = ({ searchText, setSearchText }) => {
  return (
    <View style={styles.searchContainer}>
      <View style={styles.searchBar}>
        <Ionicons name="search" size={20} color="#999" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>
      <TouchableOpacity style={styles.profileBtn}>
        <Image
          source={require('../assets/vishal.png')}
          style={styles.profileImage}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 25,
    paddingHorizontal: 15,
    height: 45,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#333333',
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  profileBtn: {},
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});

export default SearchBar;