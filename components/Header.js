// ========================================
// src/components/Header.js
// ========================================

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../constants/colors';


const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.headerLeft}>
        <Image source={require("../assets/GardenSewaLogo.png")} style={{width:30,height:30}} />
        <Text style={styles.headerTitle}>Garden Sewa</Text>
      </View>
      <View style={styles.headerRight}>
        <TouchableOpacity style={styles.notificationBtn}>
          <Ionicons name="notifications" size={24} color={colors.primary} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuBtn}>
          <Image source={require("../assets/AppDrawer.png")} style={{width:24,height:24}} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.primary,
    marginLeft: 8,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  notificationBtn: {
    marginRight: 15,
  },
});

export default Header;