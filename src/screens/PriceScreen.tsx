import React from 'react';
import {
  View, Text, ScrollView, TouchableOpacity, StyleSheet,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { PriserStackParamList } from '../navigation/AppNavigator';
import { colors } from '../theme/colors';

type Nav = NativeStackNavigationProp<PriserStackParamList, 'Prices'>;

const plans = [
  {
    id: 'starter',
    name: 'Starter',
    price: 'Från 299 kr/mån',
    tagline: 'För små företag som vill komma igång med digitala förfrågningar och bokningar.',
    features: ['Bokningsflöde', 'E-postnotiser', 'Kontaktformulär', 'Grundläggande leadlista'],
    highlight: false,
  },
  {
    id: 'professional',
    name: 'Professional',
    price: 'Från 699 kr/mån',
    tagline: 'För växande företag som vill samla leads, kunder och AI-stöd i ett system.',
    features: ['Allt i Starter', 'AI-chatt', 'CRM', 'Analysöversikt', 'Automatiska bekräftelser'],
    highlight: true,
  },
  {
    id: 'business',
    name: 'Business',
    price: 'Offert',
    tagline: 'För företag med flera team, orter eller behov av anpassade integrationer.',
    features: ['Allt i Professional', 'Prioriterad support', 'Flera platser', 'Anpassade integrationer'],
    highlight: false,
  },
];

export default function PriceScreen() {
  const navigation = useNavigation<Nav>();

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.pageTitle}>Välj en plan</Text>
      <Text style={styles.pageSubtitle}>
        Starta enkelt med bokning och formulär. Lägg till AI och CRM när flödet växer.
      </Text>

      {plans.map((plan) => (
        <View key={plan.id} style={[styles.card, plan.highlight && styles.cardHighlight]}>
          {plan.highlight && (
            <View style={styles.popularBadge}>
              <Text style={styles.popularText}>Populärast</Text>
            </View>
          )}
          <Text style={styles.planName}>{plan.name}</Text>
          <Text style={styles.planPrice}>{plan.price}</Text>
          <Text style={styles.planTagline}>{plan.tagline}</Text>
          <View style={styles.divider} />
          {plan.features.map((f) => (
            <Text key={f} style={styles.feature}>✓  {f}</Text>
          ))}
          <TouchableOpacity
            style={[styles.planButton, plan.highlight && styles.planButtonHighlight]}
            onPress={() => navigation.navigate('Booking', { serviceId: plan.id, serviceName: plan.name })}
          >
            <Text style={[styles.planButtonText, plan.highlight && styles.planButtonTextHighlight]}>
              Kontakta oss
            </Text>
          </TouchableOpacity>
        </View>
      ))}

      <Text style={styles.disclaimer}>
        Obs: priser är preliminära under MVP-fasen. Betalning och abonnemang regleras 
        när betalningslösning är aktiv.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  content: { padding: 20, paddingBottom: 40 },
  pageTitle: { color: colors.text, fontSize: 22, fontWeight: '700', marginBottom: 8 },
  pageSubtitle: { color: colors.textMuted, fontSize: 14, lineHeight: 20, marginBottom: 24 },
  card: {
    backgroundColor: colors.surface,
    borderRadius: 16,
    padding: 22,
    marginBottom: 18,
    borderWidth: 1,
    borderColor: colors.cardBorder,
    position: 'relative',
  },
  cardHighlight: {
    borderColor: colors.primary,
    borderWidth: 2,
  },
  popularBadge: {
    position: 'absolute',
    top: -12,
    alignSelf: 'center',
    backgroundColor: colors.primary,
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 4,
  },
  popularText: { color: '#fff', fontSize: 11, fontWeight: '700' },
  planName: { color: colors.text, fontSize: 20, fontWeight: '700', marginBottom: 4, marginTop: 6 },
  planPrice: { color: colors.primary, fontSize: 16, fontWeight: '600', marginBottom: 8 },
  planTagline: { color: colors.textMuted, fontSize: 13, lineHeight: 18, marginBottom: 14 },
  divider: { height: 1, backgroundColor: colors.cardBorder, marginBottom: 14 },
  feature: { color: colors.text, fontSize: 14, marginBottom: 7 },
  planButton: {
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 16,
  },
  planButtonHighlight: { backgroundColor: colors.primary },
  planButtonText: { color: colors.primary, fontWeight: '700', fontSize: 14 },
  planButtonTextHighlight: { color: '#fff' },
  disclaimer: {
    color: colors.textMuted,
    fontSize: 11,
    lineHeight: 16,
    textAlign: 'center',
    marginTop: 8,
    fontStyle: 'italic',
  },
});
