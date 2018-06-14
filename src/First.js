import React, { Component } from 'react';
import { Image, Linking, ScrollView, Picker,Text,Modal, TouchableOpacity, View, TextInput,FlatList} from 'react-native';
import { SearchBar } from 'react-native-elements';

export default class First extends Component {
    state = {
        modalVisible: false,
        modalVisible1:false
      };
    
      setModalVisible(visible) {
        this.setState({modalVisible: visible});
      }
      setModalVisible1(visible) {
        this.setState({modalVisible1: visible});
      }


   
//     state={
//         cardDetails:[
//                 {"id":"idhfius","Title":"Taylor Swift","url":"https://www.amazon.com/Taylor-Swift/dp/B0014I4KH6","image":"https://images-na.ssl-images-amazon.com/images/I/61McsadO1OL.jpg","thumbnail_image":"https://i.imgur.com/K3KJ3w4h.jpg"},
//         {"father":"mother","Title":"Gaziabad"}]
//     }
    
// renderDateData(cardDetails) {
//     return (
//     <View>
//     <Text>{cardDetails.Title}</Text>
//     <Text>{cardDetails.url}</Text>
//     <Image style={{height:50,width:50}} source={{uri: cardDetails.image}}/>
//     </View>
//     );
//     }
    render() {
        return (
            <View style={{ flex: 1 }}>
            {/* <View>
            <Text>{this.state.cardDetails[0].shopTitle}</Text>
            <Text>{this.state.cardDetails[0]._id}</Text>
            <Text>{this.state.cardDetails[1].father}</Text>
                </View> */}
                {/* <FlatList 
                data={this.state.cardDetails}
                renderItem={({ item}) => this.renderDateData(item)}
                /> */}
                                    <View style={styles.headerStyle}>
                    <Text style={styles.headerText}>zomato</Text>
                </View>

                <View style={{ backgroundColor: 'white' }} >
                    <Text style={{ fontSize: 13, marginLeft: 10, marginTop: 2 }}>DELIVERING FOOD TO </Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 2 }} >
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('Location')}
                            style={styles.location}>
                            <View style={{ flexDirection: 'row' }}>
                                <Image style={styles.thumbnailStyle} source={require('../Images/locimg.jpg')} />
                                <Text style={{ fontWeight: 'bold', fontSize: 20 }}> Mega Hills</Text>
                            </View>
                        </TouchableOpacity>
                        <View>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('Location')}
                                style={styles.button}>
                                <Text style={{ fontWeight: 'bold', fontSize: 15, color: 'green', }}>CHANGE  </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View>
                        {/* <SearchBar
                            round
                             lightTheme
                             searchIcon={{ size: 100 }}
                              showLoading
                             platform="android" 
                         placeholder='Search for restaurants,dishes' /> */}
                        <TextInput style={styles.search}
                            placeholder='Search for restaurants,dishes...'
                            placeholderTextColor='grey'
                        />
                    </View>
                </View>
                <ScrollView 
                style={{ flex: 1 }}>
                <ScrollView horizontal={true}
                style={{ flex: 1 }}>


                    

                        {/* <Swiper style={{flex:1,height:100}}
                    paginationStyle={{ left:'80%',bottom:40}} width={150}
                    activeDotColor={'#c01530'} dotColor={'#fff'} autoplay={true} removeClippedSubviews={false} >  */}
                        
                        {/* </Swiper> */}
                        
                         {/* //////////////////////////////1st///////////// */}
 <View style={styles.cardStyle2}>
                        <TouchableOpacity
                            onPress={() => Linking.openURL("https://www.zomato.com/hyderabad/ramadan-2018")}
                            style={styles.button}>
                                <View>
                                    <Image
                                        style={{height:200,width:150,borderRadius:5,backgroundColor:'#ddd'}}
                                        source={require('../Images/ramadan.jpg')} />
                                </View>
                        </TouchableOpacity>
                    </View>
     {/* //////////////////////////////2nd///////////// */}
 <View style={styles.cardStyle2}>
                        <TouchableOpacity
                            onPress={() => Linking.openURL("https://www.zomato.com/hyderabad/collections")}
                            style={styles.button}>
                                <View>
                                    <Image
                                        style={{height:200,width:150,borderRadius:5,backgroundColor:'#ddd'}}
                                        source={require('../Images/finest.jpg')} />
                                </View>
                        </TouchableOpacity>
                    </View>
 {/* //////////////////////////////3rd///////////// */}
 <View style={styles.cardStyle2}>
                        <TouchableOpacity
                            onPress={() => Linking.openURL("https://blog.zomato.com/blog/introducing-zomato-treats")}
                            style={styles.button}>
                                <View>
                                    <Image
                                        style={{height:200,width:150,borderRadius:5,backgroundColor:'#ddd'}}
                                        source={require('../Images/treats.jpg')} />
                                </View>
                        </TouchableOpacity>
                    </View>
 {/* //////////////////////////////4th///////////// */}
 <View style={styles.cardStyle3}>
                        <TouchableOpacity
                            onPress={() => Linking.openURL("https://www.zomato.com/hyderabad/order-food-online?utm_source=Google&utm_medium=CPC&utm_term=%2Border%20%2Bfood%20%2Bzomato&utm_campaign=Gsearch_P-Web_O-NA_C-Brand_A-NewUser_SC-Generic_L-Hyderabad&gclid=Cj0KCQjw0a7YBRDnARIsAJgsF3NuOlNdSah2ncddUhx9xJ_eIL8436e8a7Mk0hL-LaqJxG9XjDAtXygaAmCTEALw_wcB")}
                            style={styles.button}>
                                <View>
                                    <Image
                                        style={{height:200,width:150,borderRadius:5,backgroundColor:'#ddd'}}
                                        source={require('../Images/offers.jpg')} />
                                </View>
                        </TouchableOpacity>
                    </View>

         
                
                    

                    </ScrollView>
        
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }} >
                        <View>
                            <Text style={{ fontWeight: 'bold', fontSize: 13 }}>   44 PLACES</Text>
                        </View>
            
                        <View style={{flexDirection:'row'}}>
                        <View>
                        <TouchableOpacity
                                    onPress={() => {
                                          this.setModalVisible(true);
                                              }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 13, color: 'green', }}>FILTERS  </Text>
                           </TouchableOpacity>
                           
                            {/* <ModalDropdown 
                            defaultValue = 'filter'
                            dropdownStyle = {{width:170, }}
                            onChangeText={(options)=>this.onChangeText(options)}
                            options={['Hyderabadi', 'Italian','Indian','Mexican','Oriya','Rajasthani','Spanish','Thai']}/> */}
    

                       <View>
        <Modal
          animationType="slide"
          transparent={true}
          
          visible={this.state.modalVisible}
          onRequestClose={() => {
            alert('Choose any!');
          }}>
          <View      style={{
          flexDirection: 'column',
          backgroundColor: 'white',
          height:410,top:160,paddingLeft:5,elevation:30
          }}>
            <View style={{paddingTop:5}}>
                <TouchableOpacity
                     onPress={() =>{
                        this.setModalVisible(!this.state.modalVisible);
                     this.props.navigation.navigate('First')}}>
                                <Text style={{ fontWeight: '500', fontSize: 15, color: 'red', }}>Close  </Text>
                            </TouchableOpacity>
                            <View style={styles.firstMargin}>
                  </View>
               <View style={{paddingTop:5}}>
              <TouchableOpacity
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text style={{ fontWeight: '500', fontSize: 13, color: '#171933', }}> Accpets Online Payment</Text>
              </TouchableOpacity>
              </View>
              <View style={styles.firstMargin}>
                  </View>
                  <View style={{paddingTop:5}}>
              <TouchableOpacity
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text style={{ fontWeight: '500', fontSize: 13, color: '#171933', }}> Pure Vegetarian</Text>
              </TouchableOpacity>
              </View>
              <View style={styles.firstMargin}>
                  </View>
                  <View style={{paddingTop:5}}>
              <TouchableOpacity
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text style={{ fontWeight: '500', fontSize: 13, color: '#171933', }}>Zomato Treats Partners</Text>
              </TouchableOpacity>
              </View>
              <View style={styles.firstMargin}>
                  </View>
                  <View style={{paddingTop:15}}>
              <TouchableOpacity
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text style={{ fontWeight: '700', fontSize: 17, color: 'black', }}> Cuisines</Text>
              </TouchableOpacity>
              </View>
              <View style={styles.firstMargin}>
                  </View>
                  <View style={{paddingTop:5}}>
              <TouchableOpacity
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text style={{ fontWeight: '500', fontSize: 13, color: '#171933', }}> Afghani</Text>
              </TouchableOpacity>
              </View>
              <View style={styles.firstMargin}>
                  </View>
                  <View style={{paddingTop:5}}>
              <TouchableOpacity
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text style={{ fontWeight: '500', fontSize: 13, color: '#171933', }}> American</Text>
              </TouchableOpacity>
              </View>
              <View style={styles.firstMargin}>
                  </View>
                  <View style={{paddingTop:5}}>
              <TouchableOpacity
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text style={{ fontWeight: '500', fontSize: 13, color: '#171933', }}> Andhra</Text>
              </TouchableOpacity>
              </View>
              <View style={styles.firstMargin}>
                  </View>
                  <View style={{paddingTop:5}}>
              <TouchableOpacity
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text style={{ fontWeight: '500', fontSize: 13, color: '#171933', }}> Hyderabadi</Text>
              </TouchableOpacity>
              </View>
              <View style={styles.firstMargin}>
                  </View>
                  <View style={{paddingTop:5}}>
              <TouchableOpacity
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text style={{ fontWeight: '500', fontSize: 13, color: '#171933', }}> North Indian</Text>
              </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
      </View>
      <View>
      <TouchableOpacity
                                    onPress={() => {
                                          this.setModalVisible1(true);
                                              }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 13, color: 'green', }}> RELEVANCE ↓   </Text>
                           </TouchableOpacity>

                       <View>
        <Modal
          animationType="slide"
          transparent={true}
          
          visible={this.state.modalVisible1}
          onRequestClose={() => {
            alert('Choose any!');
          }}>
          <View      style={{
          flexDirection: 'column',
          backgroundColor: 'white',
          height:210,top:360,paddingLeft:5,elevation:10
          }}>
            <View style={{paddingTop:5}}>
                <TouchableOpacity
                     onPress={() =>{
                        this.setModalVisible1(!this.state.modalVisible1);
                     this.props.navigation.navigate('First')}}>
                                <Text style={{ fontWeight: '500', fontSize: 15, color: 'red', }}> Close  </Text>
                            </TouchableOpacity>
                            <View style={styles.firstMargin}>
                  </View>
               <View style={{paddingTop:5}}>
              <TouchableOpacity
                onPress={() => {
                  this.setModalVisible1(!this.state.modalVisible1);
                }}>
                <Text style={{ fontWeight: '500', fontSize: 13, color: '#171933', }}> Relevance </Text>
              </TouchableOpacity>
              </View>
             
              <View style={styles.firstMargin}>
                  </View>
                  <View style={{paddingTop:5}}>
              <TouchableOpacity
                onPress={() => {
                  this.setModalVisible1(!this.state.modalVisible1);
                }}>
                <Text style={{ fontWeight: '500', fontSize: 13, color: '#171933', }}> Rating</Text>
              </TouchableOpacity>
              </View>
              <View style={styles.firstMargin}>
                  </View>
                  <View style={{paddingTop:5}}>
              <TouchableOpacity
                onPress={() => {
                  this.setModalVisible1(!this.state.modalVisible1);
                }}>
                <Text style={{ fontWeight: '500', fontSize: 13, color: '#171933', }}> Time</Text>
              </TouchableOpacity>
              </View>
              <View style={styles.firstMargin}>
                  </View>
                  <View style={{paddingTop:5}}>
              <TouchableOpacity
                onPress={() => {
                  this.setModalVisible1(!this.state.modalVisible1);
                }}>
                <Text style={{ fontWeight: '500', fontSize: 13, color: '#171933', }}> Cost(Low to High)</Text>
              </TouchableOpacity>
              </View>
              <View style={styles.firstMargin}>
                  </View>
                  <View style={{paddingTop:5}}>
              <TouchableOpacity
                onPress={() => {
                  this.setModalVisible1(!this.state.modalVisible1);
                }}>
                <Text style={{ fontWeight: '500', fontSize: 13, color: '#171933', }}> Cost(High to Low)</Text>
              </TouchableOpacity>
              </View>
            
              <View style={styles.firstMargin}>
                  </View>
                  <View style={{paddingTop:5}}>
              <TouchableOpacity
                onPress={() => {
                  this.setModalVisible1(!this.state.modalVisible1);
                }}>
                <Text style={{ fontWeight: '500', fontSize: 13, color: '#171933', }}> North Indian</Text>
              </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
        </View>

</View>
                        </View>
                    
                    </View>

                    {/* //////////////////////////////1st Hotel///////////// */}
                    <View style={styles.cardStyle}>
                        <TouchableOpacity
                            onPress={() => Linking.openURL("https://www.zomato.com/hyderabad/subway-madhapur")}
                            style={styles.button}>
                            <View style={{ flexDirection: 'row' }} >

                                <View>
                                    <Image
                                        style={styles.thumbnail1Style}
                                        source={require('../Images/subway.jpg')} />
                                </View>
                                <View>

                                </View>
                                <View style={styles.nameView}>
                                    <Text style={styles.name}>Subway</Text>
                                    <Text style={styles.co}>Healthy Food</Text>
                                    <Text style={styles.co}>₹200 per person</Text>
                                    <Text style={styles.co}>Delivers in 33 mins  ₹99 min order</Text>
                                </View>
                            </View>
                            <View style={{ paddingLeft: 8 }}>
                                < Text style={{ color: 'red', fontSize: 14, fontWeight: '200', }}>Get complimentary Single Choco Chip Cookie[1 Piece] with Zomato Treats</Text>
                                <Text style={styles.buttonText}>Delivery by Zomato with live tracking</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    {/* //////////////////////////////2nd Hotel///////////// */}
                    <View style={styles.cardStyle}>
                        <TouchableOpacity
                            onPress={() => Linking.openURL("https://www.zomato.com/hyderabad/kfc-hitech-city/menu")}
                            style={styles.button}>
                            <View style={{ flexDirection: 'row' }} >

                                <View>
                                    <Image
                                        style={styles.thumbnail1Style}
                                        source={require('../Images/kfc.jpg')} />
                                </View>
                                <View style={styles.nameView}>
                                    <Text style={styles.name}>KFC</Text>
                                    <Text style={styles.co}>Burger,Fast Food</Text>
                                    <Text style={styles.co}>₹200 per person</Text>
                                    <Text style={styles.co}>Delivers in 45 mins  No min order</Text>
                                </View>
                            </View>
                            <View style={{ paddingLeft: 8 }}>
                                <Text style={styles.buttonText}>Delivery by Zomato with live tracking </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    {/* //////////////////////////////3rd Hotel///////////// */}
                    <View style={styles.cardStyle}>
                        <TouchableOpacity
                            onPress={() => Linking.openURL("https://www.zomato.com/hyderabad/the-thickshake-factory-1-madhapur")}
                            style={styles.button}>
                            <View style={{ flexDirection: 'row' }} >

                                <View>
                                    <Image
                                        style={styles.thumbnail1Style}
                                        source={require('../Images/thick.jpg')} />
                                </View>
                                <View style={styles.nameView}>
                                    <Text style={styles.name}>The Thick Shake....</Text>
                                    <Text style={styles.co}>Beverages,Desserts</Text>
                                    <Text style={styles.co}>₹150 per person</Text>
                                    <Text style={styles.co}>Delivers in 37 mins  No min order</Text>
                                </View>
                            </View>
                            <View style={{ paddingLeft: 8 }}>
                                < Text style={styles.buttonText}>Delivery by Zomato with live tracking</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    {/* //////////////////////////////4th Hotel///////////// */}
                    <View style={styles.cardStyle}>
                        <TouchableOpacity
                            onPress={() => Linking.openURL("https://www.zomato.com/hyderabad/paradise-gachibowli")}
                            style={styles.button}>
                            <View style={{ flexDirection: 'row' }} >

                                <View>
                                    <Image
                                        style={styles.thumbnail1Style}
                                        source={require('../Images/paradise.jpg')} />
                                </View>
                                <View style={styles.nameView}>
                                    <Text style={styles.name}>Paradise</Text>
                                    <Text style={styles.co}>Biryani,North Indian,Chineese</Text>
                                    <Text style={styles.co}>₹350 per person</Text>
                                    <Text style={styles.co}>Delivers in 31 mins  No min order</Text>
                                </View>
                            </View>
                            <View style={{ paddingLeft: 8 }}>
                                < Text style={styles.buttonText}>Delivery by Zomato with live tracking</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.last}>
                    </View>
                </ScrollView>
            </View>
        );
    }
}
const styles = {
    headerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
        padding: 0,
        elevation: 3
    },
    headerText: {
        fontSize: 50,
        fontStyle: 'italic',
        fontWeight: 'bold',
        color: 'white'
    },
    thumbnailStyle: {
        height: 20,
        width: 15,
        marginTop: 3,
        marginLeft: 7
    },
    search: {
        fontSize: 14,
        margin: 8,
        height: 35,
        borderColor: 'white',
        borderRadius: 6,
        marginTop: 2,
        backgroundColor: '#ddd',
        //    flex:1,

    },
    // buttonStyle: {

    //     flexDirection: 'row',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     marginTop: 10
    // },
    delivery: {
        flexDirection: 'row',
        backgroundColor: '#0F0'
    },
    cardStyle2: {
        // borderWidth: 1,
        // borderRadius: 5,
        // borderColor:'#ddd',
        // borderBottomWidth: 1,
        marginLeft: 8,
        // marginRight: 2,
        marginTop: 10,
        marginBottom:15
    }, 
    cardStyle3: {
        // borderWidth: 0,
        // borderRadius: 5,
        // borderColor:'#ddd',
        // borderBottomWidth: 1,
        // elevation: 0,
        marginLeft: 8,
        // marginRight: 2,
        marginTop: 10,
        marginBottom:15,
        marginRight:13
    }, 
    cardStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 1,
        elevation: 5,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        backgroundColor: 'white'
    },
    thumbnail1Style: {
        height: 80,
        width: 80,
        marginLeft: 8,
        marginTop: 8,
        borderRadius: 10,

    },
    nameView: {
        marginLeft: 5,
        marginRight: 15,
        padding: 5,

    },
    name: {

        fontSize: 20,
        color: 'black',

        //flexDirection:'column'
    },
    co: {
        fontSize: 13,
        color: 'black'
        //flexDirection:'column'
    },
    button: {
        flex: 1,
        backgroundColor: 'white',
        borderRadius: 1,
        borderWidth: 1,
        borderColor: 'white',
        padding: 0,


    },
    buttonText: {
        color: 'orange',
        fontSize: 14,
        fontWeight: '200',
    },
    location: {
        flex: 1,

        backgroundColor: 'white',
        borderRadius: 1,
        borderWidth: 1,
        borderColor: 'white',
        padding: 0,
    },
    last: {
        borderWidth: 1,
        borderColor: '#e1e1e1',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        marginBottom: 10
    },
    firstMargin: {
        borderWidth: 1,
        borderColor: '#e1e1e1',
        
        marginRight:10,
        marginTop:10
    },
}