import {StatusBar} from 'react-native';
import React from 'react';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {MainStackNavigator} from './src/navigation/MainStackNavigator';
import {COLOR} from './src/enums/StyeGuide';
import {UserProvider} from './src/context/AppStates';

export default function App() {
  
  // SystemNavigationBar.navigationHide();
  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor={COLOR.black} barStyle="light-content" />
      <SafeAreaView style={{flex: 1}}>
        <UserProvider>
          <MainStackNavigator />
        </UserProvider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
