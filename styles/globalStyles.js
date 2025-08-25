// ========================================
// src/styles/globalStyles.js
// ========================================

import { StyleSheet } from 'react-native';
import { colors } from '../constants/colors';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  screenContainer: {
    flex: 1,
    backgroundColor: colors.background,
  },
  screenContent: {
    flex: 1,
  },
  screenTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 5,
  },
  screenSubtitle: {
    fontSize: 16,
    color: colors.textSecondary,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 10,
  },
  card: {
    backgroundColor: colors.background,
    borderRadius: 10,
    padding: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  button: {
    backgroundColor: colors.primary,
    borderRadius: 8,
    padding: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: colors.background,
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    borderWidth: 1,
    borderColor: colors.border,
  },
});
