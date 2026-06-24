import React from 'react';
import {
  View, Text, ScrollView, TouchableOpacity, StyleSheet,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { TjansterStackParamList } from '../navigation/AppNavigator';
import { colors } from '../theme/colors';

type Nav = NativeStackNavigationProp<TjansterStackParamList, 'Services'>;

const services = [
  { id: 'onlinebokning', name: 'Onlinebokning', description: 'Ta emot bokningar dygnet runt via ett enkelt formulär.', icon: '📅' },
  { id: 'leadhantering', name: 'Leadhantering', description: 'Samla och följ upp förfrågningar i ett strukturerat flöde.', icon: '🎯' },
  { id: 'kund-crm', name: 'Kund-CRM', description: 'Bygg kundhistorik, kontaktuppgifter och uppföljning.', icon: '👥' },
  { id: 'ai-chatt', name: 'AI-chattassistent', description: 'Ge besökare svar direkt och fånga leads automatiskt.', icon: '🤖' },
  { id: 'qr-bokning', name: 'QR-bokning', description: 'Låt kunder boka via QR-kod på plats.', icon: '📷' },
  { id: 'auto-bekraftelse', name: 'Automatiska bekräftelser', description: 'Skicka e-postbekräftelser direkt vid bokning.', icon: '✅' },
];

export default function ServicesScreen() {
  const navigation = useNavigation<Nav>();
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.pageTitle}>Våra tjänster</Text>
      <Text style={styles.pageSubtitle}>
        Moduler för att hantera hela kundresan — från första kontakt till återkommande kund.
      </Text>
      {services.map((s) => (
        <TouchableOpacity
          key={s.id}
          style={styles.card}
          onPress={() => navigation.navigate('ServiceDetail', { serviceId: s.id, serviceName: s.name })}
        >
          <Text style={styles.cardIcon}>{s.icon}</Text>
          <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>{s.name}</Text>
            <Text style={styles.cardDesc}>{s.description}</Text>
          </View>
          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  content: { padding: 20, paddingBottom: 40 },
  pageTitle: { color: colors.text, fontSize: 22, fontWeight: '700', marginBottom: 8 },
  pageSubtitle: { color: colors.textMuted, fontSize: 14, lineHeight: 20, marginBottom: 24 },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: colors.cardBorder,
  },
  cardIcon: { fontSize: 28, marginRight: 14 },
  cardBody: { flex: 1 },
  cardTitle: { color: colors.text, fontSize: 15, fontWeight: '600', marginBottom: 4 },
  cardDesc: { color: colors.textMuted, fontSize: 13, lineHeight: 18 },
  arrow: { color: colors.textMuted, fontSize: 22, marginLeft: 8 },
});
