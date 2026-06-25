import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { PriserStackParamList } from '../navigation/AppNavigator';
import { colors } from '../theme/colors';
import Screen from '../components/Screen';
import AppButton from '../components/AppButton';

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
    <Screen
      title="Priser"
      subtitle="Starta enkelt med bokning och formulär. Lägg till AI och CRM när flödet växer."
    >
      {plans.map((plan) => (
        <View key={plan.id} style={[styles.card, plan.highlight && styles.cardHL]}>
          {plan.highlight && (
            <View style={styles.pill}>
              <Text style={styles.pillText}>Populärast</Text>
            </View>
          )}

          <Text style={[styles.planName, plan.highlight && styles.planNameHL]}>
            {plan.name}
          </Text>
          <Text style={styles.planPrice}>{plan.price}</Text>
          <Text style={styles.planTagline}>{plan.tagline}</Text>

          <View style={styles.divider} />

          {plan.features.map((f) => (
            <Text key={f} style={styles.feature}>
              ✓{'  '}{f}
            </Text>
          ))}

          <AppButton
            label={`Boka demo för ${plan.name}`}
            variant={plan.highlight ? 'primary' : 'outline'}
            onPress={() =>
              navigation.navigate('Booking', { serviceId: plan.id, serviceName: plan.name })
            }
            style={{ marginTop: 18 }}
          />
        </View>
      ))}

      <Text style={styles.disclaimer}>
        Priserna är preliminära under MVP-fasen. Ingen betalning sker i appen.{'\n'}
        Abonnemang och avtal hanteras separat efter demo.
      </Text>
    </Screen>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: 16,
    padding: 22,
    marginBottom: 18,
    borderWidth: 1,
    borderColor: colors.cardBorder,
  },
  cardHL: {
    borderColor: colors.primary,
    borderWidth: 2,
  },
  pill: {
    alignSelf: 'flex-start',
    backgroundColor: colors.primary,
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 4,
    marginBottom: 12,
  },
  pillText: { color: '#fff', fontSize: 11, fontWeight: '700' },
  planName: { color: colors.text, fontSize: 20, fontWeight: '700', marginBottom: 4 },
  planNameHL: { color: colors.primary },
  planPrice: { color: colors.textMuted, fontSize: 15, fontWeight: '600', marginBottom: 8 },
  planTagline: { color: colors.textMuted, fontSize: 13, lineHeight: 18 },
  divider: { height: 1, backgroundColor: colors.cardBorder, marginVertical: 16 },
  feature: { color: colors.text, fontSize: 14, marginBottom: 7, lineHeight: 20 },
  disclaimer: {
    color: colors.textMuted,
    fontSize: 11,
    lineHeight: 16,
    textAlign: 'center',
    fontStyle: 'italic',
    marginTop: 4,
  },
});
