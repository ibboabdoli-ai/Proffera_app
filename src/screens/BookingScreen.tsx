import React, { useState } from 'react';
import {
  View, Text, ScrollView, TextInput, TouchableOpacity, StyleSheet,
} from 'react-native';
import { useRoute } from '@react-navigation/native';
import type { RouteProp } from '@react-navigation/native';
import type { HomeStackParamList } from '../navigation/AppNavigator';
import { colors } from '../theme/colors';

// NOTE: This screen accepts params from multiple stacks — HomeStackParamList used as representative type
type Route = RouteProp<HomeStackParamList, 'Booking'>;

export default function BookingScreen() {
  const route = useRoute<Route>();
  const { serviceName } = route.params ?? { serviceName: 'Demo' };

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
      <Text style={styles.title}>Boka demo</Text>
      <Text style={styles.subtitle}>Tjänst: {serviceName}</Text>

      <View style={styles.form}>
        <Text style={styles.label}>Namn *</Text>
        <TextInput
          style={styles.input}
          placeholder="Ditt namn"
          placeholderTextColor={colors.textPlaceholder}
          value={name}
          onChangeText={setName}
          autoCapitalize="words"
        />

        <Text style={styles.label}>E-post *</Text>
        <TextInput
          style={styles.input}
          placeholder="din@epost.se"
          placeholderTextColor={colors.textPlaceholder}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Text style={styles.label}>Telefon</Text>
        <TextInput
          style={styles.input}
          placeholder="070-000 00 00"
          placeholderTextColor={colors.textPlaceholder}
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
        />

        <Text style={styles.label}>Företag</Text>
        <TextInput
          style={styles.input}
          placeholder="Företagsnamn"
          placeholderTextColor={colors.textPlaceholder}
          value={company}
          onChangeText={setCompany}
        />

        <Text style={styles.label}>Meddelande</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Berätta kort om ert behov..."
          placeholderTextColor={colors.textPlaceholder}
          value={message}
          onChangeText={setMessage}
          multiline
          numberOfLines={4}
          textAlignVertical="top"
        />
      </View>

      {/* SAFETY: Submit is intentionally disabled in Phase 1 — no real API call made */}
      <TouchableOpacity style={styles.submitDisabled} disabled>
        <Text style={styles.submitDisabledText}>
          [Submit function will be connected in next phase]
        </Text>
      </TouchableOpacity>

      <Text style={styles.notice}>
        Ingen riktigt bokning skapas i denna version. API-koppling sker i nästa fas.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  content: { padding: 20, paddingBottom: 50 },
  title: { color: colors.text, fontSize: 24, fontWeight: '700', marginBottom: 4 },
  subtitle: { color: colors.primary, fontSize: 13, marginBottom: 24 },
  form: {
    backgroundColor: colors.surface,
    borderRadius: 14,
    padding: 18,
    borderWidth: 1,
    borderColor: colors.cardBorder,
    marginBottom: 20,
  },
  label: { color: colors.textMuted, fontSize: 12, fontWeight: '600', marginBottom: 6, marginTop: 12 },
  input: {
    backgroundColor: colors.background,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.cardBorder,
    color: colors.text,
    paddingHorizontal: 14,
    paddingVertical: 11,
    fontSize: 14,
  },
  textArea: { height: 90, paddingTop: 12 },
  submitDisabled: {
    backgroundColor: colors.locked,
    borderRadius: 10,
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 14,
  },
  submitDisabledText: {
    color: colors.textMuted,
    fontSize: 13,
    fontWeight: '600',
    textAlign: 'center',
  },
  notice: {
    color: colors.textMuted,
    fontSize: 11,
    textAlign: 'center',
    fontStyle: 'italic',
  },
});
