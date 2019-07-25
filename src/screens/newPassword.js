import React, {Component} from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image, AsyncStorage, ActivityIndicator, StatusBar } from 'react-native'
import { newPassword } from '../public/redux/action/auth'
import { connect } from 'react-redux'

class App extends Component {
	constructor(props) {
		super(props);
	
		this.state = {
			id: this.props.navigation.state.params,
			password: '',
			confPassword: '',
			errPassword: '',
			errConfPassword: '',
		};
	}

	changePassword = (value) => {
		this.setState({
			password: value
		})	
	}

	changeConfPassword = (value) => {
		this.setState({
			confPassword: value
		})	
	}

	changeHandler = () => {
		if (this.state.password !== this.state.confPassword) {
			alert('Password not match!')
		} else if (this.state.password < 6) {
			alert('Password too short')
		} else {
			this.props.dispatch(newPassword({id: this.state.id, password: this.state.password, confPassword: this.state.confPassword}))
			.then(()=>{
        		this.setState({
					loading: false
				}, () => {
        			this.props.navigation.navigate('Login')
					alert('Change password successful!')
				})
        		
        	})
        	.catch((err)=>{
        		this.setState({
					loading: false
				}, () => {
        			alert('Unsuccessful!')
				})
        	})
		}
	}

	render(){
		return(
			<React.Fragment>
				<View style={component.background}></View>
				<StatusBar 
					translucent
					barStyle="dark-content"
					backgroundColor="rgba(0,0,0,0)"
				/>
				<Text style={text.welcome}>Forgot</Text>
				<Text style={text.title}>Password ?</Text>
				<View style={component.input}>
					<TextInput secureTextEntry={true} placeholder="New Password" style={component.password} onChangeText={this.changePassword}/>
					<TextInput secureTextEntry={true} placeholder="Confirm New Password" style={component.password} onChangeText={this.changeConfPassword}/>
					<TouchableOpacity style={component.button} onPress={this.changeHandler}>
						<Text style={text.button}>{'Confirm Password'.toUpperCase()}</Text>
					</TouchableOpacity>
				</View>
			</React.Fragment>
		)
	}
}

export default connect(state => ({auth: state.auth}))(App)

const text = StyleSheet.create({
	welcome: {
		paddingTop: 50,
		fontSize: 34,
		paddingLeft: 20,
		fontFamily: 'sans-serif-condensed'
	},
	title: {
		fontSize: 34,
		paddingLeft: 20,
		fontFamily: 'sans-serif-condensed'
	},
	description: {
		fontSize: 14,
		paddingBottom: 20,
		paddingLeft: 20,
		fontFamily: 'sans-serif-light',
	},
	button: {
		alignSelf: 'center',
		color: '#4dd0e1',
		fontFamily: 'sans-serif-condensed',
		fontSize: 18
	},
	forgot: {
		marginTop: 15,
		paddingLeft: 18,
		fontFamily: 'sans-serif-condensed',
		fontWeight: '600'
	},
})

const component = StyleSheet.create({
	background: {
		alignSelf: 'center',
		position: 'absolute',
		height: 600,
		bottom: -140,
		backgroundColor: '#4dd0e1',
		width: '150%',
		borderRadius: 1200,
		zIndex: -10,
	},
	input: {
		paddingTop: 100,
		alignSelf: 'center',
		justifyContent: 'center',
		width: '90%'
	},
	email: {
		width: '100%',
		backgroundColor: '#00bcd4',
		paddingLeft: 25,
		borderRadius: 30
	},
	password: {
		width: '100%',
		backgroundColor: '#00bcd4',
		paddingLeft: 25,
		borderRadius: 30,
		marginTop: 15
	},
	button: {
		marginTop: 30,
		width: '100%',
		backgroundColor: '#000000',
		borderRadius: 30,
		height: 50,
		justifyContent: 'center',
		elevation: 5
	},
})