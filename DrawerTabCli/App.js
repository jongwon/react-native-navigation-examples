import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import CpuListScreen from './src/screens/CpuListScreen';
import StoreTabStackScreen from './src/routers/StoreTabStackScreen';
import {NavigationContainer} from '@react-navigation/native';
import MainTabStackScreen from './src/routers/MainTabStackScreen';
import DrawerStackScreen from './src/routers/DrawerStackScreen';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1}}>
        <DrawerStackScreen />
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
