import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import type { RouteProp } from '@react-navigation/native';
import type { HomeStackParamList } from '../navigation/AppNavigator';
import { colors } from '../theme/colors';
import Screen from '../components/Screen';
import Card from '../components/Card';
import AppButton from '../components/AppButton';

type Route = RouteProp<HomeStackParamList, 'Booking'>;

export default function BookingScreen() {
  const { serviceName } = useRoute<Route>().params ?? { serviceName: 'Demo' };

  const [name, setName]       = useState('');
  const [email, setEmail]     = useState('');
  const [phone, setPhone]     = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');

  return (
    <Screen title="Boka demo" subtitle={`Tjänst: ${serviceName}`}>
      <Card label="Dina uppgifter">
        <Field label="Namn *"     value={name}    onChange={setName}    placeholder="Ditt namn" />
        <Field label="E-post *"   value={email}   onChange={setEmail}   placeholder="din@epost.se"  keyboardType="email-address" />
        <Field label="Telefon"    value={phone}   onChange={setPhone}   placeholder="070-000 00 00" keyboardType="phone-pad" />
        <Field label="Företag"    value={company} onChange={setCompany} placeholder="Företagsnamn" />
        <Field label="Meddelande" value={message} onChange={setMessage} placeholder="Berätta kort om ert behov..." multiline />
      </Card>

      {/* ─── SAFETY: submit is intentionally disabled in Phase 1 & 2 ─── */}
      <AppButton
        label="[Submit kopplas i nästa fas]"
        variant="disabled"
        style={{ marginBottom: 10 }}
      />

      <View style={styles.noticeBox}>
        <Text style={styles.noticeIcon}>ℹ️</Text>
        <Text style={styles.noticeText}>
          Ingen riktig bokning skapas. API-koppling sker i kommande fas efter godkännande.
        </Text>
      </View>
    </Screen>
  );
}

// ── Local field component ─────────────────────────────────────────────────────
interface FieldProps {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  keyboardType?: 'default' | 'email-address' | 'phone-pad';
  multiline?: boolean;
}

function Field({ label, value, onChange, placeholder, keyboardType = 'default', multiline = false }: FieldProps) {
  return (
    <View style={field.wrapper}>
      <Text style={field.label}>{label}</Text>
      <TextInput
        style={[field.input, multiline && field.textArea]}
        value={value}
        onChangeText={onChange}
        placeholder={placeholder}
        placeholderTextColor={colors.textPlaceholder}
        keyboardType={keyboardType}
        autoCapitalize={keyboardType === 'email-address' ? 'none' : 'sentences'}
        multiline={multiline}
        numberOfLines={multiline ? 4 : 1}
        textAlignVertical={multiline ? 'top' : 'center'}
      />
    </View>
  );
}

const field = StyleSheet.create({
  wrapper: { marginBottom: 14 },
  label: { color: colors.textMuted, fontSize: 12, fontWeight: '600', marginBottom: 6 },
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
});

const styles = StyleSheet.create({
  noticeBox: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: colors.surface,
    borderRadius: 10,
    padding: 14,
    borderWidth: 1,
    borderColor: colors.cardBorder,
    gap: 10,
  },
  noticeIcon: { fontSize: 16 },
  noticeText: { color: colors.textMuted, fontSize: 12, lineHeight: 18, flex: 1 },
});
