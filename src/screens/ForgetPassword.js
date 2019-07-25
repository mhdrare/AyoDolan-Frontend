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

//redux
import { connect } from "react-redux";
import { forgotPassword } from "../public/redux/action/auth";

class ForgetPassword extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: ''
        }
    }
    onChangeTextEmail = email => this.setState({ email });

    forgotHandler = async () => {
		if (this.state.email == '') {
			this.setState({
				errEmail: 'Email is empty!'
			})
		} else {
			await this.setState({
				loading: true
			})

			this.props.dispatch(forgotPassword(this.state.email))
			.then(() => {
				this.setState({
					loading: false
				}, () => {
					this.props.navigation.navigate('ConfirmCode')
				})
			})
			.catch((err)=>{
        		this.setState({
					loading: false
				}, () => {
        			alert('Email not found!')
				})
        	})
		}

	}

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
                            <Text style={{color:'#4dd0e1',fontSize:30}}>Forget Password</Text>
                            <Text style={{color:'#999'}}>Reset Your Password</Text>
                        </View>
                        <View style={{flex:3,width:'100%',justifyContent:'center',alignItems:'center'}}>
                            <TextInput 
                                style={styles.input} 
                                placeholder={'Email'}
                                onChangeText={this.onChangeTextEmail}
                            />
                        </View>
                        <View style={{flex:1,width:'100%',alignItems:'center'}}>
                            <TouchableOpacity style={styles.btnLogin} onPress={() => {this.forgotHandler()}}>
                                <Text style={{color:'#fff',fontSize:18}}>Send</Text>
                            </TouchableOpacity> 
                        </View>
                    </View>
                </View>
                <View style={{flex:1,marginTop:30}}>
                    <View style={{flexDirection:'row',alignSelf:'center'}}>
                        <Text style={{color:'#777'}}>Already have an account ? </Text>
                        <TouchableOpacity style={{justifyContent:'center',alignItems:'center',borderRadius:10}}>
                            <Text style={{color:'#444'}}>Login</Text>
                        </TouchableOpacity>  
                    </View>
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
}

const mapStateToProps = state => {
    return {
      auth: state.auth
      // auth: state.auth
    };
  };
  
  // connect with redux,first param is map and second is component
  export default connect(mapStateToProps)(ForgetPassword);

const styles = StyleSheet.create({
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
        backgroundColor:'#f44336',
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