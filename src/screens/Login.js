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
import { Toast } from 'native-base';

//redux
import { connect } from "react-redux";
import { loginUser } from "../public/redux/action/auth";
import { getUser } from "../public/redux/action/users";

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
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (this.state.email === "" || this.state.password === "") {
      Toast.show({
        text: 'Email or Password is required',
        buttonText: 'Okay',
        position: 'top',
        type: 'danger'
      })
    } else {
      let user = {
        email: this.state.email,
        password: this.state.password
      };
      this.setState({
        loading: true
      });

      if (this.state.email.length < 6 || this.state.email == "") {
        this.setState({ loading: false });
        Toast.show({
          text: 'Invalid Email',
          buttonText: 'Okay',
          position: 'top',
          type: 'danger'
        })
      } else if (this.state.password.length < 6 || this.state.password == "") {
        this.setState({loading: false });
        Toast.show({
          text: 'Invalid Password',
          buttonText: 'Okay',
          position: 'top',
          type: 'danger'
        })
      } else if (reg.test(this.state.email) === false) {
        Toast.show({
          text: 'Incorrect email format',
          buttonText: 'Okay',
          position: 'top',
          type: 'danger'
        })
      } else {
        this.props
          .dispatch(
            loginUser(user)
          )
          .then(() => {  
            this.setState(
              {
                loading: false
              },
              () => {
                Toast.show({
                  text: 'Login Successful, Welcome to AyoDolan !',
                  position: 'top',
                  type: 'success',
                  duration: 3000
                })
                this.props.navigation.navigate("Home");
              }
            );
          })
          .catch(err => {
            this.setState(
              {
                loading: false
              },
              () => {
                Toast.show({
                  text: 'Login Failed',
                  buttonText: 'Okay',
                  position: 'top',
                  type: 'danger'
                })
              }
            );
          });
      }
    }
  };

  render () {
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
                keyboardType={'email-address'}
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
    auth: state.auth,
    users: state.users
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
