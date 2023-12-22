import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SCREEN} from '../enums/AppEnums';
import OnBoardingScreen from '../screens/splash/OnBoardingScreen';
import SplashScreen from '../screens/splash/SplashScreen';
import AnimationScreen from '../screens/splash/AnimationScreen';
import AuthLandingScreen from '../screens/auth/AuthLandingScreen';
import UserTypeScreen from '../screens/auth/UserTypeScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import CreateNewAccount from '../screens/auth/CreateNewAccount';
import VerifyNumber from '../screens/auth/VerifyNumber';
import OtpVerifyScreen from '../screens/auth/OtpVerifyScreen';
import AccountDetailScreen from '../screens/auth/AccountDetailScreen';
import IdentityVerify from '../screens/auth/IdentityVerify';
import TabNavigator from './TabNavigator';
import EditProfile from '../screens/profile/EditProfile';
import EarningScreen from '../screens/earning/EarningScreen';
const Stack = createNativeStackNavigator();

const screenOptionStyle = {
  headerShown: false,
  gestureEnabled: false,
};

const MainStackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptionStyle}>
         <Stack.Screen name={SCREEN.ANIMATION} component={AnimationScreen} />
        <Stack.Screen name={SCREEN.SPLASH} component={SplashScreen} />
        <Stack.Screen options={{animation: 'slide_from_right'}} name={SCREEN.ONBOARDING} component={OnBoardingScreen}/>
        <Stack.Screen name={SCREEN.AUTHLANDING} component={AuthLandingScreen} />
        <Stack.Screen name={SCREEN.USERTYPE} component={UserTypeScreen} />
        <Stack.Screen name={SCREEN.LOGIN} component={LoginScreen} />
        <Stack.Screen name={SCREEN.CREATENEWACCOUNT} component={CreateNewAccount} />
        <Stack.Screen name={SCREEN.VERIFYNO} component={VerifyNumber} />
        <Stack.Screen name={SCREEN.VERIFYOTP} component={OtpVerifyScreen} /> 
        <Stack.Screen name={SCREEN.ACCOUNTDETAIL} component={AccountDetailScreen} /> 
        <Stack.Screen name={SCREEN.IDENTITYVERIFY} component={IdentityVerify} /> 
        <Stack.Screen name={SCREEN.HOMESCREEN} component={TabNavigator} />
        <Stack.Screen name={SCREEN.EDITPROFILE} options={{headerShown:true}} component={EditProfile} />
        <Stack.Screen name={SCREEN.EARNINGS} options={{headerShown:true}} component={EarningScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export {MainStackNavigator};
