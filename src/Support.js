import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  TextInput,
  WebView,
  
} from 'react-native';
import { SearchBar } from 'react-native-elements';
// import { Video }from 'react-native-video';

export default class Support extends Component {
    render(){
        return(
            <ScrollView style={{flex:1}}>
            
              <View style={{flex:1,backgroundColor:'white'}}>
              <View>
                 <View style={styles.headerView}>
                      <Text style={styles.headerStyle}>Zomato Chat</Text>
                  </View>
                  <View style={{backgroundColor:'#ddd'}}>
                      <Text >
                          Chat wait time : 1 minute
                      </Text>
                      </View>
          
          {/* <View>
      <Video
        source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
        rate={1.0}
        volume={1.0}
        muted={false}
        resizeMode="cover"
        shouldPlay
        isLooping
        style={{ width: 300, height: 300 }}
      />
    </View> */}
                      {/* <View style={{ height: 300 }}>

<WebView
          javaScriptEnabled={true}
        domStorageEnabled={true}
        source={{uri: 'https://www.youtube.com/embed/dFKhWe2bBkM' }}
/>

</View> */}


                  <View style={styles.search}>
                    {/* <SearchBar
                            round
                             lightTheme
                              showLoading
                             platform="android"
                         placeholder='Type your query here' /> */}
                          <TextInput style={styles.searchText}
                           placeholder='  Type your query here'
                             placeholderTextColor='grey'
                />
                        </View>
         </View>
        </View>
        </ScrollView>
        )
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
        fontSize:20,
        fontWeight:'bold',
        color:'red'
    },
    search:{
        marginTop: 375
    },
    searchText:{
        fontSize:15,
        margin:8,
       height:38,
        borderColor:'white',
         borderRadius:6,
         backgroundColor:'#ddd',
         
     //    flex:1,
     
     },
    
}