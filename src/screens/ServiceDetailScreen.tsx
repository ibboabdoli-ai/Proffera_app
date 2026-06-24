import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RouteProp } from '@react-navigation/native';
import type { TjansterStackParamList } from '../navigation/AppNavigator';
import { colors } from '../theme/colors';
import Screen from '../components/Screen';
import Card from '../components/Card';
import AppButton from '../components/AppButton';

type Nav = NativeStackNavigationProp<TjansterStackParamList, 'ServiceDetail'>;
type Route = RouteProp<TjansterStackParamList, 'ServiceDetail'>;

export default function ServiceDetailScreen() {
  const navigation = useNavigation<Nav>();
  const { serviceId, serviceName } = useRoute<Route>().params;

  return (
    <Screen title={serviceName}>
      <Card label="Om tjänsten">
        <Text style={styles.body}>
          Den här modulen hjälper ditt företag att effektivisera {serviceName.toLowerCase()}.
          Funktioner och integrationer kopplas stegvis i kommande faser.
        </Text>
      </Card>

      <Card label="Passar för">
        <Text style={styles.body}>
          Små tjänsteföretag i Sverige inom städning, service, flytt, underhåll och 
          lokala uppdrag som vill strukturera sin kundhantering.
        </Text>
      </Card>

      <Card label="Status">
        <Text style={styles.body}>
          Modul-ID: <Text style={styles.mono}>{serviceId}</Text>
          {'\n'}Innehåll och detaljer uppdateras i nästa fas.
        </Text>
      </Card>

      <AppButton
        label="Boka demo"
        onPress={() => navigation.navigate('Booking', { serviceId, serviceName })}
        style={{ marginTop: 8 }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  body: { color: colors.textMuted, fontSize: 14, lineHeight: 22 },
  mono: { color: colors.primary, fontWeight: '600' },
});
