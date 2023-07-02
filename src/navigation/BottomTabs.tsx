import * as React from 'react';
import { Image, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { EBottomTabs, EStacks } from './appRouts';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Add from '../screens/Add';
import Chart from '../screens/Chart';
import Notification from '../screens/Notification';
import Assets from '../assets/Assets';
import { Colors } from '../assets/theme';





const Tab = createBottomTabNavigator();

export default function BottomTabs() {
    return (
     
        <Tab.Navigator initialRouteName={EBottomTabs.ADD } screenOptions={{
            headerShown: false,
            tabBarStyle: {
                height: 80,
                elevation:5


                // paddingHorizontal: 5,
                // paddingTop: 0,
                // backgroundColor: '#181A1E',
                // position: 'absolute',
                // borderTopWidth: 0,
            },

        }} >
            <Tab.Screen
                options={{
                    // tabBarLabel: 'Home',x
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused, color, size }) => (

                        <View>
                            {
                                focused ? (<Image source={Assets.images.home} style={{ tintColor: Colors.BLUE }} />) : (<Image style={{ tintColor: color }} source={Assets.images.home} />)

                            }

                        </View>
                    ),
                }}
                name={EBottomTabs.HOME} component={Home} />
            <Tab.Screen
                options={{
                    // tabBarLabel: 'Home',x
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused, color, size }) => (

                        <View>
                            {
                                focused ? (<Image source={Assets.images.profile} style={{ tintColor: Colors.BLUE }} />) : (<Image style={{ tintColor: color }} source={Assets.images.profile} />)

                            }

                        </View>
                    ),
                }}
                name={EBottomTabs.PROFILE} component={Profile} />
            <Tab.Screen options={{
                // tabBarLabel: 'Home',x
                tabBarShowLabel: false,
                tabBarIcon: ({ focused, color, size }) => (

                    <View>
                        {
                            focused ? (<Image source={Assets.images.Add}  />) : (<Image style={{ tintColor: color }} source={Assets.images.Add} />)

                        }

                    </View>
                ),
            }} name={EBottomTabs.ADD} component={Add} />
            <Tab.Screen options={{
                // tabBarLabel: 'Home',x
                tabBarShowLabel: false,
                tabBarIcon: ({ focused, color, size }) => (

                    <View>
                        {
                            focused ? (<Image source={Assets.images.barchart} style={{ tintColor: Colors.BLUE }} />) : (<Image style={{ tintColor: color }} source={Assets.images.barchart} />)

                        }

                    </View>
                ),
            }} name={EBottomTabs.CHARTS} component={Chart} />
            <Tab.Screen options={{
                // tabBarLabel: 'Home',x
                tabBarShowLabel: false,
                tabBarIcon: ({ focused, color, size }) => (

                    <View>
                        {
                            focused ? (<Image source={Assets.images.notification} style={{ tintColor: Colors.BLUE }} />) : (<Image style={{ tintColor: color }} source={Assets.images.notification} />)

                        }

                    </View>
                ),
            }}
                name={EBottomTabs.NOTIFICATION} component={Notification} />
              
            </Tab.Navigator>
       
    );
}