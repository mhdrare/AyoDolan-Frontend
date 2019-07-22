import React, { Component } from 'react';
import { 
    View, 
    Text ,
    Dimensions,
    TouchableOpacity,
    TextInput,
    Image,
    StyleSheet,
    StatusBar
} from 'react-native';
const { width, height } = Dimensions.get('window');

export default class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }
    onChangeTextEmail = email => this.setState({ email });
    onChangeTextPassword = password => this.setState({ password });

    render() {
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor="#00b8d4" barStyle="light-content"/>
                <View style={{flex:2 ,justifyContent:'center'}}>
                    <Image style={{width,height:'100%'}} source={require('../assets/login_header.jpeg')}/>
                </View>
                <View style={{flex:3,backgroundColor:'#eee',alignItems:'center'}}>
                    <View style={styles.contain}>
                        <View style={{flex:1,width:'100%',justifyContent:'center',alignItems:'center'}}>
                            <View style={styles.bgImage}>
                                <Image style={{width:40,height:40}} source={require('../assets/key-3.png')}/>                        
                            </View> 
                            <Text style={{color:'#4dd0e1',fontSize:35}}>Login</Text>
                            <Text style={{color:'#999'}}>Welcome Back</Text>
                        </View>
                        <View style={{flex:3,width:'100%',justifyContent:'center',alignItems:'center'}}>
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
                        </View>
                        <View style={{flex:1,width:'100%',alignItems:'center'}}>
                            <TouchableOpacity style={styles.btnLogin}>
                                <Text style={{color:'#fff',fontSize:18}}>Login</Text>
                            </TouchableOpacity> 
                        </View>
                    </View>
                </View>
                <View style={{flex:1,marginTop:30}}>
                    <TouchableOpacity style={{justifyContent:'center',alignItems:'center',borderRadius:10}}>
                        <Text style={{color:'red'}}>Forget Password ?</Text>
                    </TouchableOpacity> 
                    <View style={{flexDirection:'row',alignSelf:'center'}}>
                    <Text style={{color:'#777'}}>Don't have an account ? </Text>
                    <TouchableOpacity style={{justifyContent:'center',alignItems:'center',borderRadius:10}}>
                        <Text style={{color:'#444'}}>Register</Text>
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
        backgroundColor:'#4dd0e1',
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
    }
})