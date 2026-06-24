import React from 'react';
import {
  View, Text, ScrollView, TouchableOpacity, StyleSheet,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RouteProp } from '@react-navigation/native';
import type { TjansterStackParamList } from '../navigation/AppNavigator';
import { colors } from '../theme/colors';

type Nav = NativeStackNavigationProp<TjansterStackParamList, 'ServiceDetail'>;
type Route = RouteProp<TjansterStackParamList, 'ServiceDetail'>;

export default function ServiceDetailScreen() {
  const navigation = useNavigation<Nav>();
  const route = useRoute<Route>();
  const { serviceId, serviceName } = route.params;

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>{serviceName}</Text>
      <Text style={styles.id}>ID: {serviceId}</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Vad ingår</Text>
        <Text style={styles.body}>
          [Platshållartext] Den här modulen hjälper ditt företag att hantera {serviceName.toLowerCase()} 
          på ett enkelt och strukturerat sätt. Detaljer läggs till i nästa fas.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Passar för</Text>
        <Text style={styles.body}>
          Små tjänsteföretag i Sverige som vill effektivisera sin kundhantering.
        </Text>
      </View>

      <TouchableOpacity
        style={styles.bookButton}
        onPress={() => navigation.navigate('Booking', { serviceId, serviceName })}
      >
        <Text style={styles.bookButtonText}>Boka demo</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  content: { padding: 20, paddingBottom: 40 },
  title: { color: colors.text, fontSize: 26, fontWeight: '700', marginBottom: 4 },
  id: { color: colors.textMuted, fontSize: 11, marginBottom: 28 },
  section: {
    backgroundColor: colors.surface,
    borderRadius: 12,
    padding: 18,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: colors.cardBorder,
  },
  sectionTitle: { color: colors.primary, fontSize: 12, fontWeight: '700', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 8 },
  body: { color: colors.textMuted, fontSize: 14, lineHeight: 22 },
  bookButton: {
    backgroundColor: colors.primary,
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 12,
  },
  bookButtonText: { color: '#fff', fontWeight: '700', fontSize: 16 },
});
