import React, { Component } from "react";
import { Text, View, AsyncStorage, ActivityIndicator } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
    this.bootstrapAsync();
  }

  exit = async () => {
    await AsyncStorage.removeItem("user_id");
    await AsyncStorage.removeItem("token");
    this.props.navigation.navigate("Login");
  };

  bootstrapAsync = async () => {
    let user_id = await AsyncStorage.getItem("user_id");
    let token = await AsyncStorage.getItem("token");
    this.setState({
      id: user_id,
      token: token,
      loading: false
    });
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Hello, Home!</Text>

        <TouchableOpacity onPress={this.exit}>
          <Text>Logout</Text>
        </TouchableOpacity>
        <Text>{this.state.id}</Text>
        <Text>{this.state.token}</Text>
      </View>
    );
  }
}
