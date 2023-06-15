import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import TabNavigation from './TabNavigation';
import { SearchStack } from '../../stacks';
import colors from '../../util/colors';

const Drawer = createDrawerNavigator();

export default function DrawerNavigation(props: any) {
    return (
        <NavigationContainer>
        <Drawer.Navigator
            screenOptions={{
                headerShown: false,
                drawerStyle: {
                    
                },
                drawerItemStyle: {
                    marginVertical: 5,
                    backgroundColor: 'white'
                },
                drawerActiveTintColor: '#A44200',
                drawerLabelStyle: {
                    color: colors.white
                },
                overlayColor: 'white'
            }}
        >
            <Drawer.Screen
                name="TabNavigator"
                options={{ drawerLabel: 'Home' }}
                component={TabNavigation}
            />
            <Drawer.Screen
                name="Search"
                options={{ drawerLabel: 'Search' }}
                component={SearchStack}
            />
        </Drawer.Navigator>
        </NavigationContainer>
    );
}
