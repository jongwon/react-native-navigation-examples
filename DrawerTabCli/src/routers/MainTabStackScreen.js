import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import StoreTabStackScreen from './StoreTabStackScreen';
import CpuListScreen from '../screens/CpuListScreen';
import DetailsScreen from '../screens/DetailsScreen';
import BoardListScreen from '../screens/BoardListScreen';
import MemoryListScreen from '../screens/MemoryListScreen';
import MenuButton from './MenuButton';

const MainTab = createBottomTabNavigator();

const CpuStack = createStackNavigator();
const CpuStackScreen = ({navigation}) => {
  return (
    <CpuStack.Navigator>
      <CpuStack.Screen
        name="cpulist"
        component={CpuListScreen}
        options={{
          title: 'CPU 리스트',
          headerLeft: () => <MenuButton />,
        }}
      />
      <CpuStack.Screen
        name="details"
        component={DetailsScreen}
        options={{
          title: '제온 CPU...',
        }}
      />
    </CpuStack.Navigator>
  );
};

const BoardStack = createStackNavigator();
const BoardStackScreen = ({navigation}) => {
  return (
    <BoardStack.Navigator>
      <BoardStack.Screen
        name="boardlist"
        component={BoardListScreen}
        options={{
          headerLeft: () => <MenuButton />,
        }}
      />
    </BoardStack.Navigator>
  );
};

const MemoryStack = createStackNavigator();
const MemoryStackScreen = ({navigation}) => {
  return (
    <MemoryStack.Navigator>
      <MemoryStack.Screen
        name="memorylist"
        component={MemoryListScreen}
        options={{
          headerLeft: () => <MenuButton />,
        }}
      />
    </MemoryStack.Navigator>
  );
};

const StoreStack = createStackNavigator();
const StoreStackScreen = ({navigation}) => {
  return (
    <StoreStack.Navigator>
      <StoreStack.Screen
        name="storetab"
        component={StoreTabStackScreen}
        options={{
          title: '온라인 쇼핑몰',
          headerLeft: () => <MenuButton />,
        }}
      />
    </StoreStack.Navigator>
  );
};

const MainTabStackScreen = () => {
  return (
    <MainTab.Navigator>
      <MainTab.Screen name="cpustack" component={CpuStackScreen} />
      <MainTab.Screen name="boardstack" component={BoardStackScreen} />
      <MainTab.Screen name="memorystack" component={MemoryStackScreen} />
      <MainTab.Screen
        name="storestack"
        component={StoreStackScreen}
        options={{
          title: '쇼핑몰',
        }}
      />
    </MainTab.Navigator>
  );
};

export default MainTabStackScreen;
