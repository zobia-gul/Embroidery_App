import { createDrawerNavigator } from '@react-navigation/drawer';
import * as React from 'react';
import Home from './Home';
import Profile from './Profile';
import Settings from './Settings';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
