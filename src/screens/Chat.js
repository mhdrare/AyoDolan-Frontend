import React, { Component } from "react";
import firebase from "firebase";
import { GiftedChat } from "react-native-gifted-chat";
 
 
const user = {
  id: "10001",
  name: "name penerima",
  imageUrl:"img"
}
 
 
export default class Chatty extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uid: "01110",
      name: "nama pengirim",
      text: "",
      messagesList: []
    };
  }
  async componentDidMount() {
    let firebaseConfig = {
      apiKey: "AIzaSyBhweWoZS9hUeUYII27hC1lStA12p_P7Oo",
      authDomain: "chatayo-345d4.firebaseapp.com",
      databaseURL: "https://chatayo-345d4.firebaseio.com",
      projectId: "chatayo-345d4",
      storageBucket: "",
      messagingSenderId: "489984293786",
      appId: "1:489984293786:web:106b44b3b39d6c78"
    };
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }

    console.log("xxxx");
    console.log(user);
    console.log(this.state);
   
    await firebase
      .database()
      .ref("messages")
      .child(user.id)
      .child(user.name)
      .child(this.state.name)
      .on("child_added", value => {
       
        this.setState(previousState => {
          return {
            messagesList: GiftedChat.append(
              previousState.messagesList,
              value.val()
            )
          };
        });
        console.log("this.state.messagesList");
        console.log(this.state.messagesList);
         
      });
  }
  sendMessage = async () => {
    if (this.state.text.length > 0) {
      let msgId = firebase
        .database()
        .ref("messages")
        .child(user.id)
        .child(user.name)
        .child(this.state.name)
        .push().key;
      let updates = {};
      let message = {
        _id: msgId,
        text: this.state.text,
        createdAt: firebase.database.ServerValue.TIMESTAMP,
        user: {
            _id: user.id,
            avatar: user.imageUrl
        }
      };
      updates[
        "messages/" +
          user.id +
          "/" +
          user.name +
          "/" +
          this.state.name +
          "/" +
          msgId
      ] = message;
      updates[
        "messages/" +
          this.state.uid +
          "/" +
          this.state.name +
          "/" +
          user.name +
          "/" +
          msgId
      ] = message;
      firebase
        .database()
        .ref()
        .update(updates);
      this.setState({ text: "" });
    }
  };
  render() {
    return (
      <GiftedChat
        text={this.state.text}
        messages={this.state.messagesList}
        onSend={this.sendMessage}
        user={{
          _id: user.id
        }}
        onInputTextChanged={value => this.setState({ text: value })}
      />
    );
  }
}