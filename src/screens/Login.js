import React, { Component } from "react";
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  TextInput,
  Image,
  StyleSheet,
  StatusBar,
  AsyncStorage
} from "react-native";

//redux
import { connect } from "react-redux";
import { loginUser } from "../public/redux/action/auth";

const { width, height } = Dimensions.get("window");

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  onChangeTextEmail = email => this.setState({ email });
  onChangeTextPassword = password => this.setState({ password });

  login = async () => {
    if (this.state.email === "" || this.state.password === "") {
      alert("Insert email dan password");
    } else {
      let user = {
        email: this.state.email,
        password: this.state.password
      };
      await this.props.dispatch(loginUser(user));
      
      await AsyncStorage.getItem("Token", (error, result) => {
        if (result) {
          this.props.navigation.navigate("Home");
          alert("Welcome To Ayodolan!");
        } else {
          alert("salah");
        }
      });

      // console.log("this.state.data");
      // console.log(this.state.data);

      // console.log("this.props.user");
      // console.log(this.props.user.data);

      // // await AsyncStorage.setItem(
      // //   "user_id",
      // //   `${this.props.user.data.data["0"].user_id}`
      // // );
      // // await AsyncStorage.setItem("token", this.props.user.data.token);
      // // this.props.navigation.navigate("Home");
      // alert("Welcome To Ayodolan!");
    }
  };

  render() {
    console.log(this.state);

    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#00b8d4" barStyle="light-content" />
        <View style={{ flex: 2, justifyContent: "center" }}>
          <Image
            style={{ width, height: "100%" }}
            source={require("../assets/login_header.jpeg")}
          />
        </View>
        <View
          style={{ flex: 3, backgroundColor: "#eee", alignItems: "center" }}
        >
          <View style={styles.contain}>
            <View
              style={{
                flex: 1,
                width: "100%",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <View style={styles.bgImage}>
                <Image
                  style={{ width: 40, height: 40 }}
                  source={require("../assets/key-3.png")}
                />
              </View>
              <Text style={{ color: "#4dd0e1", fontSize: 35 }}>Login</Text>
              <Text style={{ color: "#999" }}>Welcome Back</Text>
            </View>
            <View
              style={{
                flex: 3,
                width: "100%",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <TextInput
                style={styles.input}
                placeholder={"Email"}
                onChangeText={this.onChangeTextEmail}
              />
              <TextInput
                style={styles.input}
                secureTextEntry={true}
                placeholder={"Password"}
                onChangeText={this.onChangeTextPassword}
              />
            </View>
            <View style={{ flex: 1, width: "100%", alignItems: "center" }}>
              <TouchableOpacity
                style={styles.btnLogin}
                onPress={() => {
                  this.login();
                }}
              >
                <Text style={{ color: "#fff", fontSize: 18 }}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{ flex: 1, marginTop: 30 }}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("ForgetPassword");
            }}
            style={{
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 10
            }}
          >
            <Text style={{ color: "red" }}>Forget Password ?</Text>
          </TouchableOpacity>
          <View style={{ flexDirection: "row", alignSelf: "center" }}>
            <Text style={{ color: "#777" }}>Don't have an account ? </Text>
            <TouchableOpacity
              style={{
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 10
              }}
              onPress={() => {
                this.props.navigation.navigate("Register");
              }}
            >
              <Text style={{ color: "#444" }}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
    // auth: state.auth
  };
};

// connect with redux,first param is map and second is component
export default connect(mapStateToProps)(Login);

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    width,
    height
  },
  contain: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 100,
    width: "90%",
    backgroundColor: "#fff",
    marginTop: -40,
    elevation: 5
  },
  bgImage: {
    backgroundColor: "#03a9f4",
    borderRadius: 30,
    justifyContent: "center",
    height: 65,
    width: 65,
    alignItems: "center"
  },
  input: {
    borderBottomWidth: 1,
    borderColor: "green",
    width: "80%",
    marginBottom: 10
  },
  btnLogin: {
    height: 50,
    width: width * 0.7,
    backgroundColor: "#4dd0e1",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10
  }
});
