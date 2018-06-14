import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  Image
} from 'react-native';

export default class Cart extends Component {
    render(){
        return(
            <View style={{flex:1,backgroundColor:'white'}}>
             <View style={styles.headerView}>
              <Text style={styles.headerStyle}></Text>
             </View>
             <View style={styles.imageView} >
               <Image style={styles.imageStyle} source={require('../Images/cart.jpg')} />
             </View>
             {/* <View style={styles.buttonStyle}>
                    <View>
                        <Button title='     Food      ' onPress={() => this.props.navigation.navigate('First')} />
                    </View>
                    <View >
                        <Button title='     Cart     ' onPress={() => this.props.navigation.navigate('Cart')} />
                    </View>
                    <View >
                        <Button title='   Support  ' onPress={() => this.props.navigation.navigate('Support')} />
                    </View>
                    <View >
                        <Button title='  Account   ' onPress={() => this.props.navigation.navigate('Account')} />
                    </View>
                
                
             </View> */}
            </View>
        );
    }
}
const styles={
    headerView:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white',
        height: 60
    },
    headerStyle:{
        fontSize:20
    },
    imageStyle:{
        height:400,
        width:300,
    },
    imageView:{
        alignItems:'center',
        justifyContent:'center'
    },
    // buttonStyle: {

    //     flexDirection: 'row',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     marginTop: 73
    // },
}