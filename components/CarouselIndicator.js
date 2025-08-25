// ========================================
// src/components/CarouselIndicator.js
// ========================================

import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '../constants/colors';

const CarouselIndicator = ({ 
  totalItems, 
  currentIndex, 
  onPress,
  activeColor = colors.primary,
  inactiveColor = '#e5e7eb',
  lineWidth = 30,
  lineHeight = 4,
  spacing = 8,
  containerStyle = {}
}) => {
  return (
    <View style={[styles.indicatorContainer, containerStyle]}>
      {Array.from({ length: totalItems }, (_, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.lineIndicator,
            {
              width: lineWidth,
              height: lineHeight,
              backgroundColor: index === currentIndex ? activeColor : inactiveColor,
              marginHorizontal: spacing / 2,
            }
          ]}
          onPress={() => onPress && onPress(index)}
          activeOpacity={0.7}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 6,
    paddingHorizontal: 20,
  },
  lineIndicator: {
    borderRadius: 2,
  },
});

export default CarouselIndicator;