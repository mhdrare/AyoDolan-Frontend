import React, { Component } from 'react';
import { 
    View, 
    Text ,
    Dimensions,
    TouchableOpacity,
    TextInput,
    Image,
    StyleSheet,
    StatusBar,
    ScrollView,
    SafeAreaView,
    Picker
} from 'react-native';
import ImagePicker from 'react-native-image-picker';

const { width, height } = Dimensions.get('window');
const options = {
    title: 'Upload Photo',
    takePhotoButtonTitle: 'Camera',
    chooseFromLibraryButtonTitle: 'Galery',
}

export default class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            gender: '',
            avatarSource:null,
            fileName: '',
            phone: '',
            latitude: '',
            langitude: ''
        }
    }
    getImage = () => {
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);
            this.setState({fileName: response.fileName})
           
            if (response.didCancel) {
              console.log('User cancelled image picker');
            } else if (response.error) {
              console.log('ImagePicker Error: ', response.error);
            
            } else {
              const source = { uri: response.uri };
              this.setState({
                avatarSource: source,
              });
            }
          });
    }
    onChangeTextUsername = username => this.setState({ username });
    onChangeTextEmail = email => this.setState({ email });
    onChangeTextPassword = password => this.setState({ password });
    onChangeTextPhone = phone => this.setState({ phone });
    onChangeTextLatitude = latitude => this.setState({ latitude });
    onChangeTextLongitude = longitude => this.setState({ longitude });

    render() {
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor="#00b8d4" barStyle="light-content"/>
                <View style={{flex:2,justifyContent:'center'}}>
                    <Image style={{width,height:'100%'}} source={require('../assets/login_header.jpeg')}/>
                </View>
                <View style={{flex:7,backgroundColor:'#eee',alignItems:'center'}}>
                    <View style={styles.contain}>
                        <View style={{flex:1,width:'100%',justifyContent:'center',alignItems:'center'}}>
                            <View style={styles.bgImage}>
                                <Image style={{width:40,height:40}} source={require('../assets/key-3.png')}/>                        
                            </View> 
                            <Text style={{color:'#4dd0e1',fontSize:35}}>Register</Text>
                            <Text style={{color:'#999'}}>Create an account</Text>
                        </View>
                        <View style={{flex:5,width:'100%',justifyContent:'center',alignItems:'center',paddingTop:45,paddingLeft:40,paddingBottom:10}}>
                            <ScrollView style={{width:'100%'}}>
                                <TextInput 
                                    style={styles.input} 
                                    placeholder={'Username'}
                                    onChangeText={this.onChangeTextUsername}
                                />
                                <TextInput 
                                    style={styles.input} 
                                    placeholder={'Email'}
                                    onChangeText={this.onChangeTextEmail}
                                />
                                <TextInput 
                                    style={styles.input} 
                                    secureTextEntry={true} 
                                    placeholder={'Password'}
                                    onChangeText={this.onChangeTextPassword}
                                />
                                <View style={{flexDirection:'row'}}>
                                    <Text style={{marginTop:13}}>Gender : </Text>
                                    <Picker
                                        selectedValue={this.state.gender}
                                        style={{height: 50, width: '50%'}}
                                        onValueChange={(itemValue, itemIndex) =>
                                            this.setState({gender: itemValue})
                                        }>
                                        <Picker.Item label="Male" value="l" />
                                        <Picker.Item label="Female" value="p" />
                                    </Picker> 
                                </View>
                                <TextInput 
                                    style={styles.input} 
                                    placeholder={'No. Handphone'}
                                    onChangeText={this.onChangeTextPhone}
                                />
                                <View style={{flexDirection:'row',width:'50%'}}>
                                    <TouchableOpacity style={styles.btnUpload} onPress={this.getImage}>
                                        <Image style={{width:20,height:20,marginRight:5}} source={require('../assets/upload.png')}/>
                                        <Text style={{color:'#fff'}}>Image</Text>
                                    </TouchableOpacity>
                                    <Text>{this.state.fileName}</Text>
                                </View>
                                <TextInput 
                                    style={styles.input} 
                                    placeholder={'Latitude'}
                                    onChangeText={this.onChangeTextLatitude}
                                />
                                <TextInput 
                                    style={styles.input} 
                                    placeholder={'Longitude'}
                                    onChangeText={this.onChangeTextLongitude}
                                />
                            </ScrollView> 
                        </View>
                        <View style={{flex:1,width:'100%',alignItems:'center'}}>
                            <TouchableOpacity style={styles.btnLogin}>
                                <Text style={{color:'#fff',fontSize:18}}>Register</Text>
                            </TouchableOpacity> 
                        </View>
                    </View>
                </View>
                <View style={{flex:1,marginTop:15}}>
                    <View style={{flexDirection:'row',alignSelf:'center'}}>
                    <Text style={{color:'#777'}}>Have an account ? </Text>
                    <TouchableOpacity style={{justifyContent:'center',alignItems:'center',borderRadius:10}}>
                        <Text style={{color:'#444'}}>Login</Text>
                    </TouchableOpacity>  
                    </View>
                </View>
            </View>
        )
    }
}const styles = StyleSheet.create({
    container: {
        position:'absolute',
        width,
        height
    },
    contain: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        height:100,
        width:'90%',
        backgroundColor:'#fff',
        marginTop:-40,
        elevation:5
    },
    bgImage: {
        backgroundColor:'#ffeb3b',
        borderRadius:30,
        justifyContent:'center',
        height:65,
        width:65,
        alignItems:'center'
    },
    input: {
        borderBottomWidth:1,
        borderColor:'green',
        width:'80%',
        marginBottom:10
    },
    btnLogin: {
        height:50,
        width:width*0.7,
        backgroundColor:'#4dd0e1',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10
    },
    btnUpload: {
        width:90,
        height:40,
        backgroundColor:'#4dd0e1',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5
    }
})