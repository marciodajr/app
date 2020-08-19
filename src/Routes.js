import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabBarCurves } from './components';
import * as Screens from './screens';

const Tab = createBottomTabNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBar={(props) => <TabBarCurves {...props} />}>
        <Tab.Screen name="Bell" component={Screens.Bell} />
        <Tab.Screen name="Chat" component={Screens.Chat} />
        <Tab.Screen name="Match" component={Screens.Match} />
        <Tab.Screen name="Radar" component={Screens.Radar} />
        <Tab.Screen name="Settings" component={Screens.Setting} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
