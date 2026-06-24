import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { HomeStackParamList } from '../navigation/AppNavigator';
import { colors } from '../theme/colors';
import Screen from '../components/Screen';
import Card from '../components/Card';
import AppButton from '../components/AppButton';

type Nav = NativeStackNavigationProp<HomeStackParamList, 'Home'>;

const modules = [
  { id: 'onlinebokning',     name: 'Onlinebokning',      status: 'Aktiv',    icon: '📅' },
  { id: 'kund-crm',          name: 'Kund-CRM',           status: 'Aktiv',    icon: '👥' },
  { id: 'ai-chattassistent', name: 'AI-chattassistent',  status: 'Planerad', icon: '🤖' },
  { id: 'automatiska-mejl',  name: 'Automatiska mejl',   status: 'Planerad', icon: '✉️' },
  { id: 'qr-bokning',        name: 'QR-bokning',         status: 'Låst',     icon: '📷' },
];

const badgeStyle: Record<string, object> = {
  Aktiv:    { backgroundColor: '#14532d' },
  Planerad: { backgroundColor: '#1e3a5f' },
  Låst:     { backgroundColor: colors.locked },
};

export default function HomeScreen() {
  const navigation = useNavigation<Nav>();

  return (
    <Screen>
      {/* Hero */}
      <Card style={styles.hero}>
        <Text style={styles.brand}>PROFFERA</Text>
        <Text style={styles.heroTitle}>
          Hantera leads, bokningar och kunddialog i ett smartare system.
        </Text>
        <Text style={styles.heroSub}>
          SaaS för svenska tjänsteföretag — stegvis och enkelt.
        </Text>
        <AppButton
          label="Boka demo"
          onPress={() =>
            navigation.navigate('Booking', { serviceId: 'demo', serviceName: 'Demo' })
          }
          style={styles.heroCta}
        />
        <AppButton
          label="Se tjänster"
          variant="outline"
          onPress={() =>
            navigation.navigate('ServiceDetail', { serviceId: 'onlinebokning', serviceName: 'Onlinebokning' })
          }
          style={{ marginTop: 10 }}
        />
      </Card>

      {/* Module overview */}
      <Text style={styles.sectionTitle}>Produktmoduler</Text>
      {modules.map((m) => (
        <TouchableOpacity
          key={m.id}
          style={styles.moduleRow}
          disabled={m.status === 'Låst'}
          onPress={() =>
            navigation.navigate('ServiceDetail', { serviceId: m.id, serviceName: m.name })
          }
          activeOpacity={0.7}
        >
          <Text style={styles.moduleIcon}>{m.icon}</Text>
          <Text style={styles.moduleName}>{m.name}</Text>
          <View style={[styles.badge, badgeStyle[m.status]]}>
            <Text style={styles.badgeText}>{m.status}</Text>
          </View>
        </TouchableOpacity>
      ))}

      <Text style={styles.footer}>© 2026 Proffera. Alla rättigheter förbehållna.</Text>
    </Screen>
  );
}

const styles = StyleSheet.create({
  hero: { marginBottom: 28 },
  brand: {
    color: colors.primary,
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 2,
    marginBottom: 12,
  },
  heroTitle: {
    color: colors.text,
    fontSize: 22,
    fontWeight: '700',
    lineHeight: 30,
    marginBottom: 10,
  },
  heroSub: {
    color: colors.textMuted,
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 20,
  },
  heroCta: { marginTop: 4 },
  sectionTitle: {
    color: colors.text,
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 12,
  },
  moduleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderRadius: 12,
    padding: 14,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: colors.cardBorder,
  },
  moduleIcon: { fontSize: 22, marginRight: 12, width: 32 },
  moduleName: { color: colors.text, fontSize: 14, fontWeight: '500', flex: 1 },
  badge: {
    borderRadius: 6,
    paddingHorizontal: 9,
    paddingVertical: 3,
  },
  badgeText: { color: '#e2e8f0', fontSize: 10, fontWeight: '700' },
  footer: {
    color: colors.textMuted,
    fontSize: 11,
    textAlign: 'center',
    marginTop: 32,
  },
});
