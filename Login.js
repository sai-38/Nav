
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  TextInput,
  TouchableOpacity
} from 'react-native';
import RootTS from './Router';
import {StackNavigator} from 'react-navigation';
import SplashScreen from 'react-native-splash-screen';


  export default class Login extends Component {

    componentWillMount() {
        SplashScreen.hide();
    }
    state = {
        email: 's',
        password: 's',
        // cardDetails:[
        //     {"_id":"idhfius","shopTitle":"Taylor Swift","url":"https://www.amazon.com/Taylor-Swift/dp/B0014I4KH6","image":"https://images-na.ssl-images-amazon.com/images/I/61McsadO1OL.jpg","thumbnail_image":"https://i.imgur.com/K3KJ3w4h.jpg"},
        //     {}]
     }
    login(){
        if(this.state.email=="s" && this.state.password=="s")
        {
           this.props.navigation.navigate('Router');
        }
        else
        {
            alert('you have entered incorrect mail id or password')
        }
    }
   
   
   render(){
     return(
        <ScrollView style={styles.scroll}>
            <View style={styles.headerView}>
               <Text style={styles.headerText}>Login using your existing Zomato account</Text>
           </View>
           <View>
           <TextInput style={styles.search}
                            placeholder='Email or Zomato username'
                            placeholderTextColor='grey'
                            value={this.state.email} onChangeText={(email) => this.setState({ email:email })}
                        />
         </View>
         <View>
           <TextInput style={styles.search}
                            placeholder='Password'
                            placeholderTextColor='grey'
                            value={this.state.password} onChangeText={(password) => this.setState({ password:password })}
                        />
         </View>
         <View style={styles.cardStyle2}>
         <TouchableOpacity  style={styles.button} onPress={()=>this.login()}>
                  <View >
                      <Text  style={{fontSize:20,color:'white'}} >Login</Text>
                  </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.forgot}>
                      <Text style={styles.headerLeft}> Forgot Password?  </Text>
                      </View>
                      <View style={styles.cardStyle3}>
                      <Text  style={{fontSize:15,color:'green'}} >New to Zomato? Signup</Text>
                  </View>
            
                <View style={styles.headerView1}>
                    <Text style={{color:'grey',fontSize:12}}>By logging in you agree to Zomato's Terms of Service,Privacy Policy,Cookie Policy and Content Policies</Text>
                    </View>
            
                    
        </ScrollView>
        
      );
   }
 }

 const styles={
    scroll:{
        flex:1,
        backgroundColor:'white'
},

    headerText:{
        fontSize:30,
        fontWeight:'bold',
        color:'black',
    },
    headerView:{
       // margin:10,
       marginLeft:10,
       marginRight:10,
       marginBottom:10,
        marginTop:60
    },
    search: {
        fontSize: 14,
        margin: 8,
        height: 35,
        borderColor: 'white',
        borderRadius: 6,
        marginTop: 2,
        backgroundColor: 'white',
        marginTop:25
    },
    // buttonStyle:{
    //       flexDirection: 'row',
    //       justifyContent: 'center',
    //       alignItems: 'center',
    //       marginTop:20,
    //       backgroundColor:'white',
    // },
    cardStyle2: {
       borderWidth: 1,
       borderRadius:20,
        borderColor:'#ddd',
        // borderBottomWidth: 0,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 20,
       
       
    }, 
    button: {
        flex: 1,
        backgroundColor: 'green',
        borderRadius: 1,
        borderWidth: 1,
        borderColor: 'white',
        elevation:5,
        alignItems:'center',
        justifyContent:'center',
        paddingTop:10,
        paddingBottom:10    
    },
    headerLeft:{
        fontWeight:'bold',
        color:'green',
        fontSize:20,
        marginTop:5
    },
    forgot:{
       marginTop:2,
       marginLeft:10
    },
    cardStyle3: {
        borderWidth: 1,
        borderRadius:5,
         borderColor:'green',
         // borderBottomWidth: 0,
         marginLeft: 10,
         marginRight: 10,
         marginTop: 20,
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'center',
        paddingTop:5,
        paddingBottom:5
     }, 
     headerView1:{
        // margin:10,
        marginLeft:10,
        marginRight:10,
        marginBottom:10,
         marginTop:60
     },
}