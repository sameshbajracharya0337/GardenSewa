// ========================================
// src/components/BottomTabNavigator.js (Enhanced Version with Images)
// ========================================

import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Platform, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../constants/colors';

const BottomTabNavigator = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { 
      name: 'Home', 
      image: require('../assets/home.png'), 
      label: 'Home' 
    },
    { 
      name: 'Category', 
      image: require('../assets/category.png'), 
      label: 'Category' 
    },
    { 
      name: 'About', 
      image: require('../assets/aboutus.png'), 
      label: 'About Us' 
    },
    { 
      name: 'Contact', 
      image: require('../assets/contact.png'), 
      label: 'Contact' 
    },
  ];

  const TabButton = ({ tab, isActive, onPress }) => (
    <TouchableOpacity
      style={styles.navItem}
      onPress={onPress}
      activeOpacity={0.7}
      accessibilityLabel={tab.label}
      accessibilityRole="button"
      accessibilityState={{ selected: isActive }}
    >
      <View style={[
        styles.iconContainer,
        isActive && styles.activeIconContainer
      ]}>
        <Image 
          source={tab.image}
          style={[
            styles.tabImage,
            { 
              tintColor: isActive ? '#fff' : '#000',
            }
          ]}
          resizeMode="contain"
        />
      </View>
      <Text style={[
        styles.navText, 
        { color: isActive ? '#008000' : '#000' }
      ]}>
        {tab.label}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Bottom Navigation with Curved Notch */}
      <View style={styles.bottomNav}>
        {/* White circle that creates the notch effect */}
        <View style={styles.notchCircle} />
        {/* Bottom semicircle border only */}
        <View style={styles.notchBorder} />
        
        <View style={styles.tabContent}>
          <View style={styles.leftTabs}>
            {tabs.slice(0, 2).map((tab) => (
              <TabButton
                key={tab.name}
                tab={tab}
                isActive={activeTab === tab.name}
                onPress={() => setActiveTab(tab.name)}
              />
            ))}
          </View>
          
          <View style={styles.notchSpace} />
          
          <View style={styles.rightTabs}>
            {tabs.slice(2).map((tab) => (
              <TabButton
                key={tab.name}
                tab={tab}
                isActive={activeTab === tab.name}
                onPress={() => setActiveTab(tab.name)}
              />
            ))}
          </View>
        </View>
      </View>

      {/* Floating Add Button - Moved to the end to be on top */}
      <TouchableOpacity
        style={styles.fabContainer}
        onPress={() => setActiveTab('Add')}
        activeOpacity={0.8}
        accessibilityLabel="Add"
        accessibilityRole="button"
      >
        <View style={styles.fabOuterCircle}>
          <Image source={require("../assets/plusicon.png")} style={{width:25,height:25}} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    zIndex: 1,
  },
  bottomNav: {
    position: 'relative',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    overflow: 'visible',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 10,
      },
    }),
  },
  notchCircle: {
    position: 'absolute',
    top: -40,
    left: '50%',
    marginLeft: -40,
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'white',
    zIndex: 1,
  },
  notchBorder: {
    position: 'absolute',
    top: 0, // Align with tab bar top
    left: '50%',
    marginLeft: -41, // Slightly wider to account for border
    width: 82,
    height: 41, // Only bottom half
    borderBottomLeftRadius: 41,
    borderBottomRightRadius: 41,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#e0e0e0',
    backgroundColor: 'white',
    zIndex: 2,
    overflow: 'hidden',
  },
  tabContent: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 5,
    alignItems: 'center',
    zIndex: 2,
  },
  leftTabs: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
  },
  rightTabs: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
  },
  notchSpace: {
    width: 80,
    height: 60,
  },
  navItem: {
    alignItems: 'center',
    paddingVertical: 5,
    justifyContent: 'center',
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 2,
  },
  activeIconContainer: {
    backgroundColor: '#008000',
    borderWidth: 2,
    borderColor: '#008000',
    ...Platform.select({
      ios: {
        shadowColor: '#008000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  navText: {
    fontSize: 12,
    marginTop: 2,
    fontWeight: '500',
    textAlign: 'center',
  },
  tabImage: {
    width: 24,
    height: 24,
  },
  fabContainer: {
    position: 'absolute',
    top: -32,
    left: '50%',
    marginLeft: -32,
    zIndex: 9999, // Much higher z-index
    elevation: 20, // For Android
  },
  fabOuterCircle: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#e0e0e0',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  },
});

export default BottomTabNavigator;