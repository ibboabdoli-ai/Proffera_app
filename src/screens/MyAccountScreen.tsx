import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { AccountStackParamList } from '../navigation/AppNavigator';
import { colors } from '../theme/colors';

type Nav = NativeStackNavigationProp<AccountStackParamList, 'MyAccount'>;

export default function MyAccountScreen() {
  const navigation = useNavigation<Nav>();
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.avatarRow}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>P</Text>
        </View>
        <View>
          <Text style={styles.accountName}>[Företagsnamn]</Text>
          <Text style={styles.accountEmail}>[epost@foretag.se]</Text>
          <View style={styles.planBadge}>
            <Text style={styles.planBadgeText}>Starter — platshållare</Text>
          </View>
        </View>
      </View>

      <Text style={styles.note}>
        Inloggning och kontoinformation kopplas när auth är aktiv i nästa fas.
      </Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Statistik (platshållare)</Text>
        {[
          { label: 'Aktiva bokningar', value: '—' },
          { label: 'Leads denna månad', value: '—' },
          { label: 'Kunder totalt', value: '—' },
        ].map((row) => (
          <View key={row.label} style={styles.statRow}>
            <Text style={styles.statLabel}>{row.label}</Text>
            <Text style={styles.statValue}>{row.value}</Text>
          </View>
        ))}
      </View>

      <TouchableOpacity style={styles.settingsButton} onPress={() => navigation.navigate('Settings')}>
        <Text style={styles.settingsButtonText}>⚙  Inställningar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.logoutButton} disabled>
        <Text style={styles.logoutButtonText}>[Logga ut — kopplas i nästa fas]</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  content: { padding: 20, paddingBottom: 40 },
  avatarRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderRadius: 16,
    padding: 18,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: colors.cardBorder,
    gap: 16,
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: { color: '#fff', fontSize: 24, fontWeight: '700' },
  accountName: { color: colors.text, fontSize: 16, fontWeight: '600' },
  accountEmail: { color: colors.textMuted, fontSize: 13, marginBottom: 6 },
  planBadge: {
    backgroundColor: colors.primaryMuted,
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 3,
    alignSelf: 'flex-start',
  },
  planBadgeText: { color: colors.primary, fontSize: 11, fontWeight: '600' },
  note: {
    color: colors.warning,
    fontSize: 11,
    fontStyle: 'italic',
    textAlign: 'center',
    marginBottom: 20,
  },
  section: {
    backgroundColor: colors.surface,
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: colors.cardBorder,
  },
  sectionTitle: { color: colors.textMuted, fontSize: 11, fontWeight: '700', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 14 },
  statRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.cardBorder,
  },
  statLabel: { color: colors.text, fontSize: 14 },
  statValue: { color: colors.textMuted, fontSize: 14, fontWeight: '600' },
  settingsButton: {
    backgroundColor: colors.surface,
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
    marginBottom: 12,
    borderWidth: 1,
    borderColor: colors.cardBorder,
  },
  settingsButtonText: { color: colors.text, fontWeight: '600', fontSize: 14 },
  logoutButton: {
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
    opacity: 0.5,
  },
  logoutButtonText: { color: colors.textMuted, fontSize: 13 },
});
