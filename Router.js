import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Button
} from 'react-native';

import First from './src/First';
import Cart from './src/Cart';
import Support from './src/Support';
import Account from './src/Account';
import Location from './src/Location';
import Login from './Login';
import { SearchBar } from 'react-native-elements';
import {createStackNavigator,TabNavigator,StackNavigator} from 'react-navigation';




const RootTabs= TabNavigator({
   
   
        First: {
            screen: First,
              navigationOptions:{ 
                tabBarLabel:'Food',
                swipeEnabled : false,
                tabBarIcon: (<Image style={{padding:0,width:25,height:25}} source={require('./Images/fc.jpg')}/>),
            }
          },
        Cart:{
            screen:Cart,
            navigationOptions:{
                swipeEnabled : false,
                tabBarIcon: (<Image style={{width:25,height:25,resizeMode:'contain'}} source={require('./Images/cc.jpg')}/>),
            }
        },
        Support:{
            screen: Support,
            navigationOptions:{
                swipeEnabled : false,
                tabBarIcon: (<Image style={{width:25,height:25,resizeMode:'contain'}} source={require('./Images/sb.jpg')}/>),
            }
        },
        Account:{
            screen:Account,
            navigationOptions:{
                swipeEnabled : false,
                tabBarIcon: (<Image style={{width:25,height:25,resizeMode:'contain'}} source={require('./Images/ac.jpg')}/>),
            }
        },
        
          
    },{
        tabBarPosition:'bottom',
      
        tabBarOptions:{
            showIcon:true,
         style: {
            backgroundColor: 'white',
            paddingTop:2,
        
               },
            labelStyle: {
                fontSize: 10,
                color:'black'
              },
              tabStyle:{
                  height:60,
                
              },
            
         },
    }
  );
const RootTS=createStackNavigator({
    Food : {
        screen:RootTabs,
         navigationOptions:{
        // headerTitleStyle: { alignSelf: 'center' },
        // headerStyle:{ backgroundColor:'red',elevation:2},
        // headerTitle:<View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
        //     <Text style={{color:'white',fontSize:50,fontWeight:'bold',fontStyle:'italic'}}>zomato</Text>
        //     </View>,
        //     },
        header:null
         },
    },
    Location:{
        screen:Location,
        navigationOptions:{
        header:null }
    },
    Support:{
        screen:Support
    }
});
const RootS= StackNavigator({
    Login: {
        screen: Login,
      navigationOptions:{
        header:null
      },
       },
       Router: { 
        screen: RootTS,
       navigationOptions:{
         header:null
       }, }
})

export default RootS;
