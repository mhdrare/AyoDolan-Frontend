import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import AppNavigator from "./src/routes/rootNavigator";
import { Provider } from "react-redux";
import store from "./src/public/redux/store";
import OneSignal from 'react-native-onesignal';
import { ONESIGNAL_API_KEY } from 'react-native-dotenv';
import phoneID from './src/store/phoneID';

export default class App extends Component {
  constructor(properties) {
    super(properties);
    OneSignal.init(ONESIGNAL_API_KEY);

    OneSignal.addEventListener('received', this.onReceived);
    OneSignal.addEventListener('opened', this.onOpened);
    OneSignal.addEventListener('ids', this.onIds);
    OneSignal.addEventListener('NotificationOpened', this.onNotificationOpened);
    OneSignal.configure();
    this.state = {
      loading: true
    } 	
  }

  componentWillUnmount() {
    OneSignal.removeEventListener('received', this.onReceived);
    OneSignal.removeEventListener('opened', this.onOpened);
    OneSignal.removeEventListener('ids', this.onIds);
  }

  onReceived(notification) {
    console.log("Notification received: ", notification);
  }

  onOpened(openResult) {
    console.log('Message: ', openResult.notification.payload.body);
    console.log('Data: ', openResult.notification.payload.additionalData);
    console.log('isActive: ', openResult.notification.isAppInFocus);
    console.log('openResult: ', openResult);
  }

    onNotificationOpened(message, data, isActive) {
    if (data.p2p_notification) {
      for (var num in data.p2p_notification) {
        console.log(data.p2p_notification[num]);
      }
    }
  }

  trigerr = () =>{
    this.setState({ loading: false });
  }

  onIds(device) {
    phoneID.phoneID = device.userId;
  }
  
  render() {
    return (
      // this.state.loading
      // ?
      // <View>
      //   <Text>Getting Phone ID...</Text>
      // </View>
      // :
      <Provider store={store}>
        <React.Fragment>
          <AppNavigator />
        </React.Fragment>
      </Provider>
    );
  }
}