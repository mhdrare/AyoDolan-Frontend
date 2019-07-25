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
  ScrollView,
  Picker
} from "react-native";
import { Toast } from 'native-base';
import ImagePicker from "react-native-image-picker";

//redux
import { connect } from "react-redux";
import { addUser } from "../public/redux/action/auth";

const { width, height } = Dimensions.get("window");
const options = {
  title: "Upload Photo",
  takePhotoButtonTitle: "Camera",
  chooseFromLibraryButtonTitle: "Galery"
};

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      name: "",
      email: "",
      password: "",
      gender: "",
      avatarSource: null,
      fileName: "",
      phone: ""
      // latitude: "",
      // langitude: ""
    };
  }
  getImage = () => {
    ImagePicker.showImagePicker(options, response => {
      console.log("Response = ", response);
      this.setState({ fileName: response.fileName });

      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
      } else {
        const source = { uri: response.uri };
        this.setState({
          avatarSource: source
        });
      }
    });
  };
  onChangeTextName = name => this.setState({ name });
  onChangeTextUsername = username => this.setState({ username });
  onChangeTextEmail = email => this.setState({ email });
  onChangeTextPassword = password => this.setState({ password });
  onChangeTextPhone = phone => this.setState({ phone });
  // onChangeTextLatitude = latitude => this.setState({ latitude });
  // onChangeTextLongitude = longitude => this.setState({ longitude });

  register = async () => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (this.state.name == "") {
      Toast.show({
        text: 'Name is required',
        buttonText: 'Okay',
        position: 'top',
        type: 'danger'
      })
    }
    else if (this.state.name.length < 6) {
      Toast.show({
        text: 'At least 6 char in name',
        buttonText: 'Okay',
        position: 'top',
        type: 'danger'
      })
    }
    else if (this.state.username == "") {
      Toast.show({
        text: 'Username is required',
        buttonText: 'Okay',
        position: 'top',
        type: 'danger'
      })
    }
    else if (this.state.username.length < 6) {
      Toast.show({
        text: 'At least 6 char in username',
        buttonText: 'Okay',
        position: 'top',
        type: 'danger'
      })
    }
    else if (this.state.email == "") {
      Toast.show({
        text: 'Email is required',
        buttonText: 'Okay',
        position: 'top',
        type: 'danger'
      })
    }
    else if (reg.test(this.state.email) === false) {
      Toast.show({
        text: 'Incorrect email format',
        buttonText: 'Okay',
        position: 'top',
        type: 'danger'
      })
    }
    else if (this.state.password == "") {
      Toast.show({
        text: 'Password is required',
        buttonText: 'Okay',
        position: 'top',
        type: 'danger'
      })
    }
    else if (this.state.password.length < 6) {
      Toast.show({
        text: 'At least 6 char in password',
        buttonText: 'Okay',
        position: 'top',
        type: 'danger'
      })
    }
    else if (this.state.gender == "") {
      Toast.show({
        text: 'Gender is required',
        buttonText: 'Okay',
        position: 'top',
        type: 'danger'
      })
    }
    else if (this.state.phone == "") {
      Toast.show({
        text: 'Phone number is required',
        buttonText: 'Okay',
        position: 'top',
        type: 'danger'
      })
    }
    else if (this.state.phone.length < 12) {
      Toast.show({
        text: 'At least 12 char in phone number',
        buttonText: 'Okay',
        position: 'top',
        type: 'danger'
      })
    }
    else if (this.state.avatarSource == null) {
      Toast.show({
        text: 'Photo is required',
        buttonText: 'Okay',
        position: 'top',
        type: 'danger'
      })
    }
    else if (
      this.state.name != "" &&
      this.state.username != "" &&
      this.state.email != "" &&
      this.state.password != "" &&
      this.state.gender != "" &&
      this.state.phone != ""
    ) {
      let dataReg = {
        name: this.state.name,
        username: this.state.username,
        email: this.state.email,
        password: this.state.password,
        gender: this.state.gender,
        no_phone: this.state.phone,
        image: {
          uri: this.state.avatarSource.uri,
          name: this.state.fileName,
          type: "image/jpg"
        }
      }
      await this.props.dispatch(addUser(dataReg));
      this.props.navigation.navigate("Login")
      Toast.show({
        text: 'Register Success, please login !',
        position: 'top',
        type: 'success'
      })
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
          style={{ flex: 7, backgroundColor: "#eee", alignItems: "center" }}
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
              <Text style={{ color: "#4dd0e1", fontSize: 35 }}>Register</Text>
              <Text style={{ color: "#999" }}>Create an account</Text>
            </View>
            <View
              style={{
                flex: 5,
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                paddingTop: 45,
                paddingLeft: 40,
                paddingBottom: 10
              }}
            >
              <ScrollView style={{ width: "100%" }} showsVerticalScrollIndicator={false}>
                <TextInput
                  style={styles.input}
                  placeholder={"Name"}
                  onChangeText={this.onChangeTextName}
                />
                <TextInput
                  style={styles.input}
                  placeholder={"Username"}
                  onChangeText={this.onChangeTextUsername}
                />
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
                <View style={{ flexDirection: "row" }}>
                  <Text style={{ marginTop: 13 }}>Gender : </Text>
                  <Picker
                    selectedValue={this.state.gender}
                    style={{ height: 50, width: "50%" }}
                    onValueChange={(itemValue, itemIndex) =>
                      this.setState({ gender: itemValue })
                    }
                  >
                    <Picker.Item label="Choose" value="" />
                    <Picker.Item label="Male" value="l" />
                    <Picker.Item label="Female" value="p" />
                  </Picker>
                </View>
                <TextInput
                  style={styles.input}
                  placeholder={"No. Handphone"}
                  onChangeText={this.onChangeTextPhone}
                  keyboardType={'number-pad'}
                />
                <View style={{width: "50%"}}>
                  <View>
                    <Text style={{ marginTop: 7 }}>Upload Photo Profile</Text>
                  </View>
                  <View style={{flexDirection:'row',width:'100%',marginTop:10,marginBottom:15}}>
                    <TouchableOpacity
                      style={styles.btnUpload}
                      onPress={this.getImage}
                    >
                      <Image
                        style={{ width: 20, height: 20, marginRight: 5 }}
                        source={require("../assets/upload.png")}
                      />
                      <Text style={{ color: "#fff" }}>Image</Text>
                    </TouchableOpacity>
                    <Text style={{marginLeft:10,alignSelf:'center'}}>{this.state.fileName}</Text>
                  </View>
                  
                </View>
                {/* <TextInput 
                      style={styles.input} 
                      placeholder={'Latitude'}
                      onChangeText={this.onChangeTextLatitude}
                  />
                  <TextInput 
                      style={styles.input} 
                      placeholder={'Longitude'}
                      onChangeText={this.onChangeTextLongitude}
                  /> */}
              </ScrollView>
            </View>
            <View style={{ flex: 1, width: "100%", alignItems: "center" }}>
              <TouchableOpacity
                style={styles.btnLogin}
                onPress={() => {
                  this.register();
                }}
              >
                <Text style={{ color: "#fff", fontSize: 18 }}>Register</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{ flex: 1, marginTop: 15 }}>
          <View style={{ flexDirection: "row", alignSelf: "center" }}>
            <Text style={{ color: "#777" }}>Already have an account ? </Text>
            <TouchableOpacity
              style={{
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 10
              }}
              onPress={()=>this.props.navigation.navigate('Login')}
            >
              <Text style={{ color: "#444" }}>Login</Text>
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
export default connect(mapStateToProps)(Register);

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
    backgroundColor: "#ffeb3b",
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
  },
  btnUpload: {
    width: 90,
    height: 40,
    backgroundColor: "#4dd0e1",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5
  }
});
