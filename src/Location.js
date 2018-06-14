import React,{ Component } from 'react';
import {Platform,
    StyleSheet,
    Text,
    View,
    Button,
    Image,
    TextInput,
    ScrollView,
    TouchableOpacity} from 'react-native';
 import Geocoder from 'react-native-geocoder';


export default class Location extends Component{
//     constructor(props) {
//         super(props);
    
//   this.state = {
//           latitude: null,
//           longitude: null,
//           error: null,
//         };
      
//     }      
//       refresh = () => {
//         navigator.geolocation.getCurrentPosition(
//           (position) => {
//             this.setState({
//               latitude: position.coords.latitude,
//               longitude: position.coords.longitude,
//               error: null,
//             });
//           },
//           (error) => this.setState({ error: error.message }),
//           { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
//         );
//       };
    
      

    render() {
        // Geocoder.geocodePosition(this.state.latitude,this.state.longitude)
        return(
      
            <View style={{flex:1,backgroundColor:'white'}}>
                  <ScrollView>
                  <View style={{paddingTop:10,paddingLeft:10}}>
                <TouchableOpacity
                     onPress={() =>{this.props.navigation.navigate('First')}}>
                     <View>
                                    <Image
                                        style={{height:20,width:20,}}
                                        source={require('../Images/arrow-down.png')} />
                                </View>
                            </TouchableOpacity>
                            </View>
             <View>
                    {/* <SearchBar
                            round
                             lightTheme
                              showLoading
                             platform="android"
                         placeholder='Type your query here' /> */}
                          <TextInput style={styles.searchText}
                           placeholder=' Search for your delivery ar... '
                             placeholderTextColor='grey'
                         />



                        </View> 
                        <View style={styles.margin1}>
                  </View>
                  <View style={{marginTop:2,marginLeft:10}}>
                  <Text>  e.g.Connaught Place,New Delhi</Text>
                      </View>
                      <View style={styles.margin2}>
                  </View>
                  <View style={{marginTop:2,marginLeft:10}}>
                      <Text style={styles.headerLeft}>  Use Current Location </Text>
                      </View>



                    {/* <View style={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text>Latitude: {this.state.latitude}</Text>
                     <Text>Longitude: {this.state.longitude}</Text>
                        {this.state.error ? <Text>Error: {this.state.error}</Text> : null}
                      <Button        
                              style={{ marginTop: 30 }}
                                onPress={() => { this.refresh(); }}
                              title="Refresh"
                                     />
                                   </View> */}


      



                      <View style={styles.margin3}>
                  </View>
                  <View style={{marginTop:2,marginLeft:10}}>
                      <Text style={styles.headerLeft}>  + Add address </Text>
                      </View>
                      <View style={styles.margin3}>
                  </View>
                  <View>
                      <Text style={styles.notif}>  Saved Addresses</Text>
                      </View>
                      <View style={styles.margin3}>
                      </View>
                      <View style={{marginTop:3}}>
                      <Text>    You haven't added any addresses yet</Text>
                  </View>
                  <View style={styles.margin4}>
                      </View>
                      <View>
                      <Text style={styles.notif}>  Suggested Locations</Text>
                      </View>
                      </ScrollView>
            </View>
           
        );
    }
}


const styles={
    searchText:{
        fontSize:23,
        margin:8,
     //   height:25,
        borderColor:'white',
         borderRadius:6,
           //    flex:1,
     
     },
     margin1:{
        borderWidth: 1,
        borderColor: '#e1e1e1',
          },
          margin2:{
            borderWidth: 1,
            borderColor: '#e1e1e1',
            marginLeft:10,
            marginRight:10,
            marginTop:20
        },
        headerLeft:{
            fontWeight:'bold',
            color:'green',
            fontSize:18,
            marginTop:5
    
        },
        margin3:{
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
            marginTop:35
    
        },
        margin4:{
            borderWidth: 1,
            borderColor: '#e1e1e1',
            marginLeft:10,
            marginRight:10,
            marginTop:5
        },
}