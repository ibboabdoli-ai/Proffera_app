import React from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import { colors } from '../theme/colors';
import Screen from '../components/Screen';
import Card from '../components/Card';

const toggles = [
  { label: 'E-postnotiser',  sub: 'Få notiser när en ny bokning inkommer' },
  { label: 'Push-notiser',   sub: 'Mobila pushnotiser för nya leads' },
  { label: 'Veckorapport',   sub: 'Sammanfattning via e-post varje måndag' },
];

export default function SettingsScreen() {
  return (
    <Screen title="Inställningar">
      <Text style={styles.note}>
        Inställningar sparas inte i denna fas — koppling sker när auth är aktiv.
      </Text>

      <Card label="Notiser (platshållare)">
        {toggles.map((item, i) => (
          <View key={item.label} style={[styles.row, i < toggles.length - 1 && styles.rowBorder]}>
            <View style={styles.rowInfo}>
              <Text style={styles.rowLabel}>{item.label}</Text>
              <Text style={styles.rowSub}>{item.sub}</Text>
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
      </Card>

      <Card label="App-information">
        <Text style={styles.infoRow}>Version: <Text style={styles.infoVal}>1.0.0 — Phase 2 prototype</Text></Text>
        <Text style={styles.infoRow}>Plattform: <Text style={styles.infoVal}>React Native / Expo</Text></Text>
        <Text style={styles.infoRow}>API-status: <Text style={styles.infoWarning}>Ej kopplad</Text></Text>
      </Card>
    </Screen>
  );
}

const styles = StyleSheet.create({
  note: {
    color: colors.warning,
    fontSize: 12,
    fontStyle: 'italic',
    marginBottom: 20,
    lineHeight: 18,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  rowBorder: { borderBottomWidth: 1, borderBottomColor: colors.cardBorder },
  rowInfo: { flex: 1, marginRight: 12 },
  rowLabel: { color: colors.text, fontSize: 14, fontWeight: '600', marginBottom: 3 },
  rowSub: { color: colors.textMuted, fontSize: 12 },
  infoRow: { color: colors.textMuted, fontSize: 13, marginBottom: 6 },
  infoVal: { color: colors.text, fontWeight: '500' },
  infoWarning: { color: colors.warning, fontWeight: '600' },
});
