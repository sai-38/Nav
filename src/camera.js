


import React ,{Component} from 'react'
import {
StyleSheet,
Text,
View,
PixelRatio,
TouchableOpacity,
Platform,
Image,
Alert,
Button
} from 'react-native'
import ImagePicker, { launchCamera } from 'react-native-image-picker';


// More info on all the options is below in the README...just some common use cases shown here


var options = {
  title: 'Select Avatar',
  customButtons: [
    {name: 'fb', title: 'Choose Photo from Facebook'},
  ],
  storageOptions: {
    skipBackup: true,
    path: 'images'
  }
};

/**
 * The first arg is the options object for customization (it can also be null or omitted for default options),
 * The second arg is the callback which sends object: response (more info below in README)
 */


export default class Upload extends Component {

state = {
  avatarSource:''
}



    cam()
{
    ImagePicker.showImagePicker(options, (response) => {
       console.log('Response = ', response);

      if (response.didCancel) {
    console.log('User cancelled image picker');
  }
  else if (response.error) {
    console.log('ImagePicker Error: ', response.error);
  }
  else if (response.customButton) {
    console.log('User tapped custom button: ', response.customButton);
  }
  else {
    let source = { uri: response.uri };


    this.setState({
      avatarSource: source
    });
  }
});
}
    render() {
        return(

<View>

    <TouchableOpacity onPress={()=>this.cam()}>
      <Text>for camera</Text>
    </TouchableOpacity>
    <Text>Captured images displayed here</Text>
    <Image 
           style={{height:400,width:300}}
           source={this.state.avatarSource}  />
    </View>
        );
    }
}