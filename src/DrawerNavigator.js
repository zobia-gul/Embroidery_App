import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './Home';
import Profile from './Profile';
import Settings from './Settings';
import CustomDrawerContent from './CustomDrawerContent';
import Cart from './Cart';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Settings" component={Settings} />
      <Drawer.Screen name="Cart" component={Cart} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
