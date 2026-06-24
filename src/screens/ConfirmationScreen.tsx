import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../theme/colors';

export default function ConfirmationScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.icon}>✅</Text>
      <Text style={styles.title}>Tack!</Text>
      <Text style={styles.body}>
        Din förfrågan har tagits emot.{'\n'}Vi återkommer inom kort.
      </Text>
      <Text style={styles.notice}>
        [Platshållare — ingen riktig bokning har skapats i denna fas]
      </Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Tillbaka</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  icon: { fontSize: 56, marginBottom: 20 },
  title: { color: colors.text, fontSize: 28, fontWeight: '700', marginBottom: 12 },
  body: { color: colors.textMuted, fontSize: 15, textAlign: 'center', lineHeight: 22, marginBottom: 20 },
  notice: {
    color: colors.warning,
    fontSize: 11,
    textAlign: 'center',
    fontStyle: 'italic',
    marginBottom: 32,
    paddingHorizontal: 16,
  },
  button: {
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 10,
    paddingHorizontal: 32,
    paddingVertical: 12,
  },
  buttonText: { color: colors.primary, fontWeight: '600', fontSize: 15 },
});
