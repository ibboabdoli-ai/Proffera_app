import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { AccountStackParamList } from '../navigation/AppNavigator';
import { colors } from '../theme/colors';
import Screen from '../components/Screen';
import Card from '../components/Card';
import AppButton from '../components/AppButton';

type Nav = NativeStackNavigationProp<AccountStackParamList, 'MyAccount'>;

const stats = [
  { label: 'Aktiva bokningar',   value: '—' },
  { label: 'Leads denna månad',  value: '—' },
  { label: 'Kunder totalt',      value: '—' },
];

export default function MyAccountScreen() {
  const navigation = useNavigation<Nav>();

  return (
    <Screen title="Mitt konto">
      {/* Profile card */}
      <Card style={styles.profileCard}>
        <View style={styles.avatarRow}>
          <View style={styles.avatar}>
            <Text style={styles.avatarLetter}>P</Text>
          </View>
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>[Företagsnamn]</Text>
            <Text style={styles.profileEmail}>[epost@foretag.se]</Text>
            <View style={styles.planPill}>
              <Text style={styles.planPillText}>Starter — platshållare</Text>
            </View>
          </View>
        </View>
        <Text style={styles.authNote}>
          Inloggning kopplas när auth är aktiv (nästa fas).
        </Text>
      </Card>

      {/* Stats */}
      <Card label="Statistik (platshållare)">
        {stats.map((row, i) => (
          <View key={row.label} style={[styles.statRow, i < stats.length - 1 && styles.statBorder]}>
            <Text style={styles.statLabel}>{row.label}</Text>
            <Text style={styles.statValue}>{row.value}</Text>
          </View>
        ))}
      </Card>

      <AppButton
        label="⚙  Inställningar"
        variant="outline"
        onPress={() => navigation.navigate('Settings')}
        style={{ marginBottom: 12 }}
      />

      <AppButton
        label="[Logga ut — kopplas i nästa fas]"
        variant="disabled"
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  profileCard: { marginBottom: 14 },
  avatarRow: { flexDirection: 'row', alignItems: 'center', gap: 16, marginBottom: 14 },
  avatar: {
    width: 54,
    height: 54,
    borderRadius: 27,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarLetter: { color: '#fff', fontSize: 22, fontWeight: '700' },
  profileInfo: { flex: 1 },
  profileName: { color: colors.text, fontSize: 16, fontWeight: '600', marginBottom: 3 },
  profileEmail: { color: colors.textMuted, fontSize: 13, marginBottom: 8 },
  planPill: {
    alignSelf: 'flex-start',
    backgroundColor: colors.primaryMuted,
    borderRadius: 6,
    paddingHorizontal: 9,
    paddingVertical: 3,
  },
  planPillText: { color: colors.primary, fontSize: 11, fontWeight: '600' },
  authNote: { color: colors.warning, fontSize: 11, fontStyle: 'italic' },
  statRow: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 11 },
  statBorder: { borderBottomWidth: 1, borderBottomColor: colors.cardBorder },
  statLabel: { color: colors.text, fontSize: 14 },
  statValue: { color: colors.textMuted, fontSize: 14, fontWeight: '600' },
});
