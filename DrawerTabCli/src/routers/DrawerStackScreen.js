import React from 'react';

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import MainTabStackScreen from './MainTabStackScreen';
import ImageListScreen from '../screens/ImageListScreen';
import AboutScreen from '../screens/AboutScreen';
import MenuButton from './MenuButton';

const Drawer = createDrawerNavigator();

const ImageStack = createStackNavigator();
const ImageStackScreen = ({navigation}) => {
  return (
    <ImageStack.Navigator>
      <ImageStack.Screen
        name="imagelist"
        component={ImageListScreen}
        options={{
          headerLeft: () => <MenuButton />,
        }}
      />
    </ImageStack.Navigator>
  );
};

const AboutStack = createStackNavigator();
const AboutStackScreen = ({navigation}) => {
  return (
    <AboutStack.Navigator>
      <AboutStack.Screen
        name="about"
        component={AboutScreen}
        options={{
          headerLeft: () => <MenuButton />,
        }}
      />
    </AboutStack.Navigator>
  );
};

const CustomDrawer = ({navigation}) => {
  const goToScreen = (screenName, params) => {
    navigation.navigate(screenName, params);
  };
  return (
    <DrawerContentScrollView>
      <DrawerItem
        label="CPU"
        onPress={() =>
          goToScreen('maintab', {
            screen: 'cpustack',
            params: {
              screen: 'cpulist',
            },
          })
        }
      />
      <DrawerItem
        label="보드"
        onPress={() =>
          goToScreen('maintab', {
            screen: 'boardstack',
            params: {
              screen: 'boardlist',
            },
          })
        }
      />
      <DrawerItem
        label="메모리"
        onPress={() =>
          goToScreen('maintab', {
            screen: 'memorystack',
            params: {
              screen: 'memorylist',
            },
          })
        }
      />
      <DrawerItem
        label="에누리"
        onPress={() =>
          goToScreen('maintab', {
            screen: 'storestack',
            params: {
              screen: 'storetab',
              params: {
                screen: 'storea',
              },
            },
          })
        }
      />
      <DrawerItem
        label="다나와"
        onPress={() =>
          goToScreen('maintab', {
            screen: 'storestack',
            params: {
              screen: 'storetab',
              params: {
                screen: 'storeb',
              },
            },
          })
        }
      />
      <DrawerItem label="사진" onPress={() => goToScreen('imagestack')} />
      <DrawerItem
        label="이 앱에 대하여"
        onPress={() => goToScreen('aboutstack')}
      />
    </DrawerContentScrollView>
  );
};

const DrawerStackScreen = () => {
  return (
    <Drawer.Navigator
      drawerContent={({navigation}) => (
        <CustomDrawer navigation={navigation} />
      )}>
      <Drawer.Screen name="maintab" component={MainTabStackScreen} />
      <Drawer.Screen name="imagestack" component={ImageStackScreen} />
      <Drawer.Screen name="aboutstack" component={AboutStackScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerStackScreen;
