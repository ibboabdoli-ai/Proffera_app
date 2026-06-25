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
          {serviceName} hjälper företag att ta emot fler förfrågningar, strukturera kunddialogen
          och minska manuellt efterarbete.
        </Text>
      </Card>

      <Card label="Vad du får">
        <Text style={styles.body}>
          • Tydligare flöde från första kontakt till bokad kund.{'\n'}
          • Bättre överblick över leads, kunder och uppföljning.{'\n'}
          • En lösning som kan byggas ut stegvis med AI, CRM och automatisering.
        </Text>
      </Card>

      <Card label="Passar för">
        <Text style={styles.body}>
          Små tjänsteföretag i Sverige inom städning, service, flytt, underhåll och lokala
          uppdrag som vill arbeta mer strukturerat.
        </Text>
      </Card>

      <Card label="Nästa steg">
        <Text style={styles.body}>
          Vill du se hur {serviceName.toLowerCase()} kan fungera i ditt företag?
          Boka en demo, så går vi igenom behov och lämplig startnivå.
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
});
