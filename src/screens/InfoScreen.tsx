import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { InfoStackParamList } from '../navigation/AppNavigator';
import { colors } from '../theme/colors';
import Screen from '../components/Screen';
import Card from '../components/Card';
import AppButton from '../components/AppButton';

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
    a: 'Proffera byggs stegvis. Appen visar just nu ett demo- och prototypflöde innan alla funktioner kopplas till riktiga system.',
  },
  {
    q: 'Kan Proffera anpassas för olika branscher?',
    a: 'Ja. Planen är att kunna anpassa tjänster, frågor, bokningsflöde, notifieringar och AI-svar efter varje bransch.',
  },
];

export default function InfoScreen() {
  const navigation = useNavigation<Nav>();

  return (
    <Screen title="Info & Villkor">
      <Text style={styles.section}>Vanliga frågor</Text>
      {faqs.map((faq, i) => (
        <Card key={i} style={styles.faqCard}>
          <Text style={styles.faqQ}>{faq.q}</Text>
          <Text style={styles.faqA}>{faq.a}</Text>
        </Card>
      ))}

      <Text style={styles.section}>Juridiskt</Text>
      <Card label="Villkor">
        <Text style={styles.legalNote}>
          Det här är preliminär information för prototypen. Fullständiga villkor och policyer behöver granskas innan publik lansering.
        </Text>
        <Text style={styles.legalBody}>
          Proffera är en digital plattform under utveckling för svenska tjänsteföretag.
          Tjänsten kan omfatta leadhantering, bokningar, kundhantering, e-postnotiser, 
          AI-stöd och administrativa arbetsflöden.
        </Text>
      </Card>

      <AppButton
        label="Kontakta oss →"
        variant="outline"
        onPress={() => navigation.navigate('Contact')}
        style={{ marginTop: 4, marginBottom: 12 }}
      />

      <Text style={styles.footer}>© 2026 Proffera. Alla rättigheter förbehållna.</Text>
    </Screen>
  );
}

const styles = StyleSheet.create({
  section: {
    color: colors.text,
    fontSize: 15,
    fontWeight: '700',
    marginBottom: 12,
    marginTop: 4,
  },
  faqCard: { marginBottom: 12 },
  faqQ: { color: colors.text, fontSize: 14, fontWeight: '600', marginBottom: 8 },
  faqA: { color: colors.textMuted, fontSize: 13, lineHeight: 20 },
  legalNote: {
    color: colors.warning,
    fontSize: 12,
    fontStyle: 'italic',
    marginBottom: 12,
    lineHeight: 18,
  },
  legalBody: { color: colors.textMuted, fontSize: 13, lineHeight: 20 },
  footer: { color: colors.textMuted, fontSize: 11, textAlign: 'center', marginTop: 8 },
});
