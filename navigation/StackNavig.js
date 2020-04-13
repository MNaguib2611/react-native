import React, { useState, useEffect } from 'react';
import PostsList from '../containers/PostsList'
import PostDetails from '../containers/PostDetails'
import styles from '../assets/styles'
import {createStackNavigator, HeaderTitle} from '@react-navigation/stack'


const {Navigator: StackNavig , Screen: StackScreen} = createStackNavigator();



const StackNavigetor = () => (
<StackNavig screenOptions={{
    headerStyle:{backgroundColor:"violet"},
}}>
    <StackScreen name="PostsList" component={PostsList} options={{
       title:"Posts List",
       headerTitleAlign:"center" ,
       headerTintColor:"white",
       headerTitleStyle:{fontSize:30,fontWeight:"bold"}
    }}/>
    <StackScreen name="PostDetails" component={PostDetails} options={{
       title:"Details",
       headerTitleAlign:"center",
       headerTintColor:"white",
       headerTitleStyle:{fontSize:30,fontWeight:"bold"} 
    }}/>
</StackNavig>
)

export default StackNavigetor;
