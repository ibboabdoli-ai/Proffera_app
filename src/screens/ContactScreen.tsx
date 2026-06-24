import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { colors } from '../theme/colors';

export default function ContactScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Kontakt</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Boka demo</Text>
        <Text style={styles.cardBody}>
          Fyll i bokningsformuläret via fliken Tjänster eller Priser så återkommer vi inom en arbetsdag.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Allmänna frågor</Text>
        <Text style={styles.cardBody}>hej@proffera.se</Text>
        <Text style={styles.note}>[E-postlänk kopplas i nästa fas]</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Proffera</Text>
        <Text style={styles.cardBody}>
          En svensk SaaS-plattform för tjänsteföretag som vill hantera leads, bokningar, 
          kunder och AI-driven kommunikation i ett smartare flöde.
        </Text>
        <Text style={styles.cardBody}>Byggs stegvis för små företag i Sverige.</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  content: { padding: 20, paddingBottom: 40 },
  title: { color: colors.text, fontSize: 22, fontWeight: '700', marginBottom: 20 },
  card: {
    backgroundColor: colors.surface,
    borderRadius: 12,
    padding: 18,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: colors.cardBorder,
  },
  cardTitle: { color: colors.primary, fontSize: 12, fontWeight: '700', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 8 },
  cardBody: { color: colors.textMuted, fontSize: 14, lineHeight: 20, marginBottom: 4 },
  note: { color: colors.warning, fontSize: 11, fontStyle: 'italic', marginTop: 6 },
});
