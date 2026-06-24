import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import { colors } from '../theme/colors';

interface CardProps {
  children: React.ReactNode;
  /** Small uppercase label shown above content */
  label?: string;
  style?: ViewStyle;
}

export default function Card({ children, label, style }: CardProps) {
  return (
    <View style={[styles.card, style]}>
      {label ? <Text style={styles.label}>{label}</Text> : null}
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: 14,
    padding: 18,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: colors.cardBorder,
  },
  label: {
    color: colors.primary,
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 1.2,
    textTransform: 'uppercase',
    marginBottom: 10,
  },
});
