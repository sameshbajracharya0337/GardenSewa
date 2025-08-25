// ========================================
// src/navigation/AppNavigator.js (Updated with conditional Header)
// ========================================

import React, { useState } from 'react';
import { View, SafeAreaView } from 'react-native';
import Header from '../components/Header';
import BottomTabNavigator from '../components/BottomTabNavigator';
import HomeScreen from '../screens/HomeScreen';
import CategoryScreen from '../screens/CategoryScreen';
import AboutUsScreen from '../screens/AboutUsScreen';
import ContactScreen from '../screens/ContactScreen';
import AddNewScreen from '../screens/AddNewScreen';
import IndoorPlantsScreen from '../screens/IndoorPlantsScreen';
import OutdoorPlantsScreen from '../screens/OutdoorPlantsScreen';
import RarePlantsScreen from '../screens/RarePlantsScreen';
import PlantDetailScreen from '../screens/PlantDetailScreen';
import { globalStyles } from '../styles/globalStyles';

const AppNavigator = () => {
  const [activeTab, setActiveTab] = useState('Home');
  const [navigationStack, setNavigationStack] = useState(['Home']);
  const [screenParams, setScreenParams] = useState({});

  // Navigation helper functions
  const navigate = (screenName, params = {}) => {
    setNavigationStack(prev => [...prev, screenName]);
    setActiveTab(screenName);
    setScreenParams(prev => ({ ...prev, [screenName]: params }));
  };

  const goBack = () => {
    if (navigationStack.length > 1) {
      const newStack = [...navigationStack];
      const poppedScreen = newStack.pop();
      setNavigationStack(newStack);
      setActiveTab(newStack[newStack.length - 1]);
      
      // Clean up params for the screen we're leaving
      setScreenParams(prev => {
        const updated = { ...prev };
        delete updated[poppedScreen];
        return updated;
      });
    }
  };

  // Create navigation object to pass to screens
  const navigation = {
    navigate,
    goBack
  };

  const renderScreen = () => {
    const currentParams = screenParams[activeTab] || {};
    
    switch (activeTab) {
      case 'Home':
        return <HomeScreen navigation={navigation} />;
      case 'Category':
        return <CategoryScreen navigation={navigation} />;
      case 'IndoorPlants':
        return <IndoorPlantsScreen navigation={navigation} />;
      case 'OutdoorPlants':
        return <OutdoorPlantsScreen navigation={navigation} />;
      case 'RarePlants':
        return <RarePlantsScreen navigation={navigation} />;
      case 'PlantDetail':
        return <PlantDetailScreen navigation={navigation} productId={currentParams.productId} />;
      case 'Add':
        return <AddNewScreen navigation={navigation} />;
      case 'About':
        return <AboutUsScreen navigation={navigation} />;
      case 'Contact':
        return <ContactScreen navigation={navigation} />;
      default:
        return <HomeScreen navigation={navigation} />;
    }
  };

  // Handle tab navigation (for bottom tabs only)
  const handleTabChange = (tabName) => {
    // Reset navigation stack when switching to main tabs
    const mainTabs = ['Home', 'Category', 'Add', 'About', 'Contact'];
    if (mainTabs.includes(tabName)) {
      setNavigationStack([tabName]);
      setActiveTab(tabName);
      setScreenParams({});
    }
  };

  // Determine which tab should be highlighted in bottom navigation
  const getActiveBottomTab = () => {
    const currentScreen = activeTab;
    
    // Map plant category screens and detail screen back to Category tab
    if (['IndoorPlants', 'OutdoorPlants', 'RarePlants', 'PlantDetail'].includes(currentScreen)) {
      return 'Category';
    }
    
    return currentScreen;
  };

  // Screens that should not show the global header (they have their own)
  const screensWithOwnHeader = ['PlantDetail'];
  const shouldShowHeader = !screensWithOwnHeader.includes(activeTab);

  return (
    <SafeAreaView style={globalStyles.container}>
      {shouldShowHeader && <Header />}
      <View style={globalStyles.screenContent}>
        {renderScreen()}
      </View>
      <BottomTabNavigator 
        activeTab={getActiveBottomTab()} 
        setActiveTab={handleTabChange} 
      />
    </SafeAreaView>
  );
};

export default AppNavigator;