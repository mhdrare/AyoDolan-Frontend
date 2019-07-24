import React from "react";
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View
} from "react-native";

export default class AuthLoading extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      isLogin: false
    };

    this._bootstrapAsync();
  }
_bootstrapAsync = async () => {
    await AsyncStorage.getItem('Token', (error, result) => {
      if(result){
        this.setState({
          isLogin: true,
          token: result
        })
        this.props.navigation.navigate('Home')
      } else {
        this.setState({
          isLogin: false
        })
        this.props.navigation.navigate('Auth')
      }
    })
  }

  componentDidMount() {
    this.willFocusSubscription = this.props.navigation.addListener(
      'willFocus',
        () => {
          this._bootstrapAsync();
        }
    );
  }

  componentWillUnmount() {
    this.willFocusSubscription.remove();
  }

  render() {
    return (
      <React.Fragment>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator size="large" color="#5ba4e5" />
        </View>
      </React.Fragment>
    );
  }
}