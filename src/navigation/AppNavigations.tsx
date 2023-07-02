import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { EStacks } from './appRouts';
import BottomTabs from './BottomTabs';



const Stack = createNativeStackNavigator();

function AppNavigations() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
             <Stack.Screen name={EStacks.BOTTOMTABS} component={BottomTabs}  />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigations;