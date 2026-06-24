import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  ActivityIndicator,
} from 'react-native';
import { colors } from '../theme/colors';

type Variant = 'primary' | 'outline' | 'ghost' | 'disabled';

interface AppButtonProps {
  label: string;
  onPress?: () => void;
  variant?: Variant;
  style?: ViewStyle;
  loading?: boolean;
}

export default function AppButton({
  label,
  onPress,
  variant = 'primary',
  style,
  loading = false,
}: AppButtonProps) {
  const isDisabled = variant === 'disabled' || loading;

  return (
    <TouchableOpacity
      style={[styles.base, styles[variant], style]}
      onPress={onPress}
      disabled={isDisabled}
      activeOpacity={0.75}
    >
      {loading ? (
        <ActivityIndicator color={variant === 'primary' ? '#fff' : colors.primary} />
      ) : (
        <Text style={[styles.label, styles[`label_${variant}`]]}>{label}</Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  base: {
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 48,
  },

  // variants
  primary: {
    backgroundColor: colors.primary,
  },
  outline: {
    borderWidth: 1.5,
    borderColor: colors.primary,
    backgroundColor: 'transparent',
  },
  ghost: {
    backgroundColor: 'transparent',
  },
  disabled: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.cardBorder,
    opacity: 0.6,
  },

  // labels
  label: {
    fontSize: 15,
    fontWeight: '700',
  },
  label_primary: { color: '#fff' },
  label_outline: { color: colors.primary },
  label_ghost: { color: colors.textMuted },
  label_disabled: { color: colors.textMuted, fontSize: 13 },
});
