import React from 'react';
import { View, Text, ScrollView, Switch, StyleSheet } from 'react-native';
import { colors } from '../theme/colors';

export default function SettingsScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Inställningar</Text>
      <Text style={styles.note}>
        Dessa inställningar är platshållare och sparas inte i denna fas.
      </Text>

      {[
        { label: 'E-postnotiser', sub: 'Få notiser när en ny bokning inkommer' },
        { label: 'Push-notiser', sub: 'Mobila pushnotiser för nya leads' },
        { label: 'Veckorapport', sub: 'Sammanfattning via e-post varje måndag' },
      ].map((item) => (
        <View key={item.label} style={styles.settingRow}>
          <View style={styles.settingInfo}>
            <Text style={styles.settingLabel}>{item.label}</Text>
            <Text style={styles.settingSub}>{item.sub}</Text>
          </View>
          <Switch
            value={false}
            onValueChange={() => {}}
            trackColor={{ false: colors.cardBorder, true: colors.primary }}
            thumbColor={colors.text}
            disabled
          />
        </View>
      ))}

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Version</Text>
        <Text style={styles.cardBody}>1.0.0 — Phase 0/1 prototype</Text>
        <Text style={styles.cardBody}>Proffera App · React Native / Expo</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  content: { padding: 20, paddingBottom: 40 },
  title: { color: colors.text, fontSize: 22, fontWeight: '700', marginBottom: 8 },
  note: { color: colors.warning, fontSize: 11, fontStyle: 'italic', marginBottom: 24 },
  settingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.surface,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: colors.cardBorder,
  },
  settingInfo: { flex: 1, marginRight: 12 },
  settingLabel: { color: colors.text, fontSize: 14, fontWeight: '600', marginBottom: 4 },
  settingSub: { color: colors.textMuted, fontSize: 12 },
  card: {
    backgroundColor: colors.surface,
    borderRadius: 12,
    padding: 16,
    marginTop: 12,
    borderWidth: 1,
    borderColor: colors.cardBorder,
  },
  cardTitle: { color: colors.textMuted, fontSize: 11, fontWeight: '700', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 8 },
  cardBody: { color: colors.textMuted, fontSize: 13, marginBottom: 4 },
});
