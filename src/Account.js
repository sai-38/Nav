import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  TouchableOpacity
} from 'react-native';
import Login from '../Login';

export default class Account extends Component {
    render(){
        return(
            <ScrollView style={styles.scroll}>
                <View style={styles.headerView}>
                    <View>
                       <Text style={styles.headerStyle}> Your Account </Text>
                       
                   </View>
                   <View style={{justifyContent:'flex-end'}}>
                   <TouchableOpacity  onPress={()=>this.props.navigation.navigate('Login')}>
                  <View >    
                     <Text style={{fontWeight:'bold',
                                  color:'red',
                                  fontSize:20,
                                  marginTop:5}}>Logout  </Text>
                   </View>
                   </TouchableOpacity>
              </View>
              </View>
              <View style={styles.firstMargin}>
                  </View>
                  <View style={styles.headerView}>
                      <Text style={styles.headerLeft}>  View order history</Text>
                      <Text style={{fontSize:20,marginTop:5}}>>  </Text>
                      </View>
                      <View style={styles.margin}>
                  </View>
                  <View>
                      <Text style={styles.notif}>  Notifications</Text>
                      <Text>  You don't have any notifications yet</Text>
                  </View>
                  <View style={styles.margin}>
                  </View>
                  <View>
                      <Text style={styles.notif}>  Saved Addresses</Text>
                      <Text>  You haven't added any addresses yet</Text>
                  </View>
                  <View style={styles.margin}>
                  </View>
                  <View style={styles.headerView}>
                      <Text style={styles.headerLeft}>  +  Add address  </Text>
                      </View>
                      <View style={styles.margin}>
                  </View>
                  <View>
                      <Text style={styles.notif}>  Subscriptions</Text>
                  </View>
                  <View style={styles.margin}>
                  </View>
                  <View style={styles.headerView}>
                      <Text style={styles.headerLeft}>  Zomato Treats</Text>
                      <Text style={{fontSize:20,marginTop:5}}>>  </Text>
                      </View>
                      <View style={styles.margin}>
                  </View>
                  <View>
                      <Text style={styles.notif}>  Saved Payment Methods</Text>
                      <Text>   You haven't saved any payment methods</Text>
                  </View>
                  <View style={styles.margin}>
                  </View>
                  <View style={styles.headerView}>
                      <Text style={styles.headerLeft}>  +  payment method  </Text>
                      </View>
                      <View style={styles.margin}>
                  </View>
                  <View>
                      <Text style={styles.notif}>  Settings</Text>
                  </View>
                  <View style={styles.margin}>
                  </View>
                  <View>
                      <Text style={styles.notif}>  Send Feedback</Text>
                      <Text>   Tell us what you love about the app, or what we could  </Text>
                      <Text>   be doing better.</Text>
                  </View>
                  <View style={styles.margin}>
                  </View>
                  <View>
                      <Text style={styles.notif}>  About</Text>
                      <Text>   Zomato Order lets you order food from thousands  </Text>
                      <Text>   of restaurents in your city.</Text>
                  </View>
                  <View style={styles.margin}>
                  </View>
                  <View style={styles.headerView}>
                      <Text style={styles.headerLeft}>  Rate us on the Play Store  </Text>
                      </View>
                      <View style={styles.last}>
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

        </ScrollView>

        );
    }
}
const styles={
    scroll:{
        flex:1,
        backgroundColor:'white'
},
    headerView:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    headerStyle:{
        fontSize:30,
        fontWeight:'bold',
        color:'black'
    },
    headerLeft:{
        fontWeight:'bold',
        color:'green',
        fontSize:20,
        marginTop:5

    },
    firstMargin: {
        borderWidth: 1,
        borderColor: '#e1e1e1',
        marginLeft:10,
        marginRight:10,
        marginTop:20
    },
    margin:{
        borderWidth: 1,
        borderColor: '#e1e1e1',
        marginLeft:10,
        marginRight:10,
        marginTop:10

    },
    notif:{
        fontWeight:'bold',
        color:'black',
        fontSize:20,
        marginTop:40

    },
    last:{
        borderWidth: 1,
        borderColor: '#e1e1e1',
        marginLeft:10,
        marginRight:10,
        marginTop:10,
        marginBottom:10
    },
    // buttonStyle: {

    //     flexDirection: 'row',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     marginTop: 18
    // },
}