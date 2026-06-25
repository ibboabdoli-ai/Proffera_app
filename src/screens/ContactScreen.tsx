import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { colors } from '../theme/colors';
import Screen from '../components/Screen';
import Card from '../components/Card';

export default function ContactScreen() {
  return (
    <Screen title="Kontakt">
      <Card label="Boka demo">
        <Text style={styles.body}>
          I prototypen kan du se hur demo- och bokningsflödet fungerar via fliken Tjänster eller Priser.
          Inga riktiga förfrågningar skickas från appen ännu.
        </Text>
      </Card>

      <Card label="Allmänna frågor">
        <Text style={styles.body}>hej@proffera.se</Text>
        <Text style={styles.note}>E-postlänk aktiveras när appen kopplas till riktiga kontaktflöden.</Text>
      </Card>

      <Card label="Om Proffera">
        <Text style={styles.body}>
          En svensk SaaS-plattform för tjänsteföretag som vill hantera leads, bokningar,
          kunder och AI-driven kommunikation i ett smartare flöde.
        </Text>
        <Text style={[styles.body, { marginTop: 8 }]}>
          Byggs stegvis för små företag i Sverige.
        </Text>
      </Card>
    </Screen>
  );
}

const styles = StyleSheet.create({
  body: { color: colors.textMuted, fontSize: 14, lineHeight: 20 },
  note: { color: colors.warning, fontSize: 11, fontStyle: 'italic', marginTop: 8 },
});
