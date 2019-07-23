import React, { Component } from "react";
import { Text, View, AsyncStorage } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default class Home extends Component {
  exit = async () => {
    await AsyncStorage.removeItem("id_user");
    this.props.navigation.navigate("Login");
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Hello, Home!</Text>

        <TouchableOpacity onPress={this.exit}>
          <Text>Logout</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
