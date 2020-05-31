import React from 'react';
import { Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Countries from '../components/Countries'
import CountryStat from '../components/CountryStat'
import GlobalStats from '../components/GlobalStats'
import ContinentAsia from '../components/ContinentAsia'
import ContinentAfrica from '../components/ContinentAfrica'
import ContinentEU from '../components/ContinentEU'
import ContinentAus from '../components/ContinentAus'
import ContinentNA from '../components/ContinentNA'
import ContinentSA from '../components/ContinentSA'

import { Fontisto } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const Stack = createStackNavigator();

function StackScreens() {
    return (
        <Stack.Navigator
            initialRouteName="Countries"
            headerMode="none"
        >
            <Stack.Screen name="Countries" component={Countries}/>
            <Stack.Screen name="CountryStat" component={CountryStat}/>
        </Stack.Navigator>
    )
}

const Tab = createMaterialBottomTabNavigator();

function TabScreens() {
    return (
        <Tab.Navigator
            initialRouteName="Asia"
            shifting={false}
            barStyle={{ 
                backgroundColor: '#446cd4',
                paddingBottom: 5 
            }}
        >
            <Tab.Screen 
                name="Asia" 
                component={ContinentAsia}
                options={{
                    tabBarColor: '#F1C40F',
                    tabBarLabel: <Text style={{color: 'black', fontSize: 16, fontFamily: 'serif'}}>Asia</Text>
                }}
            />
            <Tab.Screen 
                name="Aus" 
                component={ContinentAus}
                options={{
                    tabBarColor: '#ca3435',
                    tabBarLabel: <Text style={{color: 'black', fontSize: 16, fontFamily: 'serif'}}>Aus</Text>
                }}
            />
            <Tab.Screen 
                name="Africa" 
                component={ContinentAfrica}
                options={{
                    tabBarColor: '#e8a64e',
                    tabBarLabel: <Text style={{color: 'black', fontSize: 16, fontFamily: 'serif'}}>Africa</Text>
                }}    
            />
            <Tab.Screen 
                name="EU" 
                component={ContinentEU}
                options={{
                    tabBarColor: '#248bcc',
                    tabBarLabel: <Text style={{color: 'black', fontSize: 16, fontFamily: 'serif'}}>EU</Text>
                }}   
            />
            <Tab.Screen 
                name="NA" 
                component={ContinentNA}
                options={{
                    tabBarColor: '#60a448',
                    tabBarLabel: <Text style={{color: 'black', fontSize: 16, fontFamily: 'serif'}}>NA</Text>
                }} 
            />
            <Tab.Screen 
                name="SA" 
                component={ContinentSA}
                options={{
                    tabBarColor: '#6a5287',
                    tabBarLabel: <Text style={{color: 'black', fontSize: 16, fontFamily: 'serif'}}>SA</Text>
                }} 
            />
        </Tab.Navigator>
    )
}


const Drawer = createDrawerNavigator();

function DrawerScreens() {
    return (
        <Drawer.Navigator
            initialRouteName="Countries"
            drawerContentOptions={{
                labelStyle: { fontSize: 24, color: 'black', fontFamily: 'serif', padding: 5 },
            }}
        >
            <Drawer.Screen 
                name="Countries" 
                component={StackScreens}
                options={{
                    drawerIcon: () => <FontAwesome5 name="font-awesome-flag" size={24} color="black" />
                }}
            />
            <Drawer.Screen 
                name="Global Stats" 
                component={GlobalStats}
                options={{
                    drawerIcon: () => <Fontisto name="world" size={24} color="black" />
                }}
            />
            <Drawer.Screen 
                name="Stats By Continent" 
                component={TabScreens}
                options={{
                    drawerIcon: () => <FontAwesome5 name="globe-europe" size={24} color="black" />
                }}
            />
        </Drawer.Navigator>
    )
}

export default DrawerScreens;