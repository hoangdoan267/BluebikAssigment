import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import OnboardingScreen from '../modules/onboarding/screens/OnboardingScreen';
import IDCardScreen from '../modules/onboarding/screens/IDCardScreen';
import InformationScreen from '../modules/onboarding/screens/InformationScreen';
import PurposeScreen from '../modules/onboarding/screens/PurposeScreen';
import CompleteScreen from '../modules/onboarding/screens/CompleteScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigation = () => {
  return (
    <NavigationContainer<RootStackParamList>>
      <Stack.Navigator
        initialRouteName="onboarding"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen component={OnboardingScreen} name="onboarding" />
        <Stack.Screen component={IDCardScreen} name="idCard" />
        <Stack.Screen component={InformationScreen} name="information" />
        <Stack.Screen component={PurposeScreen} name="purpose" />
        <Stack.Screen component={CompleteScreen} name="complete" />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;

export type RootStackParamList = {
  onboarding: undefined;
  idCard: undefined;
  information: undefined;
  purpose: undefined;
  complete: undefined;
};
