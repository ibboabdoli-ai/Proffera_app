import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme/colors';

// ── Screens ──────────────────────────────────────────────────────────────────
import HomeScreen from '../screens/HomeScreen';
import ServicesScreen from '../screens/ServicesScreen';
import ServiceDetailScreen from '../screens/ServiceDetailScreen';
import PriceScreen from '../screens/PriceScreen';
import BookingScreen from '../screens/BookingScreen';
import ConfirmationScreen from '../screens/ConfirmationScreen';
import ContactScreen from '../screens/ContactScreen';
import InfoScreen from '../screens/InfoScreen';
import MyAccountScreen from '../screens/MyAccountScreen';
import SettingsScreen from '../screens/SettingsScreen';

// ── Param lists ───────────────────────────────────────────────────────────────
export type HomeStackParamList = {
  Home: undefined;
  ServiceDetail: { serviceId: string; serviceName: string };
  Booking: { serviceId: string; serviceName: string };
  Confirmation: undefined;
};

export type TjansterStackParamList = {
  Services: undefined;
  ServiceDetail: { serviceId: string; serviceName: string };
  Booking: { serviceId: string; serviceName: string };
  Confirmation: undefined;
};

export type PriserStackParamList = {
  Prices: undefined;
  Booking: { serviceId: string; serviceName: string };
  Confirmation: undefined;
};

export type InfoStackParamList = {
  Info: undefined;
  Contact: undefined;
};

export type AccountStackParamList = {
  MyAccount: undefined;
  Settings: undefined;
};

export type RootTabParamList = {
  HomeTab: undefined;
  TjansterTab: undefined;
  PriserTab: undefined;
  InfoTab: undefined;
  AccountTab: undefined;
};

// ── Stack navigators ──────────────────────────────────────────────────────────
const HomeStack = createNativeStackNavigator<HomeStackParamList>();
function HomeStackNavigator() {
  return (
    <HomeStack.Navigator screenOptions={stackScreenOptions}>
      <HomeStack.Screen name="Home" component={HomeScreen} options={{ title: 'Hem' }} />
      <HomeStack.Screen name="ServiceDetail" component={ServiceDetailScreen} options={{ title: 'Tjänst' }} />
      <HomeStack.Screen name="Booking" component={BookingScreen} options={{ title: 'Boka' }} />
      <HomeStack.Screen name="Confirmation" component={ConfirmationScreen} options={{ title: 'Bekräftelse' }} />
    </HomeStack.Navigator>
  );
}

const TjansterStack = createNativeStackNavigator<TjansterStackParamList>();
function TjansterStackNavigator() {
  return (
    <TjansterStack.Navigator screenOptions={stackScreenOptions}>
      <TjansterStack.Screen name="Services" component={ServicesScreen} options={{ title: 'Tjänster' }} />
      <TjansterStack.Screen name="ServiceDetail" component={ServiceDetailScreen} options={{ title: 'Tjänst' }} />
      <TjansterStack.Screen name="Booking" component={BookingScreen} options={{ title: 'Boka' }} />
      <TjansterStack.Screen name="Confirmation" component={ConfirmationScreen} options={{ title: 'Bekräftelse' }} />
    </TjansterStack.Navigator>
  );
}

const PriserStack = createNativeStackNavigator<PriserStackParamList>();
function PriserStackNavigator() {
  return (
    <PriserStack.Navigator screenOptions={stackScreenOptions}>
      <PriserStack.Screen name="Prices" component={PriceScreen} options={{ title: 'Priser' }} />
      <PriserStack.Screen name="Booking" component={BookingScreen} options={{ title: 'Boka demo' }} />
      <PriserStack.Screen name="Confirmation" component={ConfirmationScreen} options={{ title: 'Bekräftelse' }} />
    </PriserStack.Navigator>
  );
}

const InfoStack = createNativeStackNavigator<InfoStackParamList>();
function InfoStackNavigator() {
  return (
    <InfoStack.Navigator screenOptions={stackScreenOptions}>
      <InfoStack.Screen name="Info" component={InfoScreen} options={{ title: 'Info & Villkor' }} />
      <InfoStack.Screen name="Contact" component={ContactScreen} options={{ title: 'Kontakt' }} />
    </InfoStack.Navigator>
  );
}

const AccountStack = createNativeStackNavigator<AccountStackParamList>();
function AccountStackNavigator() {
  return (
    <AccountStack.Navigator screenOptions={stackScreenOptions}>
      <AccountStack.Screen name="MyAccount" component={MyAccountScreen} options={{ title: 'Mitt konto' }} />
      <AccountStack.Screen name="Settings" component={SettingsScreen} options={{ title: 'Inställningar' }} />
    </AccountStack.Navigator>
  );
}

// ── Shared screen options ─────────────────────────────────────────────────────
const stackScreenOptions = {
  headerStyle: { backgroundColor: colors.surface },
  headerTintColor: colors.text,
  headerTitleStyle: { fontWeight: '600' as const },
  contentStyle: { backgroundColor: colors.background },
};

// ── Bottom Tab ────────────────────────────────────────────────────────────────
const Tab = createBottomTabNavigator<RootTabParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarStyle: {
            backgroundColor: colors.tabBar,
            borderTopColor: colors.tabBarBorder,
            borderTopWidth: 1,
          },
          tabBarActiveTintColor: colors.tabActive,
          tabBarInactiveTintColor: colors.tabInactive,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName: keyof typeof Ionicons.glyphMap = 'home';
            if (route.name === 'HomeTab') iconName = focused ? 'home' : 'home-outline';
            else if (route.name === 'TjansterTab') iconName = focused ? 'grid' : 'grid-outline';
            else if (route.name === 'PriserTab') iconName = focused ? 'pricetag' : 'pricetag-outline';
            else if (route.name === 'InfoTab') iconName = focused ? 'information-circle' : 'information-circle-outline';
            else if (route.name === 'AccountTab') iconName = focused ? 'person' : 'person-outline';
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="HomeTab" component={HomeStackNavigator} options={{ title: 'Hem' }} />
        <Tab.Screen name="TjansterTab" component={TjansterStackNavigator} options={{ title: 'Tjänster' }} />
        <Tab.Screen name="PriserTab" component={PriserStackNavigator} options={{ title: 'Priser' }} />
        <Tab.Screen name="InfoTab" component={InfoStackNavigator} options={{ title: 'Info' }} />
        <Tab.Screen name="AccountTab" component={AccountStackNavigator} options={{ title: 'Konto' }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
