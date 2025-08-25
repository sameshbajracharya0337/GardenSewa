// ========================================
// src/screens/AddNewScreen.js
// ========================================

import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { globalStyles } from '../styles/globalStyles';

const AddNewScreen = () => {
  const addOptions = [
    { id: 1, title: 'Add New Plant', description: 'List a new plant for sale', icon: 'leaf', color: '#4CAF50' },
    { id: 2, title: 'Add Service', description: 'Offer a gardening service', icon: 'build', color: '#2196F3' },
    { id: 3, title: 'Request Service', description: 'Request gardening help', icon: 'hand-right', color: '#FF9800' },
    { id: 4, title: 'Join as Gardener', description: 'Become a professional gardener', icon: 'people', color: '#9C27B0' },
  ];

  const AddOptionCard = ({ option }) => (
    <TouchableOpacity style={[styles.addOptionCard, { borderColor: option.color }]}>
      <View style={[styles.addOptionIcon, { backgroundColor: option.color + '20' }]}>
        <Ionicons name={option.icon} size={40} color={option.color} />
      </View>
      <View style={styles.addOptionContent}>
        <Text style={styles.addOptionTitle}>{option.title}</Text>
        <Text style={styles.addOptionDescription}>{option.description}</Text>
      </View>
      <Ionicons name="chevron-forward" size={24} color="#ccc" />
    </TouchableOpacity>
  );

  return (
    <View style={globalStyles.screenContainer}>
      <View style={styles.addHeader}>
        <Text style={globalStyles.screenTitle}>What would you like to do?</Text>
        <Text style={globalStyles.screenSubtitle}>Choose an option below to get started</Text>
      </View>
      
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 20 }}>
        {addOptions.map((option) => (
          <AddOptionCard key={option.id} option={option} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  addHeader: {
    paddingHorizontal: 20,
    paddingVertical: 30,
    backgroundColor: '#f8f9fa',
    alignItems: 'center',
  },
  addOptionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginHorizontal: 20,
    marginVertical: 8,
    borderRadius: 15,
    padding: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    borderWidth: 2,
  },
  addOptionIcon: {
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
  },
  addOptionContent: {
    flex: 1,
  },
  addOptionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  addOptionDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
});

export default AddNewScreen;