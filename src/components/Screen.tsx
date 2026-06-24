import React from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  ScrollViewProps,
  ViewStyle,
} from 'react-native';
import { colors } from '../theme/colors';

interface ScreenProps extends ScrollViewProps {
  children: React.ReactNode;
  /** Optional page title rendered at top */
  title?: string;
  /** Optional subtitle below title */
  subtitle?: string;
  /** Disable scroll wrapper — use for centered single-content screens */
  noScroll?: boolean;
  style?: ViewStyle;
}

export default function Screen({
  children,
  title,
  subtitle,
  noScroll = false,
  style,
  ...rest
}: ScreenProps) {
  if (noScroll) {
    return (
      <View style={[styles.staticContainer, style]}>
        {title && <Text style={styles.title}>{title}</Text>}
        {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
        {children}
      </View>
    );
  }

  return (
    <ScrollView
      style={styles.scroll}
      contentContainerStyle={[styles.content, style]}
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
      {...rest}
    >
      {title && <Text style={styles.title}>{title}</Text>}
      {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
      {children}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    padding: 20,
    paddingBottom: 48,
  },
  staticContainer: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 20,
  },
  title: {
    color: colors.text,
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 6,
  },
  subtitle: {
    color: colors.textMuted,
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 24,
  },
});
