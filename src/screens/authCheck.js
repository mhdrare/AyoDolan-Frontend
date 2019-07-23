import React, { Component } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  StatusBar,
  ActivityIndicator,
  AsyncStorage
} from "react-native";
// import firebase from "firebase";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogin: false
    };
  }

  componentDidMount() {
    // let firebaseConfig = {
    //   apiKey: "",
    //   authDomain: "",
    //   databaseURL: "",
    //   projectId: "",
    //   storageBucket: "",
    //   messagingSenderId: "",
    //   appId: ""
    // };
    // Initialize Firebase
    // if (!firebase.apps.length) {
    // 	firebase.initializeApp(firebaseConfig);
    // }

    // firebase.auth().onAuthStateChanged(user => {
    // 	this.props.navigation.navigate(user ? 'Home' : 'Auth')
    // })
    if (this.state.isLogin) {
      this.props.navigation.navigate("Home");
    } else {
      this.props.navigation.navigate("Auth");
    }
  }

  render() {
    return (
      <React.Fragment>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator size="large" color="#5ba4e5" />
        </View>
      </React.Fragment>
    );
  }
}
