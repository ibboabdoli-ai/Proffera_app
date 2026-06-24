import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../theme/colors';
import Screen from '../components/Screen';
import AppButton from '../components/AppButton';

export default function ConfirmationScreen() {
  const navigation = useNavigation();

  return (
    <Screen noScroll>
      <View style={styles.center}>
        <Text style={styles.icon}>✅</Text>
        <Text style={styles.title}>Tack!</Text>
        <Text style={styles.body}>
          Din förfrågan har tagits emot.{'\n'}Vi återkommer inom kort.
        </Text>

        <View style={styles.notice}>
          <Text style={styles.noticeText}>
            Platshållare — ingen riktig bokning har skapats i denna fas.
          </Text>
        </View>

        <AppButton
          label="Tillbaka"
          variant="outline"
          onPress={() => navigation.goBack()}
          style={styles.backBtn}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  icon: { fontSize: 60, marginBottom: 20 },
  title: { color: colors.text, fontSize: 28, fontWeight: '700', marginBottom: 12 },
  body: {
    color: colors.textMuted,
    fontSize: 15,
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 20,
  },
  notice: {
    backgroundColor: colors.surface,
    borderRadius: 10,
    padding: 14,
    borderWidth: 1,
    borderColor: colors.cardBorder,
    marginBottom: 28,
    maxWidth: 300,
  },
  noticeText: { color: colors.warning, fontSize: 12, textAlign: 'center', fontStyle: 'italic' },
  backBtn: { width: 200 },
});
