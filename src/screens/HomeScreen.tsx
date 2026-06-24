import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { HomeStackParamList } from '../navigation/AppNavigator';
import { colors } from '../theme/colors';

type Nav = NativeStackNavigationProp<HomeStackParamList, 'Home'>;

const modules = [
  { id: 'onlinebokning', name: 'Onlinebokning', status: 'Aktiv', icon: '📅' },
  { id: 'kund-crm', name: 'Kund-CRM', status: 'Aktiv', icon: '👥' },
  { id: 'ai-chattassistent', name: 'AI-chattassistent', status: 'Planerad', icon: '🤖' },
  { id: 'automatiska-mejl', name: 'Automatiska mejl', status: 'Planerad', icon: '✉️' },
  { id: 'qr-bokning', name: 'QR-bokning', status: 'Låst', icon: '📷' },
];

export default function HomeScreen() {
  const navigation = useNavigation<Nav>();

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* Header */}
      <View style={styles.hero}>
        <Text style={styles.brand}>Proffera</Text>
        <Text style={styles.heroTitle}>
          Hantera leads, bokningar och kunddialog.
        </Text>
        <Text style={styles.heroSub}>
          SaaS för svenska tjänsteföretag — stegvis och enkelt.
        </Text>
        <TouchableOpacity
          style={styles.ctaButton}
          onPress={() => navigation.navigate('Booking', { serviceId: 'demo', serviceName: 'Demo' })}
        >
          <Text style={styles.ctaButtonText}>Boka demo</Text>
        </TouchableOpacity>
      </View>

      {/* Module status */}
      <Text style={styles.sectionTitle}>Produktmoduler</Text>
      {modules.map((m) => (
        <View key={m.id} style={styles.moduleCard}>
          <Text style={styles.moduleIcon}>{m.icon}</Text>
          <View style={styles.moduleInfo}>
            <Text style={styles.moduleName}>{m.name}</Text>
            <View style={[styles.badge, styles[`badge${m.status}` as 'badgeAktiv' | 'badgePlanerad' | 'badgeLåst']]}>
              <Text style={styles.badgeText}>{m.status}</Text>
            </View>
          </View>
        </View>
      ))}

      <Text style={styles.footer}>© 2026 Proffera. Alla rättigheter förbehållna.</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  content: { padding: 20, paddingBottom: 40 },
  hero: {
    backgroundColor: colors.surface,
    borderRadius: 16,
    padding: 24,
    marginBottom: 28,
    borderWidth: 1,
    borderColor: colors.cardBorder,
  },
  brand: {
    color: colors.primary,
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: 1.5,
    textTransform: 'uppercase',
    marginBottom: 10,
  },
  heroTitle: {
    color: colors.text,
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 32,
    marginBottom: 10,
  },
  heroSub: {
    color: colors.textMuted,
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 20,
  },
  ctaButton: {
    backgroundColor: colors.primary,
    borderRadius: 10,
    paddingVertical: 13,
    alignItems: 'center',
  },
  ctaButtonText: { color: '#fff', fontWeight: '700', fontSize: 15 },
  sectionTitle: {
    color: colors.text,
    fontSize: 17,
    fontWeight: '700',
    marginBottom: 14,
  },
  moduleCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderRadius: 12,
    padding: 16,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: colors.cardBorder,
  },
  moduleIcon: { fontSize: 24, marginRight: 14 },
  moduleInfo: { flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  moduleName: { color: colors.text, fontSize: 15, fontWeight: '500' },
  badge: { borderRadius: 6, paddingHorizontal: 10, paddingVertical: 3 },
  badgeAktiv: { backgroundColor: '#14532d' },
  badgePlanerad: { backgroundColor: '#1e3a5f' },
  badgeLåst: { backgroundColor: colors.locked },
  badgeText: { color: '#e2e8f0', fontSize: 11, fontWeight: '600' },
  footer: { color: colors.textMuted, fontSize: 11, textAlign: 'center', marginTop: 32 },
});
