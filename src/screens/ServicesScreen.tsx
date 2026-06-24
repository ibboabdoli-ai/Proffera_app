import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { TjansterStackParamList } from '../navigation/AppNavigator';
import { colors } from '../theme/colors';
import Screen from '../components/Screen';

type Nav = NativeStackNavigationProp<TjansterStackParamList, 'Services'>;

const services = [
  { id: 'onlinebokning',     name: 'Onlinebokning',           description: 'Ta emot bokningar dygnet runt via ett enkelt formulär.', icon: '📅', status: 'Aktiv' },
  { id: 'leadhantering',     name: 'Leadhantering',           description: 'Samla och följ upp förfrågningar i ett strukturerat flöde.', icon: '🎯', status: 'Aktiv' },
  { id: 'kund-crm',          name: 'Kund-CRM',                description: 'Bygg kundhistorik, kontaktuppgifter och uppföljning.', icon: '👥', status: 'Aktiv' },
  { id: 'ai-chatt',          name: 'AI-chattassistent',       description: 'Ge besökare svar direkt och fånga leads automatiskt.', icon: '🤖', status: 'Planerad' },
  { id: 'auto-bekraftelse',  name: 'Automatiska bekräftelser', description: 'Skicka e-postbekräftelser direkt vid bokning.', icon: '✅', status: 'Planerad' },
  { id: 'qr-bokning',        name: 'QR-bokning',              description: 'Låt kunder boka via QR-kod på plats.', icon: '📷', status: 'Låst' },
];

const statusColor: Record<string, string> = {
  Aktiv:    '#22C55E',
  Planerad: colors.primary,
  Låst:     colors.textMuted,
};

export default function ServicesScreen() {
  const navigation = useNavigation<Nav>();
  return (
    <Screen
      title="Tjänster"
      subtitle="Moduler för att hantera hela kundresan — från första kontakt till återkommande kund."
    >
      {services.map((s) => (
        <TouchableOpacity
          key={s.id}
          style={styles.card}
          onPress={() => navigation.navigate('ServiceDetail', { serviceId: s.id, serviceName: s.name })}
          activeOpacity={0.75}
        >
          <Text style={styles.icon}>{s.icon}</Text>
          <View style={styles.body}>
            <View style={styles.nameRow}>
              <Text style={styles.name}>{s.name}</Text>
              <View style={[styles.dot, { backgroundColor: statusColor[s.status] }]} />
            </View>
            <Text style={styles.desc}>{s.description}</Text>
          </View>
          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>
      ))}
    </Screen>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderRadius: 13,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: colors.cardBorder,
  },
  icon: { fontSize: 26, marginRight: 14, width: 36 },
  body: { flex: 1 },
  nameRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 5 },
  name: { color: colors.text, fontSize: 15, fontWeight: '600', flex: 1 },
  dot: { width: 8, height: 8, borderRadius: 4 },
  desc: { color: colors.textMuted, fontSize: 13, lineHeight: 18 },
  arrow: { color: colors.textMuted, fontSize: 22, marginLeft: 8 },
});
