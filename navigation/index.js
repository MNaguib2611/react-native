import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View,FlatList } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { FontAwesome } from '@expo/vector-icons'
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import styles from '../assets/styles'
import MyProfile from '../containers/MyProfile'
import StackNavig from './StackNavig'

const {Navigator: TabNavigator , Screen: TabScreen} = createBottomTabNavigator();


export default function () {
   return ( 
    <NavigationContainer>
        <TabNavigator 
           tabBarOptions={{
               style:{backgroundColor:"violet",
               height: 60,
               paddingVertical: 5,
               
            },
            labelStyle: {        
                fontSize: 14,
                fontWeight:"solid",        
                lineHeight: 20,        
                fontFamily: "CircularStd-Book"      
            },
            activeTintColor:"white",
            animationEnabled: true,
            swipeEnabled: true
        }} 
        >
            <TabScreen name="Posts" component={StackNavig} options={{
                style:{fontSize:48},
                tabBarLabel: 'Posts',
                tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="comment" color={color} size={size} />
          ),
            }}/>
            <TabScreen name="Profile" component={MyProfile} options={{
                tabBarLabel: 'Profile',
                tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}/>
        </TabNavigator>
    </NavigationContainer> )
}





