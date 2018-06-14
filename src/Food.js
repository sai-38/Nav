import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Food extends Component {
    render(){
        return(
            <View style={styles.headerView}>
            <Text style={styles.headerStyle}>Order Your Food Here </Text>
        </View>
        )
    }
}
const styles={
    headerView:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'skyblue',
        height: 60
    },
    headerStyle:{
        fontSize:20
    }
}