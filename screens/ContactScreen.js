// ========================================
// src/screens/ContactScreen.js
// ========================================

import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { globalStyles } from '../styles/globalStyles';
import { colors } from '../constants/colors';

const ContactScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const contactInfo = [
    { id: 1, title: 'Phone', value: '+977 1-234-5678', icon: 'call' },
    { id: 2, title: 'Email', value: 'info@gardensewa.com', icon: 'mail' },
    { id: 3, title: 'Address', value: 'Kathmandu, Nepal', icon: 'location' },
    { id: 4, title: 'Working Hours', value: '7 AM - 7 PM', icon: 'time' },
  ];

  const handleSubmit = () => {
    if (name && email && message) {
      Alert.alert('Success', 'Thank you for your message! We will get back to you soon.');
      setName('');
      setEmail('');
      setMessage('');
    } else {
      Alert.alert('Error', 'Please fill in all fields.');
    }
  };

  const ContactInfoCard = ({ info }) => (
    <View style={styles.contactInfoCard}>
      <Ionicons name={info.icon} size={24} color={colors.primary} />
      <View style={styles.contactInfoText}>
        <Text style={styles.contactInfoTitle}>{info.title}</Text>
        <Text style={styles.contactInfoValue}>{info.value}</Text>
      </View>
    </View>
  );

  return (
    <ScrollView style={globalStyles.screenContainer} showsVerticalScrollIndicator={false}>
      <View style={styles.contactHeader}>
        <Text style={globalStyles.screenTitle}>Contact Us</Text>
        <Text style={globalStyles.screenSubtitle}>Get in touch with our team</Text>
      </View>

      <View style={styles.contactContent}>
        {contactInfo.map((info) => (
          <ContactInfoCard key={info.id} info={info} />
        ))}
      </View>

      <View style={styles.contactForm}>
        <Text style={styles.formTitle}>Send us a Message</Text>
        
        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Name</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Enter your name"
            value={name}
            onChangeText={setName}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Email</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Enter your email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Message</Text>
          <TextInput
            style={[styles.textInput, styles.textArea]}
            placeholder="Enter your message"
            value={message}
            onChangeText={setMessage}
            multiline
            numberOfLines={4}
            textAlignVertical="top"
          />
        </View>

        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Send Message</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  contactHeader: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: '#f8f9fa',
  },
  contactContent: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  contactInfoCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  contactInfoText: {
    marginLeft: 15,
    flex: 1,
  },
  contactInfoTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 3,
  },
  contactInfoValue: {
    fontSize: 14,
    color: '#666',
  },
  contactForm: {
    backgroundColor: '#f8f9fa',
    margin: 20,
    borderRadius: 15,
    padding: 20,
  },
  formTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputGroup: {
    marginBottom: 15,
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 5,
  },
  textInput: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  submitButton: {
    backgroundColor: colors.primary,
    borderRadius: 8,
    padding: 15,
    alignItems: 'center',
    marginTop: 10,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ContactScreen;