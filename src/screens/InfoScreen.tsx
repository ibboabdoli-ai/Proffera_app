import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { InfoStackParamList } from '../navigation/AppNavigator';
import { colors } from '../theme/colors';

type Nav = NativeStackNavigationProp<InfoStackParamList, 'Info'>;

const faqs = [
  {
    q: 'Är Proffera en offertplattform eller ett SaaS-system?',
    a: 'Proffera började som ett lead- och offertflöde men byggs nu vidare som SaaS för bokningar, CRM, AI-kommunikation och uppföljning.',
  },
  {
    q: 'Vilka företag passar Proffera för?',
    a: 'Små tjänsteföretag inom exempelvis städning, service, flytt, underhåll och lokala uppdrag där leads och bokningar behöver följas upp bättre.',
  },
  {
    q: 'Finns allt klart redan?',
    a: 'Grundflöden för leads, företag, matchning och e-postleverans finns. Produktmoduler byggs stegvis för att hålla kvalitet och kontroll.',
  },
  {
    q: 'Kan Proffera anpassas för olika branscher?',
    a: 'Ja. Planen är att kunna anpassa tjänster, frågor, bokningsflöde, notifieringar och AI-svar efter varje bransch.',
  },
];

export default function InfoScreen() {
  const navigation = useNavigation<Nav>();
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Info & Villkor</Text>

      {/* FAQ */}
      <Text style={styles.sectionTitle}>Vanliga frågor</Text>
      {faqs.map((faq, i) => (
        <View key={i} style={styles.faqCard}>
          <Text style={styles.faqQ}>{faq.q}</Text>
          <Text style={styles.faqA}>{faq.a}</Text>
        </View>
      ))}

      {/* Legal */}
      <Text style={styles.sectionTitle}>Juridiskt</Text>
      <View style={styles.legalCard}>
        <Text style={styles.legalTitle}>Villkor</Text>
        <Text style={styles.legalNote}>
          Obs: detta är preliminära MVP-villkor och bör juridiskt granskas innan större publik lansering.
        </Text>
        <Text style={styles.legalBody}>
          Proffera är en digital plattform under utveckling för svenska tjänsteföretag. 
          Tjänsten kan omfatta leadhantering, bokningar, kundhantering, e-postnotiser, AI-stöd 
          och administrativa arbetsflöden.
        </Text>
      </View>

      <TouchableOpacity style={styles.contactLink} onPress={() => navigation.navigate('Contact')}>
        <Text style={styles.contactLinkText}>Kontakta oss →</Text>
      </TouchableOpacity>

      <Text style={styles.footer}>© 2026 Proffera. Alla rättigheter förbehållna.</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  content: { padding: 20, paddingBottom: 40 },
  title: { color: colors.text, fontSize: 22, fontWeight: '700', marginBottom: 24 },
  sectionTitle: { color: colors.text, fontSize: 16, fontWeight: '700', marginBottom: 14, marginTop: 8 },
  faqCard: {
    backgroundColor: colors.surface,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: colors.cardBorder,
  },
  faqQ: { color: colors.text, fontSize: 14, fontWeight: '600', marginBottom: 8 },
  faqA: { color: colors.textMuted, fontSize: 13, lineHeight: 20 },
  legalCard: {
    backgroundColor: colors.surface,
    borderRadius: 12,
    padding: 18,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: colors.cardBorder,
  },
  legalTitle: { color: colors.primary, fontSize: 12, fontWeight: '700', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 10 },
  legalNote: { color: colors.warning, fontSize: 12, fontStyle: 'italic', marginBottom: 12 },
  legalBody: { color: colors.textMuted, fontSize: 13, lineHeight: 20 },
  contactLink: { marginBottom: 28 },
  contactLinkText: { color: colors.primary, fontSize: 15, fontWeight: '600' },
  footer: { color: colors.textMuted, fontSize: 11, textAlign: 'center' },
});
