import React, {Component} from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image, AsyncStorage, ActivityIndicator, StatusBar } from 'react-native'
import { connect } from 'react-redux'

class App extends Component {
	constructor(props) {
		super(props);
	
		this.state = {
			code: ''			
		};
	}

	changeCode = (value) => {
		this.setState({
			code: value
		})
	}

	confirmHandler = () => {
		if (this.state.code !== this.props.auth._55.data.kode) {
			alert('Wrong token!')
		} else if (this.state.code < 6) {
			alert('Token must have 6 digit')
		} else {
			this.props.navigation.navigate('NewPassword', this.props.auth._55.data.id)
		}
	}

	render(){
		console.log('this.props.auth.data');
		console.log(this.props.auth);
		
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
					<Text style={text.description}>Confirm code.</Text>
					<TextInput placeholder="XXXXXX" style={component.email} onChangeText={this.changeCode} keyboardType={'number-pad'}/>
					<TouchableOpacity style={component.button} onPress={this.confirmHandler}>
						<Text style={text.button}>{'Verification'.toUpperCase()}</Text>
					</TouchableOpacity>
				</View>
			</React.Fragment>
		)
	}
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
    }
}

export default connect(mapStateToProps)(App)

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